![The Architect's Protocol](./assets/hero-banner.png)

# 🏆 The Architect's Protocol (SOP)
## AI-Human Collaborative Engineering — 2026 Master Edition

[![Documentation](https://img.shields.io/badge/Docs-Official-blue.svg)](https://wangjiajiajohn.github.io/The-Architect-Protocol/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)
[![AI Engineering](https://img.shields.io/badge/AI-Engineering-blueviolet.svg)](#)

> [!IMPORTANT]
> **Engineering Philosophy**: Shift from "AI Copilot" to "AI Agent Management". 
> This protocol forces AI agents into a rigorous, auditable, and atomic software engineering lifecycle. 
> Developed for L6+ Staff Engineer mindset to achieve 10x productivity without sacrificing quality.
> **[English Version Available Here](./en/SOP.md)** | **[Official Documentation Site](https://wangjiajiajohn.github.io/The-Architect-Protocol/)**

---

## 💡 1. 核心价值 (Value Proposition)

**为什么需要本协议？** 在与 AI 协作时，开发者常面临“逻辑堆叠”、“幻觉引入”和“重构恐惧”。本协议通过制度化约束解决以下核心痛点：

- **🛡️ 消除黑盒变更**：强制原子化提交（Atomic Commits），确保每一行代码变更都在人类的可审计范围内。
- **💎 保持工程高水准**：硬锁 SOLID/DRY 原则，禁止 AI 在 UI 组件中堆叠业务逻辑，强制逻辑抽离。
- **📈 确定性的交付**：通过“契约锁定（Contract-First）”，在开始编码前确定接口边界，消除 80% 的集成 Bug。
- **🧪 证据驱动调试**：禁止无意义的对话重试，强制“日志注入 -> 测试复现 -> 逻辑修复”的科学闭环。

---

## 🏛️ 2. 工程逻辑：三层执行金字塔 (The Pyramid of Logic)

本协议的核心逻辑在于**将复杂的开发任务解构为三个可审计的维度**：

1.  **横向：模块解耦 (Module Level)**
    - **逻辑**：强制执行 **Phase 0 契约锁**。在编写任何功能代码前，AI 必须先编写 API Stub 或 Interface 定义。
    - **目的**：确保多模块协作时，边界清晰，零语义漂移。

2.  **纵向：分层迭进 (Layer Level)**
    - **逻辑**：严格遵循 **Schema -> Logic -> Store -> UI** 的开发顺序。
    - **目的**：防止直接在 UI 层编写业务算法，维护代码的长期可维护性。

3.  **微型原子 (Atomic Level)**
    - **逻辑**：单次逻辑变更严格限制在 **20 行** 以内。
    - **目的**：最小化 Diffs 审计成本。如果不通过人类回复 "1" 确认，AI 禁止物理执行 Git Commit。

---

## ⌨️ 3. 指令集与协作闭环 (Command Toolkit)

| 指令 | 动作 | 协作节点 (The Gates) |
| :--- | :--- | :--- |
| `/r` | **Research** | **[闸门 1]**：产出研究摘要，识别依赖，待人类确认。 |
| `/p` | **Plan** | **[闸门 2]**：产出分步骤计划，锁定实现路径，待人类确认。 |
| `/e` | **Execute** | **[原子审计循环]**：改动代码 -> 展示 Diffs -> 人类确认 "1" -> 自动 Commit。 |
| `/f` | **Flash** | **[极速通道]**：仅限小微 UI 调整，跳过文档直接应用。 |
| `/d` | **Debug** | **[闸门 3]**：强制日志取证与测试复现，禁止凭空猜测。 |
| `/v` | **Verify** | **[质量门禁]**：执行 TSC/Linter/UI-Proof 自动化验证。 |
| `/c` | **Clean** | **[终局清理]**：销毁过程 Markdown 文档，保持仓库整洁。 |

---

## 📂 4. 目录说明 (Directory Structure)

```text
.
├── 📄 SOP.md             # 协议核心文档 (工程执行红线)
├── 📄 .cursorrules       # IDE 全量硬锁配置 (自动加载)
├── 📂 templates/         # 标准协作模板 (标准化产出)
├── 📂 examples/          # 最佳实践示例 (Next.js 洞察中心)
├── 📄 USAGE_EXAMPLE.md   # [重要] 实战演示全闭环教程
├── 📄 PROMPTS.md         # 全平台通用系统提示词
└── 📜 LICENSE            # MIT 许可证
```

---

## 🚀 5. 快速开始 (Quick Start)

1.  **环境配置**：将本仓库内容部署至项目根目录。
2.  **查看实战案例**：阅读 **[实战演示全闭环教程 (USAGE_EXAMPLE.md)](./USAGE_EXAMPLE.md)**，这是掌握本 SOP 的捷径。
3.  **开始对话**：打开 IDE（如 Cursor），输入 `/r [功能描述]` 启动第一个任务。

---

> [🔑 核心口令]：/r 研究 | 编号审核 | /p 计划 | /e 执行 | /f 闪击 | /d [报错现象] | /c 清理

"AI doesn't lack intelligence; it lacks discipline. The Architect's Protocol provides that discipline."
