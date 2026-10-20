
## Restoration island map ? 2026-10-19

Owner selected restoring the island with Mochi and authorized building the map into the local site before the introduction. index.html now loads island.css/island.js: Arabic five-destination SVG map, keyboard/click chapter selection, contextual description, existing farm entry and return-to-map button. Original farm runtime/art retained; index-before-island.html preserves prior entry. Future chapters are explicitly upcoming and disabled; no unlock/progress persistence or new Python lesson runtime claimed. Farm destination explains that it opens the existing movement/farming prototype, not the new introductory chapter. Map uses original vector art consistent with warm farm palette.

Approved teaching direction: Arabic explanations, English-only lesson code/examples, minimal visible instructions, deeper optional hints and contextual companion guidance. Welcome overlay/gestures, adaptive hint nudges, full PDF coverage checklist and later chapters remain pending. Hint count is support-use information, not evidence of mastery. Do not infer completion from opening map nodes.

Validation: island JavaScript syntax and existing check.cjs regression suite pass. Browser inventory returned no available browsers/apps; rendered desktop/mobile and actual map interaction review remain pending. No publishing or BubblyCue work.

# Mochi · Little Acres

## Current version — Arabic, guided, code-only (2026-10-18)

Owner correction supersedes the earlier click-to-farm design. **World clicks only inspect.** They never move Mochi, plant, water, harvest, repair or deliver, and never write code into the learner's editor. Crop/special commands also never walk automatically: learner-authored movement must reach the target first. Original farm artwork retained; prior HTML/app/engine snapshots preserved as *-before-code-only files.

Launch **index.html** directly in Chrome/Edge. From project root in PowerShell:

    Start-Process '.\devpost\little-acres\index.html'

The page starts in Arabic with RTL guidance and an **English** switch. Python-style code remains LTR. One current instruction is visible; a numbered route explains distance/direction. Command meanings and implementation information live in closed help panels. The direct action toolbar, click-to-walk, auto-walking farm actions, quick-action buttons and action shortcuts have been removed. Scene objects inspect; Run executes. Stop/Reset/language/setting controls remain functional.

### First steps

1. Click plot 1 to inspect its route. Clicking does not move Mochi.
2. The initial editor contains move_right(1). Press **شغّل الكود** (Run code).
3. The guide now suggests move_up(3). Replace the previous instruction with it and run. Commands continue from Mochi's current position; avoid repeating completed movement accidentally.
4. When beside plot 1, run farm.plant(1, "carrot"), then farm.water(1).
5. Wait six seconds, then run farm.harvest(1). Click another plot for the next route, or replant the same plot to reach two harvests.

You can write a sequence in one run, for example:

    move_right(1)
    move_up(3)
    farm.plant(1, "carrot")
    farm.water(1)

This route assumes a newly reset farm. Clicking a different square selects an instruction target; it cannot act on the game. Bridge/café inspection explains prerequisites; repair/delivery requires explicit code travel and action. These two tabs remain farm variations; separate original bridge/café games are still unresolved, not silently marked complete.

### Current verification

Run **node devpost/little-acres/check.cjs** (delegates to check-code-only.cjs). It checks source guards, proximity, explicit movement, all mission rules/crop cycles, parser restrictions, bilingual errors and RTL/LTR separation. Current browser harness: **node devpost/little-acres/prepare-code-only-check.cjs** generates browser-code-only.html. That page auto-tests; users should open index.html.

Actual Edge: desktop run passed 28 UI/controller assertions at 1470px. After a narrow RTL scene-clipping fix, final 570px run passed 30, including a visible-Mochi bounds assertion, preserved numbered route after language switching and no horizontal overflow. Checks cover non-mutating ground/crop/bridge inspection, no code insertion, language state preservation, Arabic syntax/proximity errors, rejected remote farm actions, explicit movement and crop actions, all three farm goals, Stop and reset. Screenshots reviewed: preview-code-only-ar.png (desktop), preview-code-only-ar-narrow.png (final narrow). Physical phone, native pointer targeting, listening and owner review remain pending.

No general Python, saved accounts or permanent progress. Growth/idle animations continue naturally; world movement/actions require Run. Language switch does not translate Python identifiers or alter code/state. The one-time migration script is a historical build record, not a launch requirement. Current runtime files: index.html, engine.js, i18n.js, app.js, style.css and learning.css.

<details><summary>Historical first farm prototype — superseded click controls and old tests</summary>

Three playable local isometric farm settings. Original SVG placeholder art, no Hay Day assets, external images or network dependencies. This is a running game, not a concept image.

## Framework and entry points

This project uses plain HTML/CSS/vanilla JavaScript, without a framework, package.json, dependency install or build step. Existing main prototype: sites/mochi-design/dist/index.html. Previous movement study: devpost/garden-mission/index.html. This new game starts at **devpost/little-acres/index.html**. Earlier files are preserved.

