# Plush opening prototype specification

Status: implemented local design prototype; visual approval pending.

Reference: ../sites/mochi-design/prototype1.jpg. Buildless HTML/CSS/JavaScript, no external dependencies. Generated PNG background and transparent blank plush; bounded static SVG facial overlays for deterministic code-driven changes. Preserves prior snapshots.

Egg → eyes → nose → mouth → name → greeting. Each complete valid changed assignment alters its matching visible feature; greeting is displayed on Meet my Mochi. Safe parser supports only quoted mochi assignments, validates choices and progression, preserves earlier accepted state on errors. Buttons display examples; never author learner code. Progress is session-only. Keyboard hatch, Ctrl+Enter, reduced motion, optional chimes and restart supported.

Checks: sites/mochi-design/check-plush.cjs. Browser rendering and interaction review pending. Existing spec.md directory preserved.


### Meadow journey revision — 2026-10-12

User authorized fixing the prototype after visual review: preserve the plush character exactly, add attention-grabbing idle egg movement, a longer multi-crack hatch, sound/voice welcome, name-first personalization, non-overlapping guidance, grassy ground with sunlight from the right, colorful modern game/study HUD, introductory walkthrough, lesson map, clear completion and next-lesson progression. All operations in this revision stayed within the sandbox; no elevated execution, external file access, publication or generated outside-workspace assets.

Implemented four-page introduction; egg rocks while idle and hatches through top/side/bottom crack stages plus separating shell halves over 7.6 seconds (reduced motion shortens it); sound effects default on following user interaction; optional speech uses installed local English browser voices only and falls back to text. Bubble is left of Mochi on desktop and above it on mobile. Unchanged blank plush PNG and facial overlays retained. Name → eyes → nose → mouth → greeting; greeting shown in bubble and completion. Grass meadow, hills, drifting clouds, sunlight rays and small spark motion are code-native decorations. Prior wooden presentation and upper-right slogan removed.

Journey map: 1 companion variables; 2 house variables practice (walls/roof/door); 3 conditions (night/day and conditional lights); 4 loops (garden.plant(spot), range 3–8, five flowers completes guided goal); 5 final project (change roof variable, working night condition, bounded garden loop). Chapter completion celebrates with sound/confetti, unlocks next, offers next or continued experiment. Earlier scenes/drafts persist in page session; no permanent saving or arbitrary Python execution. Functions, interior rooms, richer kitchen/bedroom/garden curriculum remain later scope.

Verification: check-meadow.cjs passes syntax/unique IDs, walkthrough, full staged hatch timing, blank face/name-first gate, celebrations/unlocks, house creation, true/false conditions, indentation errors, bounded loop, combined final project, invalid-input state preservation and restart timer cancellation. Character asset byte-for-byte unchanged. Active entries synchronized: sites/mochi-design/dist/index.html and devpost/prototype-cosmic-live.html. Backups: index-before-meadow.html / prototype-before-meadow.html. Browser rendering, actual speech/audio and mobile visual review remain pending; no connected browser used.


### Action walkthrough and local saving — 2026-10-12

User authorized browser progress saving and requested a modern in-scene walkthrough that advances after each performed action, plus more realistic grass matching the plush character. Added welcome Sign in / Log in panel with explicit preview limitation: no real account or cross-device backend connected, no password collection. LocalStorage auto-saves accepted Mochi/house/world state, current chapter, completion unlocks, five code drafts and final-project goals. Welcome offers Continue saved adventure or explicitly Start a new adventure. Validated restoration rejects malformed saves and unsupported values; unavailable storage falls back to session-only status. Restart clears local progress and cancels hatch timers. Same browser and entry URL required for local saving.

Walkthrough now spotlights the actual moving egg and bubble, then the coding panel; typing a valid current assignment changes its instruction to apply the code; successful application advances to next feature; completion points to chapter progression. It follows actual learner actions, with optional Hide tips. No explanation-only Next slideshow. Detailed code-native meadow-grass.svg (23,000 shaded blade paths, grain, soft distant vegetation, warm right-side sunlight) replaces flat hill/stripe ground. Grounding shadow strengthened; Mochi PNG unchanged.

Checks: check-guided-saving.cjs passes action-triggered name-to-eyes guidance, browser save/restore of completed world and drafts, corrupted save fallback, restart storage removal, full prior hatch/lesson/condition/loop/final-project regressions. Active local entry points synchronized. Backups index-before-guided-saving.html and prototype-before-guided-saving.html. Actual browser rendering/audio/storage persistence on the user browser pending visual review. All tools and files for this revision stayed in sandbox; no elevated commands, external asset access or hosted publication. Real sign-in needs a user-selected authentication/storage service and future authorized connection work.


### Single guidance bubble — 2026-10-12

