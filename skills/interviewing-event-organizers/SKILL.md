---
name: interviewing-event-organizers
description: Gather community competition requirements through concise organizer interviews. Use when creating or configuring a sports day, chess event, volleyball/football tournament, school contest, charity competition, registration form, or reusable competition site. Do not use for final format selection without the designing-competition-formats skill.
---

# Interviewing Event Organizers

## Purpose

Convert a vague community event idea into structured competition requirements without
making the organizer answer questions the kit can infer from known defaults.

## Workflow

1. Identify the event type, activities, expected participants, time window, venues/resources,
   registration needs, and privacy constraints already present in the request.
2. Read `references/interview-defaults.md` when the event includes chess, volleyball,
   football, basketball, netball, or another supported activity.
3. Apply known defaults as proposals, not hidden decisions. State the default briefly and ask
   whether the organizer wants to change it.
4. Ask only missing questions that affect configuration, safety, or fairness.
5. Produce a structured requirements draft and list unresolved questions separately.
6. Include the late-entry policy. Default to allowing players or teams to be added after the
   tournament starts unless the organizer says otherwise.
7. Ask for extra requests before creating the site brief.
8. Summarize the interview in chat and wait for confirmation before saving files, unless the
   user explicitly asks you to save immediately.
9. Hand off format decisions to `designing-competition-formats` when entrants, venues, and
   time constraints are known.
10. Hand off privacy-sensitive field choices to `reviewing-participant-privacy`.

## Interview Rules

- Prefer a short grouped interview over a long questionnaire.
- Do not ask for information already implied by a strong activity default.
- Use volunteer-friendly language. Avoid jargon unless immediately explained.
- Preserve uncertainty. If a default is only a recommendation, mark it as `recommended`,
  not `confirmed`.
- Treat contact fields, age information, medical notes, and safeguarding details as
  privacy-sensitive from the start.
- During the first interview step, read first and talk to the organizer. Do not write files
  unless the user explicitly asks you to save.
- After the organizer confirms the summary, saving planning artifacts is allowed before
  application code is created.
- Ask for human approval before creating application code, deployment files, or deployment
  steps.

## Required Output Shape

Return a requirements draft with these sections:

- `known`: facts provided by the organizer
- `recommended_defaults`: defaults inferred from activity knowledge
- `questions`: only unresolved questions needed before config generation
- `privacy_flags`: fields or workflows requiring privacy review
- `late_entry_policy`: whether players or teams can be added after the event starts
- `extra_requests`: organizer-requested additions before the site brief
- `handoff`: recommended next skill or agent

After the organizer confirms the summary in a SCORE repo, save the same information to:

- `examples/<event-slug>/organizer-answers.json`
- `examples/<event-slug>/interview-summary.md`

Use a lowercase hyphenated event slug. If the event name is not known, use `my-event`.

## Examples

Input: "We need a chess tournament for about 24 players on Saturday afternoon."

Output should recommend Swiss as the default, explain that most chess tournaments use
Swiss for fair pairings and full-event participation, and ask only for time window, round
length, tie-break preferences, registration fields, and whether online/arena play is needed.

Input: "We need football and volleyball for a youth sports day."

Output should note that football can support draws, volleyball normally does not use draws,
and ask for team counts, pitches/courts, match lengths, age groups, and score-entry admins.

Input: "Write a social media post for my fundraiser."

Output should not use this skill. That is not a competition requirements interview.
