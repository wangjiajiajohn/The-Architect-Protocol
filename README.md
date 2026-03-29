![The Architect's Protocol](./public/hero-banner.png)

# 🏆 The Architect's Protocol
## 人机协作工程宣言 — 2026 大师版 (The Engineering Manifesto)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)
[![Documentation](https://img.shields.io/badge/Docs-Official-blue.svg)](https://wangjiajiajohn.github.io/The-Architect-Protocol/)

> [!IMPORTANT]
> **核心哲学**：AI 并不缺乏智慧，它缺乏的是纪律。
> 本协议并非简单的提示词集合，而是一套**硬性工程纪律**。它通过物理约束，将 AI 强制纳入资深架构师（Staff Engineer+）的研发逻辑中，旨在解决 AI 时代下“高生产力”与“低工程质量”的尖锐冲突。

---

## 🏛️ 一、 工程学背景：为什么需要这套协议？

在 AI 参与的软件工程中，传统的研发模式正面临前所未有的**“架构坍塌”**风险：

1.  **审计坍塌**：AI 生成代码的低成本，导致人类 Reviewer 进入“扫读模式”，大量隐藏 Bug 绕过人类直觉。
2.  **契约蒸发**：AI 倾向于自顶向下的“全连通”开发，导致底层数据结构与顶层 UI 逻辑深度耦合，接口边界在迭代中迅速蒸发。
3.  **认知漂移**：随对话增长，Context Window 填充了大量废料，导致 AI 逻辑信噪比下降，产生逻辑漂移。

**本协议通过以下四项核心工程实践，建立弹性且严谨的治理体系：**

---

## 💎 二、 四大核心实践 (The Core Practices)

### 1. 原子化审计 (Atomic Auditing)
*   **工程逻辑**：单次逻辑变更严格限制在 **20 行** 以内。
*   **解决问题**：解决**认知过载**。
*   **工程价值**：将“大规模集成风险”离散化。20 行是人类能瞬时理解、精准校验的认知极限。它确保每一行 AI 代码都经过了真实的“人类眼眸校验”，而非盲目的 Apply。

### 2. Phase 0 契约锁 (Contract-First)
*   **工程逻辑**：严禁在定义 Interface / API Stub 之前编写任何实现代码。
*   **解决问题**：解决**语义偏差与分层破坏**。
*   **工程价值**：物理隔离“做什么”和“怎么做”。契约锁是大型模块化工程的“交通准则”，它确保了无论 AI 后续如何重构实现，模块的边界始终保持刚性。

### 3. 三层执行金字塔 (Layered Governance)
*   **工程逻辑**：强制遵循 **Schema -> Logic -> Store -> UI** 的单向依赖。
*   **解决问题**：解决**逻辑堆叠 (Spaghetti Code)**。
*   **工程价值**：实现业务逻辑的“宿主无关性”。通过工程纪律禁止 AI 在 `page.tsx` 中编写核心算法。这意味着你的业务逻辑是纯粹的、可单独测试的，且重构成本极低。

### 4. 上下文垃圾回收 (Context Garbage Collection)
*   **工程逻辑**：通过指令 `/c` 物理销毁研发过程中的中间文档（Research/Plan）。
*   **解决问题**：解决 **Token 膨胀与逻辑幻觉**。
*   **工程价值**：维护“认知信噪比”。AI 的稳定性与 Context 的清洁度成正比。通过定期重置上下文，我们可以用更少的 Token、更低的成本，获得更清晰、更准确的 AI 指令推演。

---

## ⌨️ 三、 指令集：人机协作的统一接口

本协议定义了五项标准动作，形成完整的软件开发生命周期 (SDLC)：

| 指令 | 动作 | 工程使命 |
| :--- | :--- | :--- |
| `/r` | **Research** | **调研**：消除物理依赖猜想，确定演进边界。 |
| `/p` | **Plan** | **博弈**：在产生代码前，先行对齐实现成本与物理路径。 |
| `/e` | **Execute** | **原子交付**：高频、小步、受控的物理修改。 |
| `/d` | **Debug** | **证据还原**：禁止猜测，通过日志与复现建立诊断依据。 |
| `/c` | **Clean** | **效能重置**：销毁冗余信息，维持 AI 的逻辑一致性。 |

---

## 📂 四、 仓库结构与集成

```text
.
├── 📄 SOP.md             # 详细操作指南 (Operational Manual)
├── 📄 .cursorrules       # IDE 侧的刚性约束 (Physical Hard-Locks)
├── 📂 templates/         # 标准化文档模板
├── 📂 zh / 📂 en          # 多语言支持
└── 📄 PROMPTS.md         # 全平台初始化提示词
```

---

"AI 不会毁掉软件工程，缺乏纪律的 AI 使用才会。The Architect's Protocol 正是回归工程本质的纪律之笔。"
