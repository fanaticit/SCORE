# Competition Data Model

Use this as a starting point. Remove entities the event does not need.

## Event

- `id`
- `name`
- `date`
- `venue`
- `activities`
- `publicInfo`
- `status`: `draft`, `registration_open`, `running`, `complete`
- `lateEntrantsAllowed`: `true` by default

## Participant

- `id`
- `displayName`
- `activityPreferences`
- `organization`
- `private.phone`
- `private.email`
- `private.guardianContact`
- `private.medicalNote`
- `private.internalNote`
- `createdAfterStart`: whether the participant was added after tournament start

Only `displayName`, `activityPreferences`, and `organization` should appear publicly.

## Team

- `id`
- `name`
- `activity`
- `members`
- `captainParticipantId`
- `status`: `forming`, `confirmed`, `withdrawn`
- `createdAfterStart`: whether the team was added after tournament start

## Activity

- `id`
- `name`
- `format`
- `scoring`
- `drawsAllowed`
- `tieBreaks`
- `resources`

## Fixture

- `id`
- `activity`
- `round`
- `scheduledTime`
- `resource`
- `entrantA`
- `entrantB`
- `status`: `waiting`, `ready`, `running`, `complete`, `disputed`
- `score`
- `winner`
- `notes`
- `generationMethod`: `random_first_round`, `seeded_first_round`, `manual`, `standing_based`,
  `round_robin`, `friendly`, or `final`
- `affectsStandings`: whether the fixture changes official standings

## Standing

- `activity`
- `entrantId`
- `played`
- `wins`
- `draws`
- `losses`
- `pointsFor`
- `pointsAgainst`
- `competitionPoints`
- `tieBreakValues`

## Reset Boundaries

Generated sites should model resets by data category so admin tools can clear tournament
state without deleting entrants.

Keep for "reset tournament state":

- `Event`
- `Participant`
- `Team`
- registration entries
- activity settings

Clear or rebuild for "reset tournament state":

- `Fixture`
- `Standing`
- scores
- winners
- bracket progress
- live-view queue
- dispute state

Only "clear all local data" should remove participants, teams, and registrations.

## Pairing And Late-Entry Rules

- First-round fixtures should support controlled randomness or seeding, not name-only
  sorting.
- First-round fixtures can be reset and regenerated before scores are entered.
- Later Swiss rounds should use standings or ranking and avoid repeat pairings where
  practical.
- Late entrants are allowed by default and should be added only to future fixtures unless an
  admin deliberately changes completed rounds.
- Extra games can be stored as official, friendly, round-robin, or final fixtures.
