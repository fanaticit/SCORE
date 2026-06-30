# Local Acceptance Checklist

- The app starts locally without production credentials.
- Demo seed data is available.
- Registration can create individual or team entries.
- Teams board can organize unassigned players.
- Multi-sport sites use clear colors, labels, badges, or icons for each sport.
- Each sport has a focused page or a shareable query-string filter, such as
  `/live?sport=football`.
- Standings work well on mobile phones without awkward zooming.
- Fixtures can be generated or manually created.
- First-round fixture generation is not based on names alone and supports shuffle, seeding,
  or organizer review.
- First-round fixtures can be reset and regenerated before scores are entered.
- Later Swiss rounds are based on standings/ranking or avoiding repeat pairings.
- Admins can start matches and enter scores.
- Admins can edit scores from the current round.
- Public users cannot mark fixtures for score review.
- Admins can add a player or team after the tournament starts by default.
- Late entrants are added to future fixtures without changing completed results by default.
- Admins can add extra games, a round-robin phase, or a final if the event finishes early.
- Live view shows waiting, running, and completed fixtures.
- Standings or brackets update after score entry.
- Admin reset tools separate "reset tournament state" from "clear all local data."
- Reset tournament state clears fixtures, scores, standings, brackets, and live queue while
  keeping participants, teams, and registrations.
- Clear all local data requires stronger confirmation than resetting tournament state.
- Football can record drawn qualifying matches when enabled.
- Volleyball cannot save a drawn match result.
- Chess defaults to Swiss unless the organizer chooses another format.
- Public pages do not expose phone numbers, emails, medical notes, or internal notes.
- Destructive actions ask for confirmation.
