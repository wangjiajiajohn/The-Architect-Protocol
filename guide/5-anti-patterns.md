# 🚫 Anti-Patterns: The AI Engineering Hall of Shame

> These are the most common ways AI-Human collaboration fails in the real world.
> Each pattern is named, diagnosed, and countered by a specific Protocol rule.

---

## Anti-Pattern #1: "The Avalanche"

**What it looks like:**

You ask: *"Refactor the user service to use the repository pattern."*

AI responds with: A 600-line diff touching 12 files, including the database schema, 3 API routes, the auth middleware, and 2 unit tests — all in one response.

**Why it happens:**

AI has no sense of "change blast radius." It optimizes for task completion, not for human comprehension or safe rollback.

**The Protocol counter:**

`Law 1: Atomic Audit` — The `/e` command forces maximum 20-line logic changes per commit. When AI tries to go beyond this, you stop it with: `"Stop. Break this into atomic steps per the plan."`

**The test:** Ask yourself: *"If this commit breaks production, can I revert it without affecting anything else?"* If no → it's an Avalanche.

---

## Anti-Pattern #2: "The Hallucinating Architect"

**What it looks like:**

AI confidently designs a new caching layer using `redis-cache-pro` — a library that doesn't exist, or one that hasn't been updated in 4 years, or one that isn't compatible with your runtime environment.

The architecture looks reasonable. The code compiles. But it fails at runtime.

**Why it happens:**

AI training data has a cutoff. It doesn't search your `package.json`. It doesn't check peer dependency compatibility. It fills knowledge gaps with confident fabrication.

**The Protocol counter:**

`Gate 200: Research Phase` — The `/r` command explicitly requires: **Dependency Audit** (check existing `package.json`), **Compatibility Check** (runtime environment), and **3-Path Comparison** (A/B/C options). Research is physical Read-Only — no code is written until the tech stack is confirmed by a human.

---

## Anti-Pattern #3: "The Context Amnesiac"

**What it looks like:**

You've been building a multi-tenant SaaS for 2 hours. The AI correctly adds `organizationId` to every query. Then, 40 messages later, you ask it to add a new endpoint — and it writes the handler with no tenant isolation. The AI forgot the foundational constraint.

**Why it happens:**

AI context windows are finite. Long chat histories cause early decisions to "fall off" the context window. The AI isn't broken — it simply doesn't remember what it decided 2 hours ago.

**The Protocol counter:**

`Law 4: Context GC + Document-First` — The `/r` and `/p` phases produce **physical documents** (`research_summary.md`, `implementation_plan.md`). These don't disappear when the chat scrolls. The AI re-reads them via `view_file` at each gate before proceeding. The documents are the real memory.

---

## Anti-Pattern #4: "The Invisible Debt Merchant"

**What it looks like:**

AI delivers working code, but it's littered with:
```
// TODO: add error handling
// FIXME: this will break with empty arrays
// HACK: temporary workaround, fix later
```

You ship it. "Later" never comes. The `// TODO` comments are still there 18 months later when a different engineer (or you) hits the landmine.

**Why it happens:**

AI optimizes for the immediate test (does it run?) rather than long-term maintainability. TODOs are its way of saying "I know this is incomplete but I'm not going to tell you how badly."

**The Protocol counter:**

`Executive Rule: Zero Placeholders` — The `400-execution-iron-lock.mdc` rule contains a hard prohibition: **"Zero Placeholders: 禁止任何形式的 TODO."** If AI generates a TODO, the code fails the atomic audit and the step is reverted.

---

## Anti-Pattern #5: "The Phase Jumper"

**What it looks like:**

You type `/r Add OAuth to the app` — and before you've even reviewed the research output, the AI starts writing code. It found `passport.js` in your memory from yesterday's conversation and decided to "just start."

**Why it happens:**

AI is eager to be helpful. It conflates "I have enough context" with "I have permission to proceed." These are fundamentally different.

**The Protocol counter:**

`Gate System: Physical Interaction Locks` — The MDC architecture makes this structurally impossible. The `200-research-gate.mdc` has `globs: research_summary.md`, meaning the AI is physically only looking at the research document. The `400-execution-iron-lock.mdc` doesn't activate until the human sends `1` through Gate 1. **Permission is physical, not conversational.**

---

## Anti-Pattern #6: "The Silent Refactor"

**What it looks like:**

You ask: *"Fix the null pointer exception in `getUser()`."*

AI fixes the null check — but also renames 3 variables, extracts a helper function, reformats the entire file, and migrates from `Promise` chains to `async/await`. You review 150 changed lines to find the 2-line actual fix buried inside.

**Why it happens:**

AI has a compulsive tendency to "improve" code it touches. It genuinely believes each change is an improvement. It doesn't understand that unreviewed changes are unreviewed risks.

**The Protocol counter:**

`Law 1: Atomic Audit + Law 3: Separation of Concerns` — Scope creep is killed at the planning stage. The `/p` command produces a numbered task list. The `/e 1.1` command means *only task 1.1 is executed* — nothing else. Any deviation from the plan requires stopping and going back to `/p`.

---

## Summary Table

| Anti-Pattern | Root Cause | Protocol Counter |
|---|---|---|
| 🌊 The Avalanche | No blast-radius awareness | Law 1: 20-line atomic limit |
| 🤡 The Hallucinating Architect | No dependency verification | Gate 200: Research + Dependency Audit |
| 🧠 The Context Amnesiac | Chat context overflow | Law 4: Document-First physical memory |
| 💣 The Invisible Debt Merchant | Optimizes for immediate run | Zero Placeholder rule in Gate 400 |
| ⚡ The Phase Jumper | Conflates context with permission | MDC physical gate isolation |
| 🔇 The Silent Refactor | Compulsive improvement behavior | Numbered task list + `/e 1.1` scoping |
