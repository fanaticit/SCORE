# Competition Site Brief Template

## Event Summary

- Event name:
- Organizer:
- Date and time:
- Venue:
- Activities:
- Expected entrants:
- Public audience:

## Entrant Types

- Individuals:
- Teams:
- Mixed individual-to-team flow:
- Age groups or divisions:
- Late entrants allowed after tournament starts: yes by default

## Pages

- Home or event info:
- Registration:
- Teams board:
- Fixtures:
- Live view:
- Standings or brackets:
- Admin:

## Tournament Formats

For each activity:

- Format:
- Entrants:
- Resources:
- Match length:
- Scoring:
- Draws allowed:
- Tie-breaks:
- First-round generation: random, seeded, manual review, or hybrid
- Regenerate first round before scores are entered: yes/no
- Add extra games if the event finishes early: round-robin, friendly rounds, or final
- Finals:

## Extra Requests

Organizer-requested additions before code generation:

- 

## Data Privacy

Public fields:

- Team name
- Participant display name
- Organization or group
- Activity
- Fixture
- Score
- Standing

Admin-only fields:

- Phone
- Email
- Date of birth
- Guardian contact
- Emergency contact
- Medical note
- Safeguarding note
- Internal note

## Build Scope

Local MVP:

- 

Future production:

- 

## Admin Reset Tools

- Reset tournament state:
  - Keeps participants, teams, and registrations.
  - Clears fixtures, scores, standings, brackets, disputes, and live queue.
- Reset fixtures only:
  - Keeps participants, teams, registrations, and activity settings.
  - Clears fixtures, fixture assignments, scores, and standings.
- Reset scores only:
  - Keeps participants, teams, fixtures, and resource assignments.
  - Clears scores, winners, completion state, standings, and bracket progress.
- Clear all local data:
  - Clears everything, including participants and registrations.
  - Requires stronger confirmation.

## Admin Tournament Tools

- Add late entrant:
  - Default: allowed.
  - Adds a player or team after the tournament starts.
  - Should place the entrant only into future fixtures unless the organizer manually
    changes completed results.
- Generate first round:
  - Supports controlled randomness, optional seeding, or organizer shuffle.
  - Must not rely on name-only sorting.
- Regenerate first round:
  - Allowed before scores are entered.
  - Shows what fixtures will be replaced.
- Add extra games:
  - Adds round-robin, friendly rounds, or a final if Swiss or qualifying rounds finish early.
  - Clearly labels whether extra games affect standings.
