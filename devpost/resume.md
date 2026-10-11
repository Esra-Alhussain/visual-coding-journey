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

### Frozen UI reference — 2026-10-11

Read `ui-layout-reference.md` before any code modification. Current cosmic HUD, pink headphone Mochi, glass console, telemetry and sliders are frozen. Future lesson changes are JavaScript-only. No frontend code changed for this checkpoint.

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

# Resume here

## Latest checkpoint — cosmic live-coding experiment, 2026-10-10
Latest user refinement: glowing HUD headers/numbers and seamless stage/editor transition implemented via radial shading and glass edge fade; sharp central border removed.
User requested transparent IDE with stars bleeding through. Implemented shared full-viewport star field and lower IDE/terminal opacity; retained 12px glass blur and code behavior.
User explicitly requested a standalone HTML/CSS/vanilla JS vertical 45/55 stage/editor prototype. Added prototype-cosmic-live.html: midnight/purple cosmic stage, code-native iridescent blob design proposal, live speed gauge, frosted IDE, synchronized syntax overlay and line numbers, expandable beginner terminal. RegExp accepts numeric mochi.speed assignments 0–100 without executing code; live input updates, target-100 celebration, error preservation, reduced motion and responsive sizing included. Blank learner editor with separate example; no automatic code insertion. This requested speed/property concept and new blob appearance are experimental, not approved changes to curriculum/character/language. Other options preserved. Parser checks saved in check-cosmic-prototype.cjs; browser visual QA pending. No publishing.

## Latest checkpoint — immersive fourth option, 2026-10-10
User explicitly approved fourth immersive adventure prototype based on proposed HUD/stage/constellation/theater ideas adapted to existing activities. Added prototype-immersive-adventure.html and comparison card in prototype-options.html. Full-scene environment, floating guidance/editor panel, lesson path, identity/inventory/action-order/branch/repeat concept HUDs, expressive sample feedback and reversible theater view with replayable scripted show demo. Demo never executes/assesses learner code or claims completion. No waking/property task, power bar, shield/key inventory or obstacle curriculum added. Previous three files preserved. Scripts parse; browser visual QA pending. Next user compares fourth direction and refines/approves design; name/logo, full PRD approval and technical planning remain open. No publishing.

## Latest checkpoint — three design options, 2026-10-10
User authorized finishing the prototype review package and offering different design ideas. Open prototype-options.html to compare Mission control, Adventure trail, and Creator studio. Each contains full existing review flow plus interactive welcome/three-jump demo, working Home and a generated transparent Mochi greeting asset (mochi-transparent.png). Styles apply across all screens; same approved lessons preserved. Website name and simple typographic logo marks are proposals, not approved branding. Existing prototype remains preserved. Scripts parse and targets checked; rendered browser QA remains pending. No publishing or functional app implementation performed. Next learner reviews options and selects/refines direction. Full design/PRD not approved.

## Latest design checkpoint — 2026-10-10
User rejected the passive/childish opening and explicitly authorized an interactive coding-adventure introduction first. Updated design-prototype.html with a three-step Mochi welcome, visible illustrative loop demo with three animated jumps, clear programming purpose, first-mission entry and functional Home control. Earlier prototype preserved as design-prototype-before-welcome.html. Approved lesson order and learner-authored code remain unchanged. This demonstration does not execute learner code. Website name/logo remain open; transparent character asset still pending. Local design review only; no publishing performed. Next review this opening with learner, then refine the rest of the experience. Design and full revised PRD are not marked approved.

## Latest session checkpoint — 2026-10-07

The learner ended the session to sleep. Continue tomorrow without restarting discovery.

