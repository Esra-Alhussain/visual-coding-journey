---
doc: scope-revision
status: draft
---

# Visual Coding Journey — proposed scope revision

This consolidates decisions made after the original scope approval. It is a proposed revision, not approval of the complete PRD. The approved `scope.md` remains the historical baseline until this revision is approved.

## Current Consolidated Direction — 2026-10-07

This section supersedes the older journey below wherever they differ. The older wording is preserved as historical planning context. This draft is the Markdown companion for the current visual scope.html; scope.md remains the original approved baseline.

### Beginner Journey and Five Lessons
Introduction → edit Mochi’s name/greeting as the opening of Lesson 1 → visual map → pet supplies shop with the same growing editor and companion. On phones the preview is above the editor.

1. **Values and variables:** edit name/greeting and, as play actions are introduced, movement values such as distance and jump height. Tapping Mochi speaks the current greeting every time and displays it in a bubble. A hand cue invites a tap.
2. **Sequence and action calls:** call provided actions, approach the hoop before jumping, and practice ball chasing. Learners observe ordered actions; custom function definitions are deferred.
3. **Lists:** add/remove supported toys and observe stock updates. Explain that lists store names while provided drawing code displays supported pictures. Ball and hoop are the two supported play toys.
4. **Choices:** if the selected toy is a hoop, jump; otherwise (the ball), chase. Test both branches. Do not extend otherwise to unsupported stock.
5. **Repetition:** repeat a taught play action a chosen number of times.

Debugging, visible feedback and optional hints run throughout. Earlier code remains available; current lesson lines are highlighted and starter code distinguished. Existing shop naming/color personalization remains part of practice.

### Final Mission — Prepare Mochi’s Play Session
Combine personalized values, stocked ball/hoop, ordered actions, toy-based choice and repetition with fewer instructions and help available. Every required concept and action must first be taught and practiced. Proposed observable checks: greeting reflects learner code when tapped; both toys are stocked; each toy triggers the correct ordered behavior; movement and repeat values match observed play. Exact targets, checks, unlock behavior and reflection interaction remain unresolved. A short reflection is agreed; celebration is proposed. This supersedes the old rename/recolor/replace-only challenge.

### Run Behavior — Recommendation Awaiting Approval
Run & Play starts the movement routine, highlights the currently followed instruction, and offers Play Again afterward. Simple name/color/stock edits update immediately, and tapping Mochi speaks the current greeting. This recommendation has not been explicitly approved.

### Visual Direction and Boundary
Use saved mochi-character.png: turquoise rounded companion, floppy ears, cream belly, coral cheeks, soft tactile style. One pet supplies shop and limited ball/hoop actions contain the five-concept beginner journey. Full curriculum, other locations/projects, custom event handlers, learner-defined functions, further customization and GitHub workflows remain later.

### Remaining Product Decisions
Exact mission/lesson completion and progression; Run & Play approval; help controls and unavailable-help behavior; unsupported/empty stock; reset and returning progress; speech/cue details. The concept selection and choices behavior are approved; overall revised scope and PRD remain draft.

## Historical Revision Text

## Purpose and Bigger Direction

Help beginners and learners who struggle to connect coding concepts build a place through growing coding skills. Learners see their code produce visible changes and responses, carry earlier work forward, and progress toward independent creation. Exact world design, town geography, and characters beyond the first companion remain open.

## First Journey

1. A playful introduction previews what learners will do, before revealing a map. The parcel concept remains provisional and revisable after implementation.
2. A first guided coding interaction lets learners edit the companion's name and greeting as quoted values in the growing code editor paired with its live preview. Highlight the editable text. The name updates its visible label; tapping the companion displays the learner's greeting in a speech bubble. Explain that variables store these values and provided display code shows them. Audio and a learner nickname are not required.
3. A visual map introduces one pet supplies shop journey.
4. Connected practice teaches shop naming, appearance changes, and adding/removing products through an array. The illustrated live shop is paired with one growing editor, with current lesson lines highlighted and starter code distinguished.
5. Personal companion reactions acknowledge the learner's supported stock choices. Separate captions accurately explain the code-to-visual connection. The array explanation explicitly distinguishes storing names from provided drawing code displaying pictures.
6. An independent challenge asks learners to rename the shop, change its wall color, and replace one product without step-by-step instructions. Help remains available on request, followed by a short reflection.

## Proof of Success

Learners see their greeting appear after tapping the companion; see their edits change the shop and stock; read their completed code together; and complete the connected independent challenge. Code that cannot run visibly dims the shop, highlights the issue, and explains the correction. Fixing it restores the result. Errors that still run should reflect their actual consequences.

## First-Build Boundary

One companion greeting interaction and one pet supplies shop journey. AI shop stories support tasks and retell concepts when learners are stuck, while learners write the code. Naming/recoloring the creature and detailed shape-by-shape creature construction are not required by this revision. Further creature customization remains open for later consideration rather than a second full build chapter.

Exact stock, map progression, editing behavior, AI-help controls, challenge checks, reflection, reset, and return-session behavior still need product-level definition before PRD approval. Platform remains undecided; Android is preferred.

## Preserve for Later

The full programming roadmap, more complex behaviors and projects, possible houses/gardens or other connected creations, optional characters and customization, additional explanation formats, personalized next journeys, and GitHub workflows remain preserved. No town or full simulation is required for this first build. Pizza restaurant and flowers/plants were declined as second themes; pet supplies is selected.

### Session close — test code and play, 2026-10-07

The learner rejected tapping toys as the run trigger, because taps should remain available for playful programmed interactions. They explicitly accepted the explanation that testing code and playing with the resulting behaviors happen on the same screen, without separate modes: Try my code runs the edited movement instructions; tapping Mochi continues to speak the current greeting. Use Try my code as the current agreed testing direction, superseding the unapproved Run & Play label and rejected tap-to-run proposal. Exact execution/apply behavior and instruction highlighting still need product-level definition.

