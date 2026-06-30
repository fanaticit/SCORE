# SCORE Kaggle Video Script

Target length: 4:15 to 4:45.

Use this with a screen recording, generated-site screenshots, and a HeyGen avatar voiceover.

## Storyboard

| Time | Visual | Voiceover |
| --- | --- | --- |
| 0:00-0:20 | Cover slide: SCORE logo/name, screenshots of generated competition sites | "This is SCORE: the Starter Competition and Organizational Resource Engine. SCORE helps volunteers create local-first competition websites using their coding agent of choice." |
| 0:20-0:55 | Show screenshots of registrations, live boards, teams, standings | "The problem is simple: community competitions are hard to set up. I have been running competitions for more than 10 years, including national-level events in South Africa, and a lot of the difficulty is not just coding. It is knowing what questions to ask and what can go wrong on the day." |
| 0:55-1:25 | Show SCORE repo structure: `prompts`, `skills`, `rules`, `templates`, `checklists` | "SCORE is where I am putting that competition knowledge so a coding agent can use it. It is not a one-size-fits-all website. It is a reusable briefing kit with questions, skills, rules, page blueprints, safety checks, and design guidance." |
| 1:20-1:55 | Screen record Antigravity reading prompt 01 and interviewing you | "The workflow starts with an interview. The agent reads the SCORE prompts and skills, then talks to the organizer before creating files or code. It asks only the questions that matter: sports, teams, venues, late entrants, privacy, scoring, tie-breaks, and any extra requests." |
| 1:55-2:25 | Show the generated `organizer-answers.json` and `site-brief.md` | "After the organizer confirms the summary, the agent saves a structured brief. That brief becomes the source of truth for the generated website, which keeps the build grounded and reduces random guessing." |
| 2:25-3:05 | Show Antigravity generating or editing the site; cut to local site running | "Then the coding agent builds a local-first site. SCORE pushes practical defaults: chess starts with Swiss, volleyball has no drawn match results, football can allow draws, first-round pairings should not be name-only, and admins can regenerate the first round before scores are entered." |
| 3:05-3:35 | Show generated live view, sport filters, standings on mobile, sport colors | "The generated sites are designed for real tournament use. Multi-sport events use colors, labels, and sport-specific pages or shareable filters like `/live?sport=football`. Standings must work on mobile because most players will check results from a phone." |
| 3:35-4:05 | Show admin tools: score editing, reset tournament state, late entrants, extra games | "SCORE also captures operational experience. Admins can add late entrants, edit current-round scores, reset tournament state without deleting players, add extra games if Swiss finishes early, and keep public pages free of private contact details." |
| 4:05-4:30 | Show production checklist and GitHub repo | "When the local site is working, SCORE includes a production checklist: admin authentication, simple bot checks for registration, a styling pass, a help form, privacy review, and deployment approval. This makes the jump from demo to real event safer." |
| 4:30-4:45 | Closing slide: SCORE repo URL, track: Agents for Good | "SCORE is an Agents for Good project because it helps small community groups run fairer, safer competitions without needing a dedicated engineering team. The public repo includes setup instructions, prompts, skills, rules, templates, and examples." |

## Full Voiceover Script

This is SCORE: the Starter Competition and Organizational Resource Engine.

SCORE helps volunteers create local-first competition websites using their coding agent of
choice.

The problem is simple: community competitions are hard to set up. I have been running
competitions for more than 10 years, including national-level events in South Africa, and a
lot of the difficulty is not just coding. It is knowing what questions to ask and what can
go wrong on the day.

SCORE is where I am putting that competition knowledge so a coding agent can use it. It is
not a one-size-fits-all website. It is a reusable briefing kit with questions, skills,
rules, page blueprints, safety checks, and design guidance needed to build the right site
for the organizer's event.

The workflow starts with an interview. The agent reads the SCORE prompts and skills, then
talks to the organizer before creating files or code. It asks only the questions that
matter: sports, teams, venues, late entrants, privacy, scoring, tie-breaks, and any extra
requests.

After the organizer confirms the summary, the agent saves a structured brief. That brief
becomes the source of truth for the generated website, which keeps the build grounded and
reduces random guessing.

Then the coding agent builds a local-first site. SCORE pushes practical defaults: chess
starts with Swiss, volleyball has no drawn match results, football can allow draws,
first-round pairings should not be name-only, and admins can regenerate the first round
before scores are entered.

The generated sites are designed for real tournament use. Multi-sport events use colors,
labels, and sport-specific pages or shareable filters like `/live?sport=football`.
Standings must work on mobile because most players will check results from a phone.

SCORE also captures operational experience. Admins can add late entrants, edit
current-round scores, reset tournament state without deleting players, add extra games if
Swiss finishes early, and keep public pages free of private contact details.

When the local site is working, SCORE includes a production checklist: admin
authentication, simple bot checks for registration, a styling pass, a help form, privacy
review, and deployment approval. This makes the jump from demo to real event safer.

SCORE is an Agents for Good project because it helps small community groups run fairer,
safer competitions without needing a dedicated engineering team. The public repo includes
setup instructions, prompts, skills, rules, templates, and examples.

## Screen Recording Checklist

- Show the GitHub repo and README.
- Show `prompts/01-interview-organizer.md`.
- Show the coding agent asking interview questions.
- Show the generated `organizer-answers.json` and `site-brief.md`.
- Show the generated local website.
- Show registration, teams board, live view, sport filters, mobile standings, and admin
  score tools.
- Show the production checklist in the README.

## Suggested Media Gallery Assets

- Cover image: SCORE title plus collage of generated sites.
- Screenshot: repo structure.
- Screenshot: organizer interview.
- Screenshot: generated site brief.
- Screenshot: live view with sport filter.
- Screenshot: mobile standings.
- Screenshot: admin tools.