### Agreed current direction
- Five short beginner concept lessons: values/variables; sequence/action calls; lists; choices/conditions; repetition/loops. Debugging throughout.
- Final mission: Prepare Mochi’s play session, combining all five taught concepts. Every required concept/action must have been taught and practiced beforehand. Exact targets and completion checks remain draft.
- Pet supplies shop; ball and hoop play activities. Choice: if selected toy is hoop, jump; otherwise (ball), chase.
- Edit Mochi’s name/greeting; each tap speaks the current greeting and shows it in a bubble. Hand cue invites a tap.
- Latest accepted interaction: Try my code tests edited movement instructions; tapping/interacting remains available for programmed play. Same screen, no separate modes. Tap-to-run toys was rejected. Run & Play was an older recommendation, superseded by this direction.
- Accepted Mochi character image: mochi-character.png.

### Preserve for later
Learner-authored tap events to laugh/smile; hunger value and ask-for-food condition; custom event handlers/functions, broader curriculum and projects, connected creations and GitHub workflows. No automatic first-build expansion.

### What exists and what is next
- scope.html is the updated visual planning page, not the built app. It shows the five lessons and final mission; original scope preserved in scope-before-mochi.html.
- scope.md is the historical approved shop-only baseline; scope-revision.md holds the current draft revision.
- prd.md / prd.html are older drafts requiring reconciliation with the latest decisions. Full revised scope/PRD approval is still pending.
- Next finish product definition: lesson/mission completion and progression, help and empty/unsupported stock, reset/return progress, speech/cue details, exact testing behavior. Consolidate for review, then 4-spec, then 5-build.
- Learner asked for platform advice: recommend a responsive web app first, accessible on phones/computers without installation. Not a finalized platform choice; Android was previously preferred.

### Resume prompt
“Resume my Mochi project. Read devpost/resume.md, the current scope revision and saved vision notes. Continue from the latest checkpoint without restarting planning.”

## Earlier saved history (latest checkpoint above takes precedence)

# Resume here

