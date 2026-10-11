### Volumetric egg material — 2026-10-11

Applied egg-only lavender radial shading, asymmetric egg curvature, inset lighting, purple bloom, cyan jagged seam glow and contact shadow. Both shell halves share the same material. Retained absolute positioning and unclipped parent so fragments fly apart without an opaque egg remaining behind. All JavaScript, dimensions and hatch timing unchanged. Regression checks pass; rendered visual review pending. Exact PRD untouched.

### Compact HUD sizing — 2026-10-11

User authorized CSS sizing exception: egg 150x210px with 20px auto margin, recentered left coordinate; terminal max-width 760px, height 400px, 30px auto margin. Percentage-based shell clip paths and inset overlays scale with egg footprint. Shell trajectories and 2.5s/.8s fracture/reveal timings unchanged; every script element byte-for-byte unchanged. Automated dimensions, hatch and interaction regressions pass. Browser visual review pending. Exact PRD untouched.

### Physical egg hatch refinement — 2026-10-11

Explicit user approval scoped HTML/CSS changes to the egg asset. Added static 220x300 egg with two complementary jagged shell halves and a neon fracture seam. CSS shake runs for 2 seconds; JS triggers split at 2.5 seconds; halves translate ±80px and rotate ±15° while fading over .8 seconds. Blank Mochi scales/fades in concurrently, keeping its existing scene anchor. Reduced-motion fallback retained. Terminal, telemetry and sliders unchanged. Geometry/timeline tests and existing lesson regressions pass; rendered visual review pending. Exact user-authored PRD remains untouched.

### Lesson 1: Egg Awakening — 2026-10-11

Read frozen UI reference (spec.md remains an empty directory). Added scene-only JavaScript state machine: egg shakes/hatches on document readiness/window load; blank pink Mochi hides eyes/mouth; valid eyes happy/cute/starry reveals eyes with bounce; valid mouth smile/cat_face reveals mouth with flip; name and greeting complete the character and lock exact greeting in persistent bubble. Safe parser accepts DNA choices; no arbitrary code execution. Reduced motion skips animation; GSAP uses native keyframe fallback. DOM readiness prevents optional CDN from delaying hatch. All non-script HTML and CSS unchanged byte-for-byte. Automated state order, partial greeting, completion lock and existing lesson/slider checks pass. Browser visual verification pending.

### Isolated Lesson 1 greeting connection — 2026-10-11

Checked spec.md (empty directory) and read ui-layout-reference.md before editing. Only application JavaScript changed: native input preview reads the line-1 greeting as each character is typed, retains the same permanent light bubble, handles deletion to empty text and avoids truncation. CSS and all non-script HTML are byte-for-byte unchanged. Live typing/empty/exact text tests plus lesson/slider regressions pass; browser visual review pending.

### Sharp cosmic console with hardware pane — 2026-10-11

Latest approved direction replaces the prior room-led appearance with a midnight-violet starfield, SYSTEM: ACTIVE / LOFI BOUNCE header accents, circular pink Mochi with thick cyan glowing headphones, centered console title/control dots, thin glowing teal terminal border and Fira Code-preferred syntax palette. Added dark grey 3-column metadata and responsive range controls, initialized at 40 Hz and 56%. Speed slider changes idle animation duration; intensity slider changes nebula opacity. Metadata values are fixed display values, not measured hardware metrics. Underlying safe parser and additive three-lesson scripts remain active and unchanged; room silhouette hidden in latest visual override. All lesson and slider checks pass. Browser visual review pending. No publishing.

### User-supplied container CSS — 2026-10-11

Installed the exact supplied six-part CSS block and bound its class names to the existing stage, floor, character, console and code layers. Removed the conflicting recent game-polish/dust override blocks; added viewport sizing integration so the terminal fits without body scrolling. Room silhouette is softened rather than opaque. Syntax-highlight layer displays the requested code glow while transparent textarea retains caret/input behavior. All script elements remain byte-for-byte unchanged. Existing typing and three-lesson regressions plus new CSS-hook checks pass; browser visual verification pending. No publishing.

### CSS game polish — 2026-10-11

Added scoped styling override with exact #20174a → #0b091a radial cosmic backdrop, slowly shifting nebula light, cooler plum room walls, golden upper-corner illumination, a broad translucent textured oak platform, grounded Mochi drop-shadow, brighter cyan terminal glow and base-anchored elastic-style CSS gel breathing. Reduced-motion overrides retained. All JavaScript/script elements unchanged byte-for-byte. CSS structure and existing live three-lesson regressions pass; rendered browser visual verification pending. No publishing.

