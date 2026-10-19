# Garden movement mission — local design study

Approval: user said yes on 2026-10-18 to one replacement garden prototype with movement commands, obstacles, a redesigned animated character and watering payoff. This authorizes a design experiment, not a final game world, full curriculum, deployment or replacement of the earlier product definition.

## Experience

Mochi starts at the bottom-left gate. A thirsty plant named Fern stands at the upper right. Learner writes a sequence of step-count commands to reach the golden tile beside Fern and water her. Starter code deliberately performs only two steps. Run always restarts the physical scene at the gate; code is retained. Invalid syntax is caught before movement. Correct syntax may still meet an obstacle; the sequence stops at the last valid tile, identifies line and step and invites a revised route. The learner can Stop, Reset, replay, or keep exploring after success. Repeated watering ends the mission at the first success.

## Commands and coordinate rules

Accepted commands: move_right(n), move_left(n), move_up(n), move_down(n), water_plant(). Python-style syntax only; no interpreter or eval. Integer n from 1 through 8; comments and blank lines allowed. Maximum 24 commands and 80 movement steps. Up is toward the cottage, right is screen-right. Grid 8 columns by 5 rows. Internal start (0,4), watering tile (6,0); plant (7,0) is blocked. Stream is crossed on row 2. Rocks and water are impassable. Every intermediate tile is checked, so large step counts cannot jump an obstacle.

One valid route: right 1, up 2, right 5, up 2, water. Ten walking steps. Alternate routes allowed if valid; no fixed answer-string grading.

## Implementation

Buildless local HTML, CSS, SVG, vanilla JS; no network dependencies. engine.js owns parser and collision rules, app.js owns sequential animation/controller and local audio. Native SVG scene is code-native so world objects and character animation align with the board. New leaf-hood Mochi has face, arms, feet, idle breathing, blink, walking cycle, obstacle reaction, watering can and celebration. World has tree/plant sway, butterflies, clouds and flowing ripples. Scene size scales with viewport. Accessible labeled editor/controls, Ctrl/Cmd+Enter, text status, optional sound off by default, reduced-motion behavior. No backend, saved personal data, general Python, generated raster assets or public hosting.

Cancellation increments execution generation, clears outstanding timers and resolves pending waits; old runs cannot continue or complete after reset. Audio uses local oscillators only, never microphone access.

## Review limits

Owner rejected static comparison for lack of movement/life. New art remains unapproved. This is not a claim of large-studio game quality or educational effectiveness. Keep bridge/café comparison and earlier main prototype intact. Local browser QA evidence belongs in README/checklist; next substantive art, story or curriculum changes require owner review.
