---
layout: home

hero:
  name: The Architect's Protocol
  text: AI-Human Collaborative Engineering
  tagline: 2026 Master Edition — AI doesn't lack intelligence; it lacks discipline.
  image:
    src: /hero-banner.png
    alt: The Architect's Protocol
  actions:
    - theme: brand
      text: Start Reading Guide
      link: /en/guide/1-crisis
    - theme: alt
      text: Core SOP Protocol
      link: /en/SOP

features:
  - icon: 🧠
    title: Reshaping AI & Engineers
    details: Fundamentally exploring how software engineers should reposition their value through "Architecture First" in the age of automated generation.
    link: /en/guide/1-crisis
  - icon: 🛡️
    title: Iron-Clad Engineering Flow
    details: The true defense line lies in discipline. Learn how to achieve industrial-level logic isolation through mandatory research and plan SOP.
    link: /en/SOP
  - icon: ⚡
    title: Flawless Directives Base
    details: Leverage extremely polished system directives (PROMPTS) and underlying system walls (Rules) infused with SOLID principles.
    link: /en/PROMPTS
---

<div class="cyber-dashboard">
  <div class="terminal-window">
    <div class="window-header">
      <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
      <span class="title">architect_audit.sh</span>
    </div>
    <div class="window-body">
      <div class="type-line">> Initializing Audit-First Protocol... <span class="status-ok">[OK]</span></div>
      <div class="type-line delay-1">> Loading SOLID / DRY Constraints... <span class="status-ok">[OK]</span></div>
      <div class="type-line delay-2">> Mounting AI Runtime Environment... <span class="status-warn">[RESTRICTED]</span></div>
      <div class="type-line delay-3">> Waiting for human authorization <span class="blink">_</span></div>
    </div>
  </div>
</div>

<style>
/* 覆盖默认 VitePress Home 样式，增加极客科技感 */
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #50e3c2 30%, #41d1ff);
  
  /* 给英雄区的图片加一个炫酷的光晕背景 */
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #50e3c2 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(70px);
}

/* 整个背景叠加一层科技网格与呼吸遮罩 */
.VPHome {
  position: relative;
}
.VPHome::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; bottom: 0;
  background-image: 
    linear-gradient(to right, var(--vp-c-divider) 1px, transparent 1px),
    linear-gradient(to bottom, var(--vp-c-divider) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.2;
  mask-image: radial-gradient(circle at top center, black, transparent 70%);
  -webkit-mask-image: radial-gradient(circle at top center, black, transparent 70%);
  z-index: -1;
  pointer-events: none;
}

/* 将底下的 Features 卡片变成赛博风格毛玻璃 */
.VPFeature {
  background: rgba(var(--vp-c-bg-soft-rgb), 0.3) !important;
  backdrop-filter: blur(12px);
  border: 1px solid var(--vp-c-divider) !important;
  border-top: 1px solid rgba(80, 227, 194, 0.2) !important;
  transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1) !important;
}
.VPFeature:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2) !important;
  border-color: #50e3c2 !important;
}

/* 终端面板样式 */
.cyber-dashboard { margin-top: 4rem; display: flex; justify-content: center; padding: 0 24px; position:relative; z-index: 10; }
.terminal-window {
  width: 100%;
  max-width: 860px;
  background: #0d1117;
  border-radius: 12px;
  border: 1px solid #30363d;
  box-shadow: 0 25px 50px rgba(0,0,0,0.5);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  overflow: hidden;
  position: relative;
}
.terminal-window::after {
  content: '';
  position: absolute; top: -50%; left: -50%; width: 200%; height: 200%;
  background: conic-gradient(transparent, rgba(80, 227, 194, 0.08), transparent 40%);
  animation: radar 6s linear infinite;
  pointer-events: none;
}
@keyframes radar { 100% { transform: rotate(360deg); } }

.window-header {
  background: #161b22;
  padding: 12px 16px;
  display: flex; align-items: center;
  border-bottom: 1px solid #30363d;
}
.dot { width: 12px; height: 12px; border-radius: 50%; margin-right: 8px; }
.dot.red { background: #ff5f56; } 
.dot.yellow { background: #ffbd2e; } 
.dot.green { background: #27c93f; }
.title { margin: 0 auto; color: #8b949e; font-size: 0.85rem; font-weight: bold; letter-spacing: 1px;}
.window-body { padding: 1.8rem; color: #c9d1d9; font-size: 1rem; line-height: 2; position: relative; z-index: 1;}

.type-line { opacity: 0; animation: fade-in 0.1s forwards; margin-bottom: 10px;}
.delay-1 { animation-delay: 1.5s; }
.delay-2 { animation-delay: 3s; }
.delay-3 { animation-delay: 4.5s; color: #58a6ff; }
.status-ok { color: #3fb950; font-weight: bold; float: right; letter-spacing: 1px;}
.status-warn { color: #ffbd2e; font-weight: bold; float: right; letter-spacing: 1px;}
.blink { animation: blink 1s step-end infinite; color: #50e3c2; font-weight: bold; margin-left: 5px;}

@keyframes fade-in { to { opacity: 1; } }
@keyframes blink { 50% { opacity: 0; } }
</style>
