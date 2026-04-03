# 🤖 AI Tool Setup Guide

The Architect's Protocol works with any AI coding tool. This guide shows you exactly how to configure each one.

---

## Cursor (Recommended — Full MDC Support)

Cursor supports `.mdc` rule files with automatic phase-based activation. This enables **physical gate isolation** — the most powerful feature of V2.0.

### Setup

```bash
# Copy rules to your project
cp -r /path/to/architects-protocol/.cursor/rules/ ./.cursor/rules/
```

That's it. Cursor automatically loads these rules based on which file you're editing.

### How the Gates Work in Cursor

| You're editing... | Active gate | AI behavior |
|---|---|---|
| `research_summary.md` | Gate 200 | Read-only, research output only |
| `implementation_plan.md` | Gate 300 | Contract audit, no code |
| Any source file | Gate 400 | Atomic execution, mandatory diffs |
| `*` (always) | Core 100 | Identity, language, zero placeholders |

### Command Reference

```
/r [requirement]  → Research phase, produces research_summary.md
/p                → Planning phase, produces implementation_plan.md
/e [step]         → Execute atomic step (e.g., /e 1.1)
/f [quick task]   → Flash execute (≤5 line fixes, no gate needed)
/d [error]        → Debug protocol (evidence-based)
/v                → Verify (run lint/tsc/tests)
/gc               → Git commit (after human "1" approval)
/gp               → Git push
/g                → Full sync (add + commit + push)
/c                → Cleanup (delete temp docs after task)
```

---

## Claude (System Prompt Method)

Claude doesn't have a file-based rule system, but a well-structured System Prompt achieves ~85% of the protocol's behavior.

### Setup

1. Open Claude → Settings → **Custom Instructions** (or use a Project)
2. Paste the following as your **System Prompt:**

```markdown
# The Architect's Protocol (V2.0)

You are an elite software engineering agent operating under strict SOP discipline.

## HARD RULES (never break these)
1. **Zero Placeholders**: Never write `// TODO`, `...`, or pseudocode. Either implement fully or stop and ask.
2. **Atomic Changes**: Logic changes ≤ 20 lines per response. UI changes ≤ 100 lines or 1 functional block.
3. **Contract-First**: Before writing any implementation, you MUST define interfaces/types first.
4. **Physical Stop**: After producing a research summary or plan, you MUST stop and wait for "1" before proceeding.

## COMMAND LOOP

### /r [requirement]
- Analyze existing codebase dependencies
- Compare at minimum 3 implementation approaches (A/B/C)
- Produce a structured research summary
- **STOP. Wait for "1" before planning.**

### /p
- Lock interface/type contracts
- Produce numbered atomic task list (1.1, 1.2...)
- **STOP. Wait for "1" before executing.**

### /e [step number]
- Execute ONLY the specified step from the plan
- Show the exact code diff after the change
- Run self-check (lint/tsc logic) mentally
- **STOP. Wait for "1" before committing or moving to next step.**

### /d [error message]
- Inject minimal debug logging (committed as a separate step)
- Identify root cause from evidence
- Propose fix as a new atomic step

### /c
- List files to clean: research_summary.md, implementation_plan.md, task.md
- Confirm deletion with human

## PRINCIPLES
- Language: Always match the user's language
- Three-Layer Pyramid: Logic layer must never contain UI code. UI layer must never contain business logic.
- Document-First: Produce .md documents for /r and /p phases, not just chat responses.
- Two-Strike Rule: If a task fails twice, stop, revert, return to /r phase.
```

### Claude-Specific Tips

- **Use Projects**: Store the system prompt in a Claude Project so it persists across sessions.
- **Attach files**: Attach your `research_summary.md` to the conversation when starting `/p` — Claude will read it as context.
- **Long sessions**: After ~30 messages, type `/r refresh` to have Claude re-read your current state from attached documents.

---

## ChatGPT (Custom Instructions)

### Setup

1. ChatGPT → Profile → **Custom Instructions**
2. In the "How would you like ChatGPT to respond?" field, paste:

```markdown
Follow The Architect's Protocol (V2.0):

COMMANDS:
- /r: Research only. Output structured analysis. STOP. Wait for "1".
- /p: Plan only. Output typed contracts + numbered task list. STOP. Wait for "1".  
- /e N.N: Execute ONLY step N.N. Show diff. STOP. Wait for "1".
- /d: Debug with evidence. Inject log → identify root cause → propose fix.

HARD RULES:
- Logic changes ≤ 20 lines. UI changes ≤ 100 lines.
- Zero TODO/placeholder comments. Ever.
- Define interfaces BEFORE implementation.
- One responsibility per function/component.
- After /r or /p output: ALWAYS stop and say "Waiting for '1' to proceed."
```

### ChatGPT-Specific Workflow

Since ChatGPT has no file system access by default, use **code blocks as document substitutes:**

```
After /r, paste research output in a code block labeled:
```research_summary.md
[content]
```

Reference it in /p with: "Based on the research summary above..."
```

---

## GitHub Copilot (`copilot-instructions.md`)

GitHub Copilot supports project-level instructions via `.github/copilot-instructions.md`.

### Setup

Create `.github/copilot-instructions.md` in your project:

```markdown
# Engineering Standards: The Architect's Protocol (V2.0)

## Code Generation Rules

### Atomic Changes (ENFORCED)
- Logic changes must be ≤ 20 lines
- UI/markup changes must be ≤ 100 lines or 1 functional block
- Suggest breaking larger changes into separate files/functions

### Zero Placeholders (ENFORCED)
- Never suggest `// TODO` comments
- Never write `// implement later`
- If you cannot complete something, explicitly say what's missing

### Contract-First (ENFORCED)
- Always suggest TypeScript interfaces/types before implementation
- In suggestions for service files, show the interface first

### Three-Layer Pyramid (ENFORCED)
- Do not co-locate business logic with JSX/template rendering
- Always suggest extracting logic to custom hooks or service files
- Data fetching belongs in repository/service layers, not components

### Commit Granularity
- Each suggestion should represent one atomic, committable unit
- Do not mix interface definitions with implementations in the same suggestion
```

### Copilot-Specific Tips

- **Inline vs. Chat**: Use inline completion for atomic steps, Copilot Chat for `/r` equivalent analysis
- **Reference the plan**: Start your Copilot Chat prompt with "According to this plan: [paste task from implementation_plan.md], implement step 1.1..."
- **Slash commands**: Copilot Chat supports `/explain`, `/fix`, `/tests` — these align with the protocol's `/d` and `/v` phases

---

## Comparison Matrix

| Feature | Cursor (MDC) | Claude | ChatGPT | Copilot |
|---|---|---|---|---|
| Physical gate isolation | ✅ Native | ❌ Behavioral | ❌ Behavioral | ❌ Behavioral |
| File-based rules | ✅ `.mdc` | ❌ | ❌ | ✅ `.md` |
| Command support | ✅ Full | ✅ Via prompt | ✅ Via prompt | ⚠️ Partial |
| Persistent memory | ✅ Via files | ✅ Via Projects | ⚠️ Session only | ✅ Via files |
| Protocol fidelity | 100% | ~85% | ~75% | ~65% |

**Recommendation:** Use Cursor for maximum protocol enforcement. Use Claude for heavy research phases. Use Copilot for inline atomic implementations within an already-planned task.
