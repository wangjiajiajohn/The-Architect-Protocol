# 🏛️ Architecture Decision Records (ADR)

本文记录了《The Architect's Protocol》的核心架构决策与设计哲学。它反映了项目在不同阶段的“工程现状”。

---

## [ADR-001]：AI-Human 协同 SOP 协议 (2026 Master Edition)

### 状态 (Status)
**Accepted** (2026-04-03)

### 背景 (Context)
在没有协议约束的情况下，AI 倾向于“盲目打补丁”和“重复性改错”。对于长链路的业务重构（如总量与增量反算），AI 容易在上下文丢失后进入无效循环。

### 决策 (Decision)
引入 **“审计优先 (Audit-First)”** 的 SOP 模型：
1. **强制原子提交 (Atomic Commits)**：将一个大需求拆解为 10-20 行逻辑或单一 UI 功能块的原子项。
2. **三阶段门控 (Three Gating)**：
   - `/r` (Research) 锁：同步研究结论。
   - `/p` (Plan) 锁：同步执行方案与逻辑公式。
   - `/e` (Execution) 锁：人工 Diff 审计后方能物理提交。
3. **知识沉淀自动化**：规定 AI 必须在交付代码的同时，同步维护 `ARCH.md` 和关键注释。

### 后果 (Consequences)
- **正面**：极大降低了 AI 的逻辑幻觉风险；确保了复杂需求在长链路下的执行稳定性。
- **负面**：增加了初期的沟通频率（需要频繁回复 "1"）。

---

## [ADR-002]：首页叙事驱动设计 (Progressive Narrative)

### 状态 (Status)
**Accepted** (2026-04-03)

### 背景 (Context)
项目致力于引领开发者从 Coder 升维至 Architect。首页如果是简单的功能陈列，无法传递这种深层的职业危机感与机遇感。

### 决策 (Decision)
采用**叙事驱动**的现代化技术文档布局：
1. **危机 (Crisis)** -> **升维 (Elevation)** -> **约束 (Constraint)** -> **防线 (Defense)** 的四部曲逻辑。
2. **便当盒布局 (Bento Grid)**：呈现高密度的工业感与高级感。
3. **纯 CSS 仿真终端**：视觉化呈现“审计优先”的执行逻辑。

### 后果 (Consequences)
- 提高了读者的认知门槛（需要阅读较多文字），但显著提升了协议的专业地位与说服力。
---
