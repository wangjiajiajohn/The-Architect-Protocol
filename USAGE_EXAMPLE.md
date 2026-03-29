# 实战演示：[实现登录接口限流 (Login Rate Limiter)]

本案例演示了如何通过 **The Architect's Protocol (SOP)** 进行标准的 AI-Human 协同开发。

### 🎭 场景角色 (Roles)
- **开发者 (User)**：提出需求，担任架构审计员（Auditor）。
- **AI (Agent)**：执行工程，严格遵循协议逻辑。

---

## 🚀 Step 1: 需求启动

**User**: `帮我在当前的 Next.js 登录 API 中实现一个限速功能，防止恶意爆破，每分钟最多 5 次请求。`

**AI**: `明白。根据 SOP，我将进入 /r (研究阶段) 分析现状并在 templates/ 下生成研究摘要。`

---

## 🔍 Step 2: /r 研究阶段 (Research Gate)

AI 自动生成 [research_summary.md](./templates/research_summary.md)：
- **依赖分析**：需要引入 `better-sqlite3` 存储请求计数。
- **现状**：`src/app/api/auth/login/route.ts` 缺乏限流中间件。
- **设计建议**：策略模式 (Strategy) - 允许未来切换到 Redis。
- **契约锁定**：先定义 `IRateLimiter` 接口存根。

> [!TIP]
> **AI 停止工作，等待用户。**
> **User**: `1` (或：`别用更好的 sqlite，先用内存 Map 存吧。`)

---

## 🎯 Step 3: /p 计划阶段 (Plan Gate)

AI 更新并生成 [implementation_plan.md](./templates/implementation_plan.md)：
1. **1.1 [NEW]** 创建 `src/lib/rate-limiter.ts` (核心逻辑)。
2. **1.2 [MODIFY]** 将限流逻辑注入 `login/route.ts`。
3. **1.3 [TEST]** 编写集成测试。

> [!TIP]
> **AI 停止工作，等待用户。**
> **User**: `1`

---

## 🛠️ Step 4: /e 执行原子循环 (Execute Loop)

AI 开始执行原子任务：

**AI**: `开始执行 1.1 - 创建 rate-limiter.ts。`
- 展示 Diffs (15 行核心代码)。
- 运行 TSC 检查。
- **AI 停止**：`等待确认回 1。`

**User**: `1`
**AI**: `已执行物理 Git Commit: feat(auth): add memory-based rate limiter logic`

---

## ✅ Step 5: /v 验证与 /c 清理 (Verify & Clean)

**AI**: `功能实现完毕。运行 /v 验证：`
- [x] Linter Pass
- [x] 模拟请求并发，成功触发 429 Too Many Requests。

**User**: `/c`
**AI**: `正在清理过程文档。research_summary.md, implementation_plan.md, task.md 已销毁。准备合并至主分支。`

---

## 💎 结语 (Conclusion)

通过上述流程，人类开发者仅需输入 **两次 "1"** 和 **一次关键决策**，就完成了以下高质量工作：
1. **逻辑解耦**（限流逻辑不在 Controller 里硬编码）。
2. **零语义偏差**（AI 没有猜需求，而是先研究再执行）。
3. **可审计性**（每个 Commit 都是清晰、原子的逻辑单元）。

> [🔑 核心口令]：/r 研究 | 编号审核 | /p 计划 | /e 执行 | /f 闪击 | /d [报错现象] | /c 清理
