---
doc: scope
status: approved
---

# Visual Coding Journey — working title

A colorful learning roadmap where learners connect coding concepts by building their own tiny shop and immediately seeing what their code changes.

## The Unique Kernel
Bridge the gap between understanding an isolated concept and applying it in a connected project. The learner's real code changes visibly affect the same growing shop, supported by visual explanations and everyday-life stories.

## Who It's For
People like the learner who understand basic coding explanations but get stuck combining them into a project, and complete beginners who want a visual introduction. Both should be supported; the PRD will define an approachable starting point without a long onboarding questionnaire.

## The Core Loop
Follow a short visual roadmap, explore an explanation, edit a small piece of real code, and see the shop change. Repeat with connected steps so earlier work carries forward into the same project.

The main structure is guided hands-on practice, followed by a final independent challenge, followed by a short reflection on progress and what the learner can now do.

## Inspiration & Identity
Colorful, inviting, creative, and visually clear. Learners personalize a tiny shop, such as a supermarket or pet shop. Everyday-life stories and visuals help connect abstract code to visible behavior. Videos are a preferred learning format in the broader vision; the first explanation formats remain to be agreed in the PRD. No specific reference app or final design chosen.

## Why This Matters to the Learner
The learner wants deep practical programming experience and ultimately to become a professional programmer. Isolated lessons did not show how variables, arrays, and other code work together in a whole project. They also want to practice a structured planning workflow that keeps the learner and agent connected to the original idea.

## What "Working" Looks Like
A learner follows a short roadmap to build and personalize one tiny shop, edits code to change its appearance, and adds or removes products through an array. The live shop reflects those edits. The demonstration shows code and the corresponding visual change together, and how the steps contribute to one project.

The learner finishes an independent challenge applying the practiced concepts, then a short reflection recognizing their progress.

## The POC Boundary
One short learning journey with one tiny-shop project: choose a shop theme, change its appearance, and add or remove products through small code edits. Include visual explanations, guided hands-on practice, a final independent challenge, and a short reflection. Exact lesson sequence, supported themes, explanation formats, editing behavior, challenge tasks, hints, and reflection wording belong in the PRD.

Agent suggestions awaiting review: a reset option and friendly guidance for code errors. These are proposals, not learner-approved requirements.

## Full Vision to Preserve
A visual roadmap from a starting point through a full programming journey. Over time, learners build projects of increasing complexity, connect their coding knowledge, explore different visual explanations without a tedious questionnaire, and learn the development workflow from planning to sharing code on GitHub. The hackathon build is the first piece of this vision; the learner intends to continue afterward.

## Later
The full programming curriculum; additional explanation formats including video; ways to discover preferences through use; multiple approaches to the same programming task; basket, checkout, and totals; GitHub syncing; additional aquarium and programmable-robot projects. Later possibilities remain to be prioritized.

A future update could use the learner's own words about what they want to build or practice to shape a personalized next project or learning journey, encouraging continued learning. This is deferred; generating a next journey is not part of the current short reflection.

## Explicitly Cut
No permanent vision elements have been discarded. The full curriculum, additional projects, and GitHub syncing are deferred to keep the first experiment small. Deployment is optional. Hackathon preparation will include a short demo video and public GitHub repository; this is separate from teaching in-app GitHub syncing.


### Home Lab design update — 2026-10-12

User-supplied Home Lab direction supersedes the frozen cosmic visual frame for the active prototype. Active file: prototype-cosmic-live.html; previous version: prototype-before-home-lab.html. Implemented responsive cozy/synthwave/lofi CSS, inline soft teal Mochi SVG, keyboard-accessible egg hatch, five sequential safe command lessons, cumulative bricks/plants/chair, invalid-command feedback and restart with timer cancellation. Lesson 2 is house.add_brick(); Lesson 3 is house.build_walls(), repairing the supplied skipped lesson. Other commands remain mochi.eyes = cute, window.add_plants(), room.add_chair(). Sliders update bounce duration and lighting; telemetry shows theme, completion percentage and selected glow, explicitly simulated rather than measured hardware. No arbitrary code execution. Syntax and DOM simulation checks pass for hatch guard, invalid input, all lessons, completion, themes, sliders and reset. Actual rendered browser review remains pending. Local design review only; no publishing, BubblyCue changes or full-product approval.


### Meadow journey revision — 2026-10-12

User authorized fixing the prototype after visual review: preserve the plush character exactly, add attention-grabbing idle egg movement, a longer multi-crack hatch, sound/voice welcome, name-first personalization, non-overlapping guidance, grassy ground with sunlight from the right, colorful modern game/study HUD, introductory walkthrough, lesson map, clear completion and next-lesson progression. All operations in this revision stayed within the sandbox; no elevated execution, external file access, publication or generated outside-workspace assets.

Implemented four-page introduction; egg rocks while idle and hatches through top/side/bottom crack stages plus separating shell halves over 7.6 seconds (reduced motion shortens it); sound effects default on following user interaction; optional speech uses installed local English browser voices only and falls back to text. Bubble is left of Mochi on desktop and above it on mobile. Unchanged blank plush PNG and facial overlays retained. Name → eyes → nose → mouth → greeting; greeting shown in bubble and completion. Grass meadow, hills, drifting clouds, sunlight rays and small spark motion are code-native decorations. Prior wooden presentation and upper-right slogan removed.

Journey map: 1 companion variables; 2 house variables practice (walls/roof/door); 3 conditions (night/day and conditional lights); 4 loops (garden.plant(spot), range 3–8, five flowers completes guided goal); 5 final project (change roof variable, working night condition, bounded garden loop). Chapter completion celebrates with sound/confetti, unlocks next, offers next or continued experiment. Earlier scenes/drafts persist in page session; no permanent saving or arbitrary Python execution. Functions, interior rooms, richer kitchen/bedroom/garden curriculum remain later scope.

