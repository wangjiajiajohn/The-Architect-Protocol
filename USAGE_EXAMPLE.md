# 🎬 Practical Demo: Login Rate Limiting Implementation

This guide demonstrates the full **The Architect's Protocol (SOP)** lifecycle through a "Login Rate Limiting" task.

---

## 🛠️ Phase 0: Research (Requirement Analysis)
**Human**: `/r Implement login rate limiting to prevent brute force.`

**AI (/r)**: 
1.  **Dependency Analysis**: Checked `src/lib/auth.ts`, found no current rate limiting.
2.  **Architecture Path**: Proposed using `ioredis` in a middleware or at the Route Level.
3.  **Output**: `[Research Summary]` — Recommends `upstash-redis` for Vercel compatibility.

**Gate 0 Audit**: Human replies `1` (Approved).

---

## 📝 Phase 1: Planning (Contract Lock)
**Human**: `/p Design the plan.`

**AI (/p)**:
1.  **Step 1.1**: Define `RateLimitResponse` interface.
2.  **Step 1.2**: Create `src/lib/ratelimit.ts` (The Logic Layer).
3.  **Step 1.3**: Inject Logic into `src/app/api/auth/login/route.ts`.

**Gate 1 Audit**: Human replies `1` (Contract locked, implementation authorized).

---

## 🔨 Phase 2: Execution (Atomic Audit Loop)
**Human**: `/e Start step 1.1.`

**AI (/e - Step 1.1)**:
-   **Action**: Create Interface.
-   **Audit**: Show Diffs -> Human replies `1` -> **Auto Commit**.

**AI (/e - Step 1.2)**:
-   **Action**: Abstract business logic (Redis counter) into `src/lib/ratelimit.ts`.
-   **Audit**: Show Diffs -> Human replies `1` -> **Auto Commit**.

---

## 🔎 Phase 3: Debugging (Evidence-Based)
*If a "Redis connection error" occurs:*

**Human**: `/d [Error] Connection Refused`

**AI (/d)**: 
1.  **Log Injection**: Auto-injects `console.log('REDIS_DEBUG:', config)`.
2.  **Reproduction**: Confirms empty environment variables.
3.  **Fix**: Guides user to set `REDIS_URL` in `.env`.

---

## ✅ Phase 4: Verification (Quality Gate)
**Human**: `/v Validate all.`

**AI (/v)**:
1.  **Automatic**: Runs `npm run lint` and `tsc`.
2.  **UI-Proof**: Summarizes logic changes and visual impact for human to verify locally.

---
"Discipline is the bridge between goals and accomplishment."
