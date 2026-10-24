---
doc: spec
status: draft
updated: 2026-10-24
---

# Mochi — current technical plan

This current-state summary is reconciled from source, tests and owner decisions. Historical implementation notes remain in little-acres/spec.md below its current summary.

## Architecture and source of truth
- Framework-free HTML/CSS/JavaScript static site; no package installation or backend server is required for local guest development.
- Maintained site sources: devpost/little-acres/. Deployable files: public/.
- Regenerate public/ with node devpost/little-acres/build-public.cjs. Its explicit allowlist excludes planning documents and review screenshots.
- Desktop index.html retains the living map; the current phone redirect loads phone.html. The lean phone page avoids heavy decorative/auth startup dependencies.
- first-lesson.html owns the existing five-activity lesson and bilingual UI; chapter-engine.js is a bounded print/assignment/arithmetic/comment interpreter, not general Python.

## Phone lesson and grid
lesson-phone.css supplies the approved farm-first phone split. The original optimized restoration-shell-1600.webp and play-mochi-512.webp remain in use. Image-relative coordinates and ResizeObserver/VisualViewport handling keep Mochi at the doorway as the scene scales. The farm-square-grid is decorative, noninteractive and phone-scoped; its size follows artwork scale. There is no arrival controller, phone-walk.js, route/step parser, numbered movement path or generated paving asset in the active build.

## State and services
Existing lesson state and draft handling remain intact. Guest progress uses browser storage; auth-client.js provides the existing Supabase account/progress bridge with browser-safe public configuration. Do not add private credentials to repository files. OAuth/provider and real-account verification remain separate pending work.

## Validation commands
- node devpost/little-acres/check-public-map.cjs
- node devpost/little-acres/check-map-islands.cjs
- node devpost/little-acres/check-map-nature.cjs
- node devpost/little-acres/check-map-water-fallback.cjs
- node devpost/little-acres/check-chapter-flow.cjs and check-chapter-language.cjs cover the related earlier chapter runtime; they do not replace a first-lesson.html browser playthrough.
- Check the selected first lesson in a real browser at narrow phone widths and desktop: five activities, errors, Next/Finish, visible scene feedback and map return. Test language behavior when relevant. Keep physical-device/keyboard and assistive-technology outcomes separate from emulation.
- Legacy little-acres/check.cjs targets an obsolete homepage; do not call it proof of current homepage readiness.

## Local preview and publication
Serve public/ with python3 -m http.server 8080 --bind 127.0.0.1 --directory public from the repository root. A cloud loopback address is not a phone-accessible shared preview; use screenshots for review unless an actual accessible preview is provided.

Keep using the existing branch and push changes to main. .github/workflows/pages.yml has workflow_dispatch only. A commit or push must not publish the site. Run that workflow only after the owner explicitly requests publication. Preserve other concurrent repository changes; never force-push to work around them.

## Current limitations and next work
Lesson/grid design editing is paused; the desktop map sharpness correction is authorized. Grid use/movement remains deferred; no movement implementation is authorized by the presence of the grid. Native phone keyboard/touch/accessibility review remains pending. Real account/provider checks are not claimed passed. Later islands/finale, curriculum expansion and a general Python runtime are outside the current proof-of-concept.

## Desktop map sharpness — 2026-10-24
world-map-living.js now composites animated water only over the static original map. WebGL requests an alpha canvas with straight alpha and outputs the conservative water mask as alpha; dry land is transparent rather than resampled/repainted. The subtle foliage warp is removed from this canvas pass. Canvas2D clears to transparency each frame and draws only masked displaced water; fallback resolution increases from 960×640 to source 1536×1024. Existing visibility/pause/reduced-motion/vision behavior remains. Homepage script version v4 refreshes cached renderer code. No new/generated/upscaled art or phone/lesson design changes.
