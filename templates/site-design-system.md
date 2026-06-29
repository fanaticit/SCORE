# Site Design System

The generated site should feel like an event operations tool, not a marketing page.

## Layout

- Use a dense but readable dashboard layout.
- Keep navigation visible and predictable.
- Put live operational information first on tournament-day pages.
- Avoid nested cards.
- Use full-width sections or simple panels for page areas.

## Visual Style

- Use a neutral base with one primary action color and one status accent color.
- Avoid one-note palettes dominated by a single hue.
- Keep cards at 8px radius or less.
- Use strong contrast for public screens viewed from a distance.
- Use fixed dimensions for score cells, fixture rows, and board tiles to prevent layout
  shift during updates.

## Components

- Buttons: use icons for common actions where available.
- Status: use badges for `waiting`, `ready`, `running`, `complete`, and `disputed`.
- Forms: group fields by purpose; mark private/admin-only fields clearly.
- Tables: support scanning, sorting, and mobile wrapping.
- Live view: use large readable type for current games and next games.

## Required States

- Empty registration.
- Registration open.
- Teams forming.
- Fixtures generated.
- Event running.
- Score disputed.
- Event complete.

