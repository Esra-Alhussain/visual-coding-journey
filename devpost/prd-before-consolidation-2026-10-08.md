---
doc: prd
status: draft
---

# Visual Coding Journey — Product Requirements

Working title. A playful visual learning journey for beginners and learners who struggle to connect coding concepts into a project.
Source: `scope.md > Who It's For`, `The Unique Kernel`.

## The Core Journey

**Current agreed opening:** introduction → edit a companion greeting and tap to display it → map introducing the pet supplies shop journey. This supersedes naming the shop before the map; shop naming moves into that journey. The numbered sequence below is retained as the earlier baseline pending full draft reconciliation. Use this current opening when continuing product planning.

**Latest direction:** the learner prefers coding responses and behavior over repetitive creature-appearance assembly. The creature-building chapter is tentative. Select a small interaction before completing the journey revision; greetings, item-dependent reactions, and toy interactions are proposals, not agreed requirements. Preserve the shop as the prior baseline while reconciling this direction.

**Revision in progress:** the learner now wants to build the creature's visual details and shapes through guided coding steps before carrying it into the pet supplies shop. The shop-only sequence below is the previous baseline and must be revised after the creature controls and build boundary are defined. Naming/recoloring alone does not meet the learner's request. Do not build from this draft yet.

1. See an engaging introduction before any map. A folded parcel unfolds into an unfinished shop and previews how code changes it. This design direction is provisional and may be revised after implementation.
2. Choose “Create my shop,” then name and choose the shop. Naming becomes the first coding activity: see an example, edit the quoted shop name, and see the sign change.
3. See a visual journey map leading through connected practice in the same shop. Exact map navigation and shop-choice options remain open.
4. Change the shop appearance and practice adding/removing products in an array. Previous code carries forward in one growing editor alongside the live shop.
5. Complete an independent challenge: rename the shop, change its wall color, and replace one product without step-by-step instructions. Help remains available on request.
6. Finish with a short reflection on progress and what the learner can now do. Exact completion checks and reflection interaction remain open.

Source: `scope.md > The Core Loop`, `What "Working" Looks Like`.

## Screens and Layout

Introduction, naming/shop choice, journey map, and learning workspace are experience surfaces; their exact screen boundaries are not finalized. Challenge and reflection follow practice.

The workspace pairs one growing code editor with the live illustrated shop. On phones, the preview is above the editor and either area can expand. Larger screens can show them side by side. Highlight the lines for the current lesson. Earlier learner code stays in place, and provided starter code is clearly distinguished.

Source: `scope.md > The POC Boundary`.

## Look and Feel

Colorful, inviting, playful, and visually engaging. Movement should introduce and explain the experience. The provisional parcel-to-shop concept uses a paper-toy direction; exact colors, type, artwork, and animation are not approved. Avoid a conventional sequence of isolated coding exercises. The learner wants a distinctive identity and a feeling of ownership. Android is preferred, but platform remains undecided; Apple support is a later possibility.

Source: `scope.md > Inspiration & Identity`.

## Features and Behavior

### Companion Name and Greeting

The agreed first activity uses the growing code editor paired with the live companion. On phones the companion preview is above the editor. Highlight quoted values in starter code for the companion's name and greeting. Editing the name updates its label; tapping the companion displays the current greeting in a speech bubble. Explain that variables store these values and provided display code shows them. Audio and the learner's own nickname are not required. Carry this code forward into the same growing project. The language remains for technical planning.

### Introduction and Naming

Explain what learners will do before revealing the map. The accepted sign-maker lesson shows a blank sign and connects a shop-name variable to the sign. Learners edit the name themselves. Success is visible when their chosen name appears on the shop.

### Connected Code and Live Shop

Show an illustrated shop with walls, roof, shelves, and products. Learner code controls supported parts: the sign, wall color, and product list. Code changes produce corresponding visual results in the same shop, rather than unrelated generated scenes. The learner can read all their completed code together. Exact editing limits and update timing remain to be specified.

Source: `scope.md > The Unique Kernel`, `What "Working" Looks Like`.

### Arrays and Available Stock

Before array practice, show a short animated explanation: the array stores names → the shop reads the list → separately provided drawing code displays matching pictures. Explain that arrays do not inherently create pictures. Practice shows the list and shelf result together.

For an unsupported product, use shop-world wording such as “Cake isn't in our stock. Try another item from the tray.” Do not call the product a demo or discuss missing artwork in this message. The teaching explanation separately establishes that the array can store a name even when the shop cannot display its picture. Exact stock, tray presentation, and unsupported-item visual treatment remain open; a placeholder has not been approved.

### AI Shop Stories

Personalized companion feedback is agreed: use the creature's chosen name, the stocked item, and an optional learner nickname (otherwise "you"). Pair a short playful reaction with a separate caption explaining the actual code-to-shop change. For example, a companion thanks the learner for a ball, while the caption explains that adding 'ball' to the products array made the shop display it and triggered the reaction. Dialogue suggesting play does not establish a playable activity. Exact creature controls and reaction presentation remain open.

