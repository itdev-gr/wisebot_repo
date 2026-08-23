/**
 * Server-side credit costs for paid AI actions.
 * ==============================================
 * One place, so the amount charged at task start and the amount refunded on a
 * failed task can never drift apart. Must stay equal to the client's
 * context/EconomyContext.tsx `costs` memo (base values, before badge discounts).
 */
export const COSTS = {
  IMAGE: 6,
  SONG: 60,
  THREE_D: 60,
  VIDEO: 80,
  BUSINESS: 4,
} as const;

/**
 * Guests hold a small local-only balance (10⚡). Anything that costs more than
 * that cannot legitimately be bought by a guest, so those endpoints require a
 * signed-in user — otherwise the provider spend is real and the charge is not.
 */
export const GUEST_MAX_AFFORDABLE = 10;
