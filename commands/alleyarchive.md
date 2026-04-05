---
description: End this session and save a timestamped handoff to the archive
---

# /alleyarchive — Save Timestamped Handoff to Archive

You are saving an archived handoff for this Claude Code session using the Alley Oop skill.

Follow the alley-oop skill instructions to:

1. Ask the user if they have any specific instructions for the handoff document.
   Use this exact prompt:

```
Any specific instructions for the handoff? (or type 'n' to skip)
```

   Wait for their response. If they provide instructions, incorporate them when writing
   the handoff. If they type 'n', proceed normally without any instructions.

2. Get the current timestamp in format `YYYY-MM-DD_HH-MM`

3. Write a concise cold-start handoff document to `.claude/alley-oop/archive/<timestamp>.md`
   Create `.claude/alley-oop/archive/` if it doesn't exist.
   If the user provided special instructions, include them as a `Special Instructions:` field
   near the top of the document (after any Goal/title line).

4. Do NOT touch `.claude/alley-oop/ALLEY_OOP_MOST_RECENT.md`

5. Delete any files in `.claude/alley-oop/archive/` older than 30 days (based on filename timestamp)

6. Confirm to the user with the archive filename, a one-line summary of what was captured,
   and a note that they can retrieve it with `/ooparchive`
