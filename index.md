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


<script setup>
import { withBase } from 'vitepress'
</script>

<div class="section-title">💎 Why This Exists</div>
<div class="why-exists-block">
  <p>AI coding tools are often impulsive, leading to "AI Entropy"—unmaintainable code sprawl. Standard chat is a probabilistic "roll of the dice."</p>
  <p>The Architect's Protocol transforms AI from an impulsive generator into a <strong>Precision Engineering Officer</strong>. It enforces a deterministic pipeline of Research → Plan → Execute, using physical gate-locks to ensure you remain the Architect in control, never a "debugger chasing AI bugs."</p>
</div>

<div class="hero-install">
  <div class="hero-install-terminal">
    <span class="hero-install-prompt">$</span>
    <span class="hero-install-cmd">npx github:wangjiajiajohn/The-Architect-Protocol</span>
  </div>
  <div class="hero-install-note">No install required · Copies MDC rules, templates &amp; PROMPTS.md to your project</div>
</div>

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

<!-- Demo GIF: Problem → Solution payoff -->
<div class="section-title">🎥 See It in Action</div>
<div class="demo-gif-block">
  <img :src="withBase('/demo.gif')" alt="Protocol before &amp; after — terminal demo" class="demo-gif" />
  <div class="demo-gif-caption">
    <span>Without protocol: 1,604 lines, no control.</span>
    <span>With protocol: 3 atomic steps, every one auditable.</span>
    <a href="/The-Architect-Protocol/guide/quick-start">→ Get started in 3 minutes</a>
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

/* CLI Install Block */
.cli-install-block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 1rem;
  margin-bottom: 2rem;
  align-items: center;
}
.cli-terminal {
  background: #000;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.1);
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}
.cli-header {
  background: rgba(255,255,255,0.03);
  padding: 12px 16px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}
.cli-title { flex: 1; text-align: center; color: #555; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; }
.cli-body {
  padding: 24px;
  font-family: 'SF Mono', 'Consolas', monospace;
  font-size: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.cli-prompt { color: #50e3c2; font-weight: 700; }
.cli-cmd { color: #e5e5e5; word-break: break-all; }
.cli-desc p { margin: 0 0 12px; color: var(--vp-c-text-2); font-size: 0.95rem; }
.cli-desc ul { margin: 0; padding-left: 20px; }
.cli-desc li { color: var(--vp-c-text-2); font-size: 0.9rem; line-height: 2; }
.cli-desc code { background: rgba(80,227,194,0.1); color: #50e3c2; padding: 2px 6px; border-radius: 4px; font-size: 0.85em; }
@media (max-width: 768px) {
  .cli-install-block { grid-template-columns: 1fr; }
}

/* Hero Install Bar — above-the-fold install command */
.hero-install {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 32px 24px 8px;
  max-width: 600px;
  margin: 0 auto;
}
.hero-install-terminal {
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(80, 227, 194, 0.25);
  border-radius: 12px;
  padding: 14px 24px;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0 0 30px rgba(80, 227, 194, 0.08), 0 8px 32px rgba(0,0,0,0.3);
  transition: border-color 0.3s, box-shadow 0.3s;
  cursor: text;
}
.hero-install-terminal:hover {
  border-color: rgba(80, 227, 194, 0.5);
  box-shadow: 0 0 40px rgba(80, 227, 194, 0.15), 0 8px 32px rgba(0,0,0,0.3);
}
.hero-install-prompt {
  color: #50e3c2;
  font-family: 'SF Mono', 'Consolas', monospace;
  font-weight: 700;
  font-size: 1rem;
  flex-shrink: 0;
}
.hero-install-cmd {
  color: #e5e5e5;
  font-family: 'SF Mono', 'Consolas', monospace;
  font-size: 0.95rem;
  letter-spacing: 0.3px;
}
.hero-install-note {
  font-size: 0.8rem;
  color: #666;
  text-align: center;
}
@media (max-width: 480px) {
  .hero-install { padding: 20px 16px 4px; }
  .hero-install-cmd { font-size: 0.8rem; }
}

/* Demo GIF block */
.demo-gif-block {
  margin-top: 1rem;
  margin-bottom: 2.5rem;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(80, 227, 194, 0.2);
  box-shadow: 0 0 40px rgba(80, 227, 194, 0.08), 0 20px 60px rgba(0,0,0,0.3);
}
.demo-gif {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 16px 16px 0 0;
}
.demo-gif-caption {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  padding: 12px 20px;
  background: rgba(80, 227, 194, 0.04);
  border-top: 1px solid rgba(80, 227, 194, 0.1);
  font-size: 0.8rem;
}
.demo-gif-caption span { color: #86868b; }
.demo-gif-caption a {
  color: #50e3c2;
  text-decoration: none;
  font-weight: 600;
  white-space: nowrap;
}
.demo-gif-caption a:hover { text-decoration: underline; }
@media (max-width: 600px) {
  .demo-gif-caption { flex-direction: column; align-items: flex-start; }
}

.why-exists-block {
  max-width: 800px;
  margin: 0 auto 2rem;
  text-align: center;
  padding: 0 20px;
}
.why-exists-block p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
}
.why-exists-block strong {
  color: #50e3c2;
}

.section-title {
  text-align: center;
  margin-top: 4rem;
}
</style>
