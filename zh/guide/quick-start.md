# 🚀 快速上手

<script setup>
import { withBase } from 'vitepress'
</script>

> **目标**：3 分钟内在你的项目里跑通协议。

---

## 这个场景你熟悉吗？

你打开 AI 对话框，想修一个 bug。
一小时后，它帮你重写了半个代码库。
你不确定是变好了还是变坏了，但还是 merge 了。

**这个协议就是为了解决这个问题。**

<img :src="withBase('/demo.gif')" alt="协议使用前后对比演示" style="width:100%;border-radius:12px;margin:1.5rem 0;display:block;" />

---

## 第一步 — 安装（30 秒）

在你的项目根目录运行这一行命令。不需要手动创建任何配置文件：

```bash
npx github:wangjiajiajohn/The-Architect-Protocol
```

你会看到：

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  🏛  The Architect's Protocol  v2.0
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ↓ .cursor/rules/100-core-instructions.mdc        ✓
  ↓ .cursor/rules/200-research-gate.mdc            ✓
  ↓ .cursor/rules/300-planning-gate.mdc            ✓
  ↓ .cursor/rules/400-execution-iron-lock.mdc      ✓
  ↓ .cursor/rules/500-verification-gate.mdc        ✓
  ↓ templates/research_summary_template.md         ✓
  ↓ PROMPTS.md                                     ✓

  14 files installed · All OK ✅
```

> [!TIP]
> 更喜欢手动操作？把 `.cursor/rules/` 目录下的所有 `.mdc` 文件复制到你的项目对应目录就行。

---

## 第二步 — 第一个真实任务（2 分钟）

打开 Cursor。选一个你正准备开始的需求。**不要直接描述需求**，而是输入：

```
/r 我需要给用户登录加上 JWT Token 鉴权
```

看看会发生什么：

- AI **先提问**，而不是立刻生成代码
- 它生成一份 `research_summary.md` —— 针对你现有代码库的范围分析
- 在写任何一行代码之前，它会先识别风险

你会看到类似这样的输出：

```
## 研究摘要 — JWT 鉴权

### 发现的现有认证逻辑：
- middleware/auth.js (第 23 行)：session 方式，需替换
- models/User.js (第 45 行)：缺少密码哈希字段

### 识别到的风险：
1. 前端拦截器未处理 Token 过期逻辑
2. Refresh Token 存储方式待决策：localStorage vs httpOnly Cookie

### 建议方案：[...]

等待你的确认。回复 `1` 继续进入规划阶段。
```

**这就是关键时刻。** 你看到的是一个先研究、后编码的 AI —— 而不是反过来。

---

## 第三步 — 理解审计循环（45 秒）

你回复 `1` 之后，输入 `/p` 规划，然后 `/e` 执行。整个节奏是：

```
/r → 阅读确认 → 1
/p → 审阅计划 → 1
/e → 审阅 diff → 1
/v → 验证构建 → 完成
```

每个 `1` 都是一道**物理闸门**。没有它，AI 无法继续。

> [!IMPORTANT]
> 当你第一次回复 `1`，AI 精确执行了计划内容——不多不少——那一刻就是顿悟时刻。大多数用户的描述是：*"我终于感觉自己在掌控了。"*

---

## 安装完毕后，你的项目结构是这样的

```
your-project/
├── .cursor/
│   └── rules/
│       ├── 100-core-instructions.mdc    ← AI 身份与行为规范
│       ├── 200-research-gate.mdc        ← /r 闸门（研究锁）
│       ├── 300-planning-gate.mdc        ← /p 闸门（规划锁）
│       ├── 400-execution-iron-lock.mdc  ← /e 闸门（原子执行）
│       └── 500-verification-gate.mdc    ← /v 闸门（质量验证）
├── templates/
│   ├── research_summary_template.md
│   ├── implementation_plan_template.md
│   └── adr_template.md
└── PROMPTS.md                           ← Claude / ChatGPT / Copilot 提示词
```

---

## 不用 Cursor？

如果你用 **Claude**、**ChatGPT** 或 **GitHub Copilot**，打开 `PROMPTS.md` —— 里面有针对每种工具的完整系统提示词。粘贴为你的系统指令，即可获得同样的闸门行为。

---

> [!SUCCESS]
> **就这些。** 你的 AI 已经从一个冲动的代码生成器，变成了一个精准的工程工具。
> 下一步：阅读[完整 SOP](../SOP.md) 了解每个闸门背后的设计原则，或者直接看[真实案例](./4-real-world-cases.md)了解它实战中的表现。