User requested hiding the character bubble until the walkthrough finishes. The introductory walkthrough now covers tapping/hatching the egg, typing a name and applying the first assignment. Only the walkthrough coach is visible during these actions, with its own name-code hint. Successful name assignment automatically completes the walkthrough, restores Mochi’s bubble and hands off to eyes/nose/mouth/greeting guidance. Hide tips also restores the character bubble immediately. Existing saved walkthrough state is reconciled on restore; a named character does not resume onboarding. No changes to character, lesson logic, sounds, layout background or publication. Backed up index-before-single-guide.html. Updated guidance/persistence regression verifies exclusive bubble visibility, embedded name hint and automatic handoff, alongside all existing checks. Browser visual review still pending. Sandbox only.


### Softer local voice selection — 2026-10-12

User found the first-default browser voice too robotic and requested a soft youthful human-sounding character voice. Replaced first-voice selection with ranked local English voices: natural/neural/enhanced/premium descriptors preferred, suitable named voices preferred over generic Desktop/compact engines, with no remote voice use. Speech settings now rate 1.02, pitch 1.02 (less artificial pitch shift) and volume 0.65. Header Voice opens a local voice selector, short character greeting preview and voice toggle. Explicit voice preference persists on this browser; unsupported or unavailable voices fall back to ranked local selection. Voice quality remains limited to installed browser voices; no new voice recording or external TTS service generated. Local selection/settings and all walkthrough/save/journey regression checks pass in check-soft-voice.cjs. Actual audible review requires user browser. Character unchanged; local sandbox-only update, no publication. Backup index-before-soft-voice.html.


### Mochi creature voice — 2026-10-12

User rejected all adult browser voices and requested a cute childlike animal character voice. Removed browser adult text-to-speech entirely. Added short Web Audio triangle-wave syllables with soft attack/release, gentle pitch contours and low-pass filtering: default soft babbles, optional playful chirps and sleepy coos. These are nonverbal expressive sounds; bubble text carries all words and instructions. Voice preview/options now describe creature sounds, not human voices. Brief body bob synchronized with babbles; character asset unchanged. Muting, closing preview and restarting cancel scheduled sounds and motion. Preference saved locally. check-creature-voice.cjs verifies bounded syllable generation, mute/cancellation, absence of adult speech APIs and full prior walkthrough/persistence/journey regressions. Actual sound quality still needs user listening. Local sandbox only, no external audio generation or hosted publication. Backup index-before-creature-voice.html.


### Pitched real-time character speech — 2026-10-12

User explicitly requested restoring browser text-to-speech with raised pitch and slightly faster speech, retaining intelligible real-time sentences. Removed creature babbles and restored exact text speech using installed local English voices, preferring suitable character bases. Default pitch 1.60, rate 1.08, volume 0.80. Voice dialog includes local voice selection, pitch 1.00–2.00 and speed 0.85–1.30 sliders, full welcome preview, mute and saved browser-local preferences. No external TTS calls. Naturalness still depends on browser voice and pitch support; actual listening review pending. check-character-speech.cjs passes exact sentence, preset, slider persistence, cancellation/mute and local voice exclusion plus full prior journey/save regressions. Character unchanged. Sandbox only; no publishing. Backup index-before-pitched-speech.html.


### Outdoor ambience and sunshine — 2026-10-12

User requested a gentle breeze, soft birdsong, open sky and sunshine for Mochi’s outdoor scene after the egg cracks. Added quiet looped filtered-noise wind with slow gust modulation, plus sparse short sine-wave bird chirps every 9–16 seconds after an initial 1.8-second delay. These are locally synthesized ambient effects, not downloaded field recordings. Starts only after hatch or restoring a hatched saved scene; Sound off, restart and page hiding stop audio/timers. Daytime birds stop at night while breeze remains. Existing character speech is unchanged. Strengthened warm right-side sunlight rays and sun glow with reduced-motion support. No name Anna introduced; learner chooses Mochi’s name as before. check-nature-audio.cjs verifies hatch gate, duplicate prevention, wind loop, birds, mute/cancel and night suppression; existing character-speech and journey/save regressions pass. Browser listening and visual review pending. Sandbox only; no publication or outside assets. Backup index-before-nature-audio.html.


### Audio generation pack — 2026-10-12

Organized upcoming character audio as 27 individual spoken dialogue files, 2 outdoor ambience beds and 15 triggered effects. Exact per-file names, triggers, dialogue and generation prompts are in sites/mochi-design/dist/audio/audio-manifest.csv. Drop completed assets into its dialogue/, ambience/ or effects/ folder respectively. Root guidance is sites/mochi-design/AUDIO-PACK.md and dist/audio/README.md; these explain 48 kHz WAV targets, level guidance, consistency and filenames. Dialog includes DYNAMIC placeholders for learner-authored greeting and flower counts, which fixed prerecorded clips cannot express. Audio files have not been generated or integrated yet. Prototype audio continues its current behavior until those files are installed and mapped.