Save for later updates at the learner’s explicit request: learner-authored events such as tapping Mochi to laugh or smile, plus a hunger value and a condition making Mochi ask for food. These are future teaching possibilities, not first-build requirements. Their Mochi becomes more interactive through behaviors they program.

Learner ended today’s session and requested everything be saved. Tomorrow: read resume.md, current section of scope-revision.md and vision-notes.md; reconcile the PRD/HTML with the approved five concepts and latest interactions, resolve remaining consequential product gaps, review the full product plan, then technical spec and build. No app implementation exists yet; scope.html is a visual planning page. Recommend a responsive browser-based web app as the first implementation so it can be tried on phones and computers without installation; this is advice, not a final platform decision. Android remains an earlier preference.

## Latest boundary update — 2026-10-08

The learner confirmed that the first five beginner lessons and final play-session mission occur in Mochi’s play space. Building the pet supplies shop comes afterward as a later teaching level. This supersedes first-level shop-building, shop naming/recoloring practice, and shelf framing above. The first level retains values, sequences, toy lists, choices, repetition, debugging and the same growing learner-written project. The broader build-a-place vision remains preserved. Full revised scope and PRD review are still pending.

Learners type all their project code themselves. Guided lessons show separate small reference examples beside the editor; the website/helper never inserts, completes or repairs their code. Earlier learner-written code carries forward. Independent practical checks gate progression, with optional progressively clearer hints and no reward penalty. Small lesson celebrations name actual accomplishments; one special earned title marks full-level completion, with the exact title still undecided. See vision-notes.md for accepted Lesson 1 and 2 checks and the tentative Lesson 3 check.

## Latest toy update — 2026-10-08

Approved toys now include ball, hoop, drum and blocks, superseding the two-toy limit. Blocks teach sequence: learner-written large → medium → small placement instructions build a tower. Exact drum mechanics and consequences for choices/list checks/final mission remain draft; preserve existing agreed checks until their affected details are reconciled. Shop-building remains after Level 1.

### Design experiment update — 2026-10-11
The learner requested a separate additive house-building diorama prototype (prototype-cosmic-live.html), covering values, lists, sequences, conditions and loops. This replaces the cosmic speed UI experiment only; it is not approval to replace the product curriculum. See design-notes.md for the render workflow and limitations. Technical spec/checklist remain pending product/design review.

## Current interface revision — six house lessons, 2026-10-11
User explicitly requested replacing the prototype interface with the six-lesson plan discussed immediately beforehand. This supersedes the experimental five-line automatic-house interface. It also proposes a new curriculum boundary relative to the older five-lesson Mochi play-space plan; do not silently treat the historical PRD as reconciled or fully approved.

1. Meet my Mochi: learner-written name, greeting and supported color; completed 3D character, nameplate and greeting bubble. Tap the character/button to repeat the greeting; browser speech is attempted when available.
2. Plan my Mochi’s home: choose brick/timber/stone, width 3–6 and height 2–4. Foundation scales to width and one block appears.
3. One brick isn’t a wall: teach numeric counting and a for loop; width × height blocks stack into the first wall.
4. Give the house its shape: a sides list and for…of count create the remaining walls; front doorway and chosen window sides leave openings.
5. A roof over my head: variables select tiles/thatch/metal and coral/sage/cream; an if check gates the roof on four completed walls.
6. Make it feel like home: a list selects/reorders 2–3 supported furnishings; cutaway allows inspection.
Finale: independently build a second guest home using guest_ variables, both taught loops, a condition and a furniture list on the existing terrain. First home stays visible.

Learning loop: guided reference → live authored-code result → independent variation → accomplishment/next lesson. Each lesson requires a demonstrated change after guided practice; the first also requires tapping the current greeting. Optional progressive hints do not remove completion. A natural-language chat reply is a thinking step and cannot pass a coding check. Learner code remains cumulative and is never inserted/repaired/completed by the interface.

No learner-facing function calls or custom functions. Defining reusable functions/shortcuts belongs to a later level revisiting the learner’s repeated basic code. The prototype recognizes a narrow subset of JavaScript assignments, arrays, the two shown loops and the shown condition; it executes no learner code. This is not a general interpreter or completed production assessment engine.

Persistent during the open page session: deleting code retains already drawn creations; valid edits can change materials, sizes and arrangements. Reload starts fresh. Browser/WebGL/internet testing remains pending; supported syntax and scene adapter tests pass. Full PRD reconciliation, technical spec and build checklist remain later work.

### Latest interface constraint — frozen cosmic frame, 2026-10-11
User directed restoring/freezing the dark cosmic frame and implementing only the first three home-building steps through JavaScript: appearance variables; one brick and interactive Mochi question; sequential lines stacking a 4 × 3 wall. This supersedes the light-diorama presentation, not automatic full approval of the earlier six-lesson product proposal. Existing CSS, stage/editor and terminal frame are unchanged from the saved dark reference. brick is a provided preview command, not learner-defined function code; brick() is accepted as an alias. Repetition shortcuts and later lessons remain future teaching work. Spec/build checklist have not been started. See design-notes.md and resume.md for current implementation/verification.

### Cozy cosmic interaction update — 2026-10-11
Confirmed interface request: upper scene adds suspended oak floor; first-lesson greeting stays visible with exact learner text; first brick/block command intercepts the flow with one small floor brick, a read-only editor and native bubble reply field. Nonempty answer resumes authored code without inserting code or grading the natural-language answer. Cosmic background stylesheet and terminal/editor structure remain frozen. See design-notes.md for current implementation, checks and browser-review limitation.

