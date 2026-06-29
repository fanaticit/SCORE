# Cloudflare Pages And D1 Runbook

Use this runbook to prepare deployment guidance. It is a plan, not permission to execute.

## Inputs To Check

- `wrangler.toml`
- `schema.sql`
- generated competition config
- project name
- D1 binding name
- required secrets
- deployment branch

## Current Project Shape

This repo is a static Cloudflare Pages site with Pages Functions under `functions/` and a
D1 binding named `DB` in `wrangler.toml`.

## Local Preview Plan

Use a local preview before production:

```bash
wrangler pages dev .
```

If D1 binding setup is needed, prepare the binding and schema steps first. Do not use
production data in local demos.

## D1 Plan

Prepare these steps for human review:

```bash
wrangler d1 create <database-name>
wrangler d1 execute <database-name> --file=schema.sql
```

If a database already exists, do not recreate it. Confirm the binding in `wrangler.toml`.

## Secrets Plan

Required secrets for the current app pattern:

- `ADMIN_USERNAME`
- `ADMIN_PASSWORD`
- `SESSION_SECRET`

Never write real values into prompts, committed files, frontend JavaScript, demo configs, or
Markdown docs.

## Pages Deploy Plan

Prepare, but do not execute without approval:

```bash
wrangler pages deploy . --project-name=<project-name> --branch=production
```

## Human Approval Required

Require approval before:

- creating or changing D1 databases
- executing schema changes
- setting or rotating production secrets
- deploying to production
- deleting registrations or tournament data
- publishing participant contact details

## Rollback Notes

- Record the previous deployment identifier when available.
- Keep the generated config artifact used for the release.
- Keep `schema.sql` changes reviewed separately from UI copy changes.
- If production deploy fails, stop and inspect logs before retrying.
