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
