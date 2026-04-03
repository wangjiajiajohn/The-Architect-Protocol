# 🏆 AI-Human Collaborative SOP (2026 Master Edition)
# Copy this file to your project root as .cursorrules

Must strictly follow protocols in `./AI_HUMAN_SOP_MASTER.md`.

## 🌐 1. 语言与沟通 (Language & Communication) - [HARD-LOCK]
- **遵从用户语言**：AI 与人类的所有互动（包含 /r 研究、/p 计划、/d 调试、/v 验证等）**必须遵循用户及其在初始请求中使用的语言**。
- **防止偏差**：在处理跨语言代码和架构设计时，确保翻译和术语对齐，保证零语义偏差。

## 🏛️ 2. 文档先行协议 (Document-First Protocol) - [HARD-LOCK]
- **实体化协作**：拒绝在 Chat 窗口进行长篇大论。AI 必须产出并维护 `research_summary.md` 和 `implementation_plan.md` 作为唯一可审计事实。
- **重新加载机制**：在收到 "/r", "/p", "/e" 指令或人类确认 "1" 之前，AI **必须**主动 `view_file` 检查人类是否在文档中留下了标记或修改。
- **状态机硬锁 (Strict Gating Lock)**：严禁“推测性完成”。即使人类在 Chat 窗口提供了具体实现参数（如颜色、接口定义、甚至完整代码），AI 也**严禁**在未获准 "1" 的情况下从 Research 切换到 Plan。
- **静默更新模式**：在文档协作周期内，任何聊天指令只能导致文档的“更新（Update）”，而不能触发“步进（Step）”。AI 必须停留在当前阶段并提示用户确认。
- **存证与清理**：功能完成后，必须运行 `/v` 存证并 `/c` 清理过程文档，保持工程库纯净。
- **三层执行金字塔**：
  1. **横向：模块解耦 (Module Level)**：强制执行 **Phase 0 契约锁**（先写 Stub 接口，通过 TSC 后再编码）。
  2. **纵向：分层迭进 (Layer Level)**：遵循 **Schema -> Logic -> Store -> UI** 的开发顺序。
  3. **微型原子单元 (Atomic)**：
     - 一个原子任务仅限单一逻辑变更或单个 UI 功能块。
     - **行数控制**：逻辑变更 (JS/TS) 保持 20 行以内；模板单元 (HTML/Vue) 以单个功能块为界。
     - **禁止混杂**：严禁在同一 Commit 中同时修改 UI 样式与业务核心逻辑。

## 🏗️ 3. 工程卓越性 (Engineering Excellence)
- **SOLID/DRY**：强制单一职责（SRP）与开闭原则（OCP）。严禁逻辑堆叠。
- **逻辑抽离**：UI 仅负责渲染，业务算法、数据变换必须抽离至 `Hooks` 或 `Services`。
- **模式发现权**：在 `/r` 阶段，AI **必须**主动分析并建议设计模式（策略、工厂、单例等）。

## ⌨️ 4. 全量指令集与审计闸门 (Audit-First Loop)
- `/r` (Research) ：产出编号化的 `research_summary.md`。识别依赖与模式建议。
- `/p` (Plan) ：产出编号化的 `implementation_plan.md`。等待人类回复 "1" 后执行。
- `/e` (Execute) ：原子审计循环 [不可跳过]：
  1. 改动代码。
  2. **主动展示 Diffs (Review)**：让用户确认改动的物理真实性。
  3. 执行自检 (TSC/Tests) -> 展示结果。
  4. **等待人类回复 "1" 后**，代劳执行物理 Git Commit。
- `/f` (Flash) ：极速通道。仅限 UI 样式/文案小微改动，跳过文档直接改。
- `/d` (Debug) ：证据驱动。强制注入结构化 Log + 编写测试用例复现 Bug。
- `/v` (Verify) | `/c` (Clean) | `/cp` (Checkpoint)
- `/gc` (Git Commit) ：原子提交。执行 add 并提交更改。
- `/gp` (Git Push) ：推送到云。仅执行推送。
- `/g` (Git Sync) ：全量同步。执行 add, commit 和 push。

## 🔱 5. 专业 Git 协议与防御性机制
- **原子提交**：每一个原子项审计通过后，AI 进行 Angular 规范语义 Commit。
- **变更隔离**：严禁在一个提交中混入不同维度的子项（如 Logic vs UI）。
- **冲突熔断**：遇 Git 冲突立即停止。禁止擅自合并。
- **失败熔断器 (Two-Strike Rule)**：原子任务连续 2 次修复失败 -> `git reset --hard` 归位 -> 返回 `/r` 阶段。

## 👥 6. 审计与零容忍策略
- **编号反馈循环**：AI 必须在获得人类编号反馈确认或回复 "1" 后才可继续。
- **拒绝平庸**：严禁给出 Placeholder 或 TODO。所有代码必须是完整版且满足 SEO/Aesthetics。
- **知识沉淀**：完成 Major Feature 后，必须主动检查并提议更新 `README.md`、`ARCH.md` 及关键代码注释。
