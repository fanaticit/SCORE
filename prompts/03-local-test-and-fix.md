# Prompt 03: Local Test And Fix

Use this after the first local website exists.

```text
Test the local competition website against the starter kit.

Read:
- checklists/local-acceptance-checklist.md
- templates/pages/live-view.md
- templates/pages/registration.md
- templates/pages/teams-board.md
- templates/pages/sport-summary.md
- templates/pages/standings.md
- templates/pages/admin-operations.md
- skills/reviewing-participant-privacy/SKILL.md

Run the app locally, inspect the main workflows, and fix issues until:
1. Registration works for the required entrant types.
2. Teams can be created or organized.
3. Fixtures can be created or loaded.
4. Scores can be entered by an admin.
5. Public live view shows current, waiting, and completed games.
6. Standings or brackets update correctly.
7. Public pages do not reveal private participant data.
8. The app has a clear demo seed dataset.
9. Multi-sport pages clearly distinguish sports with colors, labels, badges, or icons.
10. Sport filters use query strings so links such as `/live?sport=football` are shareable.
11. Standings are readable and usable on mobile.
12. Admins can edit current-round scores without using a public result-review state.
13. First-round generation is not name-only and can be regenerated before scores are entered.
14. A player or team can be added after the tournament starts by default.
15. Late entrants are added to future fixtures without changing completed results by default.
16. Extra games, round-robin, or a final can be added if the event finishes early.
17. Reset tournament state keeps participants, teams, and registrations.
18. Clear all local data is separate and requires stronger confirmation.

Report what you tested and what remains manual.
```
