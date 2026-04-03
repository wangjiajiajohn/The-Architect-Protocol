# 📚 Real-World Cases: The Protocol in Action

These are complete, end-to-end walkthroughs of real engineering tasks executed under The Architect's Protocol. Each case includes the actual commands used, the contracts defined, and the exact Git log produced.

---

## Case 1: Login Rate Limiting (Node.js / Next.js)

**Stack:** Next.js 14, TypeScript, Upstash Redis  
**Task:** Prevent brute-force attacks on the login endpoint  
**Total commits:** 4 atomic commits | **Lines changed:** 67 lines total

### The Problem (without protocol)

Without protocol, a typical AI response to "add rate limiting" would:
- Install `express-rate-limit` (wrong package for Next.js App Router)
- Add 80+ lines directly into the auth route file
- Fail silently when `REDIS_URL` isn't set
- Leave no documentation of the decision

**The Protocol approach:**

---

### `/r` — Research Phase

**Command:** `/r Add login rate limiting to prevent brute force on /api/auth/login`

**AI Research Output (`research_summary.md`):**
- ✅ Scanned `src/app/api/auth/login/route.ts` — no rate limiting exists
- ✅ Found: Next.js App Router requires middleware or route-level solutions
- ✅ Compared 3 options:
  - **A) `express-rate-limit`** — NOT compatible with App Router ❌
  - **B) `upstash/ratelimit` + Redis** — Serverless-compatible, Vercel-native ✅ (Recommended)
  - **C) In-memory counter** — Doesn't survive cold starts ❌
- ✅ Required env var: `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`

**Human:** Reviewed. Option B confirmed. `1`

---

### `/p` — Planning Phase

**AI Plan Output (`implementation_plan.md`):**

```
Atomic Task List:
1.1 [ ] Define RateLimitResult interface in src/types/auth.ts
1.2 [ ] Create src/lib/ratelimit.ts (pure logic layer, no HTTP context)
1.3 [ ] Inject rate limit check into existing login route (≤5 lines change)
1.4 [ ] Add REDIS env vars to .env.example
```

**Contracts defined:**
```typescript
// src/types/auth.ts — Contract locked before any implementation
interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number; // Unix timestamp
}
```

**Human:** Contracts look correct. `1`

---

### `/e` — Execution Phase (4 atomic commits)

**Step 1.1** — Interface definition  
```diff
// src/types/auth.ts
+export interface RateLimitResult {
+  success: boolean;
+  limit: number;
+  remaining: number;
+  reset: number;
+}
```
✅ `tsc --noEmit` passed | Human: `1` | **Commit:** `feat(types): add RateLimitResult interface`

---

**Step 1.2** — Logic layer (isolated, testable)  
```diff
// src/lib/ratelimit.ts (new file, 18 lines)
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
✅ 18 lines | Human: `1` | **Commit:** `feat(lib): add rate limit logic layer`

---

**Step 1.3** — Route injection (minimal touch)  
```diff
// src/app/api/auth/login/route.ts
+import { checkRateLimit } from '@/lib/ratelimit'
+import { headers } from 'next/headers'

 export async function POST(request: Request) {
+  const ip = headers().get('x-forwarded-for') ?? '127.0.0.1'
+  const { success } = await checkRateLimit(ip)
+  if (!success) return Response.json({ error: 'Too many requests' }, { status: 429 })
+
   // existing login logic unchanged below...
```
✅ 5 lines added | Human: `1` | **Commit:** `feat(api): inject rate limit into login route`

---

**Step 1.4** — Environment documentation  
```diff
// .env.example
+UPSTASH_REDIS_REST_URL=your_url_here
+UPSTASH_REDIS_REST_TOKEN=your_token_here
```
**Commit:** `docs(env): document required Redis env vars`

---

### Result
```
git log --oneline -4
a3f9c12 docs(env): document required Redis env vars
b7e1d84 feat(api): inject rate limit into login route  
c2a8f31 feat(lib): add rate limit logic layer
d9b3e40 feat(types): add RateLimitResult interface
```

**4 commits. All reviewable. All revertible individually. Zero test regressions.**

---

## Case 2: React Component Refactor (Three-Layer Pyramid)

**Stack:** React 18, TypeScript  
**Task:** Refactor bloated `<UserDashboard>` component (400 lines, logic mixed with UI)  
**Demonstrates:** Law 3 — Three-Layer Pyramid

### The "Before" (Without Protocol)

```
// UserDashboard.tsx — 400 lines of mixed concerns
export function UserDashboard() {
  const [users, setUsers] = useState([])
  // 50 lines of API call logic
  // 80 lines of sorting/filtering
  // 20 lines of permission check
  // 250 lines of JSX with business rules embedded
}
```

**Problems:** Impossible to test business logic. Any UI change risks breaking logic. Impossible to reuse the filtering logic elsewhere.

---

### The Protocol Decomposition

After `/r` and `/p`, the plan produces:

```
Layer Mapping:
├── src/types/user.ts           ← Data Layer (contracts)
├── src/hooks/useUserData.ts    ← Logic Layer (fetching, sorting, filtering)
├── src/hooks/useUserPermissions.ts  ← Logic Layer (auth checks)
└── src/components/UserDashboard.tsx ← UI Layer (JSX only, ~80 lines)
```

**Each atomic commit:**
- `feat(types): define User and UserPermission interfaces` — 12 lines
- `feat(hooks): extract useUserData from dashboard` — 18 lines  
- `feat(hooks): extract useUserPermissions from dashboard` — 14 lines
- `refactor(ui): reduce UserDashboard to pure presentation layer` — 85 lines UI

**After:** The component is 82 lines of pure JSX. Business logic is fully unit-testable.

---

## Case 3: API Integration Debugging (`/d` Command)

**Task:** Third-party payment webhook keeps returning 401  
**Demonstrates:** `/d` — Evidence-Based Debug Protocol

### The `/d` Debug Protocol

**Human:** `/d Payment webhook returns 401. Error: "Invalid signature"`

**AI Debug Sequence:**
1. **Log injection** (atomic, committed separately):
   ```diff
   +console.log('[WEBHOOK_DEBUG] raw_body_length:', rawBody.length)
   +console.log('[WEBHOOK_DEBUG] signature_header:', req.headers['x-payment-signature'])
   +console.log('[WEBHOOK_DEBUG] computed_sig:', computedSignature)
   ```
2. **Reproduction:** Confirmed `rawBody` was being parsed as JSON before HMAC — body was modified
3. **Root cause:** Express `json()` middleware consumed the raw body
4. **Fix:**
   ```diff
   -app.use(express.json())
   +// Webhook route must be before global json middleware
   +app.post('/webhook', express.raw({ type: 'application/json' }), webhookHandler)
   +app.use(express.json())
   ```
5. **Cleanup commit:** Remove all debug `console.log` statements

**Key principle:** Debug logs are *committed* and *explicitly removed* — they leave an audit trail in Git of what was investigated.
