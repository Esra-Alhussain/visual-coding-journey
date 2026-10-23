# Product Requirements Document (PRD)
## Project Name: Mochi's Home Lab
## Category: Build With AI: Basics Hackathon Submission

---

## 1. Product Vision & Layout Architecture
Mochi's Home Lab is an immersive, additive coding sandbox built for absolute beginners using a framework-free frontend stack (HTML, CSS, Vanilla JS). 
- **The Top Stage:** Starts as a completely dark, empty canvas patch. All structural elements, character traits, and environment assets materialize line-by-line out of the user's direct code commands and stay permanently visible.
- **The Bottom Terminal HUD:** A frozen, high-contrast 'COSMIC_TERMINAL.EXE' editor layout backed by gray telemetry rows ("MATRIX MODE", "COMPUTE EFF", "ENERGY GLOW") and interactive hardware configuration sliders.

---

## 2. Core User Experience & 5-Lesson Sequence Blueprint

###  Lesson 1: Variables & Character Genesis (The Cosmic Egg)
- **Concept Taught:** Key-value attribution and string assignments.
- **Initial Visual State:** The top canvas is completely empty except for a large, vibrating cosmic egg in the center. The egg shakes, cracks open, and reveals a completely featureless pink Mochi shell (no eyes, no mouth, no headphones).
- **Line-by-Line Progression:**
  1. `mochi.eyes = "cute"` (Options guided via input hint box: "happy", "cute", "starry"). The second it executes, sharp anime eyes pop onto the face. Mochi jumps and triggers a cheerful bubble: *"Wow! I can see you! Give me a mouth next so I can laugh! Type: mochi.mouth ="*
  2. `mochi.mouth = "smile"` (Options: "smile", "cat_face"). A blushing smile line snaps onto the mesh. Mochi spins and cheers: *"Yay, I can talk! Let's lock down my name and greeting text!"*
  3. `mochi.name = "Pixel"` and `mochi.greeting = "Hello, World!"`. 
- **The Payoff:** A neon text name plate drives into the dirt above its head, and a persistent text speech bubble locks onto the layout screen permanently displaying their custom text string.

###  Lesson 2: House Fundamentals (The Hard Way Foundation)
- **Concept Taught:** Functional statements and object activation.
- **Initial Visual State:** Mochi stands completed on the empty dark terrain patch.
- **Line-by-Line Progression:**
  1. `house.material = "wood"` (Options: "wood", "stone"). A heavy, flat modern floor platform slams into place right underneath Mochi. Mochi drops down to stand firmly on it.
  2. `house.add_brick()`. Exactly ONE small brick drops onto the platform grid. 
- **The Puzzle Pivot:** The coding console input locks down temporarily. Mochi's speech bubble pops open displaying an active HTML text response field reading: *"Umm, 1 brick won't build my house walls! What can we do to make enough numbers to build a whole first wall?"* The user must type an answer ("loop" or "repeat") inside the bubble's layout text area to unlock the next terminal page.

### ️ Lesson 3: Sequences (The Chronological Wall & Roof Blueprint)
- **Concept Taught:** Sequential execution order without shortcuts.
- **Initial Visual State:** The wooden floor slab and a single brick remain visible from the previous step.
- **Line-by-Line Progression:** The user must manually type separate chronological lines to stack a structural row, experiencing the tedious nature of brute-forced script files:
  `house.add_brick(position=1)`
  `house.add_brick(position=2)`
  `house.add_brick(position=3)`
  `house.add_window()`
- **The Payoff:** Bricks drop down piece-by-piece to stack walls behind Mochi. When `add_window()` runs, a large arched viewing frame cuts into the bricks, revealing the sparkling cosmic stars outside the window for the first time.

###  Lesson 4: Loops & Refactoring (The Shorter Code Superpower)
- **Concept Taught:** Code compression and shortcuts using For-Loops.
- **Initial Visual State:** The house structure, window frame, and character remain completely active.
- **Line-by-Line Progression:** The game interface guides the user: *"Writing all those lines is exhausting! Let's supercharge our workspace and make our codes shorter using a Loop superpower!"*
  `for i in range(12):`
  `  window.add_plant()`
