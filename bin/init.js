#!/usr/bin/env node

'use strict';

const https = require('https');
const fs    = require('fs');
const path  = require('path');

// ── ANSI colors (zero dependencies) ─────────────────────────
const C = {
  reset:  '\x1b[0m',  bold:   '\x1b[1m',  dim:    '\x1b[2m',
  green:  '\x1b[32m', yellow: '\x1b[33m', cyan:   '\x1b[36m',
  red:    '\x1b[31m', blue:   '\x1b[34m',
};

// ── Files to fetch from GitHub ───────────────────────────────
const RAW = 'https://raw.githubusercontent.com/wangjiajiajohn/The-Architect-Protocol/main';

const FILES = [
  // MDC Gate Rules (Chinese + English)
  '.cursor/rules/100-core-instructions.mdc',
  '.cursor/rules/100-core-instructions.en.mdc',
  '.cursor/rules/200-research-gate.mdc',
  '.cursor/rules/200-research-gate.en.mdc',
  '.cursor/rules/300-planning-gate.mdc',
  '.cursor/rules/300-planning-gate.en.mdc',
  '.cursor/rules/400-execution-iron-lock.mdc',
  '.cursor/rules/400-execution-iron-lock.en.mdc',
  '.cursor/rules/500-verification-gate.mdc',
  '.cursor/rules/500-verification-gate.en.mdc',
  // Document templates
  'templates/research_summary_template.md',
  'templates/implementation_plan_template.md',
  'templates/adr_template.md',
  // System prompts for Claude / ChatGPT / Copilot
  'PROMPTS.md',
];

// ── HTTP fetch with redirect support ────────────────────────
function fetch(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, (res) => {
      if ([301, 302, 307, 308].includes(res.statusCode)) {
        return resolve(fetch(res.headers.location));
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks).toString('utf-8')));
      res.on('error', reject);
    });
    req.on('error', reject);
    req.setTimeout(15000, () => { req.destroy(); reject(new Error('timeout')); });
  });
}

function mkdirp(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

// ── Main ─────────────────────────────────────────────────────
async function main() {
  const line = `${C.cyan}${C.bold}${'━'.repeat(50)}${C.reset}`;

  console.log(`
${line}
${C.bold}  🏛  The Architect's Protocol  ${C.dim}v2.0${C.reset}
${C.dim}  Precision AI Engineering · Gate-Based Workflow${C.reset}
${line}
${C.dim}  Installing to: ${process.cwd()}${C.reset}
`);

  let ok = 0, fail = 0;

  for (const file of FILES) {
    const target = path.join(process.cwd(), file);
    process.stdout.write(`  ${C.dim}↓${C.reset} ${file.padEnd(55)}`);
    try {
      const content = await fetch(`${RAW}/${file}`);
      mkdirp(target);
      fs.writeFileSync(target, content, 'utf-8');
      console.log(`${C.green}✓${C.reset}`);
      ok++;
    } catch (err) {
      console.log(`${C.red}✗  ${err.message}${C.reset}`);
      fail++;
    }
  }

  const statusColor = fail === 0 ? C.green : C.yellow;
  console.log(`
${line}
${statusColor}${C.bold}  ${ok} files installed${fail > 0 ? `  (${fail} failed)` : '  · All OK ✅'}${C.reset}
${line}

${C.bold}  Next steps:${C.reset}

  ${C.cyan}1.${C.reset} Open this project in ${C.bold}Cursor${C.reset}
     MDC rules are now active → ${C.cyan}.cursor/rules/${C.reset}

  ${C.cyan}2.${C.reset} Start your next feature with ${C.bold}/r${C.reset} (Research Gate)
     The AI is now confined to read-only research mode.

  ${C.cyan}3.${C.reset} Using Claude / ChatGPT / GitHub Copilot?
     Copy the matching system prompt from ${C.bold}PROMPTS.md${C.reset}

${C.dim}  📖 Full docs: https://wangjiajiajohn.github.io/The-Architect-Protocol/${C.reset}
`);

  if (fail > 0) process.exit(1);
}

main().catch(err => {
  console.error(`\n${C.red}  Error: ${err.message}${C.reset}\n`);
  process.exit(1);
});
