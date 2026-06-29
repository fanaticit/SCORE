#!/usr/bin/env node
import fs from "node:fs";

const required = [
  "README.md",
  "AGENTS.md",
  "prompts/01-interview-organizer.md",
  "prompts/02-create-site-brief.md",
  "prompts/03-local-test-and-fix.md",
  "prompts/04-tournament-day-operator.md",
  "prompts/05-vibe-code-event-extras.md",
  "templates/competition-site-brief.md",
  "templates/data-model.md",
  "templates/organizer-answers.schema.json",
  "templates/site-design-system.md",
  "templates/styles/competition-theme.css",
  "templates/pages/registration.md",
  "templates/pages/teams-board.md",
  "templates/pages/live-view.md",
  "templates/pages/admin-operations.md",
  "rules/format-guide.md",
  "rules/sports/README.md",
  "rules/sports/chess.md",
  "rules/sports/football.md",
  "rules/sports/volleyball.md",
  "rules/sports/basketball.md",
  "rules/sports/netball.md",
  "skills/interviewing-event-organizers/SKILL.md",
  "skills/designing-competition-formats/SKILL.md",
  "skills/configuring-competition-sites/SKILL.md",
  "skills/reviewing-participant-privacy/SKILL.md",
  "checklists/local-acceptance-checklist.md",
  "checklists/tournament-day-checklist.md",
  "docs/public-repo-roadmap.md",
  "docs/publish-as-new-repo.md"
];

const missing = required.filter((file) => !fs.existsSync(new URL(`../${file}`, import.meta.url)));

const result = {
  ok: missing.length === 0,
  required_count: required.length,
  missing
};

console.log(JSON.stringify(result, null, 2));
process.exit(result.ok ? 0 : 1);
