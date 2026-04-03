#!/bin/bash
# ============================================================
# Protocol Demo Script
# Shows: WITHOUT PROTOCOL vs WITH PROTOCOL
# Designed for asciinema rec --command ./demo.sh
# ============================================================

C_RESET='\033[0m'
C_BOLD='\033[1m'
C_DIM='\033[2m'
C_RED='\033[31m'
C_GREEN='\033[32m'
C_YELLOW='\033[33m'
C_CYAN='\033[36m'
C_WHITE='\033[37m'
C_RED_BG='\033[41m'
C_GREEN_BG='\033[42m'

# Simulate typing
type_line() {
  local text="$1"
  local speed="${2:-0.045}"
  for (( i=0; i<${#text}; i++ )); do
    printf "%s" "${text:$i:1}"
    sleep "$speed"
  done
  echo
}

# Prompt simulation
prompt() { printf "${C_DIM}❯${C_RESET} "; }

clear
tput civis  # hide cursor

# ── HEADER ──────────────────────────────────────────────────
echo
printf "${C_DIM}  The Architect's Protocol — Before & After${C_RESET}\n"
echo
sleep 0.6

# ════════════════════════════════════════════════════════════
# PART 1: WITHOUT PROTOCOL
# ════════════════════════════════════════════════════════════
printf " ${C_RED}${C_BOLD}╔══════════════════════════════════════════╗${C_RESET}\n"
printf " ${C_RED}${C_BOLD}║  ✗  WITHOUT PROTOCOL                     ║${C_RESET}\n"
printf " ${C_RED}${C_BOLD}╚══════════════════════════════════════════╝${C_RESET}\n"
echo
sleep 0.4

prompt
type_line "\"Add user login with JWT\"" 0.05

sleep 0.3
printf "${C_YELLOW}  AI: Sure! Let me help you with that...${C_RESET}\n"
sleep 0.5

printf "${C_DIM}      modifying  src/app.js${C_RESET}              ${C_RED}+847 lines${C_RESET}\n"; sleep 0.2
printf "${C_DIM}      creating   src/auth/jwt.service.ts${C_RESET}  ${C_RED}+312 lines${C_RESET}\n"; sleep 0.2
printf "${C_DIM}      modifying  src/middleware/index.ts${C_RESET}   ${C_RED}+156 lines${C_RESET}\n"; sleep 0.2
printf "${C_DIM}      modifying  prisma/schema.prisma${C_RESET}      ${C_RED}+89 lines${C_RESET}\n"; sleep 0.2
printf "${C_DIM}      creating   src/utils/token.ts${C_RESET}        ${C_DIM}(TODO: expiry logic)${C_RESET}\n"; sleep 0.2
printf "${C_DIM}      modifying  package.json${C_RESET}\n"; sleep 0.2
printf "${C_DIM}      creating   tests/auth.test.ts${C_RESET}        ${C_DIM}(TODO: test bodies)${C_RESET}\n"; sleep 0.3

echo
printf "${C_YELLOW}  AI: Done! ${C_RED}${C_BOLD}1,604 lines changed.${C_RESET}${C_YELLOW} Please review carefully!${C_RESET}\n"
sleep 0.4
printf "${C_DIM}  You: ...where do I even start?${C_RESET}\n"
sleep 1.0

echo
printf "${C_DIM}  ──────────────────────────────────────────${C_RESET}\n"
echo
sleep 0.7

# ════════════════════════════════════════════════════════════
# PART 2: WITH PROTOCOL
# ════════════════════════════════════════════════════════════
printf " ${C_GREEN}${C_BOLD}╔══════════════════════════════════════════╗${C_RESET}\n"
printf " ${C_GREEN}${C_BOLD}║  ✓  WITH PROTOCOL                        ║${C_RESET}\n"
printf " ${C_GREEN}${C_BOLD}╚══════════════════════════════════════════╝${C_RESET}\n"
echo
sleep 0.4

prompt
type_line "/r  Add user login with JWT" 0.05

sleep 0.3
printf "${C_CYAN}  [Gate 200: Research Mode — read only]${C_RESET}\n"
sleep 0.5
printf "  ${C_DIM}→ Express 4.18 + existing session middleware${C_RESET}    ${C_GREEN}✓${C_RESET}\n"; sleep 0.3
printf "  ${C_DIM}→ Risk: JWT conflicts with current sessions  ${C_RESET}    ${C_YELLOW}⚠${C_RESET}\n"; sleep 0.3
printf "  ${C_DIM}→ Dependency: jsonwebtoken@9.0 verified      ${C_RESET}    ${C_GREEN}✓${C_RESET}\n"; sleep 0.3
echo
printf "${C_CYAN}  AI: Research complete. 2 options identified.${C_RESET}\n"
printf "${C_DIM}      Option A: JWT stateless (recommended)${C_RESET}\n"
printf "${C_DIM}      Option B: session + Redis${C_RESET}\n"
echo
printf "  ${C_BOLD}Reply ${C_GREEN}1${C_RESET}${C_BOLD} to proceed to planning.${C_RESET}\n"
sleep 0.5

echo
prompt
type_line "1" 0.08

sleep 0.3
printf "${C_CYAN}  [Gate 300: Planning Mode]${C_RESET}\n"
sleep 0.4
printf "  ${C_DIM}→ Step 1: add jwt middleware (≤20 lines)${C_RESET}\n"; sleep 0.2
printf "  ${C_DIM}→ Step 2: add /login route (≤20 lines)${C_RESET}\n"; sleep 0.2
printf "  ${C_DIM}→ Step 3: protect routes (≤20 lines)${C_RESET}\n"; sleep 0.3

echo
printf "${C_CYAN}  AI: Plan ready. Each step ≤ 20 lines.${C_RESET}\n"
printf "  ${C_BOLD}Reply ${C_GREEN}1${C_RESET}${C_BOLD} to execute Step 1.${C_RESET}\n"
sleep 0.6

echo
printf "${C_DIM}  ──────────────────────────────────────────${C_RESET}\n"
echo
printf "  ${C_GREEN}${C_BOLD}You're in control. Every step is auditable.${C_RESET}\n"
echo
printf "${C_DIM}  \$ npx github:wangjiajiajohn/The-Architect-Protocol${C_RESET}\n"
echo

tput cnorm  # restore cursor
sleep 1.5
