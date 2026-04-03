# 🏆 AI-Human Collaborative SOP: High-Efficiency Protocol (2026 Master Edition)

> [!IMPORTANT]
> **Core Principle**: Let AI handle 90% of the labor (design, implementation, self-check, atomic commit), while the human handles 10% of the strategic decision-making (architectural alignment, plan approval, Diff audit).

---

## 🏛️ 1. Engineering Execution Pyramid

1.  **Horizontal: Module Decoupling**: Phase 0 Contract Lock (write Stub interfaces first, verify via TSC, then implement logic).
2.  **Vertical: Layer-by-Layer Progression**: Schema -> Logic -> Store -> UI layers.
3. - **Atomic Units**:
    - **Logic Change**: Atomic logic units must be <= **20 lines**. This is the limit for instant human verification.
    - **UI/Markup Change**: Atomic UI units (HTML/CSS) are allowed up to **100 lines** or one functional block (e.g., a Modal/Table).
    - **Config Change**: Config files (JSON/YAML) are allowed up to **100 lines**.
    - **Two-Strike Rule**: If an atomic task fails twice -> `git reset --hard` -> Return to `/r` phase.

---

## 🧱 2. Document-First & MDC Iron Lock

**Core Philosophy**: Chat is only for triggers and confirmation; **Documents and Module Rules are the real thinking and collaboration interface.**

*   **`/r` (Research)**: **[Gate 0]**. Triggers `.cursor/rules/200-research-gate.mdc`. AI enters **Read-Only Mode** for code, only allowing `research_summary.md` output.
*   **`/p` (Plan)**: **[Gate 1]**. Triggers `.cursor/rules/300-planning-gate.mdc`. AI must produce interface contracts, type definitions, and atomic task lists.
*   **Interaction Lock (Gating Lock)**:
    1. Human reviews doc and replies "1".
    2. AI must **Cold Reload** the file via `view_file` to sync offline edits.
    3. Before receiving "1", Execution Rules (`400-execution`) are physically deactivated.
*   **`/e` (Execute)**: **[Atomic Step]**. Triggers `.cursor/rules/400-execution-iron-lock.mdc`. 
*   **Action Loop**:
    1. Update Source Code.
    2. **Show Diffs (Review)**.
    3. Show Self-Check Results (TSC/Test) -> **Reply "1" to physical Git Commit**.

---

## 🔱 3. Git Protocol & Safeguards

1.  **Atomic Commitment**: For every [Atomic Unit] passed by human audit, AI automatically executes a semantic commit (Angular spec).
2.  **Change Isolation**: Do not mix logic changes with UI changes in the same commit.
3.  **Conflict Bailout**: If a Git conflict is detected, AI must STOP and hand over to humans.

---

## 🧹 4. Cleanup Protocol

*   **Timing**: After requirement branch verification and BEFORE merging to dev.
*   **Action**: `rm research_summary.md implementation_plan.md task.md walkthrough.md`.

---

## 🌐 5. Communication Protocol

*   **Language Synchronization**: All interactions (design, audit feedback, error analysis) must match the user's current context (e.g., English for English users).

---

> [🔑 Key Commands]: /r Research | /p Plan | /e Execute | /f Flash | /d Debug | /c Clean | /gc Commit | /gp Push | /g Sync
