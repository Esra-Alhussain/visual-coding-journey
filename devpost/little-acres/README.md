
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
During the tour, scrolling keeps the speech card fixed for that step; the spotlight alone tracks the highlighted page target.
