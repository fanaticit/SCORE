# Admin Operations Blueprint

## Purpose

Give organizers simple controls for running the event.

## Core Workflows

- Open and close registration.
- Create or confirm teams.
- Generate fixtures.
- Start and complete matches.
- Enter and correct scores.
- Resolve disputes.
- Publish standings.
- Add player or team after the tournament starts.
- Generate first-round fixtures with controlled randomness or seeding.
- Regenerate first-round fixtures before scores are entered.
- Add extra games, a round-robin phase, or a final if the event finishes early.
- Reset tournament state while keeping registration and player data.
- Clear all local data only as a separate high-risk action.

## Late Entrant Tools

Generated sites should allow late entrants by default unless the organizer disables this in
the site brief.

Required controls:

- Add late player.
- Add late team.
- Assign late player to a team.
- Add late entrant to future fixtures only.
- Show a warning before changing completed rounds.

Late entrants should not silently rewrite completed fixtures, scores, or standings.

## Round Generation Tools

### First Round

The first round should not be generated from names alone. Use one of these modes:

- Controlled random shuffle.
- Seeded pairing.
- Manual organizer review.
- Hybrid seeded groups with random pairings inside each group.

Admins should be able to reset and regenerate the first round before any scores are entered.
Show a preview of the new pairings before replacing existing fixtures.

### Later Rounds

Later Swiss rounds should use standings or ranking and avoid repeat pairings where
practical. Do not randomly regenerate later rounds unless the organizer explicitly chooses a
manual correction flow.

### Extra Games

If Swiss or qualifying rounds finish too quickly, admins should be able to add:

- Extra friendly rounds.
- A round-robin phase for a small remaining group.
- A final or placement matches.

Label whether extra games affect official standings.

## Admin Reset Tools

Generated sites should separate reset actions by blast radius. Do not offer only one
generic "clear data" button.

### Reset Tournament State

Use when the organizer wants to restart the competition after testing or a bad fixture
setup, while keeping participants, teams, and registration data.

Keep:

- Event settings.
- Participants.
- Teams.
- Registration entries.
- Public event information.

Clear or regenerate:

- Fixtures.
- Match status.
- Scores.
- Standings.
- Brackets.
- Disputes.
- Live-view queue.

### Reset Fixtures Only

Use when entrants and teams are correct but the schedule, pairing, pitch, court, board, or
round setup is wrong.

Keep:

- Participants.
- Teams.
- Completed registration data.
- Activity settings.

Clear:

- Fixtures.
- Fixture assignments.
- Fixture status.
- Scores and standings based on those fixtures.

### Reset Scores Only

Use when fixtures are correct but scores were entered during testing or need to be replayed.

Keep:

- Participants.
- Teams.
- Fixtures.
- Resource assignments.

Clear:

- Scores.
- Winners.
- Fixture completion status.
- Standings or bracket progress.

### Clear All Local Data

Use only when starting over completely.

Clear:

- Event settings.
- Participants.
- Teams.
- Registrations.
- Fixtures.
- Scores.
- Standings.
- Local admin state.

This action must require a stronger confirmation than the tournament-state reset.

## Safety Requirements

- Separate public display from admin controls.
- Confirm destructive actions.
- Show exactly what each reset action keeps and clears before running it.
- Keep an audit trail for score corrections where practical.
- Make fixture regeneration explicit because it can invalidate manual changes.
- Prefer reversible or export-before-reset flows where practical.
- Prevent accidental first-round regeneration after scores are entered unless the organizer
  uses a deliberate override.

## Acceptance Criteria

- Admins can operate the event from a phone or laptop.
- Common mistakes can be corrected without editing raw data.
- Admins can reset tournament state without deleting participants or teams.
- Admins can clearly distinguish "reset tournament" from "clear all local data."
- Admins can add late entrants without rewriting completed fixtures by default.
- First-round generation includes shuffle or seeding and is not name-only.
- Admins can add extra games if the event finishes early.
- Public screens never expose private fields.
- The event can continue if the internet is unreliable, when local-first storage is used.