### Upper-stage visual refinement — 2026-10-11
Cottage enclosure now includes decorative translucent left/right wall silhouettes attached to the floor’s perspective. HTML/CSS-only refinement; learning logic and frozen cosmic/terminal frame unchanged. See design-notes.md for verification.


### Cosmos window and warm floor light — 2026-10-11

Added a transparent arched vector window behind Mochi and a golden radial-gradient overlay on the wooden floor perspective plane in `prototype-cosmic-live.html`. The original stars shine through the open window panes. Changes are scoped to upper-stage HTML/CSS; the frozen cosmic stylesheet, terminal markup, all script elements and `cosmic-visuals.js` remain unchanged. Existing lesson interaction checks and decorative-asset checks pass. Browser visual review is pending. No new layout files or publishing; the project remains in prototype design review.


### Floating cosmic terminal restoration — 2026-10-11

User approved a full-page #0c0c1e sky and floating terminal override with the exact 12px blur, 2px teal border, 16px radius, requested glow, 40px auto margin and 900px maximum width. Added COSMIC_TERMINAL.EXE and three colored control dots. Removed visible analytical speed/status rows; hidden DOM hooks preserve existing scripts. The original stylesheet is retained beneath explicit overrides; code input markup and functional scripts are unchanged. Lesson regression checks pass. Browser visual review and reference-image matching remain pending (no reference image supplied in this turn). No publishing.


### Enclosed storybook cottage — 2026-10-11

