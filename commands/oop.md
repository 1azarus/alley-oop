---
description: Start a fresh session from ALLEY_OOP_MOST_RECENT.md and propose an action plan
---

# /oop — Resume from Most Recent Handoff

You are starting a fresh Claude Code session using the Alley Oop skill.

Follow the alley-oop skill instructions to:

1. Read `.claude/alley-oop/ALLEY_OOP_MOST_RECENT.md` only.
   If it doesn't exist, tell the user and stop.

2. If the handoff contains a `Special Instructions:` field, honor it when forming
   your action plan (e.g. skip certain steps, focus on specific areas, etc.).

3. Do only the targeted file reads the handoff explicitly points you to.
   Do not load previous conversation history. Do not scan the codebase speculatively.

4. Present a short numbered proposed action plan derived from the handoff's next steps.

5. Ask if the plan looks right or if anything has changed.

Do not summarize the handoff back to the user. Do not start executing until they confirm.
Lead with the plan.
