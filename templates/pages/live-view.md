# Live View Blueprint

## Purpose

Show players and spectators what is happening now and what is next.

## Sections

- Running games.
- Ready or waiting games.
- Recently completed games.
- Standings or leaders.
- Announcements.

## Fixture States

- `waiting`: fixture exists but is not ready.
- `ready`: entrants should report to the resource.
- `running`: match is underway.
- `complete`: score has been accepted.
- `disputed`: organizer review needed.

## Display Rules

- Use large readable text.
- Avoid showing private participant data.
- Keep current and next games visible without scrolling on a venue screen.
- Include resource labels such as court, pitch, board, or table.

## Acceptance Criteria

- A participant can tell where they need to go next.
- The live board updates after score entry.
- Disputed results are visible to admins but not confusing to the public.
- Completed scores remain visible long enough to be useful.

