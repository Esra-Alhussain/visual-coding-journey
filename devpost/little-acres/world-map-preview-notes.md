# World map preview · 2026-10-21

Owner approved building a separate preview after agreeing to five islands matching Lesson 1's painted style. Approval covers exploration, not replacing the current map or publication.

Open world-map-preview.html. Five inspectable island markers reflect the existing five chapter topics; only Island 1 enters first-lesson.html. The farm, watermill, glass garden, lighthouse and orchard themes are proposals. No authentication, progress, lesson runtime, current entry or public deployment changed. English-only preview; bilingual implementation awaits design selection.

Technique: painted raster world plus independent HTML controls, vector route, soft atmospheric layers, hover response and reduced-motion support. This is dimensional 2D presentation, not a 3D engine or a verified claim about current game trends. At phone widths the complete map remains visible; chapter details flow below.

Checks: JavaScript syntax and local asset/selection/availability simulation pass. Initial sandboxed Chrome rendering failed with GPU-process errors; an escalated headless screenshot was requested. Visual approval is pending. Review marker legibility on phones and whether the world is sufficiently close to Lesson 1 before integration.

Generated with the built-in imagegen tool, using art/restoration-shell.png as a style reference. Image: art/world-map-preview.png. Exact generation prompt: world-map-preview-prompt.txt.

Scope / PRD boundary: same five planned chapter topics, only Chapter 1 available. No new curriculum or unlock behavior. The frozen main PRD is unchanged.

Checklist:
- [x] Standalone preview, preserving existing map
- [x] Five islands and chapter details
- [x] First-island lesson link; future chapters marked coming soon
- [x] Responsive full overview and reduced motion
- [x] Syntax, links and selection checks
- [x] Desktop screenshot rendered and visually inspected at 1440×1250; five markers and complete coastlines visible
- [ ] Phone rendered visual verification
- [ ] Owner design approval
- [ ] Bilingual polish / integration, only after approval
