# Publishing the prototype

Date: 2026-10-20. This file records the current preview and the steps for a permanent deployment. It is not a public page and is not included in the `public/` build.

## Current temporary public preview

- URL: https://e7bcc9a3453a3e.lhr.life/
- Chapter list: https://e7bcc9a3453a3e.lhr.life/chapters.html
- Lesson 1: https://e7bcc9a3453a3e.lhr.life/first-lesson.html
- Farm prototype: https://e7bcc9a3453a3e.lhr.life/write-code.html

This is a **temporary** localhost.run tunnel to the local static server on port 8081. It works only while:

1. `node tmp/serve-public.cjs` is running,
2. the SSH tunnel `ssh -R 80:127.0.0.1:8081 nokey@localhost.run` is running,
3. this computer is awake and online,
4. the free tunnel hostname has not expired.

The served folder is `public/` only; planning documents, README files and review screenshots are outside it.

## Local links

- This computer: http://127.0.0.1:8081/
- Same Wi-Fi: http://192.168.100.77:8081/ (the IP can change)

## What is not real yet

- The sign-in window is a **UI prototype**. It does not create accounts, send credentials, store passwords or provide cross-device progress. Do not enter a real password.
- Only Chapter 1 is playable. Chapters 2–5 are visibly “Coming soon.”
- There is no backend, database, authentication service, analytics or permanent persistence.

## Permanent deployment

The `public/` folder is static and ready.

### GitHub Pages

1. Create or open the GitHub repository.
2. Commit and push `public/` (or the whole project).
3. Settings → Pages → Deploy from a branch → choose the branch and `/public`.
4. Add a `public/.nojekyll` file if needed.

The currently configured remote `https://github.com/Esra-Alhussain/visual-coding-journey.git` returned 404 during this session, so repository access or a new repository is required.

### Netlify

- Drag `public/` into Netlify Drop, or run `npx netlify deploy --dir=public --prod` after logging in.
- This produces a stable URL and can later connect a custom domain.

### Vercel

- Run `npx vercel public --prod` after logging in.
- This produces a stable deployment URL.

## Before inviting real users

- Replace the UI-only sign-in with a real service or hide it.
- Add a visible “prototype preview” note and avoid collecting real passwords.
- Test the chapter flow and sign-in on physical phones.
- Decide whether the old island/farm entry should remain the root or be replaced by the chapter list.
- Add real privacy/terms wording and a backend plan before collecting any personal data.
