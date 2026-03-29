![The Architect's Protocol](./public/hero-banner.png)

# 🏆 The Architect's Protocol (SOP)
## AI-Human Collaborative Engineering — 2026 Master Edition

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)
[![Documentation](https://img.shields.io/badge/Docs-Official-blue.svg)](https://wangjiajiajohn.github.io/The-Architect-Protocol/)
[![简体中文](https://img.shields.io/badge/Language-简体中文-red.svg)](./zh/SOP.md)

> [!IMPORTANT]
> **Engineering Philosophy**: Shift from "AI Copilot" to "AI Agent Management". 
> This protocol forces AI agents into a rigorous, auditable, and atomic software engineering lifecycle. 
> Developed for L6+ Staff Engineer mindset to achieve 10x productivity without sacrificing quality.
> **[Chinese Version Available Here](./zh/SOP.md)** | **[Official Documentation Site](https://wangjiajiajohn.github.io/The-Architect-Protocol/)**

---

## 💎 1. Value Proposition

**Why this protocol?** When collaborating with AI, developers often face "logic stacking," "hallucinations," and "refactoring fear." This protocol solves these pain points through institutionalized constraints:

- **🛡️ Eliminate Black-Box Changes**: Force atomic commits, ensuring every line of code change is within human auditability.
- **💎 Maintain High Engineering Standards**: Hard-lock SOLID/DRY principles, prohibiting AI from stacking business logic in UI components.
- **📈 Deterministic Delivery**: Through "Contract-First" development, fix interface boundaries before coding to eliminate 80% of integration bugs.
- **🧪 Evidence-Based Debugging**: Prohibit trial-and-error chat; force a "Log Injection -> Test Reproduction -> Logical Fix" cycle.

---

## 🏛️ 2. Engineering Logic: The Execution Pyramid

The core of this protocol is **deconstructing complex development tasks into three auditable dimensions**:

1.  **Horizontal: Module Decoupling (Module Level)**
    - **Logic**: Enforce **Phase 0 Contract Lock**. Define API Stubs or Interfaces before any implementation.
2.  **Vertical: Layered Progression (Layer Level)**
    - **Logic**: Strictly follow **Schema -> Logic -> Store -> UI** order.
3.  **Micro: Atomic Audit (Atomic Level)**
    - **Logic**: Limit single logic changes to **20 lines**. Prohibit physical Git commits without human approval ("1").

---

## ⌨️ 3. Command Set (Command Toolkit)

| Command | Action | Gate |
| :--- | :--- | :--- |
| `/r` | **Research** | **[Gate 1]**: Summary & Dependencies. |
| `/p` | **Plan** | **[Gate 2]**: Step-by-step implementation path. |
| `/e` | **Execute** | **[Audit Loop]**: Diffs -> Confirm "1" -> Commit. |
| `/f` | **Flash** | **[Fast Track]**: Small UI tweaks only. |
| `/d` | **Debug** | **[Gate 3]**: Evidence-based reproduction. |
| `/v` | **Verify** | **[Quality Gate]**: TSC/Linter/UI-Proof. |

---

## 📂 4. Repository Structure

```text
.
├── 📄 SOP.md             # Core Protocol (English - Default)
├── 📄 .cursorrules       # IDE Hard-Lock Configuration
├── 📂 zh/                # 简体中文版协议 (Chinese Version)
├── 📂 templates/         # Standardized Collaboration Templates
├── 📂 examples/          # Best Practices Demo (Next.js)
├── 📄 USAGE_EXAMPLE.md   # Practical Full-Loop Tutorial
└── 📄 PROMPTS.md         # Universal AI System Prompts
```

---

"AI doesn't lack intelligence; it lacks discipline. The Architect's Protocol provides that discipline."
