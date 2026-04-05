# Alley Oop 🏀

Token-efficient session handoffs for Claude Code.

Wrap up a session with a tight cold-start prompt. Resume in a fresh session without
dragging in old context. Keep sessions short, focused, and cheap.

---

## Commands

| Command | What it does |
|---|---|
| `/alley` | Writes a handoff to `ALLEY_OOP_MOST_RECENT.md`. Use this for solo sessions. |
| `/oop` | Reads `ALLEY_OOP_MOST_RECENT.md`, proposes an action plan for the new session. |
| `/alleyarchive` | Writes a timestamped handoff to the archive. Use this when running parallel sessions. |
| `/ooparchive` | Lists archived handoffs with a Goal preview, lets you pick one, then proposes a plan. |

---

## How it works

The handoff document is a **cold-start prompt**, not a history dump. It's written *to*
a fresh Claude instance so the next session can orient and act immediately — without
re-reading conversation history or speculatively scanning the codebase.

### Solo session workflow
```
Session 1:  do work → /alley
Session 2:  /oop → confirm plan → do work → /alley
```

### Parallel session workflow
```
Session A:  do work → /alleyarchive
Session B:  do work → /alleyarchive
New session: /ooparchive → pick the one you want → confirm plan → do work
```

---

## File locations

All files live in `.claude/alley-oop/` inside your project:

```
.claude/alley-oop/
├── ALLEY_OOP_MOST_RECENT.md      ← written by /wrap, read by /resume
├── archive/
│   ├── 2026-04-05_14-32.md       ← written by /wrapsave, listed by /resumeload
│   └── 2026-04-04_09-15.md
└── .wrapped_<session-id>         ← watermark files, one per wrapped session
```

The `.claude/` directory is gitignored by default in Claude Code projects, so handoff
files stay local. If you want to commit handoffs for team continuity, remove
`.claude/alley-oop/` from your `.gitignore`.

---

## Installation

```bash
/plugin marketplace add YOUR-GITHUB-USERNAME/alley-oop
/plugin install alley-oop@alley-oop
```

Or install locally by cloning the repo and running:
```bash
/plugin marketplace add ./alley-oop
/plugin install alley-oop@alley-oop
```
