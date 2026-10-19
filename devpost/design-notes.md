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


### Home Lab design update — 2026-10-12

User-supplied Home Lab direction supersedes the frozen cosmic visual frame for the active prototype. Active file: prototype-cosmic-live.html; previous version: prototype-before-home-lab.html. Implemented responsive cozy/synthwave/lofi CSS, inline soft teal Mochi SVG, keyboard-accessible egg hatch, five sequential safe command lessons, cumulative bricks/plants/chair, invalid-command feedback and restart with timer cancellation. Lesson 2 is house.add_brick(); Lesson 3 is house.build_walls(), repairing the supplied skipped lesson. Other commands remain mochi.eyes = cute, window.add_plants(), room.add_chair(). Sliders update bounce duration and lighting; telemetry shows theme, completion percentage and selected glow, explicitly simulated rather than measured hardware. No arbitrary code execution. Syntax and DOM simulation checks pass for hatch guard, invalid input, all lessons, completion, themes, sliders and reset. Actual rendered browser review remains pending. Local design review only; no publishing, BubblyCue changes or full-product approval.


### Plush reference prototype — 2026-10-12

User approved prototype1.jpg as the visual reference and authorized building the egg-to-personalized-Mochi opening. Active local entries: sites/mochi-design/dist/index.html and devpost/prototype-cosmic-live.html. Previous versions preserved as index-before-plush.html and prototype-before-plush.html. Warm linen/oak background and blank teal plush character generated with the built-in image tool, using prototype1.jpg as style/identity guidance. Original Home Lab cream radial-shaded egg and teal jagged crack retained in a larger footprint with click/keyboard-triggered shake/reveal. Variables lesson: eyes (cat/happy/starry), nose (button/heart/tiny), mouth (smile/cat/little), free-text name and greeting. Choices show hints without inserting code. Learner types quoted assignments and applies with Bring to life or Ctrl+Enter; valid changed values update facial overlays/nameplate/greeting, with optional synthesized chime and celebration. Safe bounded parser executes no learner code; errors preserve state. Earlier values remain editable; reset cancels hatch timer. Background has no house walls; house, conditions, loops and final project remain future curriculum proposals, with functions deferred after hackathon. Syntax and parser sequence/error/edit checks pass. No browser is connected, so rendered desktop/mobile review and browser interaction checks remain pending. Local prototype only; no publishing or BubblyCue changes.


### Meadow journey revision — 2026-10-12

User authorized fixing the prototype after visual review: preserve the plush character exactly, add attention-grabbing idle egg movement, a longer multi-crack hatch, sound/voice welcome, name-first personalization, non-overlapping guidance, grassy ground with sunlight from the right, colorful modern game/study HUD, introductory walkthrough, lesson map, clear completion and next-lesson progression. All operations in this revision stayed within the sandbox; no elevated execution, external file access, publication or generated outside-workspace assets.

Implemented four-page introduction; egg rocks while idle and hatches through top/side/bottom crack stages plus separating shell halves over 7.6 seconds (reduced motion shortens it); sound effects default on following user interaction; optional speech uses installed local English browser voices only and falls back to text. Bubble is left of Mochi on desktop and above it on mobile. Unchanged blank plush PNG and facial overlays retained. Name → eyes → nose → mouth → greeting; greeting shown in bubble and completion. Grass meadow, hills, drifting clouds, sunlight rays and small spark motion are code-native decorations. Prior wooden presentation and upper-right slogan removed.

Journey map: 1 companion variables; 2 house variables practice (walls/roof/door); 3 conditions (night/day and conditional lights); 4 loops (garden.plant(spot), range 3–8, five flowers completes guided goal); 5 final project (change roof variable, working night condition, bounded garden loop). Chapter completion celebrates with sound/confetti, unlocks next, offers next or continued experiment. Earlier scenes/drafts persist in page session; no permanent saving or arbitrary Python execution. Functions, interior rooms, richer kitchen/bedroom/garden curriculum remain later scope.

Verification: check-meadow.cjs passes syntax/unique IDs, walkthrough, full staged hatch timing, blank face/name-first gate, celebrations/unlocks, house creation, true/false conditions, indentation errors, bounded loop, combined final project, invalid-input state preservation and restart timer cancellation. Character asset byte-for-byte unchanged. Active entries synchronized: sites/mochi-design/dist/index.html and devpost/prototype-cosmic-live.html. Backups: index-before-meadow.html / prototype-before-meadow.html. Browser rendering, actual speech/audio and mobile visual review remain pending; no connected browser used.


### Action walkthrough and local saving — 2026-10-12

User authorized browser progress saving and requested a modern in-scene walkthrough that advances after each performed action, plus more realistic grass matching the plush character. Added welcome Sign in / Log in panel with explicit preview limitation: no real account or cross-device backend connected, no password collection. LocalStorage auto-saves accepted Mochi/house/world state, current chapter, completion unlocks, five code drafts and final-project goals. Welcome offers Continue saved adventure or explicitly Start a new adventure. Validated restoration rejects malformed saves and unsupported values; unavailable storage falls back to session-only status. Restart clears local progress and cancels hatch timers. Same browser and entry URL required for local saving.

