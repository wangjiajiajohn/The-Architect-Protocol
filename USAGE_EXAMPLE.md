# 实战演示：[实现登录接口限流 (Login Rate Limiter)]

本案例展示了如何通过 **The Architect's Protocol (SOP)** 实现 **“文档先行、极简聊天”** 的高效协同方案。

### 🎭 场景角色 (Roles)
- **工程师 (User)**：作为“高级审计员”，在文档上直接批改逻辑。
- **AI Agent**：作为“执行底座”，通过读取文档锁定最新需求。

---

## 🚀 Step 1: 需求启动与研究 (/r)

**User**: `/r 帮我在 Next.js 登录 API 中实现每分钟 5 次的限流功能。`

**AI**: *分析工程结构并产出 **研究摘要 (research_summary.md)**...*
1. **核心发现**：已有路由缺乏中间件，建议使用 Redis 或 Memory Map。
2. **停顿**：`请直接在文档中修正方案。完成后在此回复 1。`

**User**: *在 `research_summary.md` 中手动添加一行：`- 限制器必须包含剩余请求次数的 Headers 返回。`*
**User**: `1` (或 `已修改方案`)

---

## 🎯 Step 2: 方案确认与锁定 (/p)

**AI**: *[重新加载研究摘要] -> 生成 **实施计划 (implementation_plan.md)**...*
- **1.1 定义契约**：在 `types/auth.ts` 中加入 `RateLimitResponse`。
- **1.2 实现逻辑**...

**User**: *在 `implementation_plan.md` 中将 1.1 的文件名修正为 `src/contracts/rate-limit.ts`。*
**User**: `1`

---

## 🛠️ Step 3: 原子执行与 Diffs 审计 (/e)

**AI**: *[重新加载计划] -> 开始执行 1.1 - 定义契约。*
1. 修改 `src/contracts/rate-limit.ts`。
2. **主动展示 Diffs**:
   ```diff
   + export interface RateLimitResult {
   +   success: boolean;
   +   remaining: number;
   + }
   ```
3. `TSC 检查通过。等待确认回 1 进行本地 Commit。`

**User**: `1`
**AI**: `已执行物理 Commit: feat(auth): define rate limiter contract`

---

## 🛰️ Step 4: 同步与清理 (/g & /c)

**AI**: `全部功能实现并通过自测。是否需要同步到远端？`

**User**: `/g`
**AI**: `正在执行 Git Sync... 云端已同步成功。`

**User**: `/c`
**AI**: `正在清理过程文档... 任务完成。聊天记录保持清爽。`

---

## 💎 核心价值 (Value)
在整个过程中，聊天窗口完全被 **“指令 + 确认符”** 占据，没有任何冗余的自然语言。所有的“思维博弈”和“逻辑打磨”都在文档中留下了物理存证，确保了 context 的绝对精确。

> [🔑 核心口令]：/r 研究 | /p 计划 | /e 执行 | /gc 提交 | /gp 推送 | /g 同步 | /c 清理
