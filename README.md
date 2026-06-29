# Competition Starter Kit

Competition Starter Kit helps a volunteer organizer and their coding agent create a local
competition website for sports days, chess tournaments, school events, charity games, and
multi-sport community competitions.

This repo is intentionally not the finished website. It is the reusable project brief,
skills, prompts, rules, page patterns, and design system that help a coding agent build the
right website after interviewing the organizer.

## What This Kit Contains

- `skills/`: reusable agent skills for interviewing organizers, choosing formats,
  configuring sites, reviewing privacy, and preparing deployment.
- `prompts/`: copy-ready prompts for your coding agent.
- `rules/`: sport and tournament-format knowledge.
- `templates/`: page blueprints, data model, site requirements, and design system.
- `examples/`: example organizer answers and generated briefs.
- `checklists/`: launch and tournament-day checks.
- `docs/publish-as-new-repo.md`: guidance for publishing this folder as a clean public
  GitHub project.

## Recommended Workflow

This kit works as a briefing system for your coding agent:

1. The coding agent interviews you.
2. It turns your answers into a site brief.
3. It builds a local website for your competition.
4. It tests the core tournament workflows.
5. You then vibe-code extra features specific to your event.

## Build A Working Site

### 1. Create A New Project Folder

Clone or copy this starter kit into a new folder for your event.

```bash
git clone <this-repo-url> my-competition-site
cd my-competition-site
npm run check
```

`npm run check` only checks that the starter kit resources are present. It does not build
the final website.

### 2. Start The Organizer Interview

Open your coding agent in this folder and paste:

```text
Read this repository as a competition website starter kit. Start by using
prompts/01-interview-organizer.md to interview me. Do not create code yet.
```

Answer the questions. The agent should use the sport rules and skills to avoid asking for
things it can safely recommend, such as Swiss being the default for chess or volleyball not
having drawn match results.

Ask the agent to save the final answers to:

```text
examples/my-event/organizer-answers.json
```

### 3. Create The Site Brief

After the interview, paste:

```text
Use prompts/02-create-site-brief.md and my organizer answers to create a complete site
brief. Save it to examples/my-event/site-brief.md. Do not write code until the brief is
complete.
```

Review the brief before code is generated. Confirm:

- activities and divisions
- registration type: teams, individuals, or both
- tournament formats
- scoring and tie-breaks
- public pages
- admin pages
- private fields

### 4. Build The Local Website

When the brief is correct, paste:

```text
Build the local-first competition website from examples/my-event/site-brief.md.

Use:
- templates/data-model.md
- templates/pages/
- templates/site-design-system.md
- templates/styles/competition-theme.css
- rules/
- skills/

Create a runnable local app with seed data. Include registration, teams board, admin score
entry, live view, and standings or brackets. Do not deploy.
```

The coding agent can choose the stack unless you specify one. For a simple first version,
ask for vanilla HTML/CSS/JavaScript or a lightweight React/Vite app.

### 5. Run It Locally

Use the command your coding agent provides. Common examples:

```bash
npm install
npm run dev
```

or for a static site:

```bash
python3 -m http.server 8080
```

Open the local URL and walk through the event as an organizer.

### 6. Test And Fix The Core Workflows

Paste:

```text
Use prompts/03-local-test-and-fix.md to test the site. Fix problems until registration,
team creation, fixtures, score entry, live view, standings, and privacy checks all pass.
```

Do not add nice-to-have features until the core workflow works end to end.

### 7. Add Event-Specific Features

After the MVP works, use:

```text
Use prompts/05-vibe-code-event-extras.md. Help me add custom features for this specific
competition without breaking the core tournament workflow.
```

Good extras include:

- custom divisions or age groups
- house/team colors
- printable fixture sheets
- QR code registration links
- venue map
- announcements
- awards or certificates
- import/export for registrations
- custom tie-breaks

### 8. Prepare For Tournament Day

Before the event, paste:

```text
Use prompts/04-tournament-day-operator.md to create an operator guide for running this
competition on the day.
```

Print or save the resulting operator guide.

## Minimum Website Features

Most competition sites should include:

- Registration for teams, individuals, or both.
- Teams board for organizing loose players into teams.
- Admin fixture and score entry.
- Public live view for current, waiting, and completed games.
- Standings or bracket view.
- Privacy-safe public pages that do not expose phone numbers, emails, medical notes, or
  internal organizer notes.

## First Prompt To Use

Copy this into your coding agent:

```text
Read this repository as a competition website starter kit. Start by using
prompts/01-interview-organizer.md to interview me. Do not create code until the event brief
is clear. When the brief is ready, use the skills, rules, templates, and checklists in this
repo to create a local-first competition website for my event.
```

## Test The Kit

```bash
npm run check
```

## Safety Rules

- Do not put participant contact details on public pages.
- Do not hardcode secrets in frontend code.
- Do not deploy to production without human approval.
- Keep the first version local-first until the organizer confirms the event flow.
- Prefer simple admin controls over hidden automation for tournament operations.
