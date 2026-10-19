# A little help for Fern

Open index.html directly in Chrome or Edge. No install, server or internet required. This is the new movement prototype authorized on 2026-10-18 after owner rejection of the static-feeling garden/bridge/café comparison. That comparison and the main Mochi prototype remain intact.

## Try it

1. Run the short starter route to see each walking step.
2. Add or type movement commands. A number is a step count, not a destination.
3. Find a route across the middle-row wooden bridge to the golden tile beside Fern.
4. Finish with water_plant().

Run begins again at the gate, keeping your code. Stop cancels execution. Reset restores the scene while retaining your code. Hints are staged; the third shows a working route. Optional sound uses local synthesized tones, default off. Up/right follow the screen directions. Command buttons insert only on explicit taps. No code/personal information is sent or saved.

Commands are a small safe Python-style teaching language, not full Python. This design study focuses on movement and sequence; it does not approve a final art direction, story or curriculum. See spec.md and checklist.md.

## Verification

Run node devpost/garden-mission/check.cjs from project root. Covers parser restrictions/limits, all obstacles and bridge traversal, valid 10-step mission, invalid commands, remote watering, UI/controller success, replay, Stop cancellation, retry, reset, insertion and hints.

Installed Edge rendered the initial desktop scene, reviewed in preview-desktop.png. Full route executed in real Edge: watered=true, steps=10, position=(6,0), running=false, successVisible=true, bodyWidth=viewport=1410. No horizontal overflow at that size. Desktop initial render and first success screenshot visually reviewed; success card subsequently made smaller to preserve the world view. Narrow render final results recorded in checklist/resume.

browser-check.html is a QA harness, not the user entry: it auto-runs a known solution. Regenerate using prepare-browser-check.cjs. browser-check-result.html and browser-check-mobile-result.html are captured browser DOM reports; screenshots are local QA artifacts. User should open index.html, which has no auto-solve.

Connected Computer Use runtime could not start, so installed Edge headless mode supplied browser rendering/execution evidence. No physical phone/touch or listening test performed. Owner visual/game-feel acceptance remains pending. No publication or deployment.

Narrow follow-up: actual viewport=570, bodyWidth=570, watered=true, steps=10, position=(6,0), running=false and successVisible=true. preview-narrow.png reviewed with code editor stacked under the world, no horizontal overflow and small success card preserving sight of Mochi/Fern. Initial requested 420px screenshot was cropped by Edge’s minimum 504px viewport and is not valid physical-phone evidence. No claim of a tested 390px device.
