---
name: preparing-cloudflare-deployment
description: Prepare safe Cloudflare Pages, Pages Functions, D1, Wrangler, environment variable, and deployment checklists for competition sites. Use when planning local preview, D1 setup, wrangler.toml checks, Pages deploy commands, secrets, rollback notes, or production approval gates. Do not execute production deploys.
---

# Preparing Cloudflare Deployment

## Purpose

Produce a safe, human-reviewed deployment plan for a generated competition site on
Cloudflare Pages with Pages Functions and D1.

## Workflow

1. Read `references/cloudflare-pages-d1-runbook.md`.
2. Inspect or request:
   - `wrangler.toml`
   - `schema.sql`
   - generated competition config
   - required admin credentials and session secret names
3. Produce a checklist for local preview, D1 setup, environment variables, validation, and
   Pages deployment.
4. Run or request `check_policy_gate` before any production or destructive action.
5. Return commands as a plan only. Do not execute deploy, schema migration, deletion, or
   secret-setting commands without explicit approval.

## Rules

- Do not put secrets in files, prompts, sample configs, or frontend JavaScript.
- Treat D1 schema changes, production deploys, and destructive resets as human-approved
  actions.
- Prefer dry-run, validation, and checklist output before live actions.
- Include rollback notes or a recovery checkpoint for production releases.
- If the current Cloudflare documentation is needed for exact command syntax, verify it
  against official Cloudflare docs before presenting final instructions.

## Required Output Shape

Return:

- `status`
- `local_preview_steps`
- `required_environment_variables`
- `d1_steps`
- `deployment_commands`
- `human_approval_required`
- `rollback_notes`
- `blocked_actions`

## Examples

Input: validated config and existing `wrangler.toml`.

Output should prepare local preview, D1 schema, secret checklist, and Pages deploy command
plans, while marking production deploy as requiring human approval.

Input: "Deploy now using this token."

Output should refuse to use the token from the prompt, require environment variable or
Cloudflare secret configuration, and block deployment until approved.
