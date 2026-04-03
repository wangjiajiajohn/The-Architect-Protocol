---
layout: home

hero:
  name: The Architect's Protocol
  text: High-Efficiency Synergy
  tagline: Instruction-Driven ・ Rule-Constraint ・ Human-Audit ・ Minimal-Interaction
  image:
    src: /hero-banner.png
    alt: The Architect's Protocol
  actions:
    - theme: brand
      text: Start High-Efficiency Paradigm
      link: /en/guide/1-crisis
    - theme: alt
      text: View SOP Protocol
      link: /en/SOP

features:
  - icon: 🕹️
    title: 1. Instruction-Driven
    details: Refuse aimless chatter. AI executes logic strictly based on preset cmd sets (/r, /p, /e). Engineers are commanders issuing mission directives, not just writers.
  - icon: 🏰
    title: 2. Rule-Constraint
    details: Solidify engineering taste into underlying discipline. Lock in SOLID/DRY principles via SOP & .cursorrules, ensuring every line carries architectural integrity.
  - icon: 🔬
    title: 3. Human-Audit
    details: Every atomic unit is reviewed via human-level Diff audit. Replying "1" is not just permission—it is the final signature of physical system truth.
  - icon: ⚡
    title: 4. Minimal-Interaction
    details: Pursue minimal cognitive load. Through efficient shortcuts and atomic development, simplify complex refactoring into the high-efficiency "Review Diff -> Reply 1" experience.
---

# 🏆 The Architect's Protocol
## AI-Human Collaborative Engineering — High-Efficiency Edition (2026)

> [!IMPORTANT]
> **Reclaiming Control**: This is not just about using AI to code; it's about establishing an **Audit-First** engineering discipline.
> We transform AI from an "impulsive implementer" into a "precision engineering officer" through a hard-coded **SOP & Gating Matrix**.

---

### 🏛️ The Survival Guide for Modern Engineers

In the era of collapsing engineering standards, we provide a **Defense System** for your architecture:

1.  **Atomic Audit Loop**: Logic <= **20 lines**; UI/Markup/Config <= **100 lines**.
2.  **Modular MDC Rules (V2.0)**: Use Cursor's native `.mdc` to physically isolate phase-permissions.
3.  **Document-First Gating**: Mandatory Research (/r) and Planning (/p) docs before execution (/e).

---

[Explore the Protocol](./guide/1-crisis) | [SOP Manual](./SOP) | [Usage Example](./USAGE_EXAMPLE) | [ADR Records](./ARCH)

<div class="premium-dashboard">
<div class="control-grid">
<div class="control-panel terminal-window">
<div class="window-header">
<span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
<span class="title">architect_os — Audit Terminal</span>
</div>
<div class="window-body">
<div class="type-line">> System: Authentication successful <span class="status-ok">READY</span></div>
<div class="type-line delay-1">> Protocol V2.0: Modular MDC Loaded <span class="status-ok">LOCKED</span></div>
<div class="type-line delay-2">> Atomic Task: Phase 1.1 generated <span class="status-warn">PENDING</span></div>
<div class="type-line delay-3">> Command: Waiting for confirm '1' <span class="blink">_</span></div>
</div>
</div>

<div class="status-panel">
<div class="stat-card">
<div class="stat-label">Architecture</div>
<div class="stat-value">Modular MDC</div>
<div class="progress-bar"><div class="progress-fill fill-100"></div></div>
</div>
<div class="stat-card">
<div class="stat-label">Cognitive Load</div>
<div class="stat-value">Minimal</div>
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