Verification: check-meadow.cjs passes syntax/unique IDs, walkthrough, full staged hatch timing, blank face/name-first gate, celebrations/unlocks, house creation, true/false conditions, indentation errors, bounded loop, combined final project, invalid-input state preservation and restart timer cancellation. Character asset byte-for-byte unchanged. Active entries synchronized: sites/mochi-design/dist/index.html and devpost/prototype-cosmic-live.html. Backups: index-before-meadow.html / prototype-before-meadow.html. Browser rendering, actual speech/audio and mobile visual review remain pending; no connected browser used.


### Action walkthrough and local saving — 2026-10-12

User authorized browser progress saving and requested a modern in-scene walkthrough that advances after each performed action, plus more realistic grass matching the plush character. Added welcome Sign in / Log in panel with explicit preview limitation: no real account or cross-device backend connected, no password collection. LocalStorage auto-saves accepted Mochi/house/world state, current chapter, completion unlocks, five code drafts and final-project goals. Welcome offers Continue saved adventure or explicitly Start a new adventure. Validated restoration rejects malformed saves and unsupported values; unavailable storage falls back to session-only status. Restart clears local progress and cancels hatch timers. Same browser and entry URL required for local saving.

Walkthrough now spotlights the actual moving egg and bubble, then the coding panel; typing a valid current assignment changes its instruction to apply the code; successful application advances to next feature; completion points to chapter progression. It follows actual learner actions, with optional Hide tips. No explanation-only Next slideshow. Detailed code-native meadow-grass.svg (23,000 shaded blade paths, grain, soft distant vegetation, warm right-side sunlight) replaces flat hill/stripe ground. Grounding shadow strengthened; Mochi PNG unchanged.

Checks: check-guided-saving.cjs passes action-triggered name-to-eyes guidance, browser save/restore of completed world and drafts, corrupted save fallback, restart storage removal, full prior hatch/lesson/condition/loop/final-project regressions. Active local entry points synchronized. Backups index-before-guided-saving.html and prototype-before-guided-saving.html. Actual browser rendering/audio/storage persistence on the user browser pending visual review. All tools and files for this revision stayed in sandbox; no elevated commands, external asset access or hosted publication. Real sign-in needs a user-selected authentication/storage service and future authorized connection work.


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


### iPad lesson sidebar ? 2026-10-24
Owner requested instructions beside the visuals on iPad/big screens. Extended the approved right rail to viewports at least 760 CSS px wide; rail width scales from 300 to 380px. Farm remains fully contained in its own unobstructed area; phones below 760px retain the stacked hero layout. Tour scene targeting follows the same breakpoint. Source and public lesson copies updated. Headless Chrome screenshots reviewed at 768x1024 and 1024x768; 390x844 phone check has no horizontal overflow. Inline scripts parse. Native iPad/keyboard review remains pending. Local update only; not published.


### Medium-screen sidebar refinement - 2026-10-24
Owner reported medium screens still hide too much illustration. Supersedes the 760px/300px-minimum rail: side-by-side starts at 600px, sidebar scales from 250px to 380px at 29vw; medium-width lesson header wraps and instructions use 38% of rail height. Full farm remains contained beside the rail. Tour breakpoint matches. Source/public copies updated. Screenshots reviewed at 820x1180 and 640x900, with no horizontal overflow; inline scripts parse. Exact owner device/page clarification pending. Local only, not published.


### Restore phone layout boundary - 2026-10-24
Owner rejected extending the sidebar into phone widths. Restored stacked phone layout below 760px and matching tour/resizer boundaries; retained slimmer sidebar only at 760px and above. Supersedes the 600px breakpoint in the previous checkpoint. Source/public lesson copies match and inline scripts parse. No publishing. Preserve approved phone layout in future tablet adjustments.


### Restore owner phone screenshot layout - 2026-10-24
Owner supplied sites/mochi-design/dist/phone screen size.png, clarifying that the approved phone view was a fixed illustrated/grid scene with overlaid header controls and an independently scrolling lesson/editor sheet below. Earlier stacked-hero restoration was the wrong layout. Added scoped below-760px scene/sheet CSS, readable task/progress controls, persistent Mochi and overlaid Map/language controls. Tablet sidebar remains separate. Tour now targets visible Mochi; exit preserves the sheet top rather than scrolling to editor. Source/public copies match. Chrome phone 466x790 and tablet 820x1180 checked for overflow; owner comparison pending. No publication.


### Compact phone character and controls - 2026-10-24
Owner requested smaller character and controls below it. Phone-only CSS reduces Mochi from 90px to 64px, progress circles from 34px to 26px, heading from 32px to 25px, task text from 18px to 14px, and button/header sizes and panel spacing. Fixed scene plus scrolling lower sheet retained; tablet/sidebar CSS unchanged. Source/public match; 466x790 Chrome screenshot reviewed without horizontal overflow. Local only, not published.


### Phone character final size - 2026-10-24
Owner approved the compact phone layout and requested Mochi slightly smaller. Changed only phone character width from 64px to 56px in source/public lesson; controls and tablet layout retained. Verified both copies match. Local only.


### Layout approved for publication - 2026-10-24
Owner approved current phone scene/sheet with compact controls and 56px Mochi, plus separate tablet/desktop sidebar, and explicitly requested commit, push and publication. Public-site asset/script/progress checks pass. Commit includes only lesson source/public and planning records; unrelated map experiments, screenshots and TikTok assets excluded. GitHub Pages deployment verification follows push.
