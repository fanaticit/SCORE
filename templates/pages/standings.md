# Standings Page Blueprint

## Purpose

Show current rankings in a way players can read quickly, especially on mobile phones.

## Mobile Requirements

Most players will view standings on mobile. Do not rely on a wide desktop table only.

Use one of these patterns:

- Responsive cards for each team or player.
- A compact table with sticky first column and horizontal scroll.
- Condensed columns with expandable details.
- Sport-specific tabs or filters with query-string URLs.

## Multi-Sport Requirements

- Show the sport clearly on every standings view.
- Use sport colors, badges, icons, or labels.
- Provide a sport filter or separate sport standings page.
- If a filter is used, persist it in the URL, for example `/standings?sport=football`.

## Recommended Fields

- Rank.
- Team or player.
- Played.
- Wins.
- Draws, only for sports where draws are allowed.
- Losses.
- Competition points.
- Sport-specific tie-break values.

## Acceptance Criteria

- Standings are readable on a phone without awkward zooming.
- Multi-sport standings cannot be mistaken for the wrong sport.
- Filters are shareable through query-string URLs.
- Draw columns are omitted for sports that do not allow draws.
