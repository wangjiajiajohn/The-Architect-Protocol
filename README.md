![The Architect's Protocol](./public/hero-banner.png)

# 🏆 The Architect's Protocol (SOP)
## AI-Human 协作工程方案 — 2026 大师版

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)
[![Documentation](https://img.shields.io/badge/Docs-Official-blue.svg)](https://wangjiajiajohn.github.io/The-Architect-Protocol/)
[![English Version](https://img.shields.io/badge/Language-English-blue.svg)](./en/SOP.md)

> [!IMPORTANT]
> **工程哲学**：从“AI 助手”向“AI 经纪人管理”转型。
> 本协议旨在通过硬性的 **工程纪律**，将 AI 强制纳入资深架构师（Staff Engineer+）的研发生命周期。在获得 10x 生产力的同时，确保工程不因 AI 的随机性而腐烂。

---

## 💎 1. 深度共情：我们解决哪些致命痛点？

### 💔 AI 研发的“病症” (The AI Smells)
-   **审计疲劳 (Audit Fatigue)**：AI 瞬间修改 200 行代码分布在 10 个文件，你一眼扫过去感觉“大差不差”点下 Apply，结果 2 天后生产环境崩溃。
-   **逻辑堆叠 (Logic Stacking)**：AI 为了快，习惯性将数据库逻辑、业务算法、权限校验全堆在 UI 层（如 `page.tsx`），项目在三个月后沦为不可维护的屎山。
-   **幻觉占位 (Placeholder Hallucination)**：重构时 AI 留下 `// TODO: Implement this` 后消失，让你在运行报错中怀疑人生。

### 🏗️ 传统工程的“腐烂” (Architectural Decay)
-   **架构漂移 (Architectural Drift)**：没有强制约束，由于开发者的松懈或不同 AI 的随机风格，代码分层名存实亡，逻辑四处漏水。
-   **重构之死 (The Death of Refactoring)**：因为 UI 与逻辑深度耦合，你想改一个小功能却发现必须重载整个模块，最终由于“不敢动”导致架构僵死。
-   **交付不可预测**：没有标准化 SOP，同样的任务，十次 AI 产出的结构、风格、鲁棒性各不相同。

---

## 🏛️ 2. 药方：执行金字塔与硬锁

本协议的核心是将复杂的开发任务**拆解为三个可审计维度**，并强制引入 **“契约锁”**：

1.  **横向：模块解耦 (Module Level)**
    - **门禁**：强制执行 **Phase 0 契约锁**。在定下 API Stub 或 Interface 之前，严禁编写任何业务逻辑。
2.  **纵向：分层治理 (Layer Level)**
    - **逻辑**：严格强制 **Schema -> Logic -> Store -> UI** 的单向依赖顺序，UI 只能是 Logic 的“皮肤”。
3.  **微观：原子审计 (Atomic Level)**
    - **纪律**：单次逻辑变更严禁超过 **20 行**。AI 只是执行者，人类作为 **Audit Lead** 持有一票否决权（回复 "1" 才准物理 Commit）。

---

## ⌨️ 3. 指令集：像操控工业生产线一样操控 AI

| 指令 | 动作 | 核心价值 |
| :--- | :--- | :--- |
| `/r` | **调研 (Research)** | **确定性**：先行确认物理依赖与边界，拒绝盲目试错。 |
| `/p` | **计划 (Plan)** | **透明性**：在所有代价产生前，先行博弈实现路径。 |
| `/e` | **执行 (Execute)** | **确定性**：小步快跑，原子化提交，让审计成本降为零。 |
| `/d` | **调试 (Debug)** | **证据驱动**：禁止猜测，强制执行“日志埋点 -> 复现 -> 物理修复”。 |
| `/v` | **验证 (Verify)** | **原子闭环**：TSC / Linter / UI-Proof 三位一体。 |

---

"AI 并不缺乏智慧，其瓶颈在于纪律。本协议即是这种纪律的物理实现。"
