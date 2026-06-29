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

## Safety Requirements

- Separate public display from admin controls.
- Confirm destructive actions.
- Keep an audit trail for score corrections where practical.
- Make fixture regeneration explicit because it can invalidate manual changes.

## Acceptance Criteria

- Admins can operate the event from a phone or laptop.
- Common mistakes can be corrected without editing raw data.
- Public screens never expose private fields.
- The event can continue if the internet is unreliable, when local-first storage is used.

