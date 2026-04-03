# 实战演示：[实现登录接口限流 (Login Rate Limiter)]

本案例展示了如何通过 **The Architect's Protocol (SOP)** 实现 **“最少打字、最大控制”** 的高效协同流水线。

### 🎭 场景角色 (Roles)
- **工程师 (User)**：架构总审计。只需输入指令与 `1`。
- **AI Agent**：工业级执行者。严格执行审计锁与原子提交。

---

## 🚀 Step 1: 需求启动与研究 (/r)

**User**: `/r 帮我在 Next.js 登录 API 中实现每分钟 5 次的限流功能。`

**AI**: *分析工程结构并生成 `research_summary.md`...*
- **发现**：已有 `src/app/api/auth/login` 路由。
- **方案**：建议使用内存 Map 缓存，定义 `RateLimit` 装饰器。
- **停顿**：`请确认研究摘要。回复 1 或 评论微调。`

**User**: `1`

---

## 🎯 Step 2: 方案微调与确认 (/p)

**AI**: *生成 `implementation_plan.md`...*
1. **1.1 定义接口**：创建 `IRateLimiter` 契约。
2. **1.3 实现逻辑**：编写内存限制器。
3. **1.4 注入路由**：在 Login API 中调用。

**User**: `1.1 的接口里增加一个剩余次数的返回。`

**AI**: *更新计划并展示新接口定义...*
- **停顿**：`计划已更新。回复 1 开启执行原子循环。`

**User**: `1`

---

## 🛠️ Step 3: 原子执行与 Diffs 审计 (/e)

**AI**: `正在执行 1.1 - 定义接口。`
1. 修改 `src/types/auth.ts`。
2. **主动展示 Diffs**:
   ```diff
   + export interface RateLimitResult {
   +   success: boolean;
   +   remaining: number;
   + }
   ```
3. `TSC 检查通过。等待确认回 1 进行本地 Commit。`

**User**: `1`
**AI**: `已执行物理 Commit: feat(auth): define rate limiter interface`

---

## 🛰️ Step 4: 快速同步与清理 (/g & /c)

**AI**: `全部功能实现并通过自测。是否需要同步到远端？`

**User**: `/g`

**AI**: `正在执行 Git Sync...`
- `git add .`
- `git commit -m "feat: implement memory-based login rate limiting"`
- `git push`
- **状态**：`云端已同步成功。`

**User**: `/c`
**AI**: `正在清理过程文档... 任务完成。`

---

## 💎 核心价值 (Value)
整个过程中，工程师通过 **3 次回复 "1"** 和 **2 条短指令**，就驱动 AI 完成了从“方案设计”到“工业级代码实现”再到“云端同步”的全流程，且每一行代码都经过了 **Diff 级别的审计**。

> [🔑 核心口令]：/r 研究 | /p 计划 | /e 执行 | /gc 提交 | /gp 推送 | /g 同步 | /c 清理
