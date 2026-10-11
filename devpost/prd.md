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