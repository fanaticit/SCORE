# Prompt 02: Create The Site Brief

Use this after the organizer interview.

```text
Create a concise implementation brief for a local-first competition website and save the
confirmed planning artifacts.

Read:
- templates/competition-site-brief.md
- templates/data-model.md
- templates/pages/registration.md
- templates/pages/teams-board.md
- templates/pages/live-view.md
- templates/pages/sport-summary.md
- templates/pages/standings.md
- templates/pages/admin-operations.md
- templates/site-design-system.md
- templates/styles/competition-theme.css
- rules/format-guide.md
- relevant files in rules/sports/
- skills/designing-competition-formats/SKILL.md
- skills/configuring-competition-sites/SKILL.md
- skills/reviewing-participant-privacy/SKILL.md

Use the organizer answers to produce:
1. Site goal
2. Pages
3. Data entities
4. Tournament formats and scoring
5. Admin workflows
6. Public/private field rules
7. Local test plan
8. Implementation steps

The brief must include:
- Whether players or teams can be added after the tournament starts. Default: yes.
- Any extra requests the organizer added at the end of the interview.
- First-round generation behavior. Do not use name-only pairing; include controlled
  randomness, seeding, or organizer review.
- A first-round reset/regenerate option before scores are entered.
- Optional extra games if the event finishes early, including round-robin, friendly rounds,
  or a final.
- Multi-sport visual identity: each sport needs a color, badge, icon, or label that appears
  on teams, fixtures, live view, and standings.
- Sport-specific player pages: either separate pages per sport or filters with shareable
  query strings such as `/live?sport=football`.
- Mobile-friendly standings: responsive cards, compact mobile tables, or expandable rows.
- Admin score correction: admins can edit current-round scores; do not create a public
  result-review fixture status.

Admin workflows must include separate reset tools:
- Reset tournament state while keeping participants, teams, and registrations.
- Reset fixtures only.
- Reset scores only.
- Clear all local data as a separate high-risk action.

Save:
- `examples/my-event/organizer-answers.json`
- `examples/my-event/interview-summary.md`
- `examples/my-event/site-brief.md`

If the event name is known, replace `my-event` with a short lowercase hyphenated slug.
If not, use `my-event` and rename it later.

Do not create application code yet. Do not deploy. Build locally only after the brief is
reviewed.
```
