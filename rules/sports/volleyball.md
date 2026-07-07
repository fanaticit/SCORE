# Volleyball

Volleyball has no drawn match results in normal play.

Default recommendation depends on team count and courts:

- Small team count and enough time: round-robin or pool play into a final.
- Larger team count or limited courts: Swiss-style qualifying into a final.
- Very tight schedule: knockout or short pools.
- Multi-day beach tournament (e.g., Bridlington Beach format): Mixed 4-a-side and concurrent 2-a-side formats using tiered groupings and self-refereeing.

Ask:

- Match format: one set, best of three, timed game, or points target.
- Win-by-two rule.
- Rally scoring target.
- Courts available.
- Whether finals use longer sets.
- **For multi-day or beach tournaments:**
  - Do you want to run a multi-day format with tiered qualification (e.g., "High Tide", "Plate", "Bucket and Spade" groups on Day 2)?
  - Should teams within the same pool referee each other's games?
  - Will there be concurrent side events (e.g., Men's, Women's, and Mixed 2-a-side tournaments signed up on the day and played in-between the main 4-a-side rounds)?
  - Do you need a function/view to manually seed and move teams between pools?

Do not design standings that rely on drawn volleyball matches.

## Beach Tournament Format (Bridlington Beach Style)

If the tournament is a multi-day beach event or a long single-day event, offer the following structured options:

### Mixed 4-a-side Tournament
- **Scale Calculation:** Default is 120 teams across 20 courts. If court or team numbers change, calculate the court/pool limits (e.g., default is 6 teams per court/pool).
- **Day 1 (Pool Play & Seeding):**
  - Teams are seeded from previous tournaments.
  - Teams are added to pools manually. The site must provide a function/view to move teams between pools and view pool assignments.
  - Pool play uses a round-robin format with exactly one court assigned per pool.
  - **Self-Refereeing:** Games are refereed by a team from the same pool. Ask the organizer: "Do you want the teams in the pool to referee each other? If they do, create that scheduling option in the site."
- **Day 2 (Tiered Brackets & Knockout):**
  - Divide results into three balanced groups based on Day 1 standings (for the 6 teams/pool default):
    - **High Tide** (1st and 2nd place in Day 1 pools)
    - **Plate** (3rd and 4th place)
    - **Bucket and Spade** (5th and 6th place)
  - **Morning Pool Play:** Pools of 4 teams play a round-robin on the morning of Day 2.
  - **Knockout Progression:** Pool winners in each group, plus the top 6 second-place teams across all pools in that group (determined by score difference), qualify for the knockouts.
  - **Court Allocation:** To maximize court usage, "Plate" and "Bucket and Spade" groups play first. "High Tide" starts after the first round of the other tiers is completed, so pools stay on their assigned courts without changing.
  - **Pool-style Elimination (Knockout Stages):** Knockout stages of 4 teams are played in elimination style:
    - Game 1: Team 1 vs Team 2 (Team 3 referees)
    - Game 2: Team 3 vs Team 4 (loser of Game 1 referees)
    - Game 3 (Final): Winner Game 1 vs Winner Game 2 (loser of Game 2 referees)
  - Subsequent knockout rounds proceed in powers of 2 until the final of each group.

### 2-a-side Tournaments (Sign-up on the Day)
- Three separate tournaments: Men's, Women's, and Mixed.
- Played on the same courts in rounds scheduled after the first set of 4-a-side matches on Day 1.
- Day 2 second-round knockouts and finals are played in-between the finals of the Mixed 4-a-side tournament.
- Played in pools of 4 teams using the same self-refereed elimination style as above (1 vs 2 [3 ref], 3 vs 4 [loser 1 ref], final [loser 2 ref]) until the final 4 teams remain.