## Launch on this computer

Open File Explorer at:

    C:\Users\ASUS EXP BOOK\Documents\Ai Basics\devpost\little-acres

Double-click **index.html**. Or run this in PowerShell from the project folder:

    Start-Process '.\devpost\little-acres\index.html'

Chrome or Edge can run it directly. No server, npm command, account, internet connection or payment needed. Open index.html, not browser-check.html (the latter auto-tests the game).

## Play

1. Choose Sunny meadow, Across the river, or Garden café. Each keeps its own in-memory farm while the page stays open.
2. Select **Plant**, choose Carrot or Strawberry, then click a numbered plot. Mochi walks to it and plants.
3. Select **Water**, then click that planted plot. Watch it grow for six seconds. Golden sparkles mean ready.
4. Select **Harvest**, then click the ready crop. Basket and harvest counts increase. Empty plots can be planted again.
5. Run a Python-style instruction to make a real scene change and complete the code objective. The starter plants and waters plot 1. If you already planted plot 1 by clicking, select another empty plot and click **Plant + water** to load a matching example, or edit the number.

    farm.plant(2, "strawberry")
    farm.water(2)

Wait for growth, then run:

    farm.harvest(2)

Examples replace editor contents only when clicked. Failed instructions show feedback and preserve completed work. Ctrl/Cmd+Enter runs code. **Stop** prevents later steps; completed changes remain. **Reset this farm** clears only the active setting. Refreshing clears all farms; no permanent save is implemented.

### Three small goals

- Sunny meadow: harvest two crops and make one change using code.
- Across the river: harvest one crop, use code, and click **Repair the bridge** or run farm.repair_bridge(). The bridge and neighbor visibly change.
- Garden café: harvest two crops, use code, and click **Deliver the basket** or run farm.deliver(). The basket is consumed and a guest appears at the café.

Ground tiles can be clicked to walk. Code also supports move_right(n), move_left(n), move_up(n), move_down(n), where n is 1–8. Directions follow grid axes: right ↘, left ↖, up ↗, down ↙. Crop actions automatically walk to an adjacent reachable tile first. Crops/buildings/stream block movement; the bridge is at column 6, row 5.

## Verification

Run **node devpost/little-acres/check.cjs** from the project root. It checks all three goals, both crops, six-second growth, duplicate/timer guards, bridge/delivery requirements, pathfinding, collisions and parser restrictions.

Installed Edge also executed the actual page via UI click events and the code editor. Nineteen assertions passed at viewport widths 1470 and 570: click planting/watering, code planting/watering, ready crop rendering, both harvest paths, all three completed missions, invalid-code state preservation, Stop, gated special actions, visible café guest, setting persistence, active-only reset and no horizontal overflow. DOM reports: browser-check-result.html and browser-check-narrow-result.html. Screenshots: preview-browser-tested.png and preview-narrow.png, both visually reviewed. Native browser pointer targeting, physical phone/touch, listening and owner art/game-feel review are not claimed.

QA harnesses are generated by prepare-browser-check.cjs. browser-check.html executes the full comparison; browser-visual.html plants three crops for visual inspection. These use the normal engine/controller, not a separate simulation. User entry has no auto-play or pre-completed mission.

Additional real-browser visual check: code planted/watered plots 1–3, including carrots and strawberries; all three reached ready state. preview-grown-crops.png reviewed for crop art, golden ready indicators and placement. Six successful code actions were recorded in the actual browser state.

## Limits

This accepts a bounded, safe **Python-style command subset**; it does not execute general Python, variables or loops. Original art is intentionally placeholder quality. No real accounts, backend, economy, persistent saving, multiplayer, public hosting or Android build. No claim of matching a commercial game's production quality or of measured learning outcomes. Existing approved main scope/PRD remain separate; see this folder's spec.md/checklist.md and latest devpost/resume.md checkpoint.

</details>

## Selected Colorful Farm art study
Open [colorful-scene.html](colorful-scene.html) for the new separate greeting/movement/hint study. Main index is retained. Full farming and course lessons are not implemented in the new art scene. Run node devpost/little-acres/check-colorful.cjs from project root. Browser visual review pending.

## Current Chapter 1 flow
Open colorful-scene.html. Five code-written activities now replace greeting/movement art study; no movement commands in this chapter. Start with anchored Mochi tour, then own greeting; Help appears below Run. Optional audio off initially. Per-activity code/progress is session-only and clears on reload. Later four chapters and full map visual rebuild pending. Run node devpost/little-acres/check.cjs for both current chapter and legacy farm checks. Actual browser layout/audio review pending.

