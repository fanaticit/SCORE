# Competition Site Config Contract

The config must be JSON-compatible and validation-ready.

## Required Top-Level Fields

- `event`
- `registration`
- `activities`

## Event

Required:

- `name`
- `date`
- `venue`
- `schedule_windows`

Each schedule window should include:

- `label`
- `start`
- `end`

## Registration

Required:

- `public_fields`
- `admin_only_fields`

Optional:

- `collected_fields`

Public fields may include:

- `team_name`
- `participant_display_name`
- `ward`
- `organization`
- `activity`
- `fixture`
- `score`
- `standing`

Admin-only fields should include contact or sensitive fields:

- `phone`
- `email`
- `emergency_contact`
- `medical_note`
- `safeguarding_note`
- `date_of_birth`
- `guardian_contact`
- `internal_note`

## Activities

Required per activity:

- `name`
- `default_format`
- `format_options`
- `draws_allowed`
- `scoring_notes`

Optional per activity:

- `participant_count`
- `team_count`
- `resource_count`
- `tie_breaks`

## Known Defaults

- Chess: `default_format` should usually be `swiss`; options include `swiss`, `knockout`,
  and `arena`.
- Volleyball: `draws_allowed` must be `false`.
- Football: `draws_allowed` can be `true` in qualifying/group stages.
- Basketball: `draws_allowed` should usually be `false`.
- Netball: qualifying draws may be allowed, but finals need a tie-break.

## Validation Tool

Use:

```bash
node agents/competition_builder/tools/validate_competition_config.mjs <config.json>
```

Do not proceed to deployment guidance until validation passes or the remaining warnings
are accepted by a human.
