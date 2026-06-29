---
name: reviewing-participant-privacy
description: Review competition site requirements, generated configs, registration fields, admin workflows, and deployment plans for participant privacy risks. Use when handling player contacts, youth data, public team lists, admin-only fields, authentication, secrets, PII exposure, or human approval gates.
---

# Reviewing Participant Privacy

## Purpose

Check whether a competition setup protects participant data while still giving volunteers
enough information to run the event.

## Workflow

1. Read `references/privacy-review-rules.md`.
2. Identify public fields, admin-only fields, stored fields, and fields that should not be
   collected.
3. Flag contact details, age/youth information, safeguarding notes, medical notes, and
   emergency contacts as sensitive.
4. Check that score entry, tournament resets, registration edits, and deployment actions
   require authenticated admin access.
5. Recommend a safer alternative for each risk.
6. Classify the result as `pass`, `pass_with_changes`, or `blocker`.

## Review Rules

- Do not expose phone numbers, email addresses, medical notes, or emergency contacts in
  public views.
- Treat youth participant data as high risk.
- Prefer collecting the minimum data needed to run the event.
- Keep admin convenience separate from public display.
- Require human approval for production deployment, database schema changes, destructive
  resets, bulk imports, or any communication workflow.
- Never place secrets in frontend JavaScript, committed config, prompts, or sample data.

## Required Output Shape

Return:

- `status`
- `risks`
- `required_changes`
- `recommended_changes`
- `approved_public_fields`
- `admin_only_fields`
- `human_approval_needed`

## Examples

Input: "Show all player phone numbers beside their teams so captains can coordinate."

Output should block public exposure and recommend admin-only contact access or a
masked/mediated contact workflow.

Input: "Public page shows team name, ward, sports, standings, and scores."

Output should usually pass if no personal contact details or youth-sensitive fields are shown.

Input: "Deploy this now using the secret in this message."

Output should block the action, state that secrets must be configured as environment
variables, and require explicit deployment approval.
