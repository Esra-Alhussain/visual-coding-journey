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
