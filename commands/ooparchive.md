---
description: Choose a timestamped handoff from the archive and resume from it
---

# /ooparchive — Load and Resume from Archive

You are resuming a Claude Code session from an archived handoff using the Alley Oop skill.

Follow the alley-oop skill instructions to:

1. List all `.md` files in `.claude/alley-oop/archive/`, sorted newest first.
   If the archive is empty or doesn't exist, tell the user and suggest using `/wrapsave` in future sessions.

2. For each file, read just the Goal line (or first meaningful content line) as a preview.

3. Present the numbered list to the user in this format:
```
Available handoffs:

  1. 2026-04-05_14-32 — <goal preview>
  2. 2026-04-05_09-15 — <goal preview>
  3. 2026-04-04_17-44 — <goal preview>

Which one? (enter a number)
```

4. Once the user picks, read that full file and follow the /resume flow:
   - Do only targeted file reads the handoff explicitly points you to
   - Do not load previous conversation history or scan the codebase speculatively
   - Present a short numbered proposed action plan
   - Ask if the plan looks right or if anything has changed

Do not summarize the handoff back to the user. Do not start executing until they confirm.

Do not summarize the handoff back to the user. Do not start executing until they confirm.
