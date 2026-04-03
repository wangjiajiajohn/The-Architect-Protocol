# Research Summary: Floating TOC for SOP.md

We aim to add a persistent/floating Table of Contents (TOC) specifically for the `SOP.md` file to improve navigation in this long-form document.

## 🔍 Discovery
- **VitePress Native**: VitePress handles outlines via the `themeConfig.outline` or per-page frontmatter. Currently, `SOP.md` is missing frontmatter, which might be why the TOC is not detailed or persistent enough.
- **Layout**: The current theme is the default VitePress theme.
- **Constraints**: We want something that feels "Architect-level"—clean, functional, and unobtrusive.

## 🛠️ Proposed Options

### Option 1: Native "Deep Outline" Enhancement (Low Effort, High Stability)
- **Action**: Add frontmatter to `SOP.md`:
  ```yaml
  ---
  outline: [2, 3]
  ---
  ```
- **Pros**: Zero JS overhead, fully responsive, follows theme design.
- **Cons**: Might be hidden on mobile (requires the native "On this page" menu).

### Option 2: Custom Floating Nav Component (High Effort, High Control)
- **Action**: Create a Vue component `src/components/SOPFloatingNav.vue` that renders a fixed-position floating button/menu.
- **Pros**: Always visible, can be themed with the project's "control dashboard" style.
- **Cons**: Requires managing scroll-spy manually or via VitePress hooks.

### Option 3: Sidebar Granularity
- **Action**: Update `.vitepress/config.mts` to break `SOP.md` into sub-links in the sidebar.
- **Pros**: Standard UX.
- **Cons**: Breaks the "single document" feel of the protocol.

## 📝 User Review Required
Please **mark up** your preference or leave comments below:
- **Decision**: **Option 2 (Custom Floating Nav)** selected.
- **Theme**: **Pink (粉色 #FF79C6)** accent for active states.
- Follow-up: This TOC will initially apply to `SOP.md`.

> [!IMPORTANT]
> **Status**: Research Summary updated with your specific details. 
> I am now **Locked** in the Research Phase (/r) per the new **Strict Gating Lock**.
> Please reply **"1"** to explicitly transition to the Planning Phase (/p).
