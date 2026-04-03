# 🏆 AI-Human Collaborative SOP — V2.0 Modular MDC Edition

> [!IMPORTANT]
> **Core Principle**: Let AI handle 90% of the labor (design, implementation, self-check, atomic commit), while the human handles 10% of the strategic decision-making (architectural alignment, plan approval, diff audit).

---

## 🗺️ The Engineering Pipeline

```mermaid
flowchart TD
    A[👤 Human: /r requirement] --> B[🤖 AI: Research Phase\nGate 200 active\nSource code READ-ONLY]
    B --> C{research_summary.md\nproduced?}
    C --> D[⏸️ STOP: Show to Human]
    D --> E{Human replies '1'?}
    E -- No / Revise --> B
    E -- Yes --> F[🤖 AI: Planning Phase\nGate 300 active]
    F --> G[implementation_plan.md\ncontracts + atomic tasks]
    G --> H[⏸️ STOP: Show to Human]
    H --> I{Human replies '1'?}
    I -- No / Revise --> F
    I -- Yes --> J[🤖 AI: Execute Step N.N\nGate 400 active]
    J --> K[Show Diff + Run tsc/lint]
    K --> L[⏸️ STOP: Await Audit]
    L --> M{Human replies '1'?}
    M -- Fail twice --> N[git reset --hard\nReturn to /r]
    M -- Yes --> O[git commit atomic]
    O --> P{More steps?}
    P -- Yes --> J
    P -- No --> Q[/v Verification\nGate 500 active]
    Q --> R[✅ All checks pass?]
    R -- No --> J
    R -- Yes --> S[/c Cleanup\nMerge / Deploy]
```

---

## 🏛️ 1. Engineering Execution Pyramid

1. **Horizontal: Module Decoupling** — Phase 0 Contract Lock (write Stub interfaces first, verify via TSC, then implement logic).
2. **Vertical: Layer-by-Layer Progression** — Schema → Logic → Store → UI layers.
3. **Atomic Units** — Dual-Track Model:
   - **Logic Change**: ≤ **20 lines**; **OR** one complete semantic unit (rationale must be stated before the diff).
   - **UI/Markup Change**: ≤ **100 lines** **AND** ≤ 1 functional block (e.g., one Modal, one Form — both conditions required).
   - **Pure Refactor** (no behavior change): Logic relaxed to ≤ **50 lines**; requires `refactor:` commit prefix.
   - **Type definitions / Interfaces / Config files**: Exempt from line count limits, but must be committed separately — never mixed with implementation.
   - **Two-Strike Rule**: Fail verification twice → `git reset --hard` → Return to `/r` phase with root cause analysis.

---

## 🧱 2. Document-First & MDC Iron Lock

**Core Philosophy**: Chat is only for triggers and confirmation. **Documents and Module Rules are the real collaboration interface.**

| Gate | Command | MDC File | AI Permissions |
|------|---------|----------|----------------|
| Gate 0 | `/r` | `200-research-gate.mdc` | Read-Only. Output: `research_summary.md` |
| Gate 1 | `/p` | `300-planning-gate.mdc` | Plan-Only. Output: `implementation_plan.md` |
| Gate 2 | `/e` | `400-execution-iron-lock.mdc` | Atomic code changes + mandatory diffs |
| Gate 3 | `/v` | `500-verification-gate.mdc` | Run checks. Output: verification report |

**Interaction Lock (Gating Lock):**
1. Human reviews document and replies `1`.
2. AI **cold-reloads** the file via `view_file` to sync any offline edits.
3. Before receiving `1`, the next gate's rules are physically inactive.

---

## 🔱 3. Git Protocol & Safeguards

1. **Atomic Commitment**: One atomic unit → one semantic commit (Conventional Commits: `feat/fix/refactor/docs/chore`).
2. **Change Isolation**: Never mix logic changes with UI changes in the same commit.
3. **Conflict Circuit Breaker**: If a Git conflict is detected, AI must STOP immediately and hand over to human.

**Commit message format:**
```
feat(scope): [what was added]
fix(scope): [what was fixed]
refactor(scope): [what was restructured]
docs(scope): [what documentation changed]
chore(scope): [maintenance, cleanup, config]
```

---

## 🧹 4. Cleanup Protocol

- **Timing**: After task branch verification, BEFORE merging to main/dev.
- **Command**: `/c`
- **Action**: `rm research_summary.md implementation_plan.md task.md walkthrough.md`
- **Final commit**: `chore(cleanup): remove task artifacts`

---

## 🌐 5. Communication Protocol

- **Language Sync**: Match the user's language in all interactions. Default to the language of the first message.
- **Zero Placeholders**: No `TODO`, `FIXME`, `...`, or pseudocode in any committed file. Ever.

---

> **[Command Reference]**: `/r` Research | `/p` Plan | `/e [step]` Execute | `/f` Flash | `/d` Debug | `/v` Verify | `/c` Clean | `/gc` Commit | `/gp` Push | `/g` Sync