An in-app AI helper frames a small coding task as a story connected to the learner's shop choices. When stuck, learners can get a concept retold as a mini story in their shop world. The learner writes the code. Broader adaptive curriculum and autonomous code replacement are not approved. Exact help interaction and unavailable-help behavior remain open.

Source: `scope.md > The Core Loop`, `Inspiration & Identity`. This AI behavior develops learner decisions made during product planning.

### Code Errors and Debugging

When current code cannot run, dim the shop and show “Your shop couldn't update—check the highlighted line.” Highlight the problem and explain how to fix it. A dimmed prior image is visibly stale, not a successful result. Learners make the correction themselves; valid code restores the live result.

Reflect actual consequences: a failure to run differs from code that runs with an unexpected result. Do not manufacture whole-shop failure for every mistake. For a missing quote, explain where a closing quotation mark belongs.

### Independent Challenge and Reflection

Ask learners to rename the shop, change its wall color, and replace one product using the practiced concepts, without step-by-step directions. Help remains available when requested. Finish with a short reflection recognizing progress; do not generate a personalized next project here.

Source: `scope.md > The Core Loop`, `The POC Boundary`.

## Observable Acceptance Criteria

- The introduction appears before the map and explains the code-to-shop connection.
- Editing the shop name updates the sign; changing a supported wall color updates the wall.
- Earlier learner code remains accessible together with later additions; current lesson lines are highlighted and starter code is distinguishable.
- Adding/removing a supported product updates the visible shelf contents.
- The array explanation distinguishes stored data from provided drawing behavior.
- Unsupported stock receives the agreed shop-world guidance.
- Code that cannot run visibly dims the preview and offers line-specific correction guidance; fixing it restores the result.
- A shop-related AI story supports a task or explanation while the learner makes the code edits.
- The independent challenge requests all three agreed changes, followed by reflection.

## Product Decisions

- First interaction selected: learners edit a companion greeting through code, then tap the companion to see their chosen words displayed. Audio is not required. Creature appearance assembly is tentative; behavior-led learning takes priority. Reconcile this interaction with the earlier naming-before-map sequence before approving the revised journey.

- Pet supplies is the confirmed shop theme. Pizza restaurant and flowers/plants were declined; no second shop is selected.
- The learner confirmed a creature companion connected to the pet supplies shop as a direction to explore. Its exact role and first-build boundary remain unresolved; a separate creature-building journey is not approved.

- Agreed broader direction: build a place through growing coding skills. Learners' creations grow alongside their abilities and lead toward independent projects. Exact world design and characters remain open; a town is not required.

- Introduction before the map; naming and shop choice precede map entry.
- One growing project and editor, to help learners feel like programmers and understand connected code.
- Visible error consequences and learner-led fixes, because debugging is part of programming.
- Explicit data-to-drawing explanation, to avoid teaching that an array creates images by itself.
- Personal shop choices and AI stories support ownership; exact shop variety remains undecided.
- Parcel introduction is provisionally approved and revisable after seeing implementation.

## What We're Building

One short tiny-shop journey: introduction, naming/shop choice, map, connected guided practice, live result, cumulative code, shop-story help, independent challenge, and reflection. This draft adds detail to the approved scope but is not yet approved for implementation.

## Deferred From the POC

Full programming curriculum; multiple buildable locations; GitHub syncing; baskets, checkout and totals; video library; personalized next journeys; unrestricted generation of unique shops and product artwork. These exceed the first short learning journey or remain unselected possibilities.

## Possible Later Enhancements

The learner has now approved the broader direction of building a place through growing coding skills. The following settings remain optional ways to express it, not required implementations. A possible progression connects variables, arrays, conditions, loops/functions, connected projects, and independent creation; it is not a finalized curriculum.

A connected world with a shop, house, garden, and other projects could give learning a larger destination. Building for oneself versus a character remains undecided. Preserve this exploration alongside the original full programming roadmap; no neighborhood or character implementation is approved.

## Open Questions

Resolve before completing PRD approval and moving to `4-spec`:

- Define the creature companion's role and whether a small version belongs in the first build. Code-controlled naming, colors, and accessories are proposals, not finalized requirements.

- Supported shop choices, product stock, tray interaction, and unsupported-item presentation.
- Map stops, navigation, progression, and exact connected lesson sequence beyond naming.
- Editing freedom and live-update behavior.
- AI help entry point, boundaries, and what happens if help is unavailable.
- Challenge completion checks and reflection interaction.
- What happens when the product list is empty; reset and return-session expectations.

Platform selection belongs in `4-spec`, informed by the required learner experience. Final illustration/type choices may be refined during implementation within the approved visual direction.
