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