## Current progress
- Visual scope updated at learner request: scope.html now displays current five-lesson map, Mochi concept image, taught-skill final mission, greeting audio, and agreed/proposed distinctions. scope-revision.md has the matching current section; older baseline preserved below and in scope-before-mochi.html. Full PRD still requires reconciliation and remaining product decisions; do not treat this visual update as full-phase approval.
- Latest behavior accepted (2026-10-07): choices lesson uses two supported toys: if selected toy is hoop, jump; otherwise (ball), chase the ball. Next present the connected five-lesson mapping and final-mission criteria; overall revised scope/PRD remain draft.
- Latest approval (2026-10-07): five short beginner lessons covering variables/values, sequence/action calls, lists, choices, and repetition; debugging throughout. Custom event handlers and defining functions deferred. Final mission combines these taught skills in Mochi’s play session. Supersedes the proposed three-lesson cut. Next consolidate lesson-to-mission mapping and reconcile the draft revised scope/PRD for review; full document approval remains pending. See latest vision-notes.md section.
- Latest decisions (2026-10-07, resumed conversation): every skill required in the final beginner mission must first be taught and practiced in the beginner steps. Learner likes hopping and wants a finale combining multiple learned basics; exact curriculum and mission remain draft. New requested feature: tapping Mochi speaks the learner’s current greeting aloud each time, alongside the existing greeting bubble, with a hand cue inviting a tap to listen. Next reconcile these decisions with the draft scope/PRD and define the beginner lesson-to-finale mapping. See latest section in vision-notes.md.
- Latest learning decision (2026-10-07): begin with small guided coding tasks, then offer more advanced tasks after beginner completion. Learner wants code to control Mochi playing with a ball and how it plays. Roll/chase, distance control, and completion gating were proposed; the small-task progression was endorsed, but exact mechanics remain to be confirmed. Next clarify what finishes the beginner level and align this behavior with the draft scope/PRD. Advanced levels remain future roadmap work unless explicitly brought into the first-build boundary.
- Latest saved decision (2026-10-07): learner enthusiastically liked the generated Mochi character concept ("woow! i like it!") and requested saving progress. Keep `devpost/mochi-character.png` as the visual reference: rounded turquoise companion, floppy ears, cream belly, coral cheeks, tactile soft paper-like style; greeting, curious, and happy poses. Continue from this accepted visual direction without asking the learner to find or approve the same image again. This feedback concerns the character design; revised-scope and PRD approval remain pending.
- Opening activity details approved: edit the companion name and greeting as quoted values in the growing editor, with live preview above it on phones. Name changes update the label; tapping shows the current greeting in a speech bubble. Explain stored values versus provided display code. Scope revision remains draft; approval of this activity is not overall approval.
- Latest order approved: introduction → greeting coding interaction → map → pet supplies shop journey. This supersedes the earlier shop-naming-before-map order. `scope-revision.md` consolidates the proposed revised scope for review; it remains draft until explicit approval. Next review this revision, then reconcile `prd.md` and `prd.html` and resolve the remaining product gaps without restarting discovery.
- First behavior selected: learner approved coding a greeting and tapping the companion to see their words appear. Next reconcile introduction → greeting → shop/map ordering, then define the small shop interaction. This is not complete revised-scope or PRD approval; audio and detailed creature assembly are not required.
- Latest engagement decision supersedes committing to creature assembly: learner approved focusing on making a creation respond and behave, with optional appearance customization. They worry shape-by-shape creature building is repetitive. Next choose one small first interaction and connect it to the shop; suggested greetings/toy/food reactions are not yet selected. Scope revision and complete PRD approval remain pending.
- Creature concept: learner said "yes like mochi creater." Mochi is the working companion concept from the earlier example. Next present the proposed guided shape/feature-building journey and revised scope for review; no external Mochi reference or unrestricted drawing tool is established.
- Latest steering: the learner wants a step-by-step creature-building activity with visual details and shapes, then brings the same creature into the pet supplies shop. Naming/recoloring alone was insufficient. Clarify the editable parts and shape freedom, then show a concrete revised scope and PRD; the shop-only scope remains the approved historical baseline, not approval of this expansion.
- Latest feedback decision: personalized creature reactions are approved, using creature name, item, and optional learner nickname, plus a separate accurate code-change caption. No playable care activity is implied. Next resolve the creature's first-build controls and role, keeping the shop learning loop small.
- Latest theme decision: pet supplies is confirmed; pizza restaurant and flowers/plants were declined. Instead of a second shop, the learner proposed and confirmed a creature companion connected to the shop. Next define its purpose and a small first-build boundary; do not assume a separate creature-building journey is approved.
- Latest decision: the learner approved “build a place through growing coding skills” as the broader direction, with exact world design open. A town and characters are optional; the first build remains the tiny-shop journey. The full PRD is still draft. Read the latest agreed broader-direction section in `vision-notes.md`.
- `3-prd` is in progress. `prd.md` and `prd.html` are saved drafts, not approved. They consolidate the product decisions and list remaining questions. The learner approved the independent challenge: rename the shop, change its wall color, and replace one product without step-by-step instructions, with help on request. Next resolve the supported shop/product selection, then remaining product gaps; do not restart the interview.
- `1-start` complete; learner profile saved.
- `2-scope` complete. The learner explicitly approved the overall scope; `scope.md` is `status: approved`.
- Both Markdown and a colorful HTML planning companion were requested and saved.

## Read first
Read `learner-profile.md`, `vision-notes.md`, `scope.md`, and `scope.html`. These files preserve the full vision and the smaller hackathon starting point.

## Agreed direction
A visual programming learning roadmap that helps complete beginners and learners who struggle to connect basic concepts. First learner project: a personalized tiny shop, with small real-code edits visibly changing its appearance and adding/removing products. The main structure is guided practice → independent challenge → short reflection. Preserve the full programming journey and intention to continue after the hackathon.

Personalized next projects based on what learners say they want to build or practice belong under Later, not in the current reflection. Aquarium and robot projects, broader curriculum, and GitHub syncing are future possibilities. Reset and friendly error guidance remain suggestions awaiting review.

## Next action

