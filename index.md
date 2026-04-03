---
layout: home

hero:
  name: The Architect's Protocol
  text: Precision AI Engineering
  tagline: Research · Plan · Execute · Audit — Turn AI chaos into disciplined engineering.
  image:
    src: /hero-banner.png
    alt: The Architect's Protocol
  actions:
    - theme: brand
      text: 🚀 Quick Start
      link: /guide/quick-start
    - theme: alt
      text: View Full SOP
      link: /SOP
    - theme: alt
      text: 🚫 Anti-Patterns
      link: /guide/5-anti-patterns

features:
  - icon: ⚛️
    title: Atomic Audit Loop
    details: ≤20 lines per logic commit. ≤100 lines per UI commit. Every change is human-reviewable in under 60 seconds. The Two-Strike Rule auto-reverts on repeated failure.
  - icon: 🛡️
    title: Physical Gate Isolation
    details: V2.0 MDC architecture makes phase-jumping structurally impossible. During research, execution rules are physically invisible to the AI — not just behavioral.
  - icon: 🤖
    title: Works with Any AI Tool
    details: Native MDC support for Cursor. Universal System Prompts for Claude, ChatGPT, and GitHub Copilot. One protocol, every tool.
---

<div class="premium-dashboard">

<!-- Tool Support Strip -->
<div class="tool-strip">
  <div class="tool-strip-label">Works with</div>
  <div class="tool-badges">
    <span class="tool-badge cursor">⬛ Cursor</span>
    <span class="tool-badge claude">🟠 Claude</span>
    <span class="tool-badge chatgpt">🟢 ChatGPT</span>
    <span class="tool-badge copilot">🔵 Copilot</span>
  </div>
</div>

<!-- Metrics Strip -->
<div class="metrics-strip">
  <div class="metric-card">
    <div class="metric-number">20</div>
    <div class="metric-label">Max logic lines per commit</div>
  </div>
  <div class="metric-card">
    <div class="metric-number">4</div>
    <div class="metric-label">Physical gate phases</div>
  </div>
  <div class="metric-card">
    <div class="metric-number">6</div>
    <div class="metric-label">Anti-patterns neutralized</div>
  </div>
  <div class="metric-card">
    <div class="metric-number">∞</div>
    <div class="metric-label">Audit trails preserved</div>
  </div>
</div>

<div class="control-grid">
<div class="control-panel terminal-window">
<div class="window-header">
<span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
<span class="title">architect_os — Audit Terminal</span>
</div>
<div class="window-body">
<div class="type-line">> System: Protocol V2.0 loaded <span class="status-ok">READY</span></div>
<div class="type-line delay-1">> Gate 200: Research lock active <span class="status-ok">LOCKED</span></div>
<div class="type-line delay-2">> Atomic Task 1.1: Interface defined <span class="status-ok">PASS</span></div>
<div class="type-line delay-3">> Gate 400: Awaiting audit "1" <span class="blink">_</span></div>
</div>
</div>

<div class="status-panel">
<div class="stat-card">
  <div class="stat-label">Gate Architecture</div>
  <div class="stat-value">Modular MDC</div>
  <div class="progress-bar"><div class="progress-fill fill-100"></div></div>
</div>
<div class="stat-card">
  <div class="stat-label">Cognitive Load</div>
  <div class="stat-value">Minimal</div>
  <div class="progress-bar"><div class="progress-fill fill-low"></div></div>
</div>
<div class="stat-card">
  <div class="stat-label">Human Control</div>
  <div class="stat-value">100%</div>
  <div class="progress-bar"><div class="progress-fill fill-100"></div></div>
</div>
</div>
</div>

<!-- Anti-Pattern Preview -->
<div class="section-title">🚫 What This Protocol Prevents</div>
<div class="value-grid">
  <div class="value-card">
    <div class="value-icon">🌊</div>
    <h4>The Avalanche</h4>
    <p>AI rewrites 600 lines when you asked for 10. Atomic audit limits stop this cold.</p>
  </div>
  <div class="value-card">
    <div class="value-icon">🤡</div>
    <h4>The Hallucinating Architect</h4>
    <p>AI recommends a library that doesn't exist. Gate 200 research requires dependency audit first.</p>
  </div>
  <div class="value-card">
    <div class="value-icon">🧠</div>
    <h4>The Context Amnesiac</h4>
    <p>AI forgets your architecture after 30 messages. Document-First gives it permanent memory.</p>
  </div>
  <div class="value-card">
    <div class="value-icon">💣</div>
    <h4>The Invisible Debt Merchant</h4>
    <p>AI leaves TODO landmines everywhere. Zero placeholder rule enforced at Gate 400.</p>
  </div>
</div>

</div>

<style>
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

.VPFeature {
  padding: 32px !important;
  background: rgba(var(--vp-c-bg-soft-rgb), 0.4) !important;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.05) !important;
  border-radius: 24px !important;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1) !important;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
