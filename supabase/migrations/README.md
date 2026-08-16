# Database migrations

Until 16 Αυγούστου 2026 the database and the code were two separate sources of truth:
schema changes were applied straight to Supabase and existed nowhere in this repository.
That meant a rebuilt database — or a staging copy — would silently lack security fixes
that production had.

From here on, **every schema, grant or function change gets a file in this folder**, named
`<timestamp>_<snake_case_name>.sql`, matching the name used when applying it. The files
below record what is already live; they are written to be safe to re-run.

Applying is still done through Supabase (dashboard, CLI, or the MCP `apply_migration`
tool). These files are the record, not the runner — nothing here executes automatically.

Older migrations, from before this convention, are not backfilled. Supabase's own
migration history remains the authoritative log of what ran and when.
