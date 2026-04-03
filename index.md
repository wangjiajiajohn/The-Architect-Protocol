---
layout: home

hero:
  name: The Architect's Protocol
  text: AI-Human Collaborative Engineering
  tagline: 2026 Master Edition — AI 并不是缺乏智慧，它缺乏的是纪律
  image:
    src: /hero-banner.png
    alt: The Architect's Protocol
  actions:
    - theme: brand
      text: 查阅核心 SOP 协议
      link: /SOP
    - theme: alt
      text: 实战工作流演示
      link: /USAGE_EXAMPLE
---

<div class="landing-content">

## 1. 危机与降维：AI 能做什么？这对我们意味着什么？
**AI 已经彻底接管了代码翻译层工作。** 在代码的局部生成层面，AI 已经展现出了碾压级的优势。它能瞬间查阅各种框架的偏门 API、不知疲倦地处理正则排版、以及瞬间写出上百行的基础逻辑。

**这带来的冲击是：** 如果工程师的技能仅仅停留在“把业务方的需求翻译成可以跑的代码”或者“熟悉背诵语法”，这种能力正在极速贬值。在过去那条生产流水线上，甘当“代码打字机（Coder）”的角色将会受到最猛烈的冲击。

## 2. 升维与破局：有了 AI，现代软件工程能做到什么？
“写代码”这件事情本身的成本正趋于零，但这不仅不是末日，反而将软件工程的潜能释放到了极限。

我们的核心价值从“产出代码的速度”，升维到了**控制系统复杂度的能力**。工程师不再被陷入冗长的基础配置与基础组件开发中，而是可以将 80% 的精力投入到**业务分析**、**系统高内聚低耦合的架构设计**以及**边界防御**上。过去一支团队需要数月打造的复杂功能，如今能被一位高视野的工程师在极短时间内安全落地。这是打造“超级个体”的黄金时代。

## 3. 约束与协作：如何配合 AI 写出高质量的代码并排查问题？
许多人一经尝试就感到失望，觉得 AI 会产出无法维护的“逻辑屎山”——那是因为他们把 AI 当作全知全能的“许愿池”。**想要稳定产出工业级代码，必须靠铁血纪律，而不能靠 AI 的自觉：**

*   **架构先行 (Module-First)：** 人类划定大厦的框架和系统的骨架，比如业务层的数据流和逻辑模块的边界。AI 只是那个戴着镣铐跳舞、负责填补特定文件逻辑的工人。
*   **隔离分析法排查 (Debug)：** 当遇到玄学报错或者死锁时，**千万不要让 AI 去漫天盲猜修改**。人类的优势在于物理排查直觉。你必须通过阅读日志，把问题精确隔离在最小的上下文空间中，然后抛给 AI 最精准的代码切片段，让它作为运算单元来提供解决方案。

## 4. 我们的防线：真正约束 AI 走向卓越的基础设施
如果你想平稳驶入上述的人机协作黄金期，核心问题来了：**我们到底需要建立什么样的流程？我们该怎么约束它？**

这恰巧正是建立 **The Architect's Protocol** 的全部意义。要驱动 AI 真正执行高质量软工流程，让你始终稳坐“总工程师”的驾驶舱，你必须通过以下三大工程基石来建立防线：

<div class="features-grid">
  <div class="feature-card">
    <h3><a href="/SOP" class="card-link">1. SOP: 绝对控制的流程标准</a></h3>
    <p>摒弃随意的对话。强制引入“调研-规划-砌砖-测试”的标准化链条，设定代码修改规模上限。最重要的环节是：人类拥有强制的 Diff 审查权。你敲下 <code>1</code> 的瞬间，是系统最后的代码审计防线。</p>
  </div>
  <div class="feature-card">
    <h3><a href="/PROMPTS" class="card-link">2. PROMPTS: 严密的工程级指令</a></h3>
    <p>人类需要停止在输入框里毫无结构地打字抱怨。我们提供经过反复调优、有着明确约束前提的指令模板库（研发、联调、上下文清理）。你下达的是工业指令，而不是聊天内容。</p>
  </div>
  <div class="feature-card">
    <h3><a href="https://github.com/wangjiajiajohn/The-Architect-Protocol/blob/main/.cursorrules" target="_blank" class="card-link">3. Rules: 融入骨髓的规则墙</a></h3>
    <p>将 DRY (不重复造轮子) 与 SOLID 原则固化在底层的 <code>.cursorrules</code> 等全局系统提示中，强制接管 AI 对工程品味的下限评估，避免架构腐化。</p>
  </div>
</div>

</div>

<style>
.landing-content {
  max-width: 860px;
  margin: 0 auto;
  padding: 20px 24px 60px;
}
.landing-content h2 {
  font-size: 1.6rem;
  font-weight: 600;
  margin-top: 3.5rem;
  margin-bottom: 1.2rem;
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 0.8rem;
}
.landing-content p {
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 1.2rem;
  color: var(--vp-c-text-2);
}
.landing-content ul {
  margin-left: 1.5rem;
  margin-bottom: 1.5rem;
}
.landing-content li {
  line-height: 1.7;
  margin-bottom: 0.6rem;
  font-size: 1.1rem;
  color: var(--vp-c-text-2);
}
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  margin-top: 2.5rem;
}
.feature-card {
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 24px;
  transition: border-color 0.25s, background-color 0.25s;
}
.feature-card:hover {
  border-color: var(--vp-c-brand);
}
.feature-card h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  margin-top: 0;
  border: none;
  padding: 0;
}
.feature-card p {
  font-size: 0.95rem;
  margin-bottom: 0;
  line-height: 1.6;
}
.card-link {
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: color 0.2s;
}
.feature-card:hover .card-link {
  color: var(--vp-c-brand);
}
</style>
