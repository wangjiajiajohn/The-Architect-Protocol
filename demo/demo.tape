# The Architect's Protocol — Before & After Demo
# Run: vhs demo.tape
# Output: demo.gif

Output demo.gif

# ── Terminal appearance ─────────────────────────────────────
Set Shell "bash"
Set FontSize 20
# Use a generic monospace font to avoid spacing issues
Set FontFamily "monospace"
Set Width 1200
Set Height 800
Set Theme "Dracula"
Set Padding 40
Set LoopOffset 50%
Set PlaybackSpeed 1.0

# ── Start ───────────────────────────────────────────────────
Hide
Type "clear && bash demo.sh"
Show
Enter

# Wait for the script to finish naturally (~28s)
Sleep 30s