### Three-lesson custom dark-lofi flow — 2026-10-11

Latest user request supersedes the five-lesson prototype flow. Active self-contained HTML now guides only variables/greeting, oak floor with exactly one first brick and the exact native-input question, then manual brick lines building a 4x3 wall plus roof. Lists, loops and cinematic finale removed from active parser/renderer. Floor appears with first brick and persists; bricks/roof remain through subsequent edits without duplicates. Pink headphone Mochi, room/window and frosted cyan terminal retained; added subtle ambient dust motion. Native full-HTML typing and three-lesson tests pass. Browser visual review remains pending. No publishing.

### Self-contained local interactivity repair — 2026-10-11

Embedded the visual and additive lesson runtimes directly in the active HTML after the editor bootstrap, removing reliance on separate local deferred scripts and their cached versions. GSAP remains optional. All CSS blocks retained byte-for-byte. Tested the actual HTML scripts together in DOM simulation with native input dispatch: furry form and H → Hello! greeting updates pass without GSAP. Prior five-lesson regressions also pass. Root cause of the user’s browser failure is not directly confirmed; rendered browser verification remains pending. External JS sources remain available but are no longer loaded by the active HTML. Future runtime changes must update the embedded active copy.

### Five additive lessons and finale — 2026-10-11

Added cosmic-lessons.js: accepted safe parser state drives persistent foundation, 4-column/3-row brick wall, roof, armchair, rug and 12 perimeter trees. Commands: foundation; three wall lines; roof; furniture = []; furniture.append("armchair"); furniture.append("rug"); for tree_index in range(12): followed by an indented tree(). Existing brick/block aliases and live appearance/greeting remain. First foundation pauses editing for the exact new Mochi question and native answer input. Foundation counts as the first block of the initial wall row. Assets remain through deletion, errors and progression; stable state prevents duplicates. Roof requires a complete wall; furniture requires roof; trees require both furnishings. Completion of greeting plus household assets automatically launches a reversible cinematic with Return to coding. GSAP motion has native-animation and reduced-motion fallbacks. Existing visual styles untouched. Automated parser, additive progression, prompt, bounded loop, finale/return and cumulative-script checks pass; rendered browser review pending. No publishing.

### Dark-lofi cosmic sandbox — 2026-10-11

User authorized visual overhaul of the active prototype: midnight-purple starfield and drifting ambient clouds, enclosed plum room with transparent arched sky window, translucent glowing oak floor, default pink organic Mochi with cyan vector headphones and blinking eyes. Floating COSMIC_TERMINAL.EXE retains real synchronized line numbers and now uses rgba(10,10,20,0.75), 12px backdrop blur and pulsing 2px #00ffc8 border. Live form/color/greeting and brick prompt logic preserved; default character palette changed to pink. Lesson regression and structural checks pass. Rendered browser review remains pending. No new layout files or publishing.

### Live Lesson 1 renderer repair — 2026-10-11

Made optional GSAP CDN asynchronous so local deferred visual renderer is not held behind network loading. Home renderer now obtains its editor directly and attaches a native input listener for safe, immediate form/color and incomplete greeting-string previews. Persistent chat uses warm light-mode component colors; user text is assigned through textContent. No stylesheet or terminal layout changes. Existing brick prompt/queue regressions plus live furry and partial/completed greeting tests pass without GSAP. Rendered browser review pending.

### Enclosed storybook cottage — 2026-10-11