## English-first bilingual chapter
Current colorful-scene.html defaults to English. Use the top Arabic switch (also available during the tour). Language preserves session code/results/progress. The activity trail has shaded colorful badge art and the selected Mochi sprite marking the current activity. Local browser visual review remains pending. See current spec/resume for authoring source and translation build command.
The tour locks page scrolling while a step is open. Next/Back moves to the next item and repositions the paired spotlight and bubble. Skip, completion or Escape restores page scrolling.
Chapter 1 separates the concept, task and expected result into short labeled sections. Invalid code shows a visible line-specific correction directly under Run and clears the warning when the learner edits.

### Chapter completion moment and interactive progress - 2026-10-19
After owner feedback that completing the first lesson felt flat and the progress bar looked dated, the current Chapter 1 slice now opens a compact celebration dialog on each activity's first completion. It plays the supplied local applause asset (`art/crowd-clapping-.wav`) once, shows Mochi celebrating, and presents exactly two choices: more practice or the next activity. Those are the existing progression actions moved into the dialog; practice prompts and manual next-step gating remain unchanged. The last activity's next action opens the journey overview.

Replaced the thin native meter with five colorful, raised clickable activity segments. Only the current and completed activities can be opened; the Mochi marker travels to the current step, completion fills each segment, and the active lesson icons remain available for navigation. Added narrow-screen and reduced-motion styling. No sound download, network dependency, progress persistence, or course expansion. Bilingual static copy catalog and generated English-default page rebuilt (170 text entries). Browser rendering, pointer review and audio listening remain unverified; no tests run in this edit. Open `devpost/little-acres/colorful-scene.html` and refresh with Ctrl+F5 to review.
### Simpler Chapter 1 task instructions - 2026-10-19
Owner asked for the code instructions to be as simple as the existing index experience. The five activity task prompts are now short action statements: write a greeting; assign and print it; name and print the farm; calculate and print bed area; add/remove a comment and compare. Identifier rules stay in the separate Idea card. Expected results and optional hints still supply explanation when needed; no starter code was inserted. Restored the six English UI strings needed for the bilingual authoring count and rebuilt the English-default page. Browser review remains pending.
### Walkthrough visibility on short laptop viewports - 2026-10-19
Owner reported that the tour bubble and spotlight could fall outside the laptop viewport while page scrolling was locked, leaving no way to bring them back into view. Replaced side/below placement with viewport-clamped positioning: keep bubble beside the target when space permits, otherwise place it above/below, and constrain the bubble to the visible height so its text scrolls inside it. Raised explicit spotlight and card stacking order and repositions on browser and visual-viewport resize. Page scrolling remains locked only during the walkthrough. Build regenerated successfully; laptop/browser visual review remains pending.

### Progress trail correction - 2026-10-19
The five illustrated activity icons already were the chapter progress control. A duplicate numbered control row was mistakenly added and has now been removed. The original icon trail is the sole interactive progress navigation: its current Mochi marker, clickable unlocked icons, completion checks, connected fill and activity count are being polished in place. Browser review remains pending.

### Modern visual redesign - 2026-10-19
The chapter now uses a presentation-only `modern.css` layer: warm cream/forest palette, Segoe UI Variable typography, compact app bar with Mochi avatar, a slimmer five-step activity rail, a larger art stage with a HUD-style caption, dark code editor, softer lesson cards, and modern tour/chapter/completion dialogs. Responsive layouts were checked at 1440x1000, 430x932 and 390x844 in English and Arabic with no horizontal overflow. Open **colorful-scene.html** and use Ctrl+F5; review images are saved as `review-modern-before.png`, `review-modern-desktop.png`, `review-modern-phone.png`, `review-modern-arabic-phone.png` and `review-modern-tour.png`.

The same pass repaired the English copy catalog: six template-literal placeholders were missing, which had shifted tour and UI translations. The catalog is realigned and the English-default page is regenerated (170 bilingual entries). The in-tour language pill now sits below the header, and the scroll lock cannot re-apply after the tour closes. `node devpost/little-acres/check.cjs` passes all three suites. Owner visual approval is still pending; no lesson, progression, chapter or publishing changes were made.

### Playable modern-game prototype - 2026-10-19
Open **game-prototype.html** for a separate playable direction experiment: full-screen farm, mission HUD, click/tap movement, Mochi, seed choice, a working plant → water → harvest loop with a completion card, and a Python console that runs `go_to`, `plant`, `water` and `harvest` commands. It is intentionally separate from **colorful-scene.html**, which remains the current lesson. Local Chrome/CDP verified the loop at 1440x1000 and 390x844 with no horizontal overflow. Screenshots: `review-game-desktop.png`, `review-game-growing.png`, `review-game-mobile.png`, `review-game-complete.png`. This is an unapproved design direction for owner feedback; no lesson, progression, persistence or chapter changes were made.

