---
name: designing-competition-formats
description: Recommend competition formats, scoring rules, defaults, and tie-breaks from entrants, activity type, time windows, and venue constraints. Use for chess Swiss/knockout/arena choices, sport tournament formats, draws/no-draw scoring, round-robin, Swiss-style, knockout, finals, and fairness tradeoffs.
---

# Designing Competition Formats

## Purpose

Choose an appropriate competition format for a community event and explain the tradeoffs in
plain language so a volunteer organizer can approve or change the recommendation.

## Workflow

1. Read `references/activity-format-knowledge.md` for activity defaults and scoring facts.
2. Identify hard constraints: entrants, available time, number of courts/fields/tables, match
   duration, changeover time, and whether everyone should keep playing.
3. Select a default format from the activity knowledge, then adjust for constraints.
4. Explain the recommended format, one or two alternatives, and the operational impact.
5. Include scoring and tie-break assumptions, especially whether draws are possible.
6. Mark any missing requirement that prevents confident scheduling.

## Selection Principles

- Prefer formats that match the activity culture unless the organizer gives a strong reason
  to choose otherwise.
- Prefer Swiss-style or partial round-robin when fairness and full-event participation matter.
- Prefer knockout when time is tight and dramatic elimination is acceptable.
- Prefer arena-style only when flexible online or high-volume activity matters more than a
  traditional bracket.
- Avoid full round-robin when entrants, venue count, and time window make it unrealistic.
- Recommend a final only when the event wants a clear winner and the schedule can absorb it.

## Required Output Shape

Return:

- `recommended_format`
- `why_this_format`
- `alternatives`
- `scoring_assumptions`
- `tie_breaks`
- `schedule_constraints`
- `questions_before_build`

## Examples

Input: "24 chess players, Saturday afternoon, one hall."

Output should recommend Swiss by default, give knockout and arena as alternatives, and ask
for round count, round duration, tie-breaks, and whether the site should support online arena
play.

Input: "Volleyball teams, no draws, two courts, 3 hours."

Output should preserve the no-draw rule and recommend pool play, Swiss-style qualifying, or
knockout depending on team count and desired participation.

Input: "Football teams, draws are allowed, 90 minutes."

Output should include draw scoring assumptions and avoid forcing volleyball-style decisive
results onto football.