Walkthrough now spotlights the actual moving egg and bubble, then the coding panel; typing a valid current assignment changes its instruction to apply the code; successful application advances to next feature; completion points to chapter progression. It follows actual learner actions, with optional Hide tips. No explanation-only Next slideshow. Detailed code-native meadow-grass.svg (23,000 shaded blade paths, grain, soft distant vegetation, warm right-side sunlight) replaces flat hill/stripe ground. Grounding shadow strengthened; Mochi PNG unchanged.

Checks: check-guided-saving.cjs passes action-triggered name-to-eyes guidance, browser save/restore of completed world and drafts, corrupted save fallback, restart storage removal, full prior hatch/lesson/condition/loop/final-project regressions. Active local entry points synchronized. Backups index-before-guided-saving.html and prototype-before-guided-saving.html. Actual browser rendering/audio/storage persistence on the user browser pending visual review. All tools and files for this revision stayed in sandbox; no elevated commands, external asset access or hosted publication. Real sign-in needs a user-selected authentication/storage service and future authorized connection work.


### Single guidance bubble — 2026-10-12

User requested hiding the character bubble until the walkthrough finishes. The introductory walkthrough now covers tapping/hatching the egg, typing a name and applying the first assignment. Only the walkthrough coach is visible during these actions, with its own name-code hint. Successful name assignment automatically completes the walkthrough, restores Mochi’s bubble and hands off to eyes/nose/mouth/greeting guidance. Hide tips also restores the character bubble immediately. Existing saved walkthrough state is reconciled on restore; a named character does not resume onboarding. No changes to character, lesson logic, sounds, layout background or publication. Backed up index-before-single-guide.html. Updated guidance/persistence regression verifies exclusive bubble visibility, embedded name hint and automatic handoff, alongside all existing checks. Browser visual review still pending. Sandbox only.


### Softer local voice selection — 2026-10-12

User found the first-default browser voice too robotic and requested a soft youthful human-sounding character voice. Replaced first-voice selection with ranked local English voices: natural/neural/enhanced/premium descriptors preferred, suitable named voices preferred over generic Desktop/compact engines, with no remote voice use. Speech settings now rate 1.02, pitch 1.02 (less artificial pitch shift) and volume 0.65. Header Voice opens a local voice selector, short character greeting preview and voice toggle. Explicit voice preference persists on this browser; unsupported or unavailable voices fall back to ranked local selection. Voice quality remains limited to installed browser voices; no new voice recording or external TTS service generated. Local selection/settings and all walkthrough/save/journey regression checks pass in check-soft-voice.cjs. Actual audible review requires user browser. Character unchanged; local sandbox-only update, no publication. Backup index-before-soft-voice.html.


### Mochi creature voice — 2026-10-12

User rejected all adult browser voices and requested a cute childlike animal character voice. Removed browser adult text-to-speech entirely. Added short Web Audio triangle-wave syllables with soft attack/release, gentle pitch contours and low-pass filtering: default soft babbles, optional playful chirps and sleepy coos. These are nonverbal expressive sounds; bubble text carries all words and instructions. Voice preview/options now describe creature sounds, not human voices. Brief body bob synchronized with babbles; character asset unchanged. Muting, closing preview and restarting cancel scheduled sounds and motion. Preference saved locally. check-creature-voice.cjs verifies bounded syllable generation, mute/cancellation, absence of adult speech APIs and full prior walkthrough/persistence/journey regressions. Actual sound quality still needs user listening. Local sandbox only, no external audio generation or hosted publication. Backup index-before-creature-voice.html.


### Pitched real-time character speech — 2026-10-12

User explicitly requested restoring browser text-to-speech with raised pitch and slightly faster speech, retaining intelligible real-time sentences. Removed creature babbles and restored exact text speech using installed local English voices, preferring suitable character bases. Default pitch 1.60, rate 1.08, volume 0.80. Voice dialog includes local voice selection, pitch 1.00–2.00 and speed 0.85–1.30 sliders, full welcome preview, mute and saved browser-local preferences. No external TTS calls. Naturalness still depends on browser voice and pitch support; actual listening review pending. check-character-speech.cjs passes exact sentence, preset, slider persistence, cancellation/mute and local voice exclusion plus full prior journey/save regressions. Character unchanged. Sandbox only; no publishing. Backup index-before-pitched-speech.html.


### Outdoor ambience and sunshine — 2026-10-12