Upper stage now has opaque warm ivory SVG walls (#f5ebd5), an arched masked opening revealing the existing cosmic sky/stars, wood window framing and golden overhead/floor lighting. The terminal HTML/CSS and functional script elements are unchanged from the preceding approved terminal layout. Scoped stage overrides retain the wooden floor and lesson event logic. Automated structure and lesson checks pass; rendered browser review remains pending. No publishing.


### Live Lesson 1 renderer repair — 2026-10-11

Made optional GSAP CDN asynchronous so local deferred visual renderer is not held behind network loading. Home renderer now obtains its editor directly and attaches a native input listener for safe, immediate form/color and incomplete greeting-string previews. Persistent chat uses warm light-mode component colors; user text is assigned through textContent. No stylesheet or terminal layout changes. Existing brick prompt/queue regressions plus live furry and partial/completed greeting tests pass without GSAP. Rendered browser review pending.


### Dark-lofi cosmic sandbox — 2026-10-11

User authorized visual overhaul of the active prototype: midnight-purple starfield and drifting ambient clouds, enclosed plum room with transparent arched sky window, translucent glowing oak floor, default pink organic Mochi with cyan vector headphones and blinking eyes. Floating COSMIC_TERMINAL.EXE retains real synchronized line numbers and now uses rgba(10,10,20,0.75), 12px backdrop blur and pulsing 2px #00ffc8 border. Live form/color/greeting and brick prompt logic preserved; default character palette changed to pink. Lesson regression and structural checks pass. Rendered browser review remains pending. No new layout files or publishing.


### Five additive lessons and finale — 2026-10-11

Added cosmic-lessons.js: accepted safe parser state drives persistent foundation, 4-column/3-row brick wall, roof, armchair, rug and 12 perimeter trees. Commands: foundation; three wall lines; roof; furniture = []; furniture.append("armchair"); furniture.append("rug"); for tree_index in range(12): followed by an indented tree(). Existing brick/block aliases and live appearance/greeting remain. First foundation pauses editing for the exact new Mochi question and native answer input. Foundation counts as the first block of the initial wall row. Assets remain through deletion, errors and progression; stable state prevents duplicates. Roof requires a complete wall; furniture requires roof; trees require both furnishings. Completion of greeting plus household assets automatically launches a reversible cinematic with Return to coding. GSAP motion has native-animation and reduced-motion fallbacks. Existing visual styles untouched. Automated parser, additive progression, prompt, bounded loop, finale/return and cumulative-script checks pass; rendered browser review pending. No publishing.


### Self-contained local interactivity repair — 2026-10-11

Embedded the visual and additive lesson runtimes directly in the active HTML after the editor bootstrap, removing reliance on separate local deferred scripts and their cached versions. GSAP remains optional. All CSS blocks retained byte-for-byte. Tested the actual HTML scripts together in DOM simulation with native input dispatch: furry form and H → Hello! greeting updates pass without GSAP. Prior five-lesson regressions also pass. Root cause of the user’s browser failure is not directly confirmed; rendered browser verification remains pending. External JS sources remain available but are no longer loaded by the active HTML. Future runtime changes must update the embedded active copy.


### Three-lesson custom dark-lofi flow — 2026-10-11

Latest user request supersedes the five-lesson prototype flow. Active self-contained HTML now guides only variables/greeting, oak floor with exactly one first brick and the exact native-input question, then manual brick lines building a 4x3 wall plus roof. Lists, loops and cinematic finale removed from active parser/renderer. Floor appears with first brick and persists; bricks/roof remain through subsequent edits without duplicates. Pink headphone Mochi, room/window and frosted cyan terminal retained; added subtle ambient dust motion. Native full-HTML typing and three-lesson tests pass. Browser visual review remains pending. No publishing.


### CSS game polish — 2026-10-11

Added scoped styling override with exact #20174a → #0b091a radial cosmic backdrop, slowly shifting nebula light, cooler plum room walls, golden upper-corner illumination, a broad translucent textured oak platform, grounded Mochi drop-shadow, brighter cyan terminal glow and base-anchored elastic-style CSS gel breathing. Reduced-motion overrides retained. All JavaScript/script elements unchanged byte-for-byte. CSS structure and existing live three-lesson regressions pass; rendered browser visual verification pending. No publishing.


### User-supplied container CSS — 2026-10-11

Installed the exact supplied six-part CSS block and bound its class names to the existing stage, floor, character, console and code layers. Removed the conflicting recent game-polish/dust override blocks; added viewport sizing integration so the terminal fits without body scrolling. Room silhouette is softened rather than opaque. Syntax-highlight layer displays the requested code glow while transparent textarea retains caret/input behavior. All script elements remain byte-for-byte unchanged. Existing typing and three-lesson regressions plus new CSS-hook checks pass; browser visual verification pending. No publishing.


### Sharp cosmic console with hardware pane — 2026-10-11

Latest approved direction replaces the prior room-led appearance with a midnight-violet starfield, SYSTEM: ACTIVE / LOFI BOUNCE header accents, circular pink Mochi with thick cyan glowing headphones, centered console title/control dots, thin glowing teal terminal border and Fira Code-preferred syntax palette. Added dark grey 3-column metadata and responsive range controls, initialized at 40 Hz and 56%. Speed slider changes idle animation duration; intensity slider changes nebula opacity. Metadata values are fixed display values, not measured hardware metrics. Underlying safe parser and additive three-lesson scripts remain active and unchanged; room silhouette hidden in latest visual override. All lesson and slider checks pass. Browser visual review pending. No publishing.


### Lesson 1: Egg Awakening — 2026-10-11

Read frozen UI reference (spec.md remains an empty directory). Added scene-only JavaScript state machine: egg shakes/hatches on document readiness/window load; blank pink Mochi hides eyes/mouth; valid eyes happy/cute/starry reveals eyes with bounce; valid mouth smile/cat_face reveals mouth with flip; name and greeting complete the character and lock exact greeting in persistent bubble. Safe parser accepts DNA choices; no arbitrary code execution. Reduced motion skips animation; GSAP uses native keyframe fallback. DOM readiness prevents optional CDN from delaying hatch. All non-script HTML and CSS unchanged byte-for-byte. Automated state order, partial greeting, completion lock and existing lesson/slider checks pass. Browser visual verification pending.



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

### Movement-game design experiment — 2026-10-18

Owner rejected the static-feeling comparison and authorized one garden mission focused on controlling Mochi through direction/step-count instructions, obstacles and watering. Implemented separately at garden-mission/index.html with dedicated spec/checklist. This is authorized prototype exploration, not approval to rewrite the frozen user-authored PRD, select the final game world or expand the curriculum. Main scope/PRD remain historical approved documents pending an owner-selected final direction. Actual movement/route browser checks pass; owner art/game-feel review pending. No deployment.

### Little Acres isometric farm prototype — 2026-10-18

Owner explicitly requested three playable options with first small farm scene, crop planting/watering and visible Python-style action; original placeholders permitted. New local little-acres/index.html implements meadow/riverside/café farm settings with shared six-plot crop cycle, walking character, code editor and distinct harvest/repair/delivery goals. Actual browser checks pass for all three at desktop/narrow widths. Scope approved for this experiment only, not final story/art/curriculum or replacement of the frozen main PRD. Dedicated little-acres/spec.md and checklist.md track behavior and verification. No deployment or permanent save/general Python implied.

### Code-only, Arabic-first correction — 2026-10-18

Owner authorized replacing click actions/implicit walking with learner-written movement and farm commands. Current Little Acres world clicks inspect and explain only; no direct mutation or automatic route traversal. Arabic default plus English switch, RTL guidance/LTR code, visible numbered route and one next instruction are implemented and browser-tested. Supersedes direct-click/auto-walk behavior in earlier prototype notes; frozen main PRD preserved. Separate garden/bridge/café stories remain the intended comparison; current three farm variations are not completion of all three original games. Owner usability/art review pending; no publication.

## Restoration island map ? 2026-10-19

Owner selected restoring the island with Mochi and authorized building the map into the local site before the introduction. index.html now loads island.css/island.js: Arabic five-destination SVG map, keyboard/click chapter selection, contextual description, existing farm entry and return-to-map button. Original farm runtime/art retained; index-before-island.html preserves prior entry. Future chapters are explicitly upcoming and disabled; no unlock/progress persistence or new Python lesson runtime claimed. Farm destination explains that it opens the existing movement/farming prototype, not the new introductory chapter. Map uses original vector art consistent with warm farm palette.

Approved teaching direction: Arabic explanations, English-only lesson code/examples, minimal visible instructions, deeper optional hints and contextual companion guidance. Welcome overlay/gestures, adaptive hint nudges, full PDF coverage checklist and later chapters remain pending. Hint count is support-use information, not evidence of mastery. Do not infer completion from opening map nodes.

Validation: island JavaScript syntax and existing check.cjs regression suite pass. Browser inventory returned no available browsers/apps; rendered desktop/mobile and actual map interaction review remain pending. No publishing or BubblyCue work.

### Colorful Farm interactive art study - 2026-10-19 - LATEST / RESUME HERE

Owner selected option 1 Colorful Farm including Mochi and requested its visual principles remain consistent across the website. Owner said ok to the proposed next step: one playable farm scene for review before extending the island. This approves the reference direction, not a claim that new assets match pixel-for-pixel or final lesson/course approval.

New separate entry: devpost/little-acres/colorful-scene.html (linked from art-comparison.html). Built-in image generation referenced the exact selected farm image: background removes baked-in Mochi while preserving composition; separate transparent cream straw-hat Mochi sprite. Assets art/play-environment.png and art/play-mochi.png, exact prompts art/play-prompts.json. Visually inspected both generated images. Original illustration and main index farm remain.

Functional art study: centered blurred-backdrop welcome, subtle companion bounce, print of string/number to safe output and persistent bubble; explicit move_up/down/left/right(1..8) on fixed screen-space path, no automatic pathfinding, click inspection only, Stop and reset preserving code. Arabic guidance, English code examples, LTR editor. Three optional hint depths, gentle once-per-inactivity timer/after repeated errors icon nudge (observable signals, not intelligent diagnosis or mastery score). Bounded parser, max16 commands/40 steps; no variables, arithmetic, farming, true skeletal walk/handwave or new chapter engine. Environmental scenery remains a static image with minor light/butterfly overlay; no claim of full 3D or animated water. Full lessons, sprite-facing/occlusion refinement and wider map rebuild remain pending.

node devpost/little-acres/check-colorful.cjs passes safe parsing, unknown syntax/limits, path boundary, simulated controller movement, output text safety, hint depth, cancellation, reset, local assets and RGBA sprite. Existing check.cjs passes. This is Node DOM simulation, not browser rendering; desktop/mobile visual and pointer checks remain pending because browser inventory was empty. Next: owner reviews new art scene quality/movement before map replacement or broader teaching implementation. No publishing/BubblyCue work.

## Chapter 1 beginner-flow correction - 2026-10-19 (CURRENT)

Authorization: owner explicitly requested implementing the detailed corrections after review, saying "ok do them". Selected Colorful Farm visual direction and Mochi identity retained. Current chapter entry remains colorful-scene.html, linked from art-comparison.html; main index map and earlier farming study remain separate/historical experiences, not the new complete island art rebuild.

Replaced movement art-study flow with five connected activities: print/custom greeting (two different text results), learner-written greeting assignment and print, farm_name/identifier rules with sign visualization, length/width multiplication with bounded countable bed, comments comparison using unchanged executable program/output. No auto-insertion into learner editor; per-activity drafts retained within session. Three progressive hints appear directly below Help, which is below Run. Examples are optional disclosure/help, not injected solutions. Progress shows five activities within chapter one of five planned course chapters; manual Continue, extra-practice prompts, unlocked review, and future chapters explicitly upcoming. This is not exhaustive Topic 1 PDF coverage or an exam-readiness/learning validation claim.

Eight anchored walkthrough bubbles introduce Mochi, restoration goal, empty beds, worn house, activity path, editor, Run, Output and help; replay/skip/back/keyboard trap supported. Arabic explanations/feedback; English code examples. Explain print output vs game bubble, assignment/name case, digits/underscores/keywords, numeric multiplication, # behavior. Each execution uses a fresh variable environment. Supported bounded subset implemented in chapter-engine.js: string/number literals, ASCII identifiers, assignment, print(expression), numeric + - *, parentheses, comments/escapes, safe AST evaluation, explicit errors; no eval, moves or general Python. Outputs use textContent; conditions depend on actual named-variable prints/calculation rather than exact strings.

New reference-edited art/restoration-start.png removes fruit, flowers and crops, makes trees sparse and grass dry, wears cottage roof/plaster/shutters while preserving camera/layout and selected illustration style. Exact generation prompt in art/restoration-prompt.json. Background remains static raster; CSS waterfall streaks/foam/river ripple and Mochi breathing/cheer provide ambient movement, not a 3D simulation. Optional user-enabled local Web Audio water/bird ambience; off initially, closes on pagehide, suspends while hidden. No external audio/download. Actual listening remains pending.

Validation: check-chapter-flow.cjs tests five successful activities and negative cases, custom strings/unsafe markup as literal text, variable case/undefined/types, source/step limits, multiplication vs hard-coded answers, matching comment comparison, manual progression/drafts, three hint levels, no click mutations/code insertion, cancellation/reset, tour focus/inert hooks and local assets. check.cjs now runs both earlier farming checks and new chapter checks. Generated neglected-farm asset visually inspected. Browser inventory empty; actual desktop/mobile layout, tour positioning, pointer interactions and listening unverified. Preserved before-chapter HTML/CSS/JS plus earlier art assets. No publishing/BubblyCue work.

## English-default chapter and dimensional progress trail - 2026-10-19 (CURRENT)

Owner authorized English as primary/default language for hackathon presentation, with Arabic available from a top switch; requested colorful dimensional activity icons and a miniature Mochi showing the current activity. This supersedes Arabic-default presentation for the current colorful chapter slice. Wider legacy map/previews are separate historical prototypes and have not all been localized.

colorful-scene.html now starts lang=en/dir=ltr with English headings, tour, lessons, examples guidance, hints, feedback, errors, buttons, references, chapter overview and accessibility labels. Top Arabic/English switch plus accessible tour-time top switch changes presentation in place; preserves current activity/progress, drafts/editor, run state, output, learner-authored greeting/sign/variable text and sound state. Code/examples stay LTR. 167 bilingual entries, with dynamic progress/hint/tour/error templates. No server/fetch/external translation dependency.

Activity trail replaced text-symbol circles with five original shaded SVG badge objects (greeting envelope, variable box, farm sign, planting bed, comment notebook), colored raised surfaces/shadows, hover/press response, current ring, completion ticks and locked state. Reuses exact approved transparent Mochi sprite as miniature current-activity marker; smoothly changes its logical position on manual next/review and mirrors for RTL. This is dimensional 2D UI, not actual 3D geometry. Reduced-motion fallback.

Authoring: chapter-source.js + english-copy.json/static-english-copy.json -> node devpost/little-acres/build-chapter-i18n.cjs -> chapter.js, chapter-translations.js and English-default HTML; base HTML is colorful-scene-before-english.html. Snapshot chapter-before-english.js retained. chapter-i18n.js/ activity-art.js and activity-art.css are runtime files. Keep source/copy catalogs updated when changing generated lesson text.

Validation: check.cjs passes legacy farm, five-activity flow in English, and real localization-function DOM simulations covering default English, LTR/RTL roundtrip, templates, in-tour switch and preservation of learner strings/code. No actual browser rendering or pointer verification because browser inventory remains unavailable. Owner visual review needed for icon polish, marker placement and walkthrough positioning at desktop/mobile sizes; no claim those are browser-verified. No publishing, new chapters or BubblyCue work.

### Unfinished cottage shell - 2026-10-19
Owner explicitly requested removing door, lights, windows and finished brick/stone steps because the cottage still looked complete. Reference-edited art/restoration-shell.png now has empty doorway/window openings, no light fixtures, no neat doorstep/bench, keeping the worn roof/shell and selected farm style. Image visually inspected. Current colorful-scene.html and the bilingual build base now reference this new asset; previous art/restoration-start.png retained. Exact built-in generation prompt saved in art/house-shell-prompt.json. No lesson/runtime changes. Owner visual review pending; no publication.
## Chapter 1 beginner clarity ? 2026-10-19
Owner feedback identified two onboarding problems: beginners need a visible explanation of what failed and how to fix it, and the lesson concept and code task were visually blended into a dense reading block. The current Chapter 1 implements separate Idea, Your task and After Run sections; the worked example remains collapsed. Invalid Run presents a bilingual assertive warning beneath the Run controls with line number and actionable fix, clears as soon as the learner edits, and is linked to the editor for assistive technology. Python scope, activity sequence and frozen main PRD are unchanged. Browser review remains pending.

### Chapter completion moment and interactive progress - 2026-10-19
After owner feedback that completing the first lesson felt flat and the progress bar looked dated, the current Chapter 1 slice now opens a compact celebration dialog on each activity's first completion. It plays the supplied local applause asset (`art/crowd-clapping-.wav`) once, shows Mochi celebrating, and presents exactly two choices: more practice or the next activity. Those are the existing progression actions moved into the dialog; practice prompts and manual next-step gating remain unchanged. The last activity's next action opens the journey overview.

Replaced the thin native meter with five colorful, raised clickable activity segments. Only the current and completed activities can be opened; the Mochi marker travels to the current step, completion fills each segment, and the active lesson icons remain available for navigation. Added narrow-screen and reduced-motion styling. No sound download, network dependency, progress persistence, or course expansion. Bilingual static copy catalog and generated English-default page rebuilt (170 text entries). Browser rendering, pointer review and audio listening remain unverified; no tests run in this edit. Open `devpost/little-acres/colorful-scene.html` and refresh with Ctrl+F5 to review.
### Simpler Chapter 1 task instructions - 2026-10-19
Owner asked for the code instructions to be as simple as the existing index experience. The five activity task prompts are now short action statements: write a greeting; assign and print it; name and print the farm; calculate and print bed area; add/remove a comment and compare. Identifier rules stay in the separate Idea card. Expected results and optional hints still supply explanation when needed; no starter code was inserted. Restored the six English UI strings needed for the bilingual authoring count and rebuilt the English-default page. Browser review remains pending.
### Walkthrough visibility on short laptop viewports - 2026-10-19
Owner reported that the tour bubble and spotlight could fall outside the laptop viewport while page scrolling was locked, leaving no way to bring them back into view. Replaced side/below placement with viewport-clamped positioning: keep bubble beside the target when space permits, otherwise place it above/below, and constrain the bubble to the visible height so its text scrolls inside it. Raised explicit spotlight and card stacking order and repositions on browser and visual-viewport resize. Page scrolling remains locked only during the walkthrough. Build regenerated successfully; laptop/browser visual review remains pending.

### Progress trail correction - 2026-10-19
The five illustrated activity icons already were the chapter progress control. A duplicate numbered control row was mistakenly added and has now been removed. The original icon trail is the sole interactive progress navigation: its current Mochi marker, clickable unlocked icons, completion checks, connected fill and activity count are being polished in place. Browser review remains pending.

### Modern chapter theme - 2026-10-19
Owner rejected the chapter's previous visual design as not modern and asked for a design enhancement. The active Chapter 1 entry now loads a presentation-only `modern.css` layer: warm cream/forest/sage palette, Segoe UI Variable typography, app bar with Mochi avatar, compact activity rail, larger stage with HUD caption, dark editor, modern lesson cards and dialogs, and responsive 390/430 layouts. No lesson content, parser, progression, audio or IDs changed. The English copy catalog was also repaired after six missing template placeholders shifted tour and UI translations; the in-tour language pill and its scroll lock were corrected.

Status: implemented and locally reviewed at 1440, 430 and 390 widths in English and Arabic with no horizontal overflow; `check.cjs` and `check-colorful.cjs` pass. Owner approval of the modern direction remains pending. This does not approve later chapters, map integration, persistence or publishing.

### Playable modern-game prototype - 2026-10-19
Owner clarified that the modern theme still read as a lesson page and asked for a modern game-like playable prototype. A separate `game-prototype.html` now demonstrates a full-screen farm, mission HUD, Mochi movement, seed choice, plant/water/harvest actions, crop growth and a completion card, with a small Python command echo. The current Chapter 1 page is untouched. The loop and mobile layout were verified locally; this is an unapproved direction for feedback, not a replacement or a new curriculum decision.

### Beginner Lesson 1 from Topic 1 - 2026-10-19
Owner asked for the first lesson to follow the supplied Topic 1 PDF from zero and not jump to farm commands. A separate `first-lesson.html` now teaches print/strings, variables, numbers/arithmetic, comments and a combined mini-program in five manual steps, using the safe bounded engine and concept-based validation. No farm actions appear in Lesson 1. All five steps reached the completion card in local Chrome. Owner review of sequence and depth remains pending; this is not yet integrated into the chapter or island.

### Chapter select - 2026-10-19
Added `chapters.html` showing all five planned chapters. Chapter 1 opens `first-lesson.html`; Chapters 2–5 are visibly marked coming soon and are non-clickable. The lesson links back to the chapter list, and the island map’s primary action opens the chapter list. No unlock, persistence or fake progress was added. Owner review of chapter names, availability and entry flow is pending.

### Sign-in window - 2026-10-19
The chapter-select page now has a bilingual sign-in window with email/password, optional name, Email/Google tabs, Create account, Forgot password and guest continuation. It is a UI prototype only: no account is created, no credentials are sent or stored, and there is no backend or cross-device progress. Real authentication remains out of scope until the owner selects a service and approves security/privacy handling.

### Abandoned-world map and beacon goal — 2026-10-21
Owner approved a second preview after requesting empty/old islands and a final target. Open devpost/little-acres/world-map-restoration.html. Original beautiful preview and current home preserved. New imagegen edit shows neglected islands; reversible vision button compares original art with starting ruins, explicitly not earned progress. Goal concept: restore all five islands, then relight the lighthouse to reconnect Mochi's home; repair during Island 4, final lighting after all five. No restoration runtime, finale, chapter unlocks, auth/progress or publishing changes. JS/assets/selection/availability/toggle checks pass; 430x1100 Chrome screenshot captured. Notes: world-map-restoration-notes.md. Exact art prompt: world-map-abandoned-prompt.txt. Owner visual acceptance pending.

### Island summaries and sequential lock preview — 2026-10-21
Owner authorized topic/restoration cards and dimmed future islands in the separate restoration preview. Open world-map-restoration.html. Inspectable Islands 2–5 have shaded art regions, lock labels and exact previous-island prerequisites; only Island 1 can be entered. Each selection separates What you will learn from What you will restore; restoration copy is labeled Story concept. Future chapter status explicitly remains in development. Art-vision toggle removes shading for comparison without unlocking entry or recording completion. Existing first lesson, current home, authentication, saved progress and original beautiful preview unchanged. Sequential earned unlocking and completed/revisit states remain unimplemented pending chapter integration; do not infer progress from inspection. Both runtime scripts tested together: five summaries, prerequisite text, entry restrictions and reversible comparison pass. Desktop review image: review-world-island-locks.png. Phone interaction review pending. Same ENG-006 design iteration, no new audience milestone or publication.

### Tap-to-open island summaries — 2026-10-21
Owner rejected the permanent summary below the map and authorized showing the popup alternative. world-map-restoration.html now opens its existing summary inside a native modal dialog only after an island marker is activated. Desktop centered popup; phone CSS bottom sheet; close button, backdrop click, native Escape/focus containment, return focus to triggering island. Existing lesson entry restrictions and learning/restoration copy retained. No saved unlocking or active-home changes. Added world-map-popup.css/js. Existing five-island selection/lock/comparison tests and JS syntax pass. Review screenshot: review-island-popup.png. Physical-phone and assistive-technology review pending. This is a refinement of the same ENG-006 preview, not a new marketing milestone.

### Compact island card, map stays visible — 2026-10-21
Owner approved replacing the large obscuring modal with a compact island-side card. world-map-popup.js now uses a nonmodal dialog positioned beside the selected marker, clamped to the desktop viewport and repositioned on scroll/resize. Phone styling uses a small bottom card capped at 45dvh. No blur, backdrop dimming or scroll lock; map remains interactive. Selecting another island updates/repositions the card. Outside click, close and Escape dismiss it; focus returns to the trigger. Topic/restoration copy and entry locks retained. JS syntax and existing island summary/availability/comparison tests pass; desktop screenshot review-island-tooltip.png captured. Phone native-device review pending. Same ongoing preview refinement, no new content checkpoint or publishing.

### Short playful island cards — 2026-10-21
Owner approved reducing dense text and increasing readability/fun. Existing compact card now uses emoji/place title, one-line invitation, a short Learn badge and concise Mission phrase; larger 22–23px title and 13–14px content. First island: First Steps / Give Mochis farm a fresh start / Python basics / Repair the cottage, revive the garden / Lets begin. Existing full lesson text unchanged; map preview still marks restoration as concept. All five cards shortened; original map/home unchanged. JS syntax and combined selection/prerequisite/entry/comparison checks pass. Desktop review: review-island-playful.png. Native phone visual review pending; no publication or earned progress changes. Same ENG-006 design refinement.

### Living-map demo with local coastal sound — 2026-10-21 — LATEST
Owner authorized code-based illustration motion and sound after declining video service costs. Separate entry: devpost/little-acres/world-map-living.html. Water pixels displaced/shimmered by WebGL, very subtle green-foliage sway; no generated video or subscription. Buildings remain fixed. Local synthesized surf/breeze with occasional gull-like call; Sound off by default, Pause motion and reduced-motion/visibility/fallback support. Current restoration preview and home unchanged. Real-time Chrome checks pass animation advancement, pause/resume, vision toggle, island summaries/locks and real-click sound activation. Desktop/430px screenshots inspected; no phone horizontal overflow. Listening/native performance still pending. Full limitations/rebuild/verification: world-map-living-notes.md. Same ENG-006 marketing package updated with complete animation-reveal script; local draft only, CAPTURE NOW / POST LATER. No publication or earned unlock changes.

### More visible water motion and 2D fallback — 2026-10-21
Owner reported no visible movement on living map and confirmed the button said Pause motion. Increased water displacement from .00165/.00115 to .0065/.004 and stronger ripple highlights. Added Canvas 2D water-strip fallback for unavailable/lost WebGL; samples existing raster through a water-color mask and destination mask, fixed terrain underneath. Frame-count dataset added for diagnostics; live page script version updated to avoid stale cache. Existing pause/visibility/reduced-motion/vision controls retained. JS syntax and existing island controls pass. Node runtime test with WebGL deliberately unavailable verifies fallback readiness, displacement changing between frames and pause/resume. Actual in-app visual result remains unverified: browser security policy rejected observation of file:// page; no alternate browser/CDP workaround attempted. Prior screenshots describe v1, not this revision. Owner should refresh and review visibly stronger waves. Updated still preview/current home unchanged. Routine correction of ENG-006, no new package or publication.

### Real nature audio, seabirds and GitHub save — 2026-10-21 — LATEST
Owner authorized free licensed recording downloads, default-on sound, birds and wind, then requested committing changes to GitHub. Downloaded CC0 Beach Ocean Waves by jasinski/qubodup and public-domain Gull 2 by avphillips plus Gentle breeze and birds singing by ezwa. Sources/license links in world-map-audio-credits.html. Replaced synthetic noise/oscillator calls with decoded field recordings, softened loop boundaries, and optional occasional recorded gull calls. Sound enabled by default; autoplay attempted, starts on first trusted interaction when browser blocks it; mute survives later interactions; hidden-tab audio pauses. Added three gliding/flapping vector seabirds, windborne leaves and faster drifting clouds, with pause/reduced-motion controls. Still map/home untouched; public/ deployment unchanged. Tests: real file signatures/local assets, default-on/gesture/mute/resume/visibility behavior, water fallback and island availability all pass in Node simulations; current audio listening/visual verification pending. Browser file:// security restriction remains respected. Source files and natural-audio data URLs kept local, no runtime downloads. Preserve raw recordings and credit file. Durable checks: check-map-nature.cjs, check-map-water-fallback.cjs, check-map-islands.cjs. Older tmp build scripts are historical intermediate generators and must not overwrite the current demo. GitHub target origin main, in sync before commit; push result will be reported separately.

### Approved map becomes public homepage — 2026-10-21 — LATEST
Owner approved the map and explicitly authorized making it the homepage and publishing a playable prototype. Source/public index.html now contain the living map. Island 1 enters the existing five-step Python lesson; map/lesson/completion/account flow connect back to index. Valid local or signed-in completion restores the first-island overlay in five increments, with Continue/Revisit and Restored states. Four future islands remain clearly upcoming and not enterable; no fabricated lesson unlock or finale. Guest progress flushes on pagehide and rejects out-of-range indices. Existing account page is retained with map-return routing; OAuth return targets index, provider configuration unchanged. build-public.cjs uses explicit asset allowlist. Public-map amendment: public-map-prd.md. Relevant map/audio/fallback/public-build/engine/language checks pass. Legacy check.cjs still expects the obsolete Arabic code-only index and is not a valid current-homepage check. GitHub Pages confirmed enabled and latest prior run succeeded. Publishing and live browser verification in progress. Unrelated tiktok-assets directory is outside this change.

### Separate scene-first phone preview — 2026-10-21
Owner authorized a quick separate phone-specific preview, not public replacement. Entry world-map-mobile.html; world-map-mobile.css/js only added. <=680px: full-height island art under slim header, larger map centered on first island, pointer drag, pinch/zoom buttons, all-five overview, Find Mochi, compact mission toggle and mirrored sound control. Existing summaries and entry/progress rules retained; desktop base remains as approved. JS parses; actual phone rendering/touch review pending due prior local file browser restriction. Public homepage and deployment files unchanged. This is a continuing design revision, not a new marketing milestone. Review/approve before integration or publication.

### Vertical phone-island trail preview — 2026-10-21 — LATEST
Owner rejected the zoom/drag phone preview and approved a separate vertical-trail alternative. Entry world-map-trail.html, new world-map-trail.css/js. <=680px: five large individual island views framed from existing approved art using code-native clipping, normal vertical scrolling and a connecting dotted route; no manual zoom or drag controls. First island playable/current or restored according to existing saved progress; future islands dimmed/upcoming. Cards show place/subject with tap-to-open existing compact summary and existing lesson entry rules. Sound control mirrored; long-term beacon goal at bottom. Approved desktop/public homepage unchanged, earlier phone preview preserved. JS syntax and existing island logic tests pass; actual phone render/touch review still pending under the local-file browser restriction. This is a refinement of the same design checkpoint; no new public deployment or marketing package.


### Final phone map decision — 2026-10-22 — LATEST
Owner rejected the vertical-trail direction and explicitly asked to keep the current full-screen map design. Source and public homepage now use the same phone composition: full-height pan/zoom map, compact Island 01 status, Islands bottom sheet, Start First Steps CTA, floating zoom, sound, and existing island details as a bottom sheet. Phone rules are scoped to <=680px; desktop is unchanged. True mobile emulation verified at 360x800, 390x844 and 418x880 with no horizontal overflow; 1440x1000 desktop render remains the approved layout. Public build allowlist updated with world-map-mobile.css/js and world-map-phone.css/js. Public build deployed and the phone CSS/JS are reachable on GitHub Pages; physical-device touch/audio review remains pending. This supersedes the earlier trail integration note; the rejected trail preview was not added to this public commit.


### Phone map loading fix — 2026-10-22
Live phone testing showed the playable HUD blocked by the 4.6 MB decorative water-texture script loading before it. Source/public index now load the mobile scene, phone HUD and playable start action before water/living/nature payloads; the map uses a 900px phone JPEG via srcset (about 200 KB instead of 3.4 MB). Local 390px render shows the playable map and Start First Steps while heavy decoration finishes in the background. Public build allowlist includes both phone JPEGs. This is a publishing correction for the phone design, not a new design direction.


### Dedicated playable phone page — 2026-10-22 — LATEST
The live phone page was still able to show a half-loaded desktop shell when its account/media scripts stalled. Phones now redirect from index.html to a separate lean phone.html that loads only the map, pins, HUD, islands sheet, island summary and Start First Steps. No water canvas, nature audio, Supabase or auth scripts are on this page; it enters the existing playable first-lesson.html. Desktop index remains the full living map. Public allowlist includes phone.html and the 900px phone map artwork. Local 390px check passes; live deployment verification is in progress.
