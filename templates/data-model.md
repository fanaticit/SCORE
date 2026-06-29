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

Only `displayName`, `activityPreferences`, and `organization` should appear publicly.

## Team

- `id`
- `name`
- `activity`
- `members`
- `captainParticipantId`
- `status`: `forming`, `confirmed`, `withdrawn`

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

