![The Architect's Protocol](../public/hero-banner.png)

# 🏆 The Architect's Protocol
## Survival Guide for Human-AI Collaboration: Stop Building "Code Sprawls" in the AI Era

> [!IMPORTANT]
> **The Core Philosophy**: This is not about teaching AI to code; it's about teaching you how to put a "Golden Hoop" on the AI.
> Through a set of **Iron Discipline**, we transform the AI from an "irresponsible, hyperactive implementer" into a "rigged engineering assembly officer."

---

## 🏗️ 1. Current State: On the Verge of "Engineering Collapse"

### Before: The Craftsmanship Era
We were like carpenters, writing code brick by brick. It was slow, but every line of logic was in our heads, and the architecture grew like a tree.

### Now: The High-Speed Rail Era
With AI, we have hired a "tireless, knowledgeable, but extremely impulsive" **intern engineering team**.
They can lay 10km of track in a second, but they:
- **Are Irresponsible**: Leaving `// TODO` behind and vanishing.
- **Over-Confident**: Stuffing 100 features into one file as long as it "runs."
- **Dig Holes without Filling**: Sacrificing your next three years of maintenance for today's quick delivery.

---

## 🛡️ 2. Our Solution: Establishing a "Collaborative Contract"

**The Architect's Protocol** forces both you and the AI to follow these four laws:

### 🧱 Law 1: Atomic Audit (Don't change too much at once!)
*   **Rule**: Logic <= **20 lines**; UI/Markup/Config <= **100 lines**.
*   **Logic**: 20 lines is the human brain's limit for instant logic understanding; 100 lines is the aesthetic limit for pure UI changes. Ensure you understand every byte.

### 🔌 Law 2: Contract Locking (Draw the blueprint before building!)
*   **Rule**: No implementation without clear **Interfaces/Types**.
*   **Logic**: Rules first, work second. This prevents messy entanglement of business logic and UI.

### 🏗️ Law 3: Three-Layer Pyramid (Keep skin and bone separate!)
*   **Rule**: Logic belongs to the Logic layer; presentation belongs to the UI layer.
*   **Logic**: Keep business logic "pure" so you can swap UI flavors without touching a single line of core logic.

### 🧹 Law 4: Context GC (Clean up to stay smart!)
*   **Rule**: Delete obsolete research and plans immediately after a task is finished via `/c`.
*   **Logic**: **"Clear the whiteboard."** AI memory (Context) is finite. Clutter makes it stupid. Regular cleaning keeps the AI in its smartest state.

---

## 🧱 3. Protocol V2.0: Modular MDC Architecture

To solve the "Phase-Drift" issue in long-chain development, the protocol has been upgraded to V2.0 Modular Architecture. We use Cursor's `.mdc` system to implement physical permission isolation:

- **[100-Core]**: Defines global Identity and Language protocols.
- **[200-Research Gate]**: Locked to `research_summary.md`. AI is in **Read-Only** mode for code during this phase.
- **[300-Planning Gate]**: Locked to `implementation_plan.md`. Mandates contract/schema auditing.
- **[400-Execution Iron Lock]**: Locked to source code. Forces "Atomic Audit Loops" and "Diff Checks."

---

"AI won't destroy software engineering; only **thoughtless** usage of AI will. This protocol is the pen with which you reclaim engineering control."
