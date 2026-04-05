---
description: End this session and save a handoff to ALLEY_OOP_MOST_RECENT.md
---

# /alley — End Session & Save Handoff

You are wrapping up this Claude Code session using the Alley Oop skill.

Follow the alley-oop skill instructions to:

1. Ask the user if they have any specific instructions for the handoff document.
   Use this exact prompt:

```
Any specific instructions for the handoff? (or type 'n' to skip)
```

   Wait for their response. If they provide instructions, incorporate them when writing
   the handoff. If they type 'n', proceed normally without any instructions.

2. Write a concise cold-start handoff document to `.claude/alley-oop/ALLEY_OOP_MOST_RECENT.md`
   Create the `.claude/alley-oop/` directory if it doesn't exist. Overwrite any existing file.
   If the user provided special instructions, include them as a `Special Instructions:` field
   near the top of the document (after any Goal/title line).

3. Confirm to the user with the file location, a one-line summary, and the next-session instructions:

```
✅ Handoff saved to .claude/alley-oop/ALLEY_OOP_MOST_RECENT.md

Next session, start with:
  /oop

```
