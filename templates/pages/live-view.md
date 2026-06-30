# Live View Blueprint

## Purpose

Show players and spectators what is happening now and what is next.

## Sections

- Sport or competition filter.
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

Do not add a public result-review state. Admins should edit scores from the current round
in the admin area when a result needs correction.

## Sport Filters And Links

When an event has multiple sports or competitions, the live view must make the sport clear.

Use one of these patterns:

- Separate sport pages such as `/sports/football`, `/sports/chess`, or `/sports/volleyball`.
- A live-view filter with query strings such as `/live?sport=football`.

If filters are used, each filter must update the URL query string so organizers can send a
link to players and they land on the correct sport.

## Display Rules

- Use large readable text.
- Avoid showing private participant data.
- Keep current and next games visible without scrolling on a venue screen.
- Include resource labels such as court, pitch, board, or table.
- Use sport-specific colors, labels, icons, or visual markers so teams and players from one
  sport are not confused with another sport.

## Acceptance Criteria

- A participant can tell where they need to go next.
- The live board updates after score entry.
- Completed scores remain visible long enough to be useful.
- Multi-sport live views can be filtered by sport with a shareable query-string URL.
