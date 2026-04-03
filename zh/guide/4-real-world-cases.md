# 📚 真实案例：协议实战全流程

这里记录了三个完整的端到端工程任务，在《架构师协议》的约束下完整执行。每个案例都包含实际使用的命令、定义的契约、以及真实产出的 Git 日志。

---

## 案例一：登录限流（Node.js / Next.js）

**技术栈：** Next.js 14、TypeScript、Upstash Redis  
**任务：** 防止登录接口被暴力破解  
**总计：** 4 个原子提交 | 共改动 67 行

### 失控的"不用协议"场景

不用协议，一句"加登录限流"换来的 AI 响应往往会：
- 安装 `express-rate-limit`（不兼容 Next.js App Router）
- 把 80+ 行直接堆进路由文件
- 环境变量缺失时静默失败，没有任何报错
- 不留下任何决策文档

**协议是如何处理的：**

---

### `/r` — 研究阶段

**指令：** `/r 为 /api/auth/login 加登录限流，防止暴力破解`

**AI 研究输出（`research_summary.md`）：**
- ✅ 扫描 `src/app/api/auth/login/route.ts` — 当前无任何限流
- ✅ 发现：Next.js App Router 需要中间件或路由级方案
- ✅ 对比 3 个方案：
  - **方案 A：`express-rate-limit`** — 不兼容 App Router ❌
  - **方案 B：`upstash/ratelimit` + Redis** — Serverless 兼容，Vercel 原生 ✅（推荐）
  - **方案 C：内存计数器** — 冷启动后数据丢失 ❌
- ✅ 所需环境变量：`UPSTASH_REDIS_REST_URL`、`UPSTASH_REDIS_REST_TOKEN`

**人类：** 已审阅。确认方案 B。`1`

---

### `/p` — 计划阶段

**AI 计划输出（`implementation_plan.md`）：**

```
原子任务清单：
1.1 [ ] 在 src/types/auth.ts 定义 RateLimitResult 接口
1.2 [ ] 创建 src/lib/ratelimit.ts（纯逻辑层，无 HTTP 上下文）
1.3 [ ] 在现有登录路由注入限流检查（≤5 行改动）
1.4 [ ] 在 .env.example 补充环境变量说明
```

**锁定契约：**
```typescript
// src/types/auth.ts — 实现前锁定契约
interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number; // Unix 时间戳
}
```

**人类：** 契约正确。`1`

---

### `/e` — 执行阶段（4 个原子提交）

**步骤 1.1** — 接口定义
```diff
// src/types/auth.ts
+export interface RateLimitResult {
+  success: boolean;
+  limit: number;
+  remaining: number;
+  reset: number;
+}
```
✅ `tsc --noEmit` 通过 | 人类：`1` | **提交：** `feat(types): add RateLimitResult interface`

---

**步骤 1.2** — 逻辑层（独立、可测试）
```diff
// src/lib/ratelimit.ts（新文件，18 行）
+import { Ratelimit } from '@upstash/ratelimit'
+import { Redis } from '@upstash/redis'
+import type { RateLimitResult } from '@/types/auth'
+
+const ratelimit = new Ratelimit({
+  redis: Redis.fromEnv(),
+  limiter: Ratelimit.slidingWindow(10, '10 s'),
+})
+
+export async function checkRateLimit(ip: string): Promise<RateLimitResult> {
+  const result = await ratelimit.limit(ip)
+  return {
+    success: result.success,
+    limit: result.limit,
+    remaining: result.remaining,
+    reset: result.reset,
+  }
+}
```
✅ 18 行 | 人类：`1` | **提交：** `feat(lib): add rate limit logic layer`

---

