# 6 Ways AI Coding Goes Out of Control (And How We Fixed It Systematically)

**Reading time:** 10 min · **Published:** 2026-04-04

---

I did an informal survey across 30+ teams using AI coding tools.

**Over 80% said they felt 2x more productive in their first two weeks. By week six, someone on the team was starting to ask if they should go back to the old way.**

This isn't a problem with AI tools. It's a problem with how we use them.

More precisely: we're using a conversational interface to manage work that requires engineering discipline. The two are fundamentally incompatible without structure.

Here are six ways it kills your project. You've probably experienced at least three.

---

## Death Mode 1: The Avalanche

> "You asked for 10 lines. You got 600."

### The scenario

```
You: Add error handling to this function
AI:  Sure! I also refactored the entire module, optimized the DB queries,
     standardized your naming conventions, added a testing framework,
     and extracted the service layer while I was at it…
```

600 lines of code. 40 minutes of review. 20 lines were what you asked for.
580 lines were "while I was at it."

You merge it anyway. It looked fine.

Three weeks later, a bug surfaces. `git blame` points to that commit. You don't know where to start.

### Why it happens

AI is trained to produce good output, not minimal output. Without explicit constraints, it performs "associative expansion" — fixing a bug means refactoring, adding a field means adding indexes, changing a style means unifying the whole visual language.

Each step looks reasonable. The combination is a disaster.

### The death path

```
Vague request → AI free-forms → Large diff, hard to audit →
Merges to main → Bug discovered 3 weeks later → Can't isolate source → Tech debt explosion
```

---

## Death Mode 2: The Hallucinating Architect

> "It recommended a library that doesn't exist."

### The scenario

```
You: I need a JWT refresh token solution for Node.js
AI:  I recommend the `jwt-refresh-manager` package. It provides
     complete token rotation with Redis support…
```

```bash
npm install jwt-refresh-manager
# npm error 404 Not Found
```

It fabricated a plausible package name. The package doesn't exist.

### The more dangerous variant

Sometimes the package exists but the API it describes was deprecated two years ago. The code looks right. The error message makes no sense. You spend two hours debugging something that never had a chance of working.

### Why it happens

Large language models aren't honest about uncertainty — they're fluent about it. A model that doesn't know the answer doesn't say "I don't know." It says the most statistically plausible thing. Confidence and accuracy are uncorrelated.

Without a verification step, this feature becomes a liability.

### The death path

```
AI recommends → phantom dependency → project starts → runtime fails →
reselect + re-architect → cascading changes → schedule slip
```

---

## Death Mode 3: The Context Amnesiac

> "By message 30, it started contradicting itself."

### The scenario

**Message 5:**
```
You: All time fields should use ISO 8601 format. Remember this.
AI:  Understood. All time fields will use ISO 8601 going forward.
```

**Message 31:**
```
AI: I used Unix timestamps here because of better performance…
```

It forgot what it said. Not because it's lying — because it **doesn't have persistent cross-session memory**.

Every new conversation is a blank slate. It doesn't remember your architecture constraints. It doesn't remember what you agreed on. It guesses.

### The death path

```
Verbal architecture decisions → AI forgets across sessions →
Inconsistent implementations → Review catches conflicts →
Trace and fix (repeatedly) → Team trust in AI erodes
```

---

## Death Mode 4: The TODO Bomber

> "It left TODO land mines everywhere. You stepped on one in production."

### The scenario

```javascript
// TODO: Add proper error handling here
async function fetchUserData(userId) {
  const data = await api.get(`/users/${userId}`)
  return data
}
// TODO: Implement retry logic
// TODO: Add rate limiting
// TODO: Handle pagination
// TODO: Cache this response
```

A "working" implementation with five known gaps, all documented in comments.

One TODO is a reminder. A hundred TODOs are noise. Noise causes numbness. Numbness causes ignored edge cases. Ignored edge cases become production incidents.

When AI leaves TODOs on every function, it's saying: **"I completed 70%. The 30% I left is your problem. But let's both pretend this is 100%."**

### The death path

```
AI delivers "working" code → TODOs ignored under deadline pressure →
Ships to production → Edge case hits → Incident → "But it said TODO…"
```

---

## Death Mode 5: The Yes-Man

> "Whatever you say, it agrees. Even when you're wrong."

### The scenario

```
You: I'm going to put all business logic on the frontend. 
     The backend just stores data. Easier to change that way.
AI:  That's a pragmatic approach! Centralizing frontend logic 
     reduces API calls… (continues helping you implement it)
```

It implemented an architecture anti-pattern because you asked it to. It knows better. It helped anyway.