### Beginner Lesson 1 from Topic 1 - 2026-10-19
Open **first-lesson.html** for the proposed beginner lesson based on `resources/Topic 1 -_Getting started with Python.pdf`: five steps covering print and strings, variables/assignment, numbers and arithmetic, comments, and a combined mini-program. Each step has a short explanation, a collapsed example, a code editor, validation, friendly errors and manual progression. No farm commands are taught in Lesson 1. All five steps were run to the completion card in local Chrome. Screenshots: `review-first-lesson.png`, `review-first-lesson-complete.png`. This is an unapproved lesson proposal, not an integrated chapter yet.

### Chapter select - 2026-10-19
Open **chapters.html** to see all five planned chapters. Chapter 1 opens `first-lesson.html`; Chapters 2–5 are visible but marked “Coming soon” and disabled. The island map’s primary action now opens this chapter list, and the lesson has a **Chapters** link back to it. There is no unlock system, persistence or fake progress. Screenshot: `review-chapters.png`. Owner review of the chapter list and wording is pending.

### Spotlight tour and Arabic - 2026-10-19
The existing chapter keeps its original spotlight tour and Arabic switch. The new **first-lesson.html** now auto-starts a four-step spotlight tour (Mochi, lesson card, editor, Run/Output) with Back/Next/Skip and language switching inside the tour. The whole lesson switches between English and Arabic, including step explanations, tasks, hints, errors, feedback, completion and controls; Python code stays English and LTR, and learner code/output is preserved. **chapters.html** also has an English/Arabic switch for the chapter list. English and Arabic tours were reviewed, and all five lesson steps still reach completion. Screenshots: `review-first-lesson-tour.png`, `review-first-lesson-tour-arabic.png`, `review-first-lesson-arabic.png`, `review-chapters-arabic.png`.

### Sign-in window - 2026-10-19
The chapter-select page has a **Sign in** button opening a bilingual account window: email/password, optional name, Email/Google tabs, Create account, Forgot password and Continue without an account. It is a UI prototype only. No account is created, no credentials are sent or stored, and there is no backend. Opening `chapters.html#signin` opens the window directly. Screenshots: `review-signin.png`, `review-signin-arabic.png`. Real authentication requires a chosen service, security review and explicit approval.

### Temporary public preview - 2026-10-20
A clean `public/` static build is live at https://e7bcc9a3453a3e.lhr.life/ (chapter list: `/chapters.html`, lesson: `/first-lesson.html`, farm prototype: `/write-code.html`). This is a temporary localhost.run tunnel to the local server on port 8081; it works only while this computer, `tmp/serve-public.cjs` and the SSH tunnel stay running, and the free hostname may expire. It serves only the site files, not planning documents or review screenshots. The sign-in is still UI-only — do not enter a real password. Permanent hosting requires a provider/account; see `PUBLISHING.md`.

### Unified home and mobile lesson - 2026-10-20
The flow now starts at one home: `index.html` redirects to `chapters.html`, which is the island-map chapter list with the same farm/dark-glass styling as the lesson and farm prototype. The sign-in window opens at the start with a guest option; Chapter 1 opens `first-lesson.html`; the footer opens `write-code.html`; the lesson has a Map link and the farm has a MAP link. On narrow screens the lesson keeps the farm background at 82% opacity and shows a Mochi avatar in the lesson panel. The retired island entry is preserved as `index-before-unified.html`. Screenshots: `review-home-signin.png`, `review-home-map.png`, `review-lesson-mobile.png`.

### Phone scene-first layout - 2026-10-20
Phone screens now lead with the farm: the map and Lesson 1 show a dedicated Mochi/farm hero before the content cards, with the background at full strength. The farm prototype shows the complete 3:2 scene at the top, with mission, controls and the Python console below instead of a cropped camera slice. Desktop is unchanged. Screenshots: `review-phone-home.png`, `review-phone-lesson.png`, `review-phone-farm.png`.

### Real authentication and progress - 2026-10-20
The chapter sign-in is now connected to Supabase project `lsztabkbdpcmyyjyrxfm` via `supabase-js.js` and `auth-client.js`. Email/password sign-in, account creation, password-reset email, sign-out and session persistence are real. Lesson progress (`current`, `completed`, `drafts`, `savedAt`) is saved to the `progress` table for signed-in users and to local storage for guests; the lesson shows whether progress is local or synced. The Google button calls the real Google OAuth flow but Google is not enabled in Supabase yet, so it currently shows an explanatory error. Before public use: set the Supabase Site URL/redirect URLs to `https://esra-alhussain.github.io/visual-coding-journey/`, confirm the progress RLS SQL ran, enable the Google provider, push the commit, and test with a real email account. `review-auth-real.png` shows the real invalid-credentials response.