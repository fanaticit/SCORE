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
6. Hand off format decisions to `designing-competition-formats` when entrants, venues, and
   time constraints are known.
7. Hand off privacy-sensitive field choices to `reviewing-participant-privacy`.

## Interview Rules

- Prefer a short grouped interview over a long questionnaire.
- Do not ask for information already implied by a strong activity default.
- Use volunteer-friendly language. Avoid jargon unless immediately explained.
- Preserve uncertainty. If a default is only a recommendation, mark it as `recommended`,
  not `confirmed`.
- Treat contact fields, age information, medical notes, and safeguarding details as
  privacy-sensitive from the start.
- Ask for human approval before turning requirements into files or deployment steps.

## Required Output Shape

Return a requirements draft with these sections:

- `known`: facts provided by the organizer
- `recommended_defaults`: defaults inferred from activity knowledge
- `questions`: only unresolved questions needed before config generation
- `privacy_flags`: fields or workflows requiring privacy review
- `handoff`: recommended next skill or agent

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