- **The Payoff:** A combo counter dial (`x12`) spins above, and 12 glowing neon potted plants rapidly sprout one-by-one right along the window sill in a fast cascade animation. The interface demonstrates how 2 lines of text just replaced a massive block of manual input entries.

### ️ Lesson 5: Lists (Furnishing the Finished Space)
- **Concept Taught:** Storing values inside array indices.
- **Initial Visual State:** The house structure, window frame, and plants are complete.
- **Line-by-Line Progression:** The user populates the room index array:
  `room.furniture.append("cozy_armchair")`
  `room.furniture.append("woven_rug")`
- **The Payoff:** The 3D-shaded armchair and rug fall gracefully from the top margin layout, landing on the wooden floors with squash-and-stretch physics right next to Mochi.

---

## 3. The Grand Finale: Cinematic Housewarming
- **Action:** The 'COSMIC_TERMINAL.EXE' panel and telemetry modules slide smoothly off the bottom margin of the screen. 
- **The Payoff:** The background drops contrast into theater spotlight mode. The camera executes an un-interrupted cinematic pan across the finished custom house. Mochi sits on the cozy armchair, next to the toy shelf, safe behind the walls, dancing to the loop particles the user engineered from scratch.

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


### Recorded Lesson 1 voices — 2026-10-13
User authorized integration of six locally supplied recordings. Hi sound.mp3 now present alongside five PCM WAVs. Active prototype plays welcome then naming choice after hatch; quote prompt on name-choice click or first typed name assignment; success on applied name change; hint on Help; first-creation line on Chapter 1 completion. Talking animation follows playback. Lesson 1 unmapped guidance remains text; other chapters retain prior voice behavior. Stop/mute/restart/chapter change/page hiding cancels recordings and queued welcome continuation. Walkthrough action instructions and next eyes guidance preserved. External SFX files absent: existing synthesized chimes remain, Mixkit mapping is pending. Backups saved; both local entry points synchronized with correct relative audio paths. check-recorded-lesson1.cjs passes six audio sources/cancellation plus existing journey/save/nature regressions. Browser visual/listening approval pending; no generation or publication.


### Three-tap interactive hatch — 2026-10-13
User requested active repeated taps and synchronized egg effects. Egg now requires three click/touch/keyboard activations: first and second add cracks with finite shake feedback and wait indefinitely; third performs final shake, full split and reveal. Sound-on locally synthesized rustle/rattle/crack/shell-break effects accompany movement, tap shakes, crack increments and full split, without paid generation. Removed rectangular egg button/tour outline and shadow; oval keyboard-focus glow retained. Restart resets tap counter and label. Both local entries synchronized; backup index-before-three-tap-hatch.html retained. Updated recorded lesson regression passes three-tap waiting, reset, clips, progression/save and ambience checks. Actual browser visual/listening review pending.


### Full Lesson 1 recorded dialogue + dry shell sounds — 2026-10-13
User rejected hissing egg sounds and uploaded eleven additional WAV recordings. All sixteen WAV files have valid PCM headers/durations, plus existing welcome MP3. Seventeen clips now routed: feature introductions, first-choice exploration, nose/mouth success then next feature, alternating short/full help, invalid-code retry, and completion with real applause. Existing synthesized tap, success and hint-open effects reused; no additional external SFX files supplied. Replaced sustained egg noise with damped triangle shell rattles, 22ms transient crack buffers (2.5ms decay), and clustered final shell snaps. Stops on mute/restart/page hiding; three-tap hatch retained. Recorded feature reactions use blink/small turn/bounce where browser animation is available. No paid generation/download/publication. Backed up index-before-full-lesson1-audio.html. check-recorded-lesson1.cjs passes full feature event routing, seventeen recordings, help/retry, actual applause trigger/cancellation and existing journey/save regressions. Sound quality and visual review remain user-browser checks. Detailed mapping: dist/audio/lesson1-audio-map.json.


