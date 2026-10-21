# Publishing Mochi

Updated October 21, 2026.

Public URL: https://esra-alhussain.github.io/visual-coding-journey/
GitHub Pages is enabled with Source: GitHub Actions. The existing workflow deploys the `public/` directory after a push to `main`.

The owner approved the living world map as homepage and public publication. Only Island 1 has a playable five-activity Python lesson; four later islands are upcoming. Guest progress saves in the same browser/origin. The existing Supabase email authentication and signed-in progress bridge are retained. Google OAuth still needs provider configuration; it is not newly enabled here.

Build: `node devpost/little-acres/build-public.cjs`.
Verify: `node devpost/little-acres/check-public-map.cjs`, `check-map-nature.cjs`, `check-map-water-fallback.cjs`, and `check-map-islands.cjs` (all under the same directory).

Public build uses an explicit asset allowlist. Planning documents, marketing drafts, screenshots and raw audio source files are not added to the published directory; audio data is bundled for local-file compatibility. Existing separate farm prototype remains at write-code.html.

Source previews remain in devpost/little-acres for comparison. The temporary tunnel is no longer the intended public link. Public deployment success and live-browser checks are recorded in devpost/resume.md.
