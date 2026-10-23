---
doc: prd
status: draft
updated: 2026-10-23
---

# Mochi — current product requirements

Current record as of 2026-10-23. This replaces the cosmic-egg document as the active requirements reference. Confirmed decisions, implemented behavior and pending choices are distinguished below; the consolidated document has not been given blanket phase approval.

## 1. Learning experience
For beginners, keep each task small and let learners write every line themselves. Run should show the result in Output and Mochi’s speech or existing scene feedback. Examples and hints support learning; they must not insert or repair learner code automatically. Do not imply that every print statement reconstructs the farm or that this bounded interpreter runs arbitrary Python.

## 2. Entry and map
- Desktop uses the existing living world map. Phones use the existing lean phone map, entered through the current mobile redirect.
- Island 1 enters first-lesson.html. Islands 2–5 stay upcoming and unavailable for lesson entry.
- Keep guest entry and map-return links. Account entry is optional; preserve the existing bridge without expanding authentication scope.
- The longer restoration story connects five islands and the beacon; later lessons and the finale are future work.

## 3. Existing Lesson 1 sequence
1. Say hello: learner writes print(...) with a nonempty string.
2. Give it a name: assign greeting and print that variable’s value.
3. Numbers and arithmetic: assign lengths, calculate area by multiplication and print it.
4. Leave a note: include a comment and a printed message.
5. Put it together: combine a name variable, output, arithmetic and a comment.

Preserve the implemented concept checks, manual Next/Finish progression, independent drafts, error handling, language switching, completion and saved progress. Code stays left-to-right in both languages. Do not conflate these five activities with five finished islands.

## 4. Scene and layout
- Keep the natural farm image, cottage, garden, bridge, water and Mochi; rejected paving artwork is removed.
- Phone: fixed visible farm/Mochi scene above a separately scrolling task/editor; compact controls; Run remains usable; explanations are available on demand.
- Desktop: preserve the approved right-side lesson/editor rail and focus mode.
- Mochi is currently positioned at the cottage door using image-relative placement that respects scaling/cropping.
- Show only a noninteractive square-line grid over the farm. Its current purpose is a visual reference, not a working movement system.

## 5. Explicitly deferred or rejected
Movement commands, bridge-start gameplay, exact movement counts, path/destination selection and any movement lesson remain undecided/deferred. The added arrival activity was rejected and removed. Do not add movement behavior merely because a grid is visible. Decorative colored square boards, the small paving patch and the repainted playground-like ground were rejected.

## 6. Progress, accounts and feedback
Guest progress remains browser-local. The existing Supabase integration supports account/progress behavior where configured; real signed-in cross-session validation and Google provider setup are not newly verified. Never create accounts, send reset emails or enter real credentials merely to demonstrate the interface. Preserve current local-save fallback/error behavior.

## 7. Acceptance checks
- Existing five activities run to completion with learner-shaped solutions; invalid input produces useful errors.
- Mobile farm, character, speech, variable and area feedback remain visible; controls and code editor work at narrow widths.
- English/Arabic switching preserves code/state; Python stays LTR.
- Grid is visual-only, original artwork is loaded, and no movement prelude or move command is present.
- Desktop remains visually unchanged by phone edits.
- Future islands do not unlock unsupported lessons; returning to the map preserves genuine progress.
- No deployment occurs during commit/push-only editing.

## 8. Review and delivery state
The owner has paused design editing. Latest implementation is committed/pushed; the latest grid-only editing state is not newly published. Manual deployment is permitted only after an explicit owner request. Continue Phase 5 build/review, then Phase 6 demo/repository/submission work. Planning reconciliation does not imply all requirements or submission tasks are complete.

See [scope](scope.md), [technical plan](spec.md), [checklist](checklist.md) and [historical PRD](archive/planning-before-sync-2026-10-23/prd.md).