### Live typing and left companion walkthrough — 2026-10-13
User requested immediate visual code application and a left-side conversational walkthrough bubble. Native input now parses complete valid code and applies changed state immediately without a button; incomplete/invalid drafts preserve accepted world. Manual apply control hidden from display and keyboard focus. Speech and success chime wait 450ms after last valid edit; finished invalid value gets gentle retry after 850ms rather than errors on every keystroke. IME composition defers application until compositionend. Guide/help/welcome copy updated for automatic application. Walkthrough anchored left with rounded bubble and tail, responsive upper-left placement on narrower screens. User asked about blank face: suggested tiny sleepy starter eyes but did not change character pending direction. Backup index-before-live-typing.html retained; both local entries synchronized. Recorded regression passes immediate native input for name/face/house/conditions/loops, incomplete-code preservation, debounce, previous routing/save/progression checks. Actual responsive rendering and listening review pending. No publication or external generation.


### Journey engagement and profile — 2026-10-13
User authorized progress/profile and clearer, more engaging onboarding. Added persistent header journey bar and five available/locked chapter stops. Overall progress derives from nineteen accepted creation steps (hatch, five companion values, three home parts, two condition steps, five garden positions, three final goals); completed milestone credit is retained on experimentation. My journey opens local profile with editable saved explorer name, actual progress/completed chapter count, five earned/locked badges and next chapter. No real account backend added. Opening now previews egg→companion→world and includes an animated isolated See the magic demo: a completed eyes assignment visibly changes sample eyes without writing learner code or awarding progress. Short local opening melody plays after Start with Sound on. Walkthrough has three-tap visual feedback and expected-result card; normal Mochi bubble shows next visible outcome and five feature milestones. Removed forced walkthrough auto-scroll during typing. Existing recordings, real applause, three-tap hatch and immediate code application preserved. Backup index-before-engagement.html retained; both local entry points synchronized. check-recorded-lesson1.cjs passes profile nickname persistence, honest progress, badge/lock derivation, isolated demo and all live-input/audio/journey/save regressions. Local static HTTP check returned 200 with new controls. Browser rendering unavailable (no connected browsers); preview server stopped. Local review only, no publishing or paid generation; BubblyCue untouched.

### Chapter completion moment and interactive progress - 2026-10-19
After owner feedback that completing the first lesson felt flat and the progress bar looked dated, the current Chapter 1 slice now opens a compact celebration dialog on each activity's first completion. It plays the supplied local applause asset (`art/crowd-clapping-.wav`) once, shows Mochi celebrating, and presents exactly two choices: more practice or the next activity. Those are the existing progression actions moved into the dialog; practice prompts and manual next-step gating remain unchanged. The last activity's next action opens the journey overview.

Replaced the thin native meter with five colorful, raised clickable activity segments. Only the current and completed activities can be opened; the Mochi marker travels to the current step, completion fills each segment, and the active lesson icons remain available for navigation. Added narrow-screen and reduced-motion styling. No sound download, network dependency, progress persistence, or course expansion. Bilingual static copy catalog and generated English-default page rebuilt (170 text entries). Browser rendering, pointer review and audio listening remain unverified; no tests run in this edit. Open `devpost/little-acres/colorful-scene.html` and refresh with Ctrl+F5 to review.
### Simpler Chapter 1 task instructions - 2026-10-19
Owner asked for the code instructions to be as simple as the existing index experience. The five activity task prompts are now short action statements: write a greeting; assign and print it; name and print the farm; calculate and print bed area; add/remove a comment and compare. Identifier rules stay in the separate Idea card. Expected results and optional hints still supply explanation when needed; no starter code was inserted. Restored the six English UI strings needed for the bilingual authoring count and rebuilt the English-default page. Browser review remains pending.
### Walkthrough visibility on short laptop viewports - 2026-10-19
Owner reported that the tour bubble and spotlight could fall outside the laptop viewport while page scrolling was locked, leaving no way to bring them back into view. Replaced side/below placement with viewport-clamped positioning: keep bubble beside the target when space permits, otherwise place it above/below, and constrain the bubble to the visible height so its text scrolls inside it. Raised explicit spotlight and card stacking order and repositions on browser and visual-viewport resize. Page scrolling remains locked only during the walkthrough. Build regenerated successfully; laptop/browser visual review remains pending.

### Progress trail correction - 2026-10-19
The five illustrated activity icons already were the chapter progress control. A duplicate numbered control row was mistakenly added and has now been removed. The original icon trail is the sole interactive progress navigation: its current Mochi marker, clickable unlocked icons, completion checks, connected fill and activity count are being polished in place. Browser review remains pending.