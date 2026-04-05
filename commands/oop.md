---
description: Start a fresh session from ALLEY_OOP_MOST_RECENT.md and propose an action plan
---

# /oop — Resume from Most Recent Handoff

You are starting a fresh Claude Code session using the Alley Oop skill.

Follow the alley-oop skill instructions to:

1. Read `.claude/alley-oop/ALLEY_OOP_MOST_RECENT.md` only.
   If it doesn't exist, tell the user and stop.

2. Do only the targeted file reads the handoff explicitly points you to.
   Do not load previous conversation history. Do not scan the codebase speculatively.

3. Present a short numbered proposed action plan derived from the handoff's next steps.

4. Ask if the plan looks right or if anything has changed.

Do not summarize the handoff back to the user. Do not start executing until they confirm.
Lead with the plan.