User requested a gentle breeze, soft birdsong, open sky and sunshine for Mochi’s outdoor scene after the egg cracks. Added quiet looped filtered-noise wind with slow gust modulation, plus sparse short sine-wave bird chirps every 9–16 seconds after an initial 1.8-second delay. These are locally synthesized ambient effects, not downloaded field recordings. Starts only after hatch or restoring a hatched saved scene; Sound off, restart and page hiding stop audio/timers. Daytime birds stop at night while breeze remains. Existing character speech is unchanged. Strengthened warm right-side sunlight rays and sun glow with reduced-motion support. No name Anna introduced; learner chooses Mochi’s name as before. check-nature-audio.cjs verifies hatch gate, duplicate prevention, wind loop, birds, mute/cancel and night suppression; existing character-speech and journey/save regressions pass. Browser listening and visual review pending. Sandbox only; no publication or outside assets. Backup index-before-nature-audio.html.


### Audio generation pack — 2026-10-12

Organized upcoming character audio as 27 individual spoken dialogue files, 2 outdoor ambience beds and 15 triggered effects. Exact per-file names, triggers, dialogue and generation prompts are in sites/mochi-design/dist/audio/audio-manifest.csv. Drop completed assets into its dialogue/, ambience/ or effects/ folder respectively. Root guidance is sites/mochi-design/AUDIO-PACK.md and dist/audio/README.md; these explain 48 kHz WAV targets, level guidance, consistency and filenames. Dialog includes DYNAMIC placeholders for learner-authored greeting and flower counts, which fixed prerecorded clips cannot express. Audio files have not been generated or integrated yet. Prototype audio continues its current behavior until those files are installed and mapped.
### 2026-10-18 — Separate world-comparison review

Authorized three local interactive concepts at world-comparison/index.html: garden, bridge, café; equal assignment puzzle and target 3, guided retries, hint and replay. Generated scenery with simplified animated overlays, not final art/curriculum approval. Existing prototype preserved. Functional simulation passes; actual rendered/mobile review pending (browser runtime unavailable). No publication. See latest resume checkpoint and world-comparison/README.md.

### 2026-10-18 — Owner rejection and movement redesign

Owner rejected static world/boring character and clarified movement instructions with step counts as the core expected play. Authorized one separate garden movement experiment. garden-mission/index.html now has a redesigned leaf-hood animated character, route commands, obstacles, middle-row bridge and watering/bloom payoff. Clear goal and partial starter, per-line/per-step execution, hints and safe retry/cancellation. Code-native animated scene; no static generated background or emoji rewards. Automated engine/controller checks and actual Edge full mission at desktop/narrow viewports pass. Desktop/narrow screenshots reviewed; physical-phone/audio and owner acceptance pending. See garden-mission/spec.md and checklist.md. Do not treat old comparison, new art or proposed curriculum as final approved design. No publication.

### 2026-10-18 — Little Acres: playable original isometric farm comparison

User requested a farm game with working crop actions rather than another concept screen. little-acres/index.html is the new local entry: six interactive plots, original carrot/strawberry art, planting/watering/timed growth/harvest, animated walking Mochi and safe code actions. Three playable saved directions become meadow, river-repair farm and café-delivery garden. Depth-sorted native isometric SVG with original house, trees, crops, bridge, chickens, windmill and farmer, no commercial assets. Direct tools and code share engine/controller state. All three missions passed actual Edge page tests at desktop/narrow sizes; grown crop art reviewed in an additional real-browser screenshot. README/spec/checklist and latest resume describe launch, results and limits. Older entries preserved; owner visual and gameplay review pending.

### 2026-10-18 — Inspection-only scene, Arabic-first step guidance

Owner clarified click-to-move and direct farm actions undermine intended learning. Removed them and implicit auto-walking. Now code moves character and performs actions after explicit approach; scene inspection highlights numbered route and explains next command without writing learner code. Farm artwork retained. Arabic default/RTL with English switch and LTR Python; one task panel, concise goal, collapsed help/details, translated dynamic guidance/errors/controls. Actual Edge desktop 28 checks; final 570px 30 after correcting SVG RTL clipping; reviewed screenshots. Earlier click-based instructions superseded. Original bridge/café standalone gameplay still unresolved; current tabs remain farm variants. See latest resume and Little Acres spec/checklist.

### 2026-10-18 — Supplied Python Topic 1 -> proposed opening lesson

Read supplied 30-page PDF and inspected its print/variable/arithmetic/comment example screenshots. Saved concrete proposal at little-acres/lesson-1-proposal.md: Arabic-first greeting/output mission, then variables tied to movement and later naming/bed planning. Current literal-command parser needs new support for print/assignment before implementation. Proposed first lesson remains unapproved; no game/UI code changed or final curriculum rewritten. Latest resume records source, review scope, runtime gap and next decision.

### 2026-10-18 — Chapter preview saved for tomorrow

User wanted the five activities explained visually as one introductory chapter, then requested saving for tomorrow. Standalone interactive preview: little-acres/chapter-preview.html; inline source: output/visuals/mochi-first-chapter.html. Intro/print, greeting variable, farm name, bed area, comments. Main farm remains unchanged and lacks the preview's print/variable/calculation support. Chapter integration/order/explanations await owner review. Resume's latest "Saved for tomorrow" checkpoint contains links, evidence and exact next step. Do not restart broad redesign or assume a final curriculum choice.

