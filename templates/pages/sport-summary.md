# Sport Summary Page Blueprint

## Purpose

Give players a focused view for one sport or competition when the event has multiple
activities.

## URL Requirements

Use one of these patterns:

- Separate page: `/sports/<sport-slug>`
- Filtered live view: `/live?sport=<sport-slug>`

Filtered views must keep the sport in the URL query string so links can be shared.

## Sections

- Sport name and visual identity.
- Schedule summary.
- Current or next fixtures.
- Standings or bracket.
- Registration or team status for that sport.
- Rules summary and scoring notes.
- Venue/resource details such as pitch, court, table, board, or room.

## Visual Identity

Each sport should have a distinct visual marker:

- Color accent.
- Icon or short label.
- Sport badge on teams, fixtures, standings, and live cards.
- Consistent style across live view, teams board, registration, and standings.

## Acceptance Criteria

- A player can open one link and see only the sport relevant to them.
- Teams or players from different sports are visually distinct.
- The page works well on mobile.
- The sport identity is visible on every fixture, standing, and team card.
