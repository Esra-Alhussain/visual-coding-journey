# Meadow journey prototype checklist

- [x] Preserve prior version and plush character byte-for-byte.
- [x] Four-page welcome and coding walkthrough.
- [x] Idle egg wiggle; 7.6-second progressive top/side/bottom cracks and shell separation.
- [x] Interaction sounds default on; optional installed local browser voice; sound/voice controls.
- [x] Name-first variables, visible features and greeting, encouraging reactions.
- [x] Grass meadow, right-side sunlight and colorful responsive game/study HUD.
- [x] Position bubble away from character on desktop and mobile.
- [x] Journey map with completed/current/locked chapters.
- [x] Completion celebration, next chapter and continued experiment choices.
- [x] House variables practice, conditions, garden loop and combined final project.
- [x] Full state-machine/command regression checks including restart cancellation.
- [ ] Browser desktop/mobile visual, keyboard and audio/speech review.
- [ ] User approves revised visual direction and curriculum prototype.

All revision work stayed in sandbox. Local preview only; no hosted update. See plush-prototype-spec.md and sites/mochi-design/check-meadow.cjs.

## Guided saving revision

- [x] Replace slide walkthrough with scene spotlights and action-triggered progression.
- [x] Add validated browser-local autosave and Continue saved adventure.
- [x] Show honest sign-in preview panel without collecting credentials.
- [x] Replace flat ground with detailed grass artwork; preserve character.
- [x] Verify persistence, restoration, corruption fallback and existing journey behavior.
- [ ] Connect real account sign-in and cross-device progress after service selection.
- [ ] User browser visual/storage/audio review.

- [x] Single visible guidance bubble: walkthrough through first name assignment, then automatic handoff to Mochi.

- [x] Prefer softer local voices; add selectable greeting preview and lower volume/pitch shift.
- [ ] User approves audible voice quality in their browser.

- [x] Replace adult narration with short, soft nonverbal Mochi babbles; preview, mute and cancellation verified.
- [ ] User approves creature sound after listening.

- [x] Restore intelligible browser speech with raised pitch, slightly faster rate and adjustable saved controls.
- [ ] User approves audible pitched character speech.

- [x] Quiet post-hatch breeze, occasional birdsong and enhanced right-side sunshine; audio lifecycle checked.
- [ ] User reviews ambience volume and sunshine in browser.


### Recorded Lesson 1 voices — 2026-10-13
User authorized integration of six locally supplied recordings. Hi sound.mp3 now present alongside five PCM WAVs. Active prototype plays welcome then naming choice after hatch; quote prompt on name-choice click or first typed name assignment; success on applied name change; hint on Help; first-creation line on Chapter 1 completion. Talking animation follows playback. Lesson 1 unmapped guidance remains text; other chapters retain prior voice behavior. Stop/mute/restart/chapter change/page hiding cancels recordings and queued welcome continuation. Walkthrough action instructions and next eyes guidance preserved. External SFX files absent: existing synthesized chimes remain, Mixkit mapping is pending. Backups saved; both local entry points synchronized with correct relative audio paths. check-recorded-lesson1.cjs passes six audio sources/cancellation plus existing journey/save/nature regressions. Browser visual/listening approval pending; no generation or publication.


### Three-tap interactive hatch — 2026-10-13
User requested active repeated taps and synchronized egg effects. Egg now requires three click/touch/keyboard activations: first and second add cracks with finite shake feedback and wait indefinitely; third performs final shake, full split and reveal. Sound-on locally synthesized rustle/rattle/crack/shell-break effects accompany movement, tap shakes, crack increments and full split, without paid generation. Removed rectangular egg button/tour outline and shadow; oval keyboard-focus glow retained. Restart resets tap counter and label. Both local entries synchronized; backup index-before-three-tap-hatch.html retained. Updated recorded lesson regression passes three-tap waiting, reset, clips, progression/save and ambience checks. Actual browser visual/listening review pending.


### Full Lesson 1 recorded dialogue + dry shell sounds — 2026-10-13
User rejected hissing egg sounds and uploaded eleven additional WAV recordings. All sixteen WAV files have valid PCM headers/durations, plus existing welcome MP3. Seventeen clips now routed: feature introductions, first-choice exploration, nose/mouth success then next feature, alternating short/full help, invalid-code retry, and completion with real applause. Existing synthesized tap, success and hint-open effects reused; no additional external SFX files supplied. Replaced sustained egg noise with damped triangle shell rattles, 22ms transient crack buffers (2.5ms decay), and clustered final shell snaps. Stops on mute/restart/page hiding; three-tap hatch retained. Recorded feature reactions use blink/small turn/bounce where browser animation is available. No paid generation/download/publication. Backed up index-before-full-lesson1-audio.html. check-recorded-lesson1.cjs passes full feature event routing, seventeen recordings, help/retry, actual applause trigger/cancellation and existing journey/save regressions. Sound quality and visual review remain user-browser checks. Detailed mapping: dist/audio/lesson1-audio-map.json.


### Live typing and left companion walkthrough — 2026-10-13
User requested immediate visual code application and a left-side conversational walkthrough bubble. Native input now parses complete valid code and applies changed state immediately without a button; incomplete/invalid drafts preserve accepted world. Manual apply control hidden from display and keyboard focus. Speech and success chime wait 450ms after last valid edit; finished invalid value gets gentle retry after 850ms rather than errors on every keystroke. IME composition defers application until compositionend. Guide/help/welcome copy updated for automatic application. Walkthrough anchored left with rounded bubble and tail, responsive upper-left placement on narrower screens. User asked about blank face: suggested tiny sleepy starter eyes but did not change character pending direction. Backup index-before-live-typing.html retained; both local entries synchronized. Recorded regression passes immediate native input for name/face/house/conditions/loops, incomplete-code preservation, debounce, previous routing/save/progression checks. Actual responsive rendering and listening review pending. No publication or external generation.


### Journey engagement and profile — 2026-10-13
User authorized progress/profile and clearer, more engaging onboarding. Added persistent header journey bar and five available/locked chapter stops. Overall progress derives from nineteen accepted creation steps (hatch, five companion values, three home parts, two condition steps, five garden positions, three final goals); completed milestone credit is retained on experimentation. My journey opens local profile with editable saved explorer name, actual progress/completed chapter count, five earned/locked badges and next chapter. No real account backend added. Opening now previews egg→companion→world and includes an animated isolated See the magic demo: a completed eyes assignment visibly changes sample eyes without writing learner code or awarding progress. Short local opening melody plays after Start with Sound on. Walkthrough has three-tap visual feedback and expected-result card; normal Mochi bubble shows next visible outcome and five feature milestones. Removed forced walkthrough auto-scroll during typing. Existing recordings, real applause, three-tap hatch and immediate code application preserved. Backup index-before-engagement.html retained; both local entry points synchronized. check-recorded-lesson1.cjs passes profile nickname persistence, honest progress, badge/lock derivation, isolated demo and all live-input/audio/journey/save regressions. Local static HTTP check returned 200 with new controls. Browser rendering unavailable (no connected browsers); preview server stopped. Local review only, no publishing or paid generation; BubblyCue untouched.