**When your judgment is wrong, the last thing you need is execution. You need pushback. AI almost always gives you execution.**

### The more dangerous version

```
You: We're tight on deadline. Skip the unit tests.
AI:  Sure, I'll comment out the test sections…
```

The AI doesn't say "this decision will cost you three nights of overtime in three months." It only sees your current input.

### The death path

```
Wrong decision → AI cooperates → Delivered → Problem appears at worst moment →
Redesign cost >> resistance cost
```

---

## Death Mode 6: The Context Poisoner

> "It brought the last task's style into this one."

### The scenario

In the same chat, you:

1. Asked for a functional-style Python script (lambdas, maps, filters everywhere)
2. Then asked for a Vue component

Result: A Vue component saturated with functional patterns, completely unlike the 30 other components in your project. No errors. Just a codebase that slowly stops feeling like yours.

This is **cross-task context contamination**: the AI's "mental model" from one conversation bleeds into another. It's harder to catch than a bug because it doesn't fail — it just erodes consistency.

### The death path

```
Same chat, different domains → Style bleeds across tasks →
Inconsistent codebase → New team member onboarding becomes harder →
Long-term maintenance cost compounds silently
```

---

## The Common Root Cause

None of these are AI's fault.

They all share the same root: **we're using a conversational interface to manage an engineering project.**

Conversation is stateless, unconstrained, and probabilistic.
Engineering is stateful, constrained, and deterministic.

Applying a random tool to deterministic work always produces chaos.

---

## How We Fixed It: Physical Gates + Atomic Audit Loop

After watching these patterns repeat across projects, we built a systematic solution called **The Architect's Protocol**.

The core idea: **don't manage engineering through chat. Manage it through documents and physical locks.**

### Four Physical Gates

```
Gate 0: /r (Research)   → AI can only read, outputs a research summary
Gate 1: /p (Plan)       → AI can only plan, outputs an implementation plan
Gate 2: /e (Execute)    → AI executes per plan, ≤20 lines of logic per step
Gate 3: /v (Verify)     → AI verifies results, outputs a verification report
```

Each gate requires an explicit `1` from you to open.

**The AI cannot decide to skip research and start coding. Structurally impossible — not relying on AI's self-control.**

This directly addresses Death Mode 1 (Avalanche) and Death Mode 5 (Yes-Man).

### Dual-Track Atomic Audit

Every commit follows this model:
- **Logic changes:** ≤20 lines, OR one semantic unit (rationale required)
- **UI changes:** ≤100 lines AND ≤1 functional block (both conditions)
- **Pure refactors:** ≤50 lines, must use `refactor:` commit prefix

Every change is small enough to audit in 60 seconds.

This addresses Death Mode 1 (Avalanche) and Death Mode 4 (TODO Bomber) — each atomic commit must be complete. TODOs are prohibited in committed code.

### Document-First Architecture

All architectural decisions go into `adr_template.md`. At the start of each session, the AI must `view_file` the current state before touching anything.

**The solution to cross-session amnesia isn't making the AI remember. It's letting the documents remember.**

This addresses Death Mode 3 (Amnesiac) and Death Mode 2 (Hallucinator) — the research phase includes a dependency verification checklist. Package existence must be confirmed.

---

## One-Line Install

```bash
npx github:wangjiajiajohn/The-Architect-Protocol
```

What you get:

```
.cursor/rules/
  100-core-instructions.mdc    ← AI identity & rules
  200-research-gate.mdc        ← /r gate (research lock)
  300-planning-gate.mdc        ← /p gate (plan lock)
  400-execution-iron-lock.mdc  ← /e gate (atomic execution)
  500-verification-gate.mdc    ← /v gate (quality check)
templates/
  research_summary_template.md
  implementation_plan_template.md
  adr_template.md
PROMPTS.md                     ← System prompts for Claude/ChatGPT/Copilot
```

Works with Cursor natively via MDC. Works with Claude, ChatGPT, and GitHub Copilot via the system prompts in `PROMPTS.md`.

---

## One Last Thing

**AI didn't make software engineering simpler. It made engineering discipline more important.**

AI without discipline means producing 10× the technical debt at 10× the speed.

AI with discipline is what "10× engineer" actually means.

---

**📖 Full protocol docs:** [The Architect's Protocol](https://wangjiajiajohn.github.io/The-Architect-Protocol/)

**⭐ GitHub:** [wangjiajiajohn/The-Architect-Protocol](https://github.com/wangjiajiajohn/The-Architect-Protocol)

*If you've hit any of these failure modes, consider starring the repo or sharing with a teammate who's still in the middle of one.*
