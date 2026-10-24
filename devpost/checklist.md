---
doc: checklist
status: draft
updated: 2026-10-24
---

# Mochi — current progress and remaining work

This is the consolidated current checklist. Older dated checklists are history and do not silently re-open superseded features. No full-phase approval is inferred just from files existing.

## Confirmed implementation and owner decisions
- [x] Existing five-island map with only Island 1 playable; later islands honestly upcoming.
- [x] Existing five-activity beginner lesson and learner-written code.
- [x] Farm-first phone lesson with visible Mochi/scene feedback and existing desktop right rail.
- [x] Original natural artwork restored; plain visual grid only.
- [x] Rejected paving/colored ground and added movement activity removed.
- [x] Latest grid-only implementation committed and pushed; design editing paused at owner request.
- [x] Deployment changed to manual-only; commit/push does not publish.

## Validation already recorded
- [x] Latest grid-only browser checks at 320×667, 390×720, 430×844 and desktop1440×1000 run all five activities to completion.
- [x] Current public asset check and source/public synchronization recorded.
- [x] Desktop before/after screenshot unchanged by phone/grid edits.
- [x] Earlier relevant phone-language and reduced-visible-height checks recorded; rerun affected checks when those behaviors change.
- [ ] Physical phone, real keyboard/touch and assistive-technology review.
- [ ] Signed-in cross-session progress and Google provider validation if included in the agreed demo.

## Phase 5 — Build: still in progress
- [ ] Owner resumes/reviews Lesson 1 and decides whether any further grid design is needed.
- [ ] Define movement only if explicitly requested later; no movement task is currently active.
- [ ] Finish the agreed proof-of-concept boundary; do not assume all five islands are required.
- [ ] Review updated planning documents as a consolidated whole where formal phase sign-off is needed.
- [ ] Complete the build learning wrap-up and app map required by the skills workflow.

## Phase 6 — Ship: not completed
- [ ] Check current hackathon requirements and agreed submission scope.
- [ ] Prepare and verify the required demo video.
- [ ] Review public repository/readme and release contents.
- [ ] Learner writes the required submission and any learner-authored reflection/feedback.
- [ ] Publish only when the owner says to publish; verify the requested deployment separately.
- [ ] Confirm submission is complete. Do not infer submission from having a live website.

## Current release distinction
Last confirmed application deployment in this session: grid release a6fb0e5. Later design iterations and the current grid-only reset are commit/push-only changes, not a newly verified live release. See resume.md for deployment evidence and limits.

## Desktop sharpness correction — 2026-10-24
- [x] Original sharp island art stays visible beneath water-only animation.
- [x] Canvas2D fallback uses 1536×1024 rather than 960×640.
- [x] Real Chromium 1440×1000 at 2× pixel density: WebGL and forced Canvas2D rendering; fallback dry-land pixel alpha is zero.
- [x] Both renderers: map assets, Island 1 entry/future-island restrictions, restoration view and pause behavior pass without JS errors.
- [x] Existing water-fallback, map-island and public asset checks pass.
- [x] Phone map and lesson source remain unchanged.
- [ ] Publication: not authorized for this update; commit/push only.
