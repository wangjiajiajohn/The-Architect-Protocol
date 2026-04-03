# The Architect's Protocol — Before & After Demo
# Run: vhs demo.tape
# Output: demo.gif (30 seconds)

Output demo.gif

# ── Terminal appearance ─────────────────────────────────────
Set Shell "bash"
Set FontSize 15
Set FontFamily "JetBrains Mono"
Set Width 900
Set Height 560
Set Theme "Dracula"
Set Padding 24
Set LoopOffset 50%
Set PlaybackSpeed 1.0

# ── Start ───────────────────────────────────────────────────
Hide
Type "clear && bash demo.sh"
Show
Enter

# Wait for the script to finish naturally (~28s)
Sleep 30s
