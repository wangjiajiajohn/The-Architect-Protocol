![The Architect's Protocol](./public/hero-banner.png)

<div align="center">

# The Architect's Protocol

**A battle-tested SOP for Human-AI collaborative software engineering.**

Transform AI from an impulsive code generator into a precision engineering officer.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/wangjiajiajohn/The-Architect-Protocol/blob/main/LICENSE)
[![Version](https://img.shields.io/badge/version-v2.0--Modular--MDC-blue)](./ARCH.md)
[![VitePress Docs](https://img.shields.io/badge/docs-VitePress-brightgreen)](https://wangjiajiajohn.github.io/The-Architect-Protocol/)

**Works with:** Cursor · Claude · ChatGPT · GitHub Copilot

</div>

---

## 🚀 One-Line Install

Run this in any project to instantly get all protocol files:

```bash
npx github:wangjiajiajohn/The-Architect-Protocol
```

This installs:
- 📐 `5 × MDC gate rules` → `.cursor/rules/` (Chinese + English)
- 📋 `3 × templates` → `templates/` (Research / Plan / ADR)
- 💬 `PROMPTS.md` → system prompts for Claude / ChatGPT / Copilot

---

## 🩺 The Problem

AI coding tools are powerful. They are also dangerously impulsive.

Without discipline, your AI assistant will:

- ❌ Rewrite 300 lines when you asked for 10
- ❌ Mix business logic with UI in the same commit
- ❌ Confidently introduce bugs while "fixing" a different bug
- ❌ Leave `// TODO` landmines and ghost you
- ❌ Lose context after 3 messages and contradict itself

The result? A codebase that becomes unmaintainable in weeks.

**The Architect's Protocol is the handbrake.**

---

## ⚡ The Solution: A 3-Phase Engineering Pipeline

Instead of free-form chat, you enforce a structured loop:

```
┌──────────────────────────────────────────────────┐
│              THE ENGINEERING PIPELINE             │
│                                                  │
│   /r (Research)  →  /p (Plan)  →  /e (Execute)  │
│                                                  │
│   [Read-Only]       [Contract      [Atomic       │
│   Analyze deps,      Lock]          Audit Loop]  │
│   map risks,        Lock types,    ≤20 lines/    │
│   compare paths     define schema  commit        │
│                          ↑                ↑      │
│                   Human replies "1"  after diff  │
└──────────────────────────────────────────────────┘
```

**The human never disappears from the loop. They just stop doing the grunt work.**

---

## 🏗️ Four Core Laws

### ⚛️ Law 1: Atomic Audit — Never merge more than you can read in 60 seconds
- **Logic changes**: ≤ **20 lines** per commit (human brain's instant-verification limit)
- **UI / Markup changes**: ≤ **100 lines** or 1 functional block (e.g., a Modal, a Table)
- **Two-Strike Rule**: Fail twice → `git reset --hard` → Return to `/r`

### 📋 Law 2: Contract-First — Draw the blueprint before laying bricks
No implementation without locked `Interface / Types / Schema`. Rules first, code second.

### 🏛️ Law 3: Three-Layer Pyramid — Keep skin and bone separate
```
┌─────────────────────────────┐
│       UI / Markup Layer      │  ← swap freely
├─────────────────────────────┤
│      Business Logic Layer    │  ← pure, testable
├─────────────────────────────┤
│     Data / Schema Layer      │  ← the source of truth
└─────────────────────────────┘
```

### 🧹 Law 4: Context GC — Clear the whiteboard after every task
Delete `research_summary.md`, `implementation_plan.md`, `task.md` via `/c` when done.
AI memory is finite. Clutter makes it stupid.


## 💎 Why This Exists

AI coding tools are often impulsive, leading to **"AI Entropy"**—unmaintainable code sprawl. Standard chat-based interactions are a probabilistic "roll of the dice."

The Architect's Protocol transforms AI from an impulsive generator into a **Precision Engineering Officer** through three shifts:
1.  **Deterministic Pipeline**: Research → Plan → Execute instead of just "guessing."
2.  **Structural Control**: Physical MDC locks prevent AI from skipping architectural steps.
3.  **Auditability**: Atomic commits (20 lines logic/100 lines UI) ensure you remain the Architect in control, never a "debugger chasing AI bugs."

---

## 🚀 Quick Start (5 minutes)

### For Cursor Users (Recommended)

```bash
# 1. Copy the MDC rule files to your project
cp -r .cursor/rules/ /path/to/your-project/.cursor/rules/

# 2. The rules activate automatically based on which file you're editing.
#    No setup required.
```

Then in Cursor chat:
```
/r [describe your requirement]
```
Wait for AI to produce `research_summary.md`. Review it. Reply `1`.

```
/p
```
Wait for `implementation_plan.md`. Check the contracts and types. Reply `1`.

```
/e 1.1
```
AI executes one atomic step, shows you the diff. Reply `1` to commit.

---

### For Claude / ChatGPT / Copilot Users

Copy the **Universal System Prompt** from [`PROMPTS.md`](./PROMPTS.md) into:
- Claude → System Prompt field
- ChatGPT → Custom Instructions
- Copilot → `.github/copilot-instructions.md`

---

## 📊 Before vs. After

| Scenario | Without Protocol | With Protocol |
|----------|-----------------|---------------|
| Requirement: "Add login rate limiting" | AI rewrites auth module (450 lines), breaks 3 tests | 3 atomic commits: Interface → Logic → Route injection |
| Bug appears after AI fix | Unknown which commit caused it | `git bisect` finds it in 30 seconds (atomic commits) |
| New dev joins mid-project | Reads 2000 lines to understand context | Reads `ARCH.md` and ADR trail |
| AI loses context after long session | Starts contradicting itself | `/r` re-anchors from physical documents |

---

## 📐 Protocol V2.0: Modular MDC Architecture

```
.cursor/rules/
├── 100-core-instructions.mdc    ← Global identity, language lock
├── 200-research-gate.mdc        ← Read-only mode, research output only
├── 300-planning-gate.mdc        ← Contract audit, atomic task list
└── 400-execution-iron-lock.mdc  ← Atomic commits, mandatory diff review
```

Each gate **physically isolates** what the AI is allowed to do. During research, the AI cannot touch source code — the rule file makes it structurally impossible.

---

## 📁 Repository Structure

```
The-Architect-Protocol/
├── .cursor/rules/          ← Cursor MDC rule files (the physical locks)
├── templates/              ← Standard output templates (research, plan, ADR)
├── guide/                  ← Onboarding guides and real-world case studies
├── SOP.md                  ← The full Standard Operating Procedure
├── PROMPTS.md              ← Universal system prompts for all AI tools
├── ARCH.md                 ← Architecture Decision Records
└── USAGE_EXAMPLE.md        ← Full worked example (login rate limiting)
```

---

## 🤝 Contributing

We welcome contributions that strengthen the protocol. Please read [`CONTRIBUTING.md`](./CONTRIBUTING.md) first.

The key contribution areas are:
1. **New real-world case studies** — `guide/4-real-world-cases.md`
2. **Anti-pattern documentation** — `guide/5-anti-patterns.md`
3. **AI tool-specific configurations** — `guide/6-ai-tool-setup.md`
4. **Language translations** — `/zh/` directory

---

> *"AI won't destroy software engineering. Only **thoughtless** use of AI will.*
> *This protocol is the pen with which you reclaim engineering control."*
