# 🏛️ Architecture Decision Records (ADR)

This document records the core design philosophy and architectural decisions for "The Architect's Protocol." It reflects the "Engineering Status Quo" at different stages of the project.

---

## [ADR-001]: AI-Human Collaborative SOP (2026 Master Edition)

### Status
**Accepted** (2026-04-03)

### Context
Without protocol constraints, AI tends to "blindly patch" and enter "repetitive cycles of error." For long-chain business refactoring (e.g., incremental vs. total quantity calculation), AI easily enters an invalid loop after context loss.

### Decision
Introduce the **"Audit-First"** SOP model:
1. **Mandatory Atomic Commits**: Break large requirements into atomic units of 10-20 lines of logic or single UI functional blocks.
2. **Three-Phase Gating**:
   - `/r` (Research) Lock: Sync research conclusions.
   - `/p` (Plan) Lock: Sync implementation plans and logic formulas.
   - `/e` (Execution) Lock: Only physical commit after human Diff audit.
3. **Automated Knowledge Accumulation**: AI must maintain `ARCH.md` and key comments while delivering code.

### Consequences
- **Pros**: Significantly reduced AI hallucination risks; ensures stable execution for complex requirements.
- **Cons**: Increased initial communication frequency (needs frequent "1" replies).

---

## [ADR-002]: Narrative-Driven Home Page Design

### Status
**Accepted** (2026-04-03)

### Context
The project aims to lead developers from "Coder" to "Architect." A simple list of features on the home page cannot convey the deep professional crisis and opportunity.

### Decision
Adopt a **Narrative-Driven** modern technical doc layout:
1. **Crisis** -> **Elevation** -> **Constraint** -> **Defense** four-step logic.
2. **Bento Grid Layout**: Presents high-density industrial and premium feel.
3. **CSS Terminal Simulation**: Visualizes the "Audit-First" execution logic.

### Consequences
- Higher cognitive entry barrier, but significantly improved professional authority.

---

## [ADR-003]: Mandatory Audit and Git Quick-Link Protocol

### Status
**Accepted** (2026-04-03)

### Context
In the era of shrinking workforces and exploding individual workloads, human engineers need a "low-load" but "high-control" interaction. Traditional Git CLI and unstructured AI chat scatter mental bandwidth.

### Decision
1. **Mandatory Diff Display Audit**: In `/e` phase, AI must clearly display `git diff`. No physical commit without human review.
2. **"1"-Based Asymmetric Confirmation**: Human only needs to input a single `1` to pass pre-reviewed logic or Diffs.
3. **Instruction-Level Quick-Link**: Map complex Git sequences to `/gc` (Commit), `/gp` (Push), and `/g` (Sync).

### Consequences
- **Pros**: Greatly reduced typing and mental burden; ensures the "Chief Engineer" has physical control over every line of code.
- **Cons**: High requirement for AI command execution rigor.

---

## [ADR-004]: "Document-First" Interaction Model

### Status
**Accepted** (2026-04-03)

### Context
The IDE's Chat window has low information density, is prone to context loss, and lacks persistent records. Long discussions increase AI's cognitive load and hallucination probability.

### Decision
1. **De-Chatting Collaboration**: AI must produce independent `.md` documents for `/r` (Research) and `/p` (Plan).
2. **Asynchronous Markup**: Humans specify detailed instructions through direct document edits or comments, not chat commands.
3. **Mandatory Cold Reload**: AI MUST `view_file` these documents upon receiving the GATE confirmation (`1`) to sync offline edits.
4. **Strict Gating Lock [NEW]**: Forbids inferred completion. Even if given code in chat, AI MUST NOT proceed to the next phase without a formal "1".

### Consequences
- **Pros**: Clean chat history, 100% precise context with persistent physical evidence; eliminated phase-drift.
- **Cons**: Increased explicit human confirmation cost.

---

## [ADR-005]: Protocol V2.0 — Modular MDC Governance

### Status
**Accepted** (2026-04-03)

### Context
A monolithic `.cursorrules` file becomes overloaded as project complexity grows, leading to "Phase-Drift" and "Rule Bypass." To achieve true "Industrial Control," the protocol must be modularized.

### Decision
1. **Modular Dismantling**: Deprecate monolithic `.cursorrules` in favor of multiple `.mdc` files in `.cursor/rules/`.
2. **Context Isolation**:
    - `100-core`: Global Identity and Language.
    - `200-research`: Gated to `research_summary.md`, Locks write permissions.
    - `300-planning`: Gated to `implementation_plan.md`, Mandates contract audit.
    - `400-execution`: Gated to source code, Mandates Atomic Audit loops.
3. **Physical Permission Masking**: Use `globs` to implement "Write-Protection" or "Specific Behavior Injection" at specific phases.

### Consequences
- **Pros**: AI is more focused, 70% reduction in context load, zero premature drift.
- **Cons**: Increased protocol maintenance cost.
---
