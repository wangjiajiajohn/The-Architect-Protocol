# 🏆 The Architect's Protocol (SOP)
## AI-Human Collaborative Engineering — 2026 Master Edition

> [!IMPORTANT]
> **Engineering Philosophy**: Shift from "AI Copilot" to "AI Agent Management". 
> This protocol forces AI agents into a rigorous, auditable, and atomic software engineering lifecycle. 
> Developed for L6+ Staff Engineer mindset to achieve 10x productivity without sacrificing quality.

---

## 🏛️ 1. Execution Pyramid (The Three Layers)

This protocol解构 (deconstructs) complex development tasks into three auditable dimensions:

### 1.1 Horizontal: Module Decoupling (Module Level)
- **Logic**: Enforce **Phase 0 Contract Lock**. Before writing any implementation code, the AI must define API Stubs or Interface definitions.
- **Purpose**: Ensure clear boundaries and zero semantic drift during multi-module collaboration.

### 1.2 Vertical: Layered Progression (Layer Level)
- **Logic**: Strictly follow the **Schema -> Logic -> Store -> UI** development order.
- **Purpose**: Prevent business logic from being stacked directly in UI components, maintaining long-term maintainability.

### 1.3 Micro: Atomic Audit (Atomic Level)
- **Logic**: Single logic changes are strictly limited to **20 lines**.
- **Purpose**: Minimize the cost of Diffs auditing. Without human confirmation (replying "1"), AI is prohibited from performing physical Git commits.

---

## ⌨️ 2. Command Set & Collaboration Loop (Command Toolkit)

| Command | Action | Collaboration Gate (The Gates) |
| :--- | :--- | :--- |
| `/r` | **Research** | **[Gate 1]**: Output research summary, identify dependencies, wait for human confirmation. |
| `/p` | **Plan** | **[Gate 2]**: Output step-by-step plan, lock implementation path, wait for human confirmation. |
| `/e` | **Execute** | **[Atomic Audit Loop]**: Modify code -> Show Diffs -> Human confirms "1" -> Auto Commit. |
| `/f` | **Flash** | **[Fast Track]**: Small UI tweaks only, skip documentation and apply directly. |
| `/d` | **Debug** | **[Gate 3]**: Force evidence gathering and test reproduction, prohibit guessing. |
| `/v` | **Verify** | **[Quality Gate]**: Run TSC/Linter/UI-Proof automation. |
| `/c` | **Clean** | **[Final Cleanup]**: Destroy process Markdown docs, keep repo clean. |

---

## 🛡️ 3. Red Lines (The Hard-Locks)

1.  **Anti-Hallucination**: Prohibit the use of `TODO`, `...`, or placeholders. All code must be production-ready.
2.  **Audit-First**: Any Shell command or Git operation requires explicit human permission (replying "1").
3.  **No Logic in UI**: UI components must only be responsible for rendering and state-mapping; all algorithms must be abstracted into Logic layers.

---
"AI doesn't lack intelligence; it lacks discipline. The Architect's Protocol provides that discipline."
