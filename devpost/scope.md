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
