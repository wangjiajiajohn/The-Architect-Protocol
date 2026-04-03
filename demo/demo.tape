# The Architect's Protocol — High Definition Terminal Demo
# Run: vhs demo.tape
# Output: demo.gif

Output demo.gif

# ── Terminal appearance ─────────────────────────────────────
Set Shell "bash"

# High Definition Settings
Set FontSize 24
Set Width 1600
Set Height 1100
Set Padding 80
Set Theme "Dracula"

# Fix spacing issues by using a default fixed-width font
# and slow down playback slightly for clarity
Set PlaybackSpeed 0.8
Set LoopOffset 50%

# ── Start ───────────────────────────────────────────────────
Hide
Type "clear && bash demo.sh"
Show
Enter

# Wait for the script to finish naturally (~35s at 0.8x speed)
Sleep 35s
