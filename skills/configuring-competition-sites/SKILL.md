---
name: configuring-competition-sites
description: Turn approved competition requirements and format recommendations into validated site configuration drafts. Use when creating or updating competition config JSON, mapping public/admin fields, activity formats, generated page labels, supported sports, or validation-ready site settings. Do not use before requirements and privacy defaults are known.
---

# Configuring Competition Sites

## Purpose

Convert approved organizer requirements into a structured site configuration that can be
validated before code generation, deployment, or data import.

## Workflow

1. Confirm that organizer requirements and format recommendations are present.
2. Read `references/config-contract.md`.
3. Build the config draft with event, registration, and activity sections.
4. Keep public fields and admin-only fields separate.
5. Preserve sport-specific facts from the format skill:
   - chess defaults to Swiss with Knockout and Arena as options
   - volleyball has no drawn match results
   - football can allow draws in qualifying stages
6. Run or request `validate_competition_config` after drafting the config.
7. Return a summary of generated sections, validation status, and unresolved questions.

## Rules

- Do not invent event dates, venue names, or activity counts.
- Do not expose phone, email, internal notes, medical notes, or safeguarding notes publicly.
- Do not write deployment commands or execute deploys; hand off to `preparing-cloudflare-deployment`.
- Keep unknown items in `questions_before_build` rather than silently choosing values.
- Prefer JSON-compatible primitive values and arrays over prose blobs in config fields.

## Required Output Shape

Return:

- `config_draft`
- `validation_request`
- `public_fields`
- `admin_only_fields`
- `activity_defaults_applied`
- `questions_before_build`

## Examples

Input: approved requirements for chess, football, and volleyball.

Output should produce a config with event metadata, public display fields, admin-only contact
fields, chess Swiss default, football draws allowed, and volleyball draws disabled.

Input: organizer asks for public phone numbers in the config.

Output should refuse that field placement and route to `reviewing-participant-privacy`.