Latest continuation: review `prd.md` and its open questions, carrying forward the agreed broader direction. Resume with the supported shop themes: the learner suggested pet shop and pizza restaurant, but has not confirmed the proposed pet-supplies/pizza pair. Friendly error behavior, cumulative editor layout, naming lesson, array explanation, and independent challenge are already agreed. The historical continuation paragraph below predates the PRD draft; use this update and the draft as current progress.
Continue `3-prd`; read the product-planning additions in `vision-notes.md`. No PRD has been drafted yet. The learner accepts a tiny-shop journey map with immediate code-to-shop visual feedback, and approved naming the shop, choosing what it sells, and AI story tasks tied to those choices while learners write their own code. Android is preferred but platform is undecided. Next clarify the first map stop and the transition into naming/personalizing the shop and starting the first task. Do not restart onboarding or scope discovery. Reset and friendly error guidance remain proposals to resolve during product planning.

## Latest product-planning context

Read all product-planning additions in `vision-notes.md`, including the larger-direction exploration under Full vision to preserve. The learner explicitly requested that the bigger connected journey be saved. Building a world for oneself versus for a character remains undecided. Multiple locations and the proposed neighborhood framing are exploratory future ideas; do not overwrite the approved tiny-shop boundary or treat these as a completed PRD. Carry forward the introduction before the map, provisionally approved parcel storyboard, naming/choosing the shop before the map, AI shop-story direction, array-to-drawing explanation, and shop-world wording for unavailable stock. Resolve remaining product gaps without restarting discovery.

## Editing preference
The learner wants to review meaning before paragraphs are replaced or removed. Preserve original learning descriptions and add new context separately when appropriate. Show complete proposed replacement wording and explain substantive removals before applying changes when requested. Do not infer CSS or framework interests from the noisy realtime transcript; the learner rejected that interpretation.

## Suggested restart message
"Resume my Build With AI project. Read devpost/resume.md and the saved planning documents, then continue with the scope review."

## Continuation update — 2026-10-08

Continue product definition without restarting. Latest reward decision: titles grow with learner abilities; award one special title per completed level. Cheerful milestone messages can preview progress toward the title. Exact names/presentation remain draft. Learner wants an independent practical task after guided lesson practice before progressing; supported practice → independent task → celebration/unlock was accepted, with earned rewards requested. Help details and exact completion checks remain open. Decorations and bonus Mochi reaction rewards were rejected. See latest vision-notes.md sections. Clarify the learner’s mention of shop-building as a later teaching level before changing the existing five-lesson/shop boundary.

### Latest accepted detail — lesson celebrations, 2026-10-08
Learner approved small cheerful lesson-completion messages that name the actual coding accomplishment (name/greeting, sequence, toy list, choices, repetition), after the practical check. Retain one special earned title per completed level; exact title is still unselected and must reflect demonstrated skills. Next resolve help during independent tasks, then remaining product-definition gaps. See vision-notes.md.

### Latest decision — independent-task hints, 2026-10-08
Optional progressively clearer hints are approved; using help does not remove rewards. Learners still edit their code and pass the practical check. Continue with exact lesson completion checks and remaining product gaps; do not reopen reward/hint decisions.

### Latest decision — Lesson 1 completion, 2026-10-08
Approved practical check: independently choose a new name/greeting through code, then tap Mochi to see and hear the current greeting; successful name/greeting behavior unlocks Lesson 2 and shows the celebration. Next define Lesson 2 sequence completion. Speech-unavailable handling remains open.

### Latest requirement — learner writes all project code, 2026-10-08
Explicit user requirement supersedes editable prefilled learner starter code: learners type every piece of their project code themselves; website/helper never inserts, completes, repairs, or replaces it. Retain cumulative learner-written code, optional hints, and provided drawing/action internals. Clarify separate displayed reference examples before finalizing editor behavior. Lesson 2 practical sequence check accepted: learner writes taught approach-hoop and jump actions in correct order and tests with Try my code.

### Latest decision — separate code examples, 2026-10-08
Small reference examples beside the editor are approved for guided learning; learners study and type them themselves, with no automatic insertion. Next continue completion checks for Lesson 3 lists and remaining product gaps.

