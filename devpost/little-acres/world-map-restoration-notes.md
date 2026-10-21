# Abandoned-world preview — 2026-10-21

Owner liked the painted illustrations, requested empty/old islands needing restoration and a motivating final goal, then authorized a second preview. Entry: world-map-restoration.html. Original preview and current home preserved.

Art: art/world-map-abandoned.png, built-in imagegen edit of art/world-map-preview.png; exact prompt in world-map-abandoned-prompt.txt. Coastlines/landmarks aligned, ruined roofs/docks, dry beds, bare orchard, damaged greenhouse and dark lighthouse. Some greenery and mill water remain as hopeful environmental detail. Original art is a possible restoration vision; it has no illuminated beacon, so it is not the finished finale artwork.

Story direction for review: restore the five islands, then relight the lighthouse to reconnect Mochi's home. Lighthouse repairs can occur during Island 4; final lighting follows all five. No additional island or curriculum added. Detailed restoration milestones/rewards/finale and learner-code connections still require product definition and implementation. No playable restoration or unlocking is claimed.

UI: full goal callout, per-island restoration context, reversible art-vision toggle labeled as concept rather than earned progress. Only Island 1 opens existing Lesson 1, which does not yet implement this restoration storyline. English-only preview. No accounts, saved progress, active routes or publishing changed.

Verification: JS syntax, local links/assets, all five selections/availability and toggle roundtrip including aria-pressed/alt state pass in Node simulation. A 430×1100 headless Chrome screenshot was captured for visual review. Owner acceptance pending.

- [x] Separate abandoned-world artwork and page
- [x] Preserve beautiful version and current home
- [x] Visible final goal; distinguish story concept from implemented features
- [x] Selection and comparison checks
- [ ] Owner review of abandoned-world appearance and goal
- [ ] Define restoration milestones and earned finale after design review

### Island summaries and sequential lock preview — 2026-10-21
Owner authorized topic/restoration cards and dimmed future islands in the separate restoration preview. Open world-map-restoration.html. Inspectable Islands 2–5 have shaded art regions, lock labels and exact previous-island prerequisites; only Island 1 can be entered. Each selection separates What you will learn from What you will restore; restoration copy is labeled Story concept. Future chapter status explicitly remains in development. Art-vision toggle removes shading for comparison without unlocking entry or recording completion. Existing first lesson, current home, authentication, saved progress and original beautiful preview unchanged. Sequential earned unlocking and completed/revisit states remain unimplemented pending chapter integration; do not infer progress from inspection. Both runtime scripts tested together: five summaries, prerequisite text, entry restrictions and reversible comparison pass. Desktop review image: review-world-island-locks.png. Phone interaction review pending. Same ENG-006 design iteration, no new audience milestone or publication.

### Tap-to-open island summaries — 2026-10-21
Owner rejected the permanent summary below the map and authorized showing the popup alternative. world-map-restoration.html now opens its existing summary inside a native modal dialog only after an island marker is activated. Desktop centered popup; phone CSS bottom sheet; close button, backdrop click, native Escape/focus containment, return focus to triggering island. Existing lesson entry restrictions and learning/restoration copy retained. No saved unlocking or active-home changes. Added world-map-popup.css/js. Existing five-island selection/lock/comparison tests and JS syntax pass. Review screenshot: review-island-popup.png. Physical-phone and assistive-technology review pending. This is a refinement of the same ENG-006 preview, not a new marketing milestone.

### Compact island card, map stays visible — 2026-10-21
Owner approved replacing the large obscuring modal with a compact island-side card. world-map-popup.js now uses a nonmodal dialog positioned beside the selected marker, clamped to the desktop viewport and repositioned on scroll/resize. Phone styling uses a small bottom card capped at 45dvh. No blur, backdrop dimming or scroll lock; map remains interactive. Selecting another island updates/repositions the card. Outside click, close and Escape dismiss it; focus returns to the trigger. Topic/restoration copy and entry locks retained. JS syntax and existing island summary/availability/comparison tests pass; desktop screenshot review-island-tooltip.png captured. Phone native-device review pending. Same ongoing preview refinement, no new content checkpoint or publishing.

### Short playful island cards — 2026-10-21
Owner approved reducing dense text and increasing readability/fun. Existing compact card now uses emoji/place title, one-line invitation, a short Learn badge and concise Mission phrase; larger 22–23px title and 13–14px content. First island: First Steps / Give Mochis farm a fresh start / Python basics / Repair the cottage, revive the garden / Lets begin. Existing full lesson text unchanged; map preview still marks restoration as concept. All five cards shortened; original map/home unchanged. JS syntax and combined selection/prerequisite/entry/comparison checks pass. Desktop review: review-island-playful.png. Native phone visual review pending; no publication or earned progress changes. Same ENG-006 design refinement.
