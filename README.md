# 🏆 SCORE

**Starter Competition & Organizational Resource Engine**

SCORE helps a volunteer organizer and their coding agent create a local competition website
for sports days, chess tournaments, school events, charity games, and multi-sport community
competitions.

This repo is intentionally not the finished website. It is the reusable project brief,
skills, prompts, rules, page patterns, and design system that help a coding agent build the
right website after interviewing the organizer.

> 💡 **What SCORE is:** a practical briefing kit for building the right competition site.
> It is not a finished one-size-fits-all tournament app.

## 📦 What This Kit Contains

- 🧠 `skills/`: reusable agent skills for interviewing organizers, choosing formats,
  configuring sites, reviewing privacy, and preparing deployment.
- ✍️ `prompts/`: copy-ready prompts for your coding agent.
- 📚 `rules/`: sport and tournament-format knowledge.
- 🧩 `templates/`: page blueprints, data model, site requirements, and design system.
- 🗂️ `examples/`: example organizer answers and generated briefs.
- ✅ `checklists/`: launch and tournament-day checks.
- 🚀 `docs/publish-as-new-repo.md`: guidance for publishing this folder as a clean public
  GitHub project.

## 🛠️ Recommended Workflow

This kit works as a briefing system for your coding agent:

1. 🗣️ The coding agent interviews you.
2. ✅ You confirm the interview summary.
3. 📝 It saves the confirmed answers and site brief into the repo.
4. 🏗️ It builds a local website for your competition.
5. 🧪 It tests the core tournament workflows.
6. ✨ You then vibe-code extra features specific to your event.

## 🚦 Build A Working Site

### 1. 📁 Create A New Project Folder

Clone SCORE into a new folder for your event.

```bash
git clone https://github.com/fanaticit/SCORE.git my-competition-site
cd my-competition-site
npm run check
```

`npm run check` only checks that the starter kit resources are present. It does not build
the final website.

### 2. 🗣️ Start The Organizer Interview

Open your coding agent in this folder and paste:

```text
Read this repository as a competition website starter kit. Start by using
prompts/01-interview-organizer.md to interview me. Read first, then talk to me.
Do not create files or application code during this interview step.
```

Answer the questions. The agent should use the sport rules and skills to avoid asking for
things it can safely recommend, such as Swiss being the default for chess or volleyball not
having drawn match results.

At the end of the interview, the agent should summarize the answers in chat. Review that
summary before asking it to save anything.

### 3. 📝 Create The Site Brief

After the interview, paste:

```text
Use prompts/02-create-site-brief.md and my organizer answers to create a complete site
brief. Save the confirmed answers and brief to examples/my-event/. Do not create
application code until the brief is complete and I have reviewed it.
```

Review the brief before code is generated. Confirm:

- ✅ activities and divisions
- ✅ registration type: teams, individuals, or both
- ✅ tournament formats
- ✅ scoring and tie-breaks
- ✅ public pages
- ✅ admin pages
- ✅ private fields

### 4. 🏗️ Build The Local Website

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

### 5. 💻 Run It Locally

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

### 6. 🧪 Test And Fix The Core Workflows

Paste:

```text
Use prompts/03-local-test-and-fix.md to test the site. Fix problems until registration,
team creation, fixtures, score entry, live view, standings, and privacy checks all pass.
```

Do not add nice-to-have features until the core workflow works end to end.

### 7. ✨ Add Event-Specific Features

After the MVP works, use:

```text
Use prompts/05-vibe-code-event-extras.md. Help me add custom features for this specific
competition without breaking the core tournament workflow.
```

Good extras include:

- 🧒 custom divisions or age groups
- 🎨 house/team colors
- 🖨️ printable fixture sheets
- 🔗 QR code registration links
- 🗺️ venue map
- 📣 announcements
- 🏅 awards or certificates
- 📤 import/export for registrations
- ⚖️ custom tie-breaks

### 8. 📋 Prepare For Tournament Day

Before the event, paste:

```text
Use prompts/04-tournament-day-operator.md to create an operator guide for running this
competition on the day.
```

Print or save the resulting operator guide.

## 🚀 Production Deployment Checklist

Use this only after the local website works and the organizer has tested the full
tournament flow. The first version should stay local until registration, teams, fixtures,
score entry, live view, standings, privacy, and admin reset tools are working.

> ⚠️ **Deploy later:** SCORE should produce a working local site first. Production comes
> after the organizer has tested the full tournament flow.

Before deploying publicly, ask your coding agent to add or review:

- 🔐 Admin authentication:
  - Only admins can update scores, change fixtures, reset tournament state, add late
    entrants, or clear data.
  - Public users can view public pages only.
- 🤖 Registration bot check:
  - Player or team registration should include a simple human check, such as an easy math
    question.
  - The check should be simple for people and enough to stop basic automated spam.
- 🎨 Production styling pass:
  - Review the default look the coding agent created.
  - Update colors, spacing, typography, logos, event branding, and mobile layouts so the
    site fits the actual competition.
- 💬 Suggestions and help form:
  - Add a public form for questions, suggestions, or help requests.
  - Send submissions to an admin email address.
  - Do not expose the admin email address publicly if the implementation can avoid it.
  - Protect the form with the same simple bot check or a stronger production-safe option.
- 🛡️ Data and privacy review:
  - Confirm public pages do not show phone numbers, emails, medical notes, safeguarding
    notes, dates of birth, guardian contacts, or internal notes.
  - Confirm exports, logs, and admin screens handle private data carefully.
- ✅ Deployment approval:
  - Do not deploy until the organizer approves the production configuration.
  - Do not commit production secrets, email credentials, admin passwords, or API keys.

## 🧱 Minimum Website Features

Most competition sites should include:

- 📝 Registration for teams, individuals, or both.
- 👥 Teams board for organizing loose players into teams.
- 🛠️ Admin fixture and score entry.
- 🔁 Admin tools for late entrants, first-round regeneration, extra games, and safe reset
  options.
- 🏷️ Sport-specific colors, labels, badges, or icons so multi-sport teams are not confused.
- 🔗 Sport pages or shareable filters such as `/live?sport=football`.
- 📺 Public live view for current, waiting, and completed games.
- 📊 Mobile-friendly standings or bracket view.
- ✏️ Admin score editing for the current round.
- 🛡️ Privacy-safe public pages that do not expose phone numbers, emails, medical notes, or
  internal organizer notes.