### Latest boundary decision — shop afterward, 2026-10-08
Confirmed: first five lessons and final mission take place in Mochi’s play space; shop-building is a later teaching level. This supersedes earlier first-level shop naming/recoloring/shelf requirements. Consolidate current scope/PRD accordingly, preserving historical plans. Lesson 3 ball-only → hoop-only practical check is tentative. Next define choices/repetition checks and remaining states, then review consolidated plans. No implementation or full revised-plan approval yet.

### Latest decision — Lesson 4 choices check, 2026-10-08
Approved: independently write the taught hoop→jump / ball→chase rule, test each toy with Try my code, and observe both correct behaviors. Next define Lesson 5 repetition check, final mission criteria and remaining states.

### Latest decision — Lesson 5 repetition check, 2026-10-08
Approved: learner writes a loop making Mochi chase the ball three times and tests it with Try my code; require both loop use and three observed repetitions. Next consolidate final mission requirements using only taught/practiced skills. Lesson 3 check remains tentative; full revised scope/PRD remain draft.

### Latest decision — final Level 1 mission approved, 2026-10-08
“Prepare Mochi’s play session” combines personalized name/greeting, ball+hoop list, ordered approach/jump, hoop-vs-ball conditional behavior, and a loop repeating the selected routine three times. Test both toys and tap Mochi for visible/spoken greeting. Only previously taught/practiced skills; learner writes all code; optional hints retain rewards. Mission completion earns the level title (wording still open). Next resolve remaining product states: empty/unsupported toy lists, exact testing behavior, help availability, speech fallback, reset/return progress and reflection; then consolidate Markdown/HTML for review.

### Latest decision — empty toy list approved, 2026-10-08
Valid empty list shows no toys plus “No toys yet! Add a ball or hoop to give Mochi something to play with.” It is not a code syntax error. Next resolve unsupported toy names and remaining product states before consolidated review.

### Latest checkpoint — four toys and blocks sequence, 2026-10-08
Learner approved ball, hoop, drum and blocks, with blocks for sequence. Approved sequence activity: type instructions placing large, medium, then small blocks; watch Mochi build the tower. This supersedes the two-toy limit and earlier Lesson 2 hoop sequence task. Next define what happens for a different block order, then reconcile drum teaching and affected lists/choices/final mission. Four-toy support does not automatically mean all four need conditional branches or mission requirements. Keep unchanged approved behaviors, learner-written code, hints, celebration/title progression, play-space setting and later shop. Full revised scope/PRD are still draft.

### Latest checkpoint — loop lesson transfer, 2026-10-08
Approved: guided learner-written loop makes Mochi tap drum three times; independent check transfers repetition to three ball chases. Ball chasing must be practiced beforehand. Also accepted blocks feedback: show actual written order and resulting stack; hint toward largest-first rather than auto-correction. Next reconcile expanded toy set with choices and final mission, then remaining states and consolidated review.

### Latest checkpoint — fresh mini-show finale, 2026-10-08
Learner rejected repeating lesson toys in the final mission and liked “Prepare Mochi’s mini show”: new ribbon/bell props, show name/welcome, walk-to-mark then bow, ribbon→twirl / bell→ring, repeated performance three times. Rehearse unfamiliar actions beforehand. Explicit latest requirement: props are not pre-stocked or already visible in scene; learners type additions to stock/list before ribbon and bell appear. Do not infer shop-building moved back into Level 1 from casual “shop” wording. Next reconcile rehearsal with learner-added props and consolidate revised mission checks, then remaining product states. Full scope/PRD still draft.

### Latest checkpoint — lesson order approved, 2026-10-08
Order now: values/name+greeting → toy lists → blocks sequences → ball/hoop choices → drum loop practice and independent ball loop → ribbon/bell mini-show final mission. Learners add props through code before use; final mission applies this independently without restocking/tutorial automation. Next resolve return-session/reset behavior and remaining product states, then consolidate scope/PRD and visual review.

