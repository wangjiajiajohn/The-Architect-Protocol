---
layout: home

hero:
  name: The Architect's Protocol
  text: 人机协同高效范式
  tagline: 指令驱动 ・ 规则约束 ・ 人工审计 ・ 极简交互
  image:
    src: /hero-banner.png
    alt: The Architect's Protocol
  actions:
    - theme: brand
      text: 开启高效范式
      link: /guide/1-crisis
    - theme: alt
      text: 查阅 SOP 协议
      link: /SOP

features:
  - icon: 🕹️
    title: 1. 指令驱动
    details: 拒绝无目的性的闲聊。AI 仅根据预设的指令集（/r, /p, /e）执行精密逻辑。工程师不再是写作者，而是通过指令下发的指挥官。
  - icon: 🏰
    title: 2. 模组化边界
    details: 将工程品味固化为底层纪律。通过 V2.0 模组化规则 (.mdc) 物理锁死研究、计划与执行阶段，让每一个改动都符合架构师的洁癖。
  - icon: 🔬
    title: 3. 原子级审计
    details: 每一个原子项都经由人类 Diff 审阅。回复“1”不仅是许可，更是对系统架构物理真实性的最高签字权。
  - icon: ⚡
    title: 4. 极简交互
    details: 追求认知的极小负荷。通过高效快捷指令与原子化开发分支，让复杂的系统重构简化为“看 Diff -> 回复 1”的极致体验。
---

# 🏆 架构师协议
## AI-Human 协同工程 — 高效版 (2026)

> [!IMPORTANT]
> **夺回控制权**：这不仅是关于使用 AI 编写代码；这是关于建立一种 **审计优先** 的工程纪律。
> 我们通过硬编码的 **SOP 与闸门矩阵**，将 AI 从“冲动的执行者”转变为“精准的工程官”。

---

### 🏛️ 现代工程师生存指南

在工程标准崩塌的时代，我们为您的架构提供了一套 **防御系统**：

1.  **原子审计循环**：逻辑变更 <= **20 行**；UI/模板/配置变更 <= **100 行**。
2.  **模组化 MDC 规则 (V2.0)**：利用 Cursor 原生 `.mdc` 物理隔离阶段权限。
3.  **文档先行闸门**：在执行 (/e) 之前强制进行研究 (/r) 和计划 (/p) 文档同步。

---

[探索协议](./guide/1-crisis) | [SOP 手册](./SOP) | [实战演练](./USAGE_EXAMPLE) | [ADR 记录](./ARCH)

<div class="premium-dashboard">
<div class="control-grid">
<div class="control-panel terminal-window">
<div class="window-header">
<span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
<span class="title">architect_os — 审计终端</span>
</div>
<div class="window-body">
<div class="type-line">> 系统: 身份验证成功 <span class="status-ok">就绪</span></div>
<div class="type-line delay-1">> 协议 V2.0: 模组化 MDC 已加载 <span class="status-ok">已锁定</span></div>
<div class="type-line delay-2">> 原子任务: Phase 1.1 已生成 <span class="status-warn">待审计</span></div>
<div class="type-line delay-3">> 指令: 等待确认 '1' <span class="blink">_</span></div>
</div>
</div>

<div class="status-panel">
<div class="stat-card">
<div class="stat-label">工程架构</div>
<div class="stat-value">模组化 MDC</div>
<div class="progress-bar"><div class="progress-fill fill-100"></div></div>
</div>
<div class="stat-card">
<div class="stat-label">人类认知负载</div>
<div class="stat-value">极低 (Minimal)</div>
<div class="progress-bar"><div class="progress-fill fill-low"></div></div>
</div>
</div>
</div>
</div>

<style>
/* 
   Apple & Amazon Aesthetic Grand Redesign 
   - Minimalist Gradients
   - Micro-interactions
   - High-end Typography
*/

:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(120deg, #50e3c2 0%, #41d1ff 50%, #c084fc 100%);
  --vp-home-hero-image-background-image: radial-gradient(circle, rgba(80,227,194,0.15) 0%, transparent 70%);
  --vp-home-hero-image-filter: blur(100px);
}