Upper stage now has opaque warm ivory SVG walls (#f5ebd5), an arched masked opening revealing the existing cosmic sky/stars, wood window framing and golden overhead/floor lighting. The terminal HTML/CSS and functional script elements are unchanged from the preceding approved terminal layout. Scoped stage overrides retain the wooden floor and lesson event logic. Automated structure and lesson checks pass; rendered browser review remains pending. No publishing.

### Floating cosmic terminal restoration — 2026-10-11

User approved a full-page #0c0c1e sky and floating terminal override with the exact 12px blur, 2px teal border, 16px radius, requested glow, 40px auto margin and 900px maximum width. Added COSMIC_TERMINAL.EXE and three colored control dots. Removed visible analytical speed/status rows; hidden DOM hooks preserve existing scripts. The original stylesheet is retained beneath explicit overrides; code input markup and functional scripts are unchanged. Lesson regression checks pass. Browser visual review and reference-image matching remain pending (no reference image supplied in this turn). No publishing.

### Cosmos window and warm floor light — 2026-10-11

Added a transparent arched vector window behind Mochi and a golden radial-gradient overlay on the wooden floor perspective plane in `prototype-cosmic-live.html`. The original stars shine through the open window panes. Changes are scoped to upper-stage HTML/CSS; the frozen cosmic stylesheet, terminal markup, all script elements and `cosmic-visuals.js` remain unchanged. Existing lesson interaction checks and decorative-asset checks pass. Browser visual review is pending. No new layout files or publishing; the project remains in prototype design review.


## Latest visual refinement — cosmic cottage wall silhouettes, 2026-10-11
User requested HTML/CSS-only upper-stage refinement: two translucent side walls rise from the wooden platform’s left/right edges, sharing its existing perspective via preserve-3d and 90-degree local rotations. Subtle warm edge lines and 3px frosted blur define an open room without obscuring the dark sky. Added only decorative spans and scoped floor/wall CSS in the existing HTML; no layout files created. All inline/external functional scripts, original cosmic stylesheet and terminal structure verified unchanged. Updated asset checks and reran existing interaction regressions successfully. Actual browser visual review remains pending. No publishing; phase remains prototype design review.


## Latest checkpoint — cozy cosmic floor and first-brick interception, 2026-10-11
User authorized upper-canvas HTML/CSS/JS changes while preserving cosmic background stylesheet and terminal structure. Added one home-floor div and a separate, floor-only style block: translucent warm oak planks, perspective tilt, suspended edge/glow directly under Mochi. No new layout files. Original cosmic style block and lower editor/terminal HTML remain byte-for-byte unchanged.
Greeting assignments now pin the exact learner text in Mochi’s bubble throughout Lesson 1; no timeout or dismiss action. Lesson 2 replaces it with the exact brick question. First brick/block command adds exactly one small brick at floor level, sets editor.readOnly synchronously and focuses a native input in the bubble. Empty replies keep the lock; any nonempty idea unlocks and restores editor focus. Replies are a thinking step, not graded as correct and never insert learner code. Multiple pasted commands are capped to one visible brick while awaiting reply, then only queued learner-authored commands resume. Later sequential commands still build a persistent 4 × 3 wall.
check-cosmic-prototype.cjs passes cosmic stylesheet/terminal equality, floor presence, greeting persistence/exact text, class effects, focus/read-only gate, empty/nonempty replies, single-brick paste interception, queue resume, speed regressions, no duplicates and scene retention. Actual browser visual QA remains unavailable. No publishing. Current phase remains design/prototype review; spec/build checklist not started.


## Latest checkpoint — frozen dark cosmic frame, first three home lessons, 2026-10-11
Latest user instruction overrides the light diorama interface: freeze cosmic CSS/layout, add home narrative via JavaScript only, no new layout files. Restored prototype-cosmic-live.html from saved dark prototype-cosmic-before-diorama.html. Stylesheet and static stage/editor/terminal markup are byte-for-byte identical to that saved dark frame. Changed inline logic and existing cosmic-visuals.js only (plus checks/docs). Original character is a CSS blob div, not an SVG; retained it and added decorative SVG fur inside it.
Lesson 1: mochi.form = "smooth"/"furry" and mochi.color = named supported color or quoted #RRGGBB toggle appearance classes/gradients; optional mochi.name/mochi.greeting retained, greeting on tap. Lesson 2: brick (also accepts brick()) adds exactly one absolutely positioned block and opens the exact requested Mochi question plus independent reply box. Lesson 3: sequential brick lines stack up to a 4-column × 3-row wall directly behind Mochi. Re-evaluation never duplicates bricks; existing blocks remain on deletion and invalid/incomplete input preserves scene. Chat responses never insert code or build assets. Speed gauge, syntax overlay, line numbers and terminal behavior remain. No loop/function curriculum expansion in this step; limited parser executes no learner code.
check-cosmic-prototype.cjs passes frozen-frame equality, speed regressions, appearance classes, single/12 brick behavior, row positions, exact chat text, reply isolation and persistent state checks. Actual browser visual review remains unavailable; no publishing. Light lesson-workspace.js/diorama-house.js preserved but not loaded by active prototype. Full six-lesson planning remains a proposal to reconcile; current implementation covers only these three requested steps within frozen dark frame.


## Latest checkpoint — six lessons + house finale, 2026-10-11
User authorized replacing the active interface with the proposed house-learning journey. prototype-cosmic-live.html now uses lesson-workspace.js and diorama-house.js: complete personalized Mochi/greeting bubble, chat reply field, three progressive hints per lesson, independent variations and practical checks, cumulative empty learner editor, six lessons plus guest-home finale. No build_house()/protect() learner commands. Choices drive individual block materials/counts, openings, roof and furniture on persistent terrain. Tap Mochi shows/speaks greeting; cutaway reveals interior. Previous five-line interface saved as prototype-before-house-lessons.html. House syntax/UI/mock scene checks pass via check-house-lessons.cjs; active legacy check entry points redirect to it. Actual browser visual verification unavailable. See appended current interface revision in scope-revision.md and prd.md; full planning reconciliation/approval remains pending. No publishing or spec/build phase started.


## Persistent storybook diorama experiment — 2026-10-11
User explicitly requested replacing the active interface with a light (#faf8f2) continuous isometric terrain and additive five-line workflow. prototype-cosmic-live.html now loads actual Three.js WebGL geometry and pinned GSAP: name creates low-poly breathing companion/nameplate; supplies create adjacent shelf/bundles; build_house raises base, walls then roof; if house protects it with emissive ring/dome; loop grows 12 trees in sequence and pulls camera back. All accepted assets stay on the same scene during the page session, including after code deletion; nameplate can update and new supply labels append without duplicating existing assets. Drag to orbit. Lower light glass IDE has 12px blur, empty learner editor and separate examples. This new house-building syntax supersedes the speed experiment only, not approved lesson/product decisions. Previous interface preserved as prototype-cosmic-before-diorama.html. Safe five-line parser executes no learner code; bounded list (1–12) and loop (12). Checks pass for syntax, 14 parser cases, live input and forest bound; actual GPU/browser visual checks pending because no browser is connected. Internet and WebGL required; failure is shown explicitly. No publishing; spec/build checklist not started.


## Indie game HUD restyling — 2026-10-11
User explicitly authorized continuous radial-gradient deep-space canvas, organic bioluminescent Mochi and floating glass editor. Cosmic prototype now uses full-viewport layered nebula gradients/stars, positioned transparent stage and inset suspended editor with rgba(10,10,26,0.65), 16px blur and neon border/glow. Added nested CSS breathing wrapper with scale(1.03) translateY(-2px); removed competing GSAP idle tween while retaining outer-wrapper GSAP speed reactions. Parser and logical states unchanged. Script/parser, balanced divs and animation ownership checks pass; rendered browser QA unavailable. Local design review only. Spec/checklist phase remains unstarted; overall scope/PRD approval unchanged.


## Local animation diagnostics — 2026-10-11
Learner confirms they are viewing prototype-cosmic-live.html, so older-entry-point explanation was incorrect. No connected browser available for direct inspection. Added visible GSAP active/unavailable/reduced-motion status and versioned local renderer URL to avoid stale script caching. JavaScript syntax checks pass; CDN/browser behavior still requires user observation.


## GSAP visual adapter — 2026-10-11
User requested premium game motion while preserving matching rules/logical states. Added pinned GSAP 3.15.0 CDN in prototype-cosmic-live.html and isolated cosmic-visuals.js. The supplied cloudflare.com URL was a website, so the official GSAP CDN path is used instead. Accepted speed edits immediately trigger physical Mochi squash/stretch and GSAP gauge updates; elastic idle uses separate blob/wrapper transforms. Existing regex/parser and pending/error logic remain identical. renderItems accepts stable-id inventory snapshots and drops new toy/shop assets with bounce/elastic recovery; it is not connected to editor commands because no toy/shop parser exists. Asked learner whether to extend parser; answer pending. Reduced-motion preference changes and missing CDN fall back safely. Parser cases and mocked adapter lifecycle pass; actual browser/CDN/rendering verification pending. Local only; product scope remains unchanged, no spec/checklist phase started.


## Floating cosmic HUD refinement — 2026-10-11
User authorized the cosmic prototype overhaul. prototype-cosmic-live.html now has an inset, rounded HUD with rgba(10,10,26,0.65), 16px backdrop blur and a 1px rgba(0,255,200,0.2) border. Full-page stars remain behind both sections; no horizontal stage divider or edge mask. Monospace headers/counters glow teal. Vanilla JS animates the speed number with cancellable requestAnimationFrame interpolation; CSS transitions animate fill width, color, glow and aura. Reduced motion updates immediately. Existing parser/error behavior preserved. Script/parser and gauge animation checks pass; rendered browser QA pending. Local-only design experiment; product scope and PRD approval unchanged; spec/checklist have not been created.

---
doc: design
status: review
---
# Mochi design review v1

## Cosmic live experiment — 2026-10-10
Latest HUD refinement: luminous header/gauge typography, lighter proportional numeric readout, removal of IDE seam border, radial glass shading and soft top-edge fade. Shared stars remain full viewport.
Latest refinement: lowered IDE/terminal background opacity and extended the star field across the entire viewport so it continues beneath the frosted editor glass. Blur remains 12px.
User-provided exact direction implemented separately in prototype-cosmic-live.html. Frame-free 45% cosmic stage / 55% frosted IDE, CSS organic blob, stars, smooth speed gauge, line numbers, syntax overlay, file tab and expandable terminal. Type mochi.speed = 80; 100 celebrates. Narrow parser supports numeric speed assignments/comments only, not Python execution. Errors preserve last valid scene; incomplete assignments are pending. Empty/comment-only code resets gauge to zero. Experimental property lesson/character design not adopted into approved journey. Readable mobile sizing, dvh and reduced motion included. Syntax/parser checks provided; rendered browser verification pending.

## Fourth option — Immersive adventure, 2026-10-10
Open prototype-immersive-adventure.html from prototype-options.html. Desktop workspace blends a larger scene with floating HUD code/guidance; mobile stacks panels for readability. Concept HUDs illustrate approved values, empty toy inventory, block order, ball/hoop branches and repetition. Lesson path navigates review stops. Mini-show theater toggle hides editor and restores it without changing authored draft; replayable sample performance is explicitly scripted, not code execution/assessment. Error sample adds Mochi guidance alongside precise feedback. Reduced-motion presentation supported. Intro keeps existing three-step welcome rather than introducing mochi.status properties. Syntax checks pass; rendered browser and keyboard/mobile interaction QA pending. User approval is permission to explore this option, not final design approval.

## Three-option review package — 2026-10-10
Start at prototype-options.html. Compare prototype-mission-control.html (dark mint coding workspace), prototype-adventure-trail.html (outdoor journey), and prototype-creator-studio.html (light indigo studio). All retain the same approved curriculum and existing sample-state/account/mini-show controls, with interactive opening and transparent Mochi greeting cutout. Logo marks are exploratory typographic treatments; no final website name selected. These options are visual alternatives rather than independently built apps. Script parsing and local target checks pass; browser visual review is pending. Previous prototypes preserved. Choose/refine before technical planning.

## Opening revision — 2026-10-10
Authorized first pass: interactive three-step welcome, Mochi greeting, illustrative code-to-action loop demonstration, then entry to the approved name/greeting lesson. Working Home control returns to introduction. Dark stage and mint controls explore a coding-adventure direction on the opening only. Existing lesson screens preserved. Name/logo and transparent Mochi asset remain unresolved. Previous version: design-prototype-before-welcome.html. Review required; no deployment or complete-design approval implied.

Open design-prototype.html in a browser. Existing design-workspace.html is preserved as the earlier exploration.

## Direction
Warm cream paper, deep teal controls, mint play space, coral celebrations. Accepted Mochi artwork is displayed using a CSS viewport onto its greeting pose; final asset preparation remains implementation work. Friendly rounded cards, spacious type, visible scene above editor on phones and side by side on computers. No external fonts or libraries needed.

## Review path
Welcome → Meet my Mochi → lesson workspace → sample completion → next lesson or stay and experiment → adventure map → mini show → level celebration → reflection. Save my progress opens optional Google/email sign-in/create-account presentation and recovery feedback.

## Included states
Separate code reference and initially empty learner editor. Learner drafts remain in memory while navigating lessons. Preview controls demonstrate completion, faded stale-scene errors, empty toys and offline saving. Keyboard-accessible buttons, labels, modal focus cycling/Escape, reduced-motion support and responsive layouts.

## Prototype limits
No code execution, assessment, speech, authentication, cloud saving, permanent persistence or real prop animation. Controls explicitly identify simulated states; every map stop is open for review. Example syntax is illustrative, not a language commitment. Title wording, reflection prompt and detailed visual treatments are design proposals. Existing product open questions are not silently approved.

## Verification
JavaScript parses; static ID references and uniqueness checked. No browser is connected in this session, so actual rendered desktop/mobile layout and browser interactions still need visual review.

## Next
Learner reviews the prototype and requests refinements or approves the design. Do not mark design complete before that review. Then reconcile remaining product details and proceed to 4-spec.


### Frozen visual boundary — 2026-10-11

Read [UI layout reference](ui-layout-reference.md) before modifying code. Preserve the approved CSS and containers; connect lessons through JavaScript only. Existing `spec.md` is an empty directory, so the authoritative visual specification is `ui-layout-reference.md`.