### Latest checkpoint — cross-device progress requested, 2026-10-08
Learner wants accounts/sign-in so code, lessons and achievements follow learners between phone and laptop. Google or email/password suggested; device-only saving rejected as insufficient. Next decide sign-in timing and initial supported methods, then remaining product states and consolidated review.

### Latest checkpoint — optional sign-in reminder approved, 2026-10-08
Approved copy: “Keep your progress safe ✨ Sign in to save and play on any device.” Buttons “Save my progress” / “Not now.” Simple start, optional sign-in, preserve work on sign-in, account-backed cross-device code/lesson/achievement progress. Next settle sign-in methods and remaining consequential states, then consolidate plans for review.

### Latest checkpoint — account methods approved, 2026-10-08
Both Google and email/password sign-in/sign-up approved, including Forgot password. Next address offline/save failure behavior and remaining product states, then consolidate draft scope/PRD for visual review.

### Consolidated review draft saved — 2026-10-08
prd.md and prd.html now consolidate current decisions, fresh mini-show finale, four toys, revised lesson order, learner-authored code, progression and optional cross-device accounts. Old PRD preserved as prd-before-consolidation-2026-10-08.md/html. Documents remain draft; see Open Questions for consequential gaps. Next resolve run/apply behavior, then other listed gaps before approval. Design key screen follows product approval, then technical planning and build.

### Latest checkpoint — playful experience approved, 2026-10-08
Added story missions, expressive outcome-based reactions (including harmless mistakes), map stops coming to life, continued experimentation after passing, and a showtime mini-show finale with earned title to prd.md/html. Older drafts preserved. No extra levels or reaction rewards. Next resolve Try my code restart/apply behavior, then other consequential Open Questions before full plan approval/design.

### Latest checkpoint — repeatable testing approved, 2026-10-08
Try my code resets previous temporary run results and Mochi position, then runs current instructions from the start; preserve authored code/toys and earned progress. Added to PRD Markdown/HTML and notes. Learner asks whether planning is done: core journey is defined, full consolidated review and important recovery/fallback states remain before approval. Do not mark PRD approved from approval of this single behavior.

### Latest checkpoint — fallback bundle approved, 2026-10-08
Approved offline device saving with later sync/status, speech bubble fallback without blocking progression, prepared hints if AI unavailable, confirmation before start over, and unsupported-toy guidance preserving code. Added PRD Markdown/HTML. Next full consolidated product review, then design, technical planning, build/test and shipping. Full PRD still draft; reconcile superseded Open Questions and remaining details during review.

### Latest checkpoint — design started, 2026-10-08
Learner accepted moving forward after core journey review. First responsive workspace design exploration saved as design-workspace.html: Mochi preview, lesson, separate example and empty learner editor, map preview and hint interaction. It is not an executable coding app; illustrative syntax and accepted character sheet are references. Next review this key-screen direction, refine and design remaining states. Core direction accepted; consequential open PRD details still need closure before spec/build.

Communication preference: announce each phase transition with phase name, expected result and plan. Current phase: design; first workspace exploration saved in design-workspace.html.

### Design review ready — 2026-10-08
Created design-prototype.html covering welcome, map, five lesson workspaces, hints, sample completion/error/empty/offline states, mini show, level celebration, reflection and optional account UI. Read design-notes.md for review path/limitations. Earlier exploration retained. Script syntax and static references checked; browser rendering could not be inspected because no browser is connected. Design status is review, not complete/approved. Next learner tries prototype, then refine/approve; technical planning follows.

### Public prototype publishing attempt — 2026-10-08
User requested a public design link. Sites created identity appgprj_6ac78e3e3c04819193f47b35c08889a2, saved at sites/mochi-design/.openai/hosting.json. Source isolated to dist/index.html and mochi-character.png. Publishing blocked: cannot connect to git.chatgpt-team.site:443. No live deployment or public access change completed. Reuse existing identity if retrying, never create duplicate. Credential was session-memory only. Upload ZIP prepared at devpost/mochi-design-upload.zip for manual hosting.

Public hosting retry after explicit user permission: same existing project reused. Git server connection still failed on port 443; no public deployment completed.
