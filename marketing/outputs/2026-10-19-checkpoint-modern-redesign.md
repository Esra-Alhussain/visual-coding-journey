# ENG-005 / CONTENT-012 — From crowded to clear: the Chapter 1 redesign

Date: 2026-10-19. Local draft; no recording, outreach or publication. Audience: beginner Python learners and people building small learning games. Language/channel assumption: inclusive Saudi Arabic narration with English subtitles, for a 3–4 slide carousel or an optional 20-second Reel. Source: owner feedback that the chapter felt dated, plus the actual local page and screenshots from this session.

## Context and why now

The owner rejected the previous Chapter 1 look as not modern and asked for a design enhancement. The same lesson now uses a cleaner hierarchy: a compact app bar, a calmer five-step activity rail, a larger farm stage, a clear Idea → Task → Run sequence, and a dark code editor. The lesson, safe Python subset, progression and bilingual behavior did not change.

This is a genuine before/after because two renders of the same chapter exist: [before](../../devpost/little-acres/review-modern-before.png) and [after](../../devpost/little-acres/review-modern-desktop.png). Audience benefit: seeing how visual order affects where a beginner looks first, and a concrete example of improving a learning interface without adding features.

Confirmed fact: the local page was rendered in Chrome and checked at 1440x1000, 430x932 and 390x844 in English and Arabic with no horizontal overflow; `check.cjs` and `check-colorful.cjs` pass. Owner approval of the new direction has not been given. No learner has tried it, and no learning outcome is claimed.

## Type and format

Primary type: before-and-after transformation. Recommended format: 4-slide carousel using the two real screenshots and two detail crops, with an optional 20-second narrated Reel. A carousel is clearer than video because the comparison is static and the layout labels need to be readable. The Reel is optional and can reuse the same narration.

## Hook

Arabic (0–4s): «قبل، الصفحة كانت تبدو مزدحمة… ومو واضح من وين نبدأ.»

English subtitle: “Before, the page felt crowded… and it wasn't clear where to start.”

## Full Saudi Arabic narration with English subtitles

0–4s
Arabic: «قبل، الصفحة كانت تبدو مزدحمة… ومو واضح من وين نبدأ.»
English: “Before, the page felt crowded… and it wasn't clear where to start.”

4–9s
Arabic: «عدّلت التصميم: شريط الأنشطة صار أهدأ، والمهمة والمحرّر صاروا أوضح.»
English: “I redesigned it: the activity trail is calmer, and the task and editor are clearer.”

9–14s
Arabic: «نفس الدرس ونفس الكود… بس التسلسل صار يوجّهكم خطوة خطوة.»
English: “Same lesson and same code… but the sequence now guides you step by step.”

14–20s
Arabic: «أنا قاعدة أراجع الإحساس الجديد: أي جزء تحسونه أوضح لكم؟»
English: “I'm reviewing the new feel: which part feels clearer to you?”

## Timed shot list / slide plan

Target 20 seconds, not measured. No video or screen recording exists yet. The still images are actual local renders, not concept art.

- 0–4s / Slide 1: full before screenshot. Slow push-in on the crowded rail and small right-hand text. Overlay: «قبل · وين نبدأ؟».
- 4–9s / Slide 2: full after screenshot. Hold, then subtle pan from the app bar to the activity rail. Overlay: «بعد · نفس الدرس، ترتيب أوضح».
- 9–14s / Slide 3: side-by-side crop of the activity rail and the Idea/Task cards, before vs after. Overlay: «شريط أهدأ · مهمة أوضح».
- 14–20s / Slide 4: after screenshot with the editor and Run button highlighted. Overlay: «الكود في مكانه · والنتيجة قريبة». End card: «قيد المراجعة · مو اختبار تعلّم».

Capture notes: crop out the local file path, browser chrome and any account UI. Do not put narration over a failing or half-loaded page. If recording, capture the actual page, not the static screenshots; the screenshots are for the carousel.

## On-screen text

- Slide 1: «قبل · وين نبدأ؟»
- Slide 2: «بعد · نفس الدرس، ترتيب أوضح»
- Slide 3: «شريط أهدأ · مهمة أوضح» / «المحرّر أوضح»
- Slide 4: «قيد المراجعة · مو اختبار تعلّم»
- Consistent label: «نسخة محلية · 2026-10-19»

## Caption and CTA

Arabic caption:
«التصميم القديم كان يشتت أكثر من ما يوجّه. جربت نسخة أنظف: شريط أنشطة أهدأ، مهمة أوضح، ومحرر كود أسهل في القراءة. نفس الدرس ونفس الكود — بس الترتيب صار يوجهكم. نسخة محلية قيد المراجعة، ولسه ما نقيس تعلّم. أي جزء تحسونه أوضح لكم؟»

CTA:
«أي جزء ساعدكم تعرفون وين تبدأون: شريط الأنشطة، بطاقة المهمة، ولا المحرّر؟»

## Story version

Panel 1: before screenshot with the text «قبل: وين نبدأ؟».
Panel 2: after screenshot with the text «بعد: المسار، المهمة، والمحرّر».
Question: «أي جزء ساعدكم تعرفون وين تبدأون؟»
Choices: «شريط الأنشطة» / «بطاقة المهمة» / «المحرّر».
No “before vs after” vote: the before is not a feasible direction — the owner already rejected it. The choices ask which part of the new layout to emphasize, not whether to revert.

## What responses can teach us

Responses can show which element draws attention first and which labels feel clear. They are preference and self-report, not evidence of comprehension, retention or learning gains. A single self-selected comment cannot establish what all beginners need. The screenshots may also bias answers toward the visual difference rather than the lesson flow.

## Decision and next build step

Owner reviews the modern direction and decides whether the palette, density and panel order feel right. If feedback points to a specific unclear area, the next change would be a focused layout/copy adjustment in `colorful-scene.html` / `modern.css`; no automatic redesign from a public preference. The next product step remains owner approval, then Chapter 2 or island integration. No feedback, recording or publication exists.

## Recommendation

CAPTURE NOW / POST LATER. The before/after screenshots and the working local build exist, so the comparison is ready to assemble. Still needed: owner review of the design, a 20-second recording if the Reel version is chosen, subtitle timing/accuracy, and a privacy check. Publication requires separate approval. This package is a local draft, not an approved post.
