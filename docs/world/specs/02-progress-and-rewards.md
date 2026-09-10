# 02 — Progress, rewards and the Passport

Specification only. Defines what a child earns in World, where that is stored, and how it
reaches the Maker Passport — without editing the shared economy files.

---

## What a child earns

XP, and stamps. Nothing else. No credits, no new badge, no new stat counter.

| Event | Reward | Repeatable? |
| --- | --- | --- |
| Read a place's story to the end | **stamp** + 10 XP | Once per place, ever |
| Answer that place's question correctly | +10 XP | Once per place, ever |
| Answer it wrong | 0 XP, explanation still shown, stamp still kept | — |
| Complete every place in a trail | +30 XP | Once per trail, ever |
| Complete every place in a city | +50 XP and the city's seal | Once per city, ever |

A place is worth 10 or 20 XP depending on the answer, so a twelve-place city is worth
roughly 170–290 XP including the seal, and a trail adds 30. That is deliberate: the
Explorer tier in `data/makerLevels.ts` starts at 300 XP, so **finishing a first city
carries a child most of the way to being named an Explorer**, and a second city gets them
there. Tune the numbers here only against that ladder, never in isolation.

Rewards are one-shot per place rather than daily-capped. The mini-games need
`grantGameReward`'s two-grants-per-day cap because a game can be replayed forever; a
place can only be discovered once. Revisiting a place is free and pays nothing, which is
also what makes revisiting safe to encourage.

### Why not credits, badges, missions or stats

- **Credits** are bought by parents. Effort pays in XP. That rule was set on
  24 Αυγούστου 2026 and the mini-games all follow it.
- **A new badge** would mean editing the `Badges` interface, `DEFAULT_BADGES`,
  `BADGE_META`, `SyncBadges` in `services/syncService.ts`, `badgeList` in
  `components/Layout.tsx` and the label maps in `components/Account.tsx`, plus the
  `badges` table. Six shared files for one reward. If the owner wants a World badge, it
  is a separate, approved task.
- **`trackAction` must not be called.** Every one of its nine `ActionType` values is wired
  into a badge threshold and a stat counter. A tenth action means editing the union and
  the switch inside the paid-economy file.
- **`MISSION_POOL` must not be touched.** Today's mission is chosen by day-of-year modulo
  the pool length. Adding a thirteenth entry silently changes which mission every existing
  child sees today.

XP therefore goes out the one way that costs nothing: `useEconomy().earnXp(n, 'WORLD_…')`,
which dispatches `wb:xp`, which `App.tsx` already listens for.

---

## Storage

`localStorage`, one key, `wb_world_progress`, holding a single versioned object. One key
rather than a key per place: it keeps quota use low, it survives a partial write, and it
gives the future cloud sync a single value to diff.

```ts
export interface WorldProgress {
  /** Bumped only for a breaking shape change; the reader migrates or resets. */
  v: 1;
  /** Stamps, keyed by PlaceId. Absence means "never visited". */
  places: Record<PlaceId, PlaceStamp>;
  /** Trail ids whose completion bonus has been paid. */
  trailsDone: TrailId[];
  /** City ids whose seal has been awarded. */
  citiesDone: CityId[];
}

export interface PlaceStamp {
  /** ISO date of the first visit. What the passport prints. */
  at: string;
  /** Whether the question was answered correctly on that first attempt. */
  correct: boolean;
}
```

Rules the reader must follow, because they are the failure modes this repo actually
produces:

1. **Every read is wrapped in `try/catch` and falls back to an empty progress object.**
   Corrupted JSON is a real state here — every other feature in the app handles it this
   way.
2. **Every write is wrapped too.** Storage can be full or blocked in private mode. A
   failed write must never break the screen the child is on.
3. **Awarding is idempotent and keyed on the stamp, not on a render.** Award XP only when
   `places[id]` is absent, and write the stamp in the same synchronous step. React 19
   StrictMode double-invokes effects and state updaters in development; this is exactly
   the shape that double-paid credits before, and the guard belongs at the call site.
4. **Ids are permanent.** A renamed `PlaceId` erases the stamp. See spec 01.

Guests keep everything. Progress is local, so a child with no account collects stamps
normally — the same deal every other room offers.

---

## The Passport

`components/MakerPassport.tsx` is the child's identity page. It reads counts and renders
them; it awards nothing. World fits its existing pattern exactly: one more portfolio row,
built from a count.

```
🌍  3 cities · 27 places · 2 seals
```

That is a single additive change to one file — a `useWorldSummary()` hook next to the
existing `useSchoolSummary()`, reading `wb_world_progress` the same way the latter reads
`wb_quiz_best_*`. No props change, no economy change.

The tier ladder needs nothing: World XP flows through `wb:xp` into the same `xp` state
`makerProgress()` already consumes, so a child who finishes a city may well see the
Explorer tier-up celebration fire on its own from `components/MakerLevelUp.tsx`.

A World-specific stamp book — the illustrated page with the stamps on it — belongs inside
`components/world/`, not in the Passport. The Passport shows the summary and links to it.

---

## Cloud sync — deferred, and specified so it can be added cleanly

**Recommendation for v1: `localStorage` only.** The mini-games have never synced their
reward state and nobody has asked. Shipping without sync means no migration, no RLS
policy, and no change to `services/syncService.ts`, which is a shared file.

When it is wanted, the shape that matches this codebase is one row per stamp, mirroring
how `badges` already works:

```sql
create table public.world_stamps (
  user_id    uuid not null references auth.users(id) on delete cascade,
  place_id   text not null check (char_length(place_id) between 1 and 120),
  visited_at timestamptz not null default now(),
  correct    boolean not null default false,
  primary key (user_id, place_id)
);

alter table public.world_stamps enable row level security;

create policy "own stamps: read"   on public.world_stamps
  for select using (auth.uid() = user_id);
create policy "own stamps: insert" on public.world_stamps
  for insert with check (auth.uid() = user_id);
```

Design notes for whoever writes that migration:

- **Union merge, never overwrite.** A stamp is a fact that happened; it can only be
  added. This is the same rule `syncService.mergeState` applies to badges, and it makes
  the merge trivially correct across devices.
- **Insert-only, no update, no delete policy.** A child cannot un-visit a place, and
  nothing in the app should be able to erase a passport.
- **`visited_at` keeps the earliest.** Add a trigger, as `quiz_best` does for scores, so a
  late-syncing old device cannot push a stamp's date forward.
- **XP is not re-awarded on sync.** XP already lives in `profiles.xp` and is merged with
  `Math.max`. Pulling stamps must write progress only, never call `earnXp`, or every
  sign-in on a second device would pay the child again.
- Trail and city completions are derived from the stamps, not stored — a city is done
  when every place in it has a row. Storing them separately invites the two to disagree.

RLS is enabled on all nineteen existing tables and must be enabled here too.
