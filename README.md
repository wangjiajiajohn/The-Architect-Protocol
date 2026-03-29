![The Architect's Protocol](./public/hero-banner.png)

# 🏆 The Architect's Protocol (SOP)
## AI-Human 协作工程方案 — 2026 大师版

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)
[![Documentation](https://img.shields.io/badge/Docs-Official-blue.svg)](https://wangjiajiajohn.github.io/The-Architect-Protocol/)
[![English Version](https://img.shields.io/badge/Language-English-blue.svg)](./en/SOP.md)

> [!IMPORTANT]
> **工程哲学**：从“AI 助手”向“AI 经纪人管理”转型。
> 本协议强制 AI 进入严谨、可审计、原子化的软件工程生命周期。
> 为 L6+ Staff Engineer 研发效率量身打造，在 10x 生产力的同时确保架构不崩坏。
> **[English Version Available Here](./en/SOP.md)** | **[官方文档站](https://wangjiajiajohn.github.io/The-Architect-Protocol/)**

---

## 💎 1. 核心价值 (Value Proposition)

**为什么要用这套协议？** 在与 AI 协作时，开发者常面临“逻辑堆叠”、“幻觉失控”、“不敢重构”的问题。本协议通过制度化约束解决这些痛点：

- **🛡️ 消除黑盒变更**：强制原子化提交，确保每一行 AI 代码变更都在人类可审计范围内。
- **💎 维持高工程标准**：硬锁 SOLID/DRY 原则，禁止 AI 在 UI 组件中堆叠业务逻辑。
- **📈 确定性交付**：通过“契约优先”开发，先定接口边界再写逻辑，消除 80% 的集成 Bug。
- **🧪 证据驱动调试**：禁止盲目猜测，强制执行“日志埋点 -> 证据获取 -> 逻辑确认”的闭环。

---

## 🏛️ 2. 工程逻辑：执行金字塔

本协议的核心是将复杂的开发任务**拆解为三个可审计维度**：

1.  **横向：模块解耦 (Module Level)**
    - **逻辑**：强制 **Phase 0 契约锁**。在编写任何实现逻辑前，必须先定义接口 Stub 或 Interface。
2.  **纵向：分层递进 (Layer Level)**
    - **逻辑**：严格遵循 **Schema -> Logic -> Store -> UI** 的开发顺序。
3.  **微观：原子审计 (Atomic Level)**
    - **逻辑**：单次逻辑变更严格限制在 **20 行** 以内。未经人类确认（回复 1），禁止物理 Git Commit。

---

## ⌨️ 3. 指令集 (Command Toolkit)

| 指令 | 动作 | 协作关卡 |
| :--- | :--- | :--- |
| `/r` | **调研 (Research)** | **[Gate 1]**: 输出调研报告与依赖确认。 |
| `/p` | **计划 (Plan)** | **[Gate 2]**: 输出分步执行路径，锁定实现成本。 |
| `/e` | **执行 (Execute)** | **[审计环]**: 修改代码 -> 显示 Diff -> 人工确认 1 -> 自动 Commit。 |
| `/f` | **闪击 (Flash)** | **[快车道]**: 仅限微小 UI 调整，跳过文档直接应用。 |
| `/d` | **调试 (Debug)** | **[Gate 3]**: 强制证据收集与复现，禁止盲猜。 |
| `/v` | **验证 (Verify)** | **[质量关]**: 执行 TSC/Linter/UI-Proof 自动化检查。 |

---

## 📂 4. 仓库结构

```text
.
├── 📄 SOP.md             # 核心协议 (Source of Truth)
├── 📄 .cursorrules       # IDE 强制约束配置
├── 📂 en/                # English Version (英文版协议)
├── 📂 templates/         # 标准化协作模板
├── 📂 examples/          # 最佳实践演示 (Next.js)
├── 📄 USAGE_EXAMPLE.md   # 实战演示全闭环教程
└── 📄 PROMPTS.md         # 全平台通用 AI 提示词
```

---

"AI 并不缺乏智慧，它缺乏的是纪律。The Architect's Protocol 负责提供纪律。"