**步骤 1.3** — 路由注入（最小侵入）
```diff
// src/app/api/auth/login/route.ts
+import { checkRateLimit } from '@/lib/ratelimit'
+import { headers } from 'next/headers'

 export async function POST(request: Request) {
+  const ip = headers().get('x-forwarded-for') ?? '127.0.0.1'
+  const { success } = await checkRateLimit(ip)
+  if (!success) return Response.json({ error: '请求过于频繁' }, { status: 429 })
+
   // 原有登录逻辑保持不变...
```
✅ 新增 5 行 | 人类：`1` | **提交：** `feat(api): inject rate limit into login route`

---

**步骤 1.4** — 环境变量文档
```diff
// .env.example
+UPSTASH_REDIS_REST_URL=your_url_here
+UPSTASH_REDIS_REST_TOKEN=your_token_here
```
**提交：** `docs(env): document required Redis env vars`

---

### 最终 Git 日志
```
git log --oneline -4
a3f9c12 docs(env): document required Redis env vars
b7e1d84 feat(api): inject rate limit into login route
c2a8f31 feat(lib): add rate limit logic layer
d9b3e40 feat(types): add RateLimitResult interface
```

**4 个提交。每个都可独立审计。每个都可单独回滚。零测试回归。**

---

## 案例二：React 组件重构（三层金字塔）

**技术栈：** React 18、TypeScript  
**任务：** 重构臃肿的 `<UserDashboard>` 组件（400 行，逻辑与 UI 混杂）  
**体现：** 法则三 — 三层金字塔

### "之前"（不用协议）

```
// UserDashboard.tsx — 400 行混乱的关注点
export function UserDashboard() {
  const [users, setUsers] = useState([])
  // 50 行 API 调用逻辑
  // 80 行排序/筛选
  // 20 行权限检查
  // 250 行嵌入业务规则的 JSX
}
```

**问题：** 业务逻辑无法单测。任何 UI 改动都有破坏逻辑的风险。筛选逻辑无法复用。

---

### 协议分解结果

`/r` 和 `/p` 完成后，计划书产出：

```
层级映射：
├── src/types/user.ts                   ← 数据层（契约）
├── src/hooks/useUserData.ts            ← 逻辑层（获取、排序、筛选）
├── src/hooks/useUserPermissions.ts     ← 逻辑层（权限检查）
└── src/components/UserDashboard.tsx    ← UI 层（纯 JSX，约 80 行）
```

**每个原子提交：**
- `feat(types): 定义 User 和 UserPermission 接口` — 12 行
- `feat(hooks): 从 dashboard 提取 useUserData` — 18 行
- `feat(hooks): 从 dashboard 提取 useUserPermissions` — 14 行
- `refactor(ui): 将 UserDashboard 精简为纯展示层` — 85 行 UI

**之后：** 组件 82 行纯 JSX。业务逻辑完全可单元测试。

---

## 案例三：API 集成调试（`/d` 指令）

**任务：** 第三方支付 Webhook 持续返回 401  
**体现：** `/d` — 证据驱动调试协议

### `/d` 调试协议

**人类：** `/d 支付 Webhook 返回 401，错误信息：Invalid signature`

**AI 调试序列：**

1. **注入日志**（原子提交，单独记录）：
   ```diff
   +console.log('[WEBHOOK_DEBUG] raw_body_length:', rawBody.length)
   +console.log('[WEBHOOK_DEBUG] signature_header:', req.headers['x-payment-signature'])
   +console.log('[WEBHOOK_DEBUG] computed_sig:', computedSignature)
   ```
2. **复现确认：** `rawBody` 在 HMAC 计算前已被 JSON 解析过 — 原始 body 被篡改
3. **根本原因：** Express `json()` 中间件提前消费了原始 body
4. **修复：**
   ```diff
   -app.use(express.json())
   +// Webhook 路由必须在全局 json 中间件之前
   +app.post('/webhook', express.raw({ type: 'application/json' }), webhookHandler)
   +app.use(express.json())
   ```
5. **清理提交：** 删除所有调试用 `console.log`

**核心原则：** 调试日志被*提交*再被*明确删除* — 在 Git 中留下了完整的排查轨迹。
