# Teams Board Blueprint

## Purpose

Help organizers turn individual signups into teams before fixtures are created.

## Views

- Unassigned players.
- Forming teams.
- Confirmed teams.
- Activity filters.
- Capacity warnings.

## Core Actions

- Create team.
- Rename team.
- Assign player to team.
- Move player between teams.
- Mark team confirmed.
- Remove duplicate or withdrawn signup.

## Design Notes

- Make drag-and-drop optional; provide buttons or menus for accessibility.
- Keep team capacity visible.
- Show privacy-safe participant names only.
- Keep private contact details in admin detail panels, never on public team boards.

## Acceptance Criteria

- An organizer can form teams from individual registrations.
- Teams cannot be accidentally duplicated without warning.
- Confirmed teams can be used to generate fixtures.
- Public display mode hides contact and sensitive information.

