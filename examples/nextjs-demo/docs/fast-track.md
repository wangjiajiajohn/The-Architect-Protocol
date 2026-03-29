# ⏱️ 5-Minute Fast Track Guide

Welcome to **The Architect's Protocol**. This guide will help you complete your first "Atomic Dev Cycle" in under 5 minutes.

---

## 1. Environment Setup
1.  Place `AI_HUMAN_SOP_MASTER.md` in your project root.
2.  Copy `.cursorrules.example` into a new file named `.cursorrules`.
3.  Open your AI Agent (Cursor, Windsurf, or specialized agent).

---

## 2. Step-by-Step Cycle

### 🟢 Step 1: Research (`/r`)
Ask the AI to research a feature. 
> **User**: `/r 为我的主页添加一个暗黑模式切换按钮`

**AI Action**: It will generate `research_summary.md` with:
- Context detection.
- Design patterns (e.g., Strategy Pattern for themes).
- **Wait for your "1"**.

### 🟡 Step 2: Planning (`/p`)
Once research is approved, trigger the plan.
> **User**: `/p`

**AI Action**: It will generate `implementation_plan.md` with numbered checkpoints (1.1, 1.2...).
**Wait for your "1"**.

### 🔴 Step 3: Execution (`/e`)
The AI starts the **Atomic Audit Loop**.
> **User**: `/e`

**AI Action**: 
1.  Modify ~20 lines of code.
2.  Display a DIFF.
3.  **Wait for your "1"**. 
4.  **Confirming with "1"** triggers the Git Commit.

---

## 3. Critical Gating Commands

- **`/d [Error message]`**: Debug with evidence. AI will inject logs and write a repro test first.
- **`/v`**: Run the verification tier (Linter -> Tests).
- **`/c`**: Clean and destroy all boilerplate docs before merging.

---

## 💡 Pro Tip
When your AI deviates from the protocol (e.g., writes too much code at once), simply reply:
> `遵守 SOP: 请原子化执行，每次只改动 20 行逻辑。`

"A good architect never lets the builder decide the foundation."