.VPHome {
  background: var(--vp-c-bg);
  overflow-x: hidden;
}

/* Sub-background Grid (AWS style) */
.VPHome::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; height: 1000px;
  background-image: 
    radial-gradient(circle at 50% -20%, rgba(80, 227, 194, 0.15), transparent 70%),
    linear-gradient(to right, var(--vp-c-divider) 1px, transparent 1px),
    linear-gradient(to bottom, var(--vp-c-divider) 1px, transparent 1px);
  background-size: 100% 100%, 40px 40px, 40px 40px;
  opacity: 0.25;
  mask-image: linear-gradient(to bottom, black 50%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent);
  pointer-events: none;
}

/* Feature Grid (Apple Style Card) */
.VPFeature {
  background: rgba(var(--vp-c-bg-soft-rgb), 0.4) !important;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.05) !important;
  border-radius: 24px !important;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1) !important;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.VPFeature:hover {
  transform: translateY(-8px) scale(1.02);
  background: rgba(var(--vp-c-bg-soft-rgb), 0.6) !important;
  border-color: #50e3c2 !important;
  box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.3);
}

/* Control Dashboard Layout */
.premium-dashboard {
  max-width: 1100px;
  margin: 6rem auto 4rem;
  padding: 0 32px;
  position: relative;
  z-index: 20;
}

.control-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 32px;
}

@media (max-width: 860px) {
  .control-grid { grid-template-columns: 1fr; }
}

/* Terminal Window (Apple Pro aesthetic) */
.terminal-window {
  background: #000;
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 30px 60px rgba(0,0,0,0.4);
  overflow: hidden;
  font-family: 'SF Mono', 'Input Mono', 'Consolas', monospace;
}

.window-header {
  background: rgba(255,255,255,0.03);
  padding: 14px 20px;
  display: flex; align-items: center;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

.dot { width: 10px; height: 10px; border-radius: 50%; margin-right: 8px; }
.dot.red { background: #ff5f56; } .dot.yellow { background: #ffbd2e; } .dot.green { background: #27c93f; }
.title { flex: 1; text-align: center; color: #666; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; }

.window-body { padding: 30px; font-size: 14px; line-height: 1.8; color: #a1a1a6; }
.type-line { margin-bottom: 12px; opacity: 0; animation: fadeIn 0.2s forwards; }
.delay-1 { animation-delay: 1s; }
.delay-2 { animation-delay: 2.2s; }
.delay-3 { animation-delay: 3.5s; color: #50e3c2; font-weight: 600; }

.status-ok { color: #32d74b; float: right; }
.status-warn { color: #ffd60a; float: right; }
.blink { animation: blinker 1s step-end infinite; }

/* Status Panel (AWS Insight style) */
.status-panel { display: flex; flex-direction: column; gap: 20px; }
.stat-card {
  background: rgba(var(--vp-c-bg-soft-rgb), 0.4);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.03);
  padding: 24px;
}
.stat-label { color: #86868b; font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;}
.stat-value { font-size: 1.6rem; font-weight: 700; color: var(--vp-c-text-1); margin-bottom: 16px; }

.progress-bar { height: 4px; background: rgba(255,255,255,0.05); border-radius: 2px; overflow: hidden; }
.progress-fill { height: 100%; border-radius: 2px; }
.fill-100 { width: 100%; background: linear-gradient(90deg, #50e3c2, #41d1ff); }
.fill-low { width: 15%; background: #32d74b; box-shadow: 0 0 10px rgba(50,215,75,0.4); }

@keyframes fadeIn { to { opacity: 1; } }
@keyframes blinker { 50% { opacity: 0; } }

/* Hero Enhancement */
.VPHero {
  padding-top: 100px !important;
}
.name {
  letter-spacing: -2px !important;
  font-weight: 900 !important;
}
.tagline {
  font-size: 1.2rem !important;
  color: #86868b !important;
  letter-spacing: 4px !important;
  text-transform: uppercase;
  margin-top: 24px !important;
}
</style>
