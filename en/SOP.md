# 🏆 The Architect's Protocol (SOP)
## AI-Human Collaborative Engineering — 2026 Master Edition

> [!IMPORTANT]
> **Engineering Philosophy**: Shift from "AI Copilot" to "AI Agent Management". 
> This protocol forces AI agents into a rigorous, auditable, and atomic software engineering lifecycle. 
> Developed for L6+ Staff Engineer mindset to achieve 10x productivity without sacrificing engineering integrity.

---

## 💎 1. Empathy: What Problems Do We Solve?

### 💔 AI Smells (The Chaos)
-   **Audit Fatigue**: AI modifies 200 lines across 10 files. You scan it, feel "it's okay", hit Apply, and 2 hours later, production crashes.
-   **Logic Stacking**: AI lazily puts DB logic, auth, and complex algorithms directly into the UI layer (like `page.tsx`). In 3 months, your project becomes an unmaintainable "spaghetti pile".
-   **Placeholder Hallucination**: During refactoring, AI leaves `// TODO: Implement this` and disappears, leaving you debugging ghost errors.

### 🏗️ Engineering Decay (Lack of Standards)
-   **Architectural Drift**: Without hard-locks, every developer (or AI) follows a different style. Modularity dissolves and logic leaks everywhere.
-   **The Death of Refactoring**: Since UI is tightly coupled with logic, trying to fix a feature breaks the whole module. You end up with "fear of change".
-   **Unpredictable Delivery**: Without a standardized SOP, the same task produces different structural qualities every time.

---

## 🏛️ 2. The Solution: Execution Pyramid & Hard-Locks

The core is **deconstructing complex development into three auditable dimensions**:

1.  **Horizontal: Module Decoupling (Module Level)**
    - **Policy**: Enforce **Phase 0 Contract Lock**. Prohibit coding any logic before finalizing API Stubs or Interfaces.
2.  **Vertical: Layered Governance (Layer Level)**
    - **Policy**: Strictly force **Schema -> Logic -> Store -> UI** dependency order. UI is just the "skin" of the Logic.
3.  **Micro: Atomic Audit (Atomic Level)**
    - **Policy**: Limit each logic change to **20 lines**. Prohibit physical Git commits without explicit human approval ("1").

---

## ⌨️ 3. Command Set: Controlling the Production Line

| Command | Action | Key Value |
| :--- | :--- | :--- |
| `/r` | **Research** | **Determinism**: Identify dependencies & boundaries FIRST. |
| `/p` | **Plan** | **Transparency**: Negotiate the implementation path BEFORE execution. |
| `/e` | **Execute** | **Confidence**: Small, atomic steps that make auditing effortless. |
| `/d` | **Debug** | **Evidence-Driven**: Log Injection -> Reproduce -> Logical Fix. |
| `/v` | **Verify** | **Closing the Loop**: TSC / Linter / UI-Proof automation. |

---

"AI doesn't lack intelligence; it lacks discipline. This protocol is the physical implementation of that discipline."
