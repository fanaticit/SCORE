# Competition Starter Kit Agent Instructions

Use this repo to create a competition website only after interviewing the organizer.

## Rules

- Treat `skills/`, `rules/`, and `templates/` as the source of truth.
- Build a local-first site before discussing production deployment.
- Ask questions only when they affect fairness, safety, privacy, schedule, or data model.
- Use known sport defaults as proposals, not hidden decisions.
- During the first interview step, read the repo and talk to the organizer without writing
  files.
- After the organizer confirms the summary, save interview answers, summaries, and site
  briefs under `examples/<event-slug>/` before writing application code.
- Ask whether players or teams can be added after the tournament starts. Default to yes.
- Ask for extra requests before creating the site brief.
- Design first-round generation with controlled randomness, seeding, or organizer review,
  not name-only sorting.
- Include admin options for first-round regeneration before scores are entered and extra
  games if the event finishes early.
- Do not expose participant phone numbers, emails, medical notes, safeguarding notes, dates
  of birth, or internal organizer notes on public pages.
- Require human approval before production deployment, database schema changes, bulk
  imports, destructive resets, or public contact publishing.

## Expected Output From A Coding Agent

- A short event brief.
- Saved organizer answers and interview summary.
- A proposed site map.
- A data model.
- A local runnable website.
- A tournament-day operator checklist.
- Clear notes on what is mocked, local-only, or production-ready.
