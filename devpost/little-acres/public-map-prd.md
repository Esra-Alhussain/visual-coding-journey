# Approved public map and first playable island — 2026-10-21

Owner explicitly approved the map, replacing the homepage and public publication. This scoped amendment governs the current public island entry; historical main PRD preserved.

- Homepage is the approved living five-island map, with nature recordings, optional mute, pause and reduced-motion handling. Browser activation policy may defer sound to first interaction.
- Selecting an island opens the existing compact nonmodal card. Only Island 1 enters a playable lesson. Four future islands are explicitly upcoming, inspectable but not enterable.
- Guest can begin immediately. Sign in opens the existing real account flow; guest/close return to the homepage. Signed-in progress uses the existing Supabase bridge. No new providers or account features.
- First island contains the existing five Python activities. Valid completed activities produce saved progress; returning to the map gradually reveals restored first-island artwork. Five complete activities show Restored and Revisit.
- Completing Island 1 does not falsely unlock an unimplemented Island 2. Later prerequisites remain visible with Coming soon.
- Lesson has a persistent Map link and a completion return action. Guest state is flushed locally on page exit to avoid losing the last result to the debounce timer. Corrupt/out-of-range completion indices do not count.
- The long-term goal remains restoring five islands and lighting the beacon. The remaining lessons/finale are not part of this playable release.
- Public build includes an explicit asset allowlist, never planning/marketing docs or review screenshots. Rebuild with `node devpost/little-acres/build-public.cjs` and publish via existing GitHub Pages workflow.

Verification: public asset/script check; simulated guest partial/completed progress and upcoming state; existing island/audio/water fallback tests; chapter engine/language tests. Real public browser playthrough and deployment status to be recorded in resume.md.
