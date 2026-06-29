# Participant Privacy Review Rules

Use these rules when reviewing competition requirements, generated configs, site changes,
or deployment plans.

## Public By Default

These fields are usually acceptable in public views:

- team name
- activity or sport
- public standings
- match schedule
- match result
- ward, group, club, school, or organization name when the organizer approves it

## Admin Only By Default

These fields should be admin-only unless there is a strong explicit reason and consent:

- phone number
- email address
- emergency contact
- medical note
- safeguarding note
- exact age or date of birth
- parent or guardian contact
- free-text notes about a participant

## Do Not Put In Prompts Or Frontend Code

- admin passwords
- session secrets
- API tokens
- Cloudflare account tokens
- private database IDs when not needed by the frontend
- real contact data in examples or fixtures

## Required Human Approval

Require explicit human approval before:

- production deployment
- database schema changes
- deleting or resetting tournament data
- importing participant lists
- exposing any admin-only field publicly
- sending email, SMS, or notifications
- changing authentication or session behavior

## Safer Alternatives

- Replace public phone lists with admin-only contact lookup.
- Use team/captain aliases where possible.
- Use masked contact display only if there is consent and a real need.
- Use generic examples in demos.
- Store secrets in environment variables.
- Keep private notes separate from public registration records.