.VPFeature article {
  display: grid !important;
  grid-template-columns: auto 1fr !important;
  grid-template-rows: auto auto !important;
  column-gap: 16px !important;
  align-items: center !important;
}
.VPFeature .icon { grid-column: 1 !important; grid-row: 1 !important; margin: 0 !important; width: 32px !important; height: 32px !important; }
.VPFeature .title { grid-column: 2 !important; grid-row: 1 !important; margin: 0 !important; font-size: 1.15rem !important; }
.VPFeature .details { grid-column: 1 / span 2 !important; grid-row: 2 !important; margin: 12px 0 0 0 !important; line-height: 1.6 !important; }
.VPFeature:hover {
  transform: translateY(-8px) scale(1.02);
  border-color: #50e3c2 !important;
  box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.3);
}

/* Dashboard Layout */
.premium-dashboard {
  max-width: 1100px;
  margin: 4rem auto 4rem;
  padding: 0 32px;
  position: relative;
  z-index: 20;
}

/* Tool Support Strip */
.tool-strip {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 2rem;
  padding: 16px 24px;
  background: rgba(var(--vp-c-bg-soft-rgb), 0.3);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  backdrop-filter: blur(10px);
}
.tool-strip-label { color: #86868b; font-size: 0.875rem; font-weight: 500; white-space: nowrap; }
.tool-badges { display: flex; gap: 12px; flex-wrap: wrap; }
.tool-badge {
  padding: 6px 16px; border-radius: 20px;
  font-size: 0.875rem; font-weight: 600;
  border: 1px solid rgba(255,255,255,0.1);
  transition: all 0.3s ease;
  cursor: default;
}
.tool-badge:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.2); }
.tool-badge.cursor { background: rgba(255,255,255,0.05); color: #fff; }
.tool-badge.claude { background: rgba(255,140,0,0.1); color: #ff8c00; border-color: rgba(255,140,0,0.2); }
.tool-badge.chatgpt { background: rgba(80,227,194,0.1); color: #50e3c2; border-color: rgba(80,227,194,0.2); }
.tool-badge.copilot { background: rgba(65,209,255,0.1); color: #41d1ff; border-color: rgba(65,209,255,0.2); }

/* Metrics Strip */
.metrics-strip {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 2.5rem;
}
.metric-card {
  padding: 20px 24px;
  background: rgba(var(--vp-c-bg-soft-rgb), 0.3);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  text-align: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}
.metric-card:hover { transform: translateY(-4px); border-color: rgba(80,227,194,0.3); }
.metric-number { font-size: 2.5rem; font-weight: 900; color: #50e3c2; line-height: 1; margin-bottom: 8px; }
.metric-label { font-size: 0.75rem; color: #86868b; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; }

/* Control Grid */
.control-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 32px;
  margin-bottom: 3rem;
}

/* Section Title */
.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 1.5rem 0;
  color: var(--vp-c-text-1);
}

/* Value Grid */
.value-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}
.value-card {
  padding: 24px;
  background: rgba(var(--vp-c-bg-soft-rgb), 0.3);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  transition: all 0.4s ease;
  backdrop-filter: blur(10px);
}
.value-card:hover { transform: translateY(-5px); border-color: #50e3c2; box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2); }
.value-icon { font-size: 2rem; margin-bottom: 12px; }
.value-card h4 { margin: 0 0 8px 0; color: #50e3c2; font-size: 1rem; }
.value-card p { margin: 0; font-size: 0.9rem; line-height: 1.6; color: #86868b; }

/* Terminal */
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
.blink { animation: blinker 1s step-end infinite; }

/* Status Panel */
.status-panel { display: flex; flex-direction: column; gap: 16px; }
.stat-card {
  background: rgba(var(--vp-c-bg-soft-rgb), 0.4);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.03);
  padding: 20px 24px;
}
.stat-label { color: #86868b; font-size: 11px; font-weight: 500; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px; }
.stat-value { font-size: 1.4rem; font-weight: 700; color: var(--vp-c-text-1); margin-bottom: 12px; }
.progress-bar { height: 4px; background: rgba(255,255,255,0.05); border-radius: 2px; overflow: hidden; }
.progress-fill { height: 100%; border-radius: 2px; }
.fill-100 { width: 100%; background: linear-gradient(90deg, #50e3c2, #41d1ff); }
.fill-low { width: 15%; background: #32d74b; box-shadow: 0 0 10px rgba(50,215,75,0.4); }

/* Hero */
.VPHero { padding-top: 100px !important; }
.name { letter-spacing: -2px !important; font-weight: 900 !important; }
.tagline { font-size: 1.1rem !important; color: #86868b !important; letter-spacing: 2px !important; margin-top: 20px !important; }

@keyframes fadeIn { to { opacity: 1; } }
@keyframes blinker { 50% { opacity: 0; } }

@media (max-width: 860px) {
  .control-grid { grid-template-columns: 1fr; }
  .metrics-strip { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 480px) {
  .metrics-strip { grid-template-columns: 1fr 1fr; }
  .tool-strip { flex-direction: column; align-items: flex-start; }
}
</style>
