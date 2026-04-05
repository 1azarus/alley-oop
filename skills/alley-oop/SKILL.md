---
name: alley-oop
description: >
  Manages token-efficient session transitions in Claude Code. Use this skill whenever
  the user runs /pass, /catch, /passin, or /catchon, or says anything like
  "wrap up the session", "end the session", "save a handoff", "start fresh",
  "pick up where we left off", or "the session is getting long". The handoff document
  is a cold-start prompt written TO a fresh Claude instance — not a history dump.
  The goal is short sessions, low token cost, and clean continuity.
---

# Alley Oop — Session Handoff Skill

## Purpose

Alley Oop enables clean, token-efficient transitions between Claude Code sessions.
Instead of letting sessions grow until quality degrades, users `/pass` at any point
to generate a tight handoff document, then `/catch` in a fresh session to pick up
exactly where they left off — without reloading old context.

## Core Principle

The handoff document is a **cold-start prompt**, not a summary. It should read like
instructions written *to* a fresh Claude instance, not notes *about* what happened.
Every line should earn its place by helping Claude act immediately and correctly.

---

## File Locations

All Alley Oop files live under `.claude/alley-oop/` in the project root.

- **Most recent handoff:** `.claude/alley-oop/ALLEY_OOP_MOST_RECENT.md`
  Used by `/pass` and `/catch`. One file, always overwritten.

- **Archive:** `.claude/alley-oop/archive/YYYY-MM-DD_HH-MM.md`
  Used by `/passin` and `/catchon`. Never touched by `/pass`.

Create `.claude/alley-oop/` and subdirectories if they don't exist.

---

## Writing a Good Handoff

Used by both `/pass` and `/passin`. The content format is identical — only the
destination file differs.

### What to capture

Choose what's relevant. Not every section applies every time.

- **Goal** — The overarching objective. One or two sentences max.
- **Current State** — Where things stand. What works, what's broken, what's in progress.
- **Key Decisions** — Non-obvious choices made and why. Skip obvious ones.
- **Next Steps** — Concrete, ordered actions. Be specific enough to act on immediately.
- **Watch Out For** — Gotchas, constraints, things not to break. Only if genuinely important.
- **Relevant Files** — Specific files or components central to the work. Not exhaustive —
  just what a fresh Claude needs to avoid wasting time exploring.

### What to skip

- Blow-by-blow history of what was tried and failed (unless the failure is a gotcha)
- Anything the next Claude can figure out by reading the code
- Completed work with no bearing on what's next
- Pleasantries or meta-commentary about the session

### Format rules

- Write in second person, addressed to Claude: "You are working on...", "Your next
  step is...", "Don't touch X because..."
- Keep it scannable — short headers, brief bullets
- Aim for **under 300 words**. If it's longer, cut it.
- End with a clear "Next Step" or "Start Here" so the fresh session knows exactly
  where to begin

---

## /pass — Write Most Recent Handoff

1. Ask the user if they have any specific instructions for the handoff document:
   ```
   Any specific instructions for the handoff? (or type 'n' to skip)
   ```
   Wait for their response. If they provide instructions, incorporate them when writing
   the handoff. If they type 'n', proceed normally without any instructions.
2. Write the handoff to `.claude/alley-oop/ALLEY_OOP_MOST_RECENT.md` (overwrite)
   - If the user provided special instructions, include them as a `Special Instructions:` field near the top of the document (after any Goal/title line)
3. Confirm to the user:
   - Where the file was saved
   - A one-line summary of what the next session will pick up from
   - The exact command to start fresh:

```
✅ Handoff saved to .claude/alley-oop/ALLEY_OOP_MOST_RECENT.md

Next session, start with:
  /catch
```

---

## /catch — Start from Most Recent Handoff

1. Read `.claude/alley-oop/ALLEY_OOP_MOST_RECENT.md` — and **only** that file.
   Do not load previous conversation history. Do not scan the codebase speculatively.
2. If the handoff contains a `Special Instructions:` field, honor it when forming
   your action plan (e.g. skip certain steps, focus on specific areas, etc.).
3. Do any minimal targeted reads the handoff points you to (e.g. if it says
   "see `src/auth.ts`", read that file).
4. Present a short numbered **proposed action plan** derived from the handoff's next steps.
5. Ask if the plan looks right, or if anything has changed since the handoff was written.

**Do not** summarize or repeat the handoff back to the user.
**Do not** start executing until they confirm the plan.
**Do not** pull in broader project context beyond what the handoff references.
Lead with the plan. Be direct. The user wants to get moving.

If `ALLEY_OOP_MOST_RECENT.md` doesn't exist, tell the user and stop.

---

## /passin — Write Timestamped Archive Handoff

1. Ask the user if they have any specific instructions for the handoff document:
   ```
   Any specific instructions for the handoff? (or type 'n' to skip)
   ```
   Wait for their response. If they provide instructions, incorporate them when writing
   the handoff. If they type 'n', proceed normally without any instructions.
2. Get the current timestamp in format `YYYY-MM-DD_HH-MM`
3. Write the handoff to `.claude/alley-oop/archive/<timestamp>.md`
   - If the user provided special instructions, include them as a `Special Instructions:` field near the top of the document (after any Goal/title line)
4. **Do not** touch `ALLEY_OOP_MOST_RECENT.md`
5. Delete any files in `.claude/alley-oop/archive/` older than 30 days (based on filename timestamp)
6. Confirm to the user:
   - The archive filename it was saved to
   - A one-line summary of what was captured
   - That they can retrieve it with `/catchon`

---

## /catchon — Pick and Resume from Archive

1. List all `.md` files in `.claude/alley-oop/archive/`, sorted newest first
2. For each file, read just the **Goal** line (or first meaningful line) to use as preview
3. Present the list to the user, e.g.:

```
Available handoffs:

  1. 2026-04-05_14-32 — Refactor auth middleware to support OAuth
     Instructions: focus on the token expiry edge case
  2. 2026-04-05_09-15 — Build out dashboard chart components
  3. 2026-04-04_17-44 — Debug payment webhook timeout issue
     Instructions: skip the retry logic, just document the issue

Which one? (enter a number)
```

When reading each file for the preview, also check for a `Special Instructions:` field and include it indented below the entry if present. Omit the instructions line entirely if none were given.

4. Once the user picks one, read that file and follow the same `/catch` flow:
   targeted reads only, propose an action plan, wait for confirmation.

If the archive is empty, tell the user and suggest `/passin` for future sessions.

---

## Keeping Handoffs Fresh

If the user asks to update the handoff mid-session ("update the wrap", "refresh the
handoff"), overwrite the appropriate file with a fresh one reflecting current state.
Don't append — replace. Also refresh the session watermark.
