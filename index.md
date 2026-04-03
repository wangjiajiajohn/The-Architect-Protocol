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
    title: 指令驱动
    details: 拒绝闲聊。通过精密指令集 (/r, /p, /e) 驱动 AI 执行。
  - icon: 🏰
    title: 模组化边界
    details: 通过 V2.0 规则 (.mdc) 物理隔离阶段权限，锁定工程味觉。
  - icon: 🔬
    title: 原子级审计
    details: 20/100 审计法则。看 Diff -> 回 1 -> 提交，掌控每一行变更。
---

<div class="value-grid">
  <div class="value-card">
    <div class="value-icon">🎯</div>
    <h4>确定性工程流水线</h4>
    <p>拒绝概率性“抽奖”。通过计划锁定与物理闸门，将 AI 转化为按图纸施工的精密机器。</p>
  </div>
  <div class="value-card">
    <div class="value-icon">🛡️</div>
    <h4>应对 AI 熵增的防御系统</h4>
    <p>AI 一秒吐 500 行垃圾，协议是物理断电。确保你永远能看懂并掌控系统的演进。</p>
  </div>
  <div class="value-card">
    <div class="value-icon">🏛️</div>
    <h4>沉淀核心数字资产</h4>
    <p>让对话转化为 ADR 与可复用 SOP。每一行代码都符合“可维护、可迭代、高质量”标准。</p>
  </div>
</div>

---

[为什么用它？](./guide/why-protocol) | [SOP 协议](./SOP) | [ADR 记录](./ARCH) | [演进向导](./guide/1-crisis)

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

/* Value Grid & Cards */
.value-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin: 3rem 0;
}

.value-card {
  padding: 24px;
  background: rgba(var(--vp-c-bg-soft-rgb), 0.3);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  transition: all 0.4s ease;
  backdrop-filter: blur(10px);
}

.value-card:hover {
  transform: translateY(-5px);
  border-color: #50e3c2;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.value-icon { font-size: 2rem; margin-bottom: 16px; }
.value-card h4 { margin: 0 0 12px 0; color: #50e3c2; }
.value-card p { margin: 0; font-size: 0.95rem; line-height: 1.6; color: #86868b; }

/* Table Reset */
table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin: 2rem 0;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.05);
}

th { background: rgba(80, 227, 194, 0.1); color: #50e3c2; font-weight: 600; text-align: left; padding: 16px; }
td { padding: 16px; border-top: 1px solid rgba(255,255,255,0.05); }
tr:hover { background: rgba(255, 255, 255, 0.03); }

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
