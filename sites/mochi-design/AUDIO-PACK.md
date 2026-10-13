# Mochi sound pack

Create one file per row in audio-manifest.csv and save it into the matching folder:

- dialogue/: Mochi speaking. Keep the same original fictional character voice across every line.
- effects/: brief sounds caused by an action or code event.
- ambience/: quiet outdoor background audio, played separately and looped.

Website assets belong in sites/mochi-design/dist/audio/. This folder is inside the website static output, so the page can load audio/effects/name.wav, audio/ambience/name.wav and audio/dialogue/name.wav. Use the exact filenames in the CSV; generate one clip per file, not one combined soundtrack.

Suggested export settings: dialogue and effects as mono WAV, 48 kHz, 16-bit PCM. Ambience as stereo WAV, 48 kHz, 16-bit PCM, with a seamless loop. Keep peaks below -3 dBFS; leave clean starts and ends on dialogue; no cut-off reverb tails. The website mixes ambience lower than dialogue and effects.

For dialogue, use the same fictional character voice throughout: clear, warm, playful, youthful, with a distinctive plush-creature personality. Do not imitate a real person or existing character.

Rows marked DYNAMIC contain learner-entered words. A prerecorded clip cannot speak arbitrary custom names or greetings. Leave dynamic items pending unless using an approved live speech option, or limit the app to recorded phrases.

Generate the dialogue group in one voice session for consistency, then create effects and ambience separately. Preview clips, rename them to the listed filenames and put them in the matching subfolder. Nothing in this checklist has been generated yet.


### Lesson 1 audio review — 2026-10-13
Five valid mono 44.1 kHz 16-bit PCM WAV files found in dist/audio/dialogue/lesson1 (1.60–4.40 seconds). Welcome voice missing; effects folder has no audio. Isolated dist/lesson1-audio-preview.html auditions voices with locally selected effects, adjustable timing/volume and Stop. Row 5 reuses row 2 effect. Exact source titles recorded in audio/lesson1-audio-map.json. Main game unchanged. No paid generation, downloads or publishing. WAV headers checked; browser playback, transcript verification and mix approval pending.


### Recorded Lesson 1 voices — 2026-10-13
User authorized integration of six locally supplied recordings. Hi sound.mp3 now present alongside five PCM WAVs. Active prototype plays welcome then naming choice after hatch; quote prompt on name-choice click or first typed name assignment; success on applied name change; hint on Help; first-creation line on Chapter 1 completion. Talking animation follows playback. Lesson 1 unmapped guidance remains text; other chapters retain prior voice behavior. Stop/mute/restart/chapter change/page hiding cancels recordings and queued welcome continuation. Walkthrough action instructions and next eyes guidance preserved. External SFX files absent: existing synthesized chimes remain, Mixkit mapping is pending. Backups saved; both local entry points synchronized with correct relative audio paths. check-recorded-lesson1.cjs passes six audio sources/cancellation plus existing journey/save/nature regressions. Browser visual/listening approval pending; no generation or publication.


### Lesson 1 applause connected — 2026-10-13
Uploaded audio/effects/crowd-clapping-.wav now plays 1.1 seconds after the completion voice starts, at 30% volume for up to 3 seconds. Voice-off still allows applause when Sound is on. Stop/mute/restart/chapter change cancels effect and delayed timers. Both local prototype paths updated; recorded/journey/save/nature regression checks pass. Audible timing review pending.


### Full Lesson 1 recorded dialogue + dry shell sounds — 2026-10-13
User rejected hissing egg sounds and uploaded eleven additional WAV recordings. All sixteen WAV files have valid PCM headers/durations, plus existing welcome MP3. Seventeen clips now routed: feature introductions, first-choice exploration, nose/mouth success then next feature, alternating short/full help, invalid-code retry, and completion with real applause. Existing synthesized tap, success and hint-open effects reused; no additional external SFX files supplied. Replaced sustained egg noise with damped triangle shell rattles, 22ms transient crack buffers (2.5ms decay), and clustered final shell snaps. Stops on mute/restart/page hiding; three-tap hatch retained. Recorded feature reactions use blink/small turn/bounce where browser animation is available. No paid generation/download/publication. Backed up index-before-full-lesson1-audio.html. check-recorded-lesson1.cjs passes full feature event routing, seventeen recordings, help/retry, actual applause trigger/cancellation and existing journey/save regressions. Sound quality and visual review remain user-browser checks. Detailed mapping: dist/audio/lesson1-audio-map.json.
