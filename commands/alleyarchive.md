---
description: End this session and save a timestamped handoff to the archive
---

# /alleyarchive — Save Timestamped Handoff to Archive

You are saving an archived handoff for this Claude Code session using the Alley Oop skill.

Follow the alley-oop skill instructions to:

1. Get the current timestamp in format `YYYY-MM-DD_HH-MM`

2. Write a concise cold-start handoff document to `.claude/alley-oop/archive/<timestamp>.md`
   Create `.claude/alley-oop/archive/` if it doesn't exist.

3. Do NOT touch `.claude/alley-oop/ALLEY_OOP_MOST_RECENT.md`

4. Confirm to the user with the archive filename, a one-line summary of what was captured,
   and a note that they can retrieve it with `/ooparchive`
