# Topic 1 -> Mochi's first Python lesson

Status: concrete proposal for owner review; not an approved curriculum replacement and not implemented. Date: 2026-10-18. User asked to use the supplied PDF in the game, make it relatable and suggest a teaching approach. No game code, frozen PRD or approved visual design changed while reviewing the material.

Latest discussion: owner explored **one introductory chapter with five short activities**, including an introduction, rather than several separate full lessons. An interactive explanation is saved as [chapter-preview.html](chapter-preview.html): first print, greeting variable, farm name, planting-bed calculation, comments. This supplements the detailed greeting-first proposal below; it does not approve chapter integration or full PDF coverage. Main farm remains unchanged. User paused for tomorrow; read the latest checkpoint in ../resume.md before continuing.

## Source actually reviewed

resources/Topic 1 -_Getting started with Python.pdf, 30 pages, COMP106, term 1 2026–2027. Extracted all slide text locally and inspected the embedded exercise screenshots from pages 25–27. Python/Poppler executables were unavailable, so local Node/zlib extraction read the document and decoded the original exercise RGB screenshots without changing pixels. It was not a rendered review of all page layouts. Original PDF unchanged. Temporary extraction is under tmp/pdfs/.

Relevant source: features/case sensitivity/indentation (3–5), interpreter/IDLE/IDE (6–8), installation and running (9–12), interactive/script modes (13–18), Jupyter (19), keywords (20), identifiers (21–22), variables/assignment (23–24), message/number print exercises (25), rectangle area (26), comments (27), object identity/id() (28), revision questions (29). Examples inspected include message assignment + print, printing an assigned number, multiplication of length/breadth, and a commented addition example.

## Recommendation

Use this deck as a source for several short connected missions. First mission: **A first hello / أول رسالة لموشي**. One task, one short Arabic explanation, one small edit, one visible response. English switch retained; Python code remains LTR. Keep the current farm, original character/art, inspection-only scene and explicit Run. This is an opening Python concept mission before navigation; it does not replace the eventual movement puzzle with click controls.

Do not turn all 30 slides into the first screen. Keep installation/history/tool lists as optional reference material linked to the relevant class topic. Learners can try the first in-game mission before choosing an outside editor. Treat Jupyter, IDLE and .py files accurately as external Python environments/workflows, rather than claiming the custom game editor already implements all of them.

## Proposed playable Lesson 1

Working title: **أول رسالة لموشي — A first hello**. Mission: Mochi is at the farm gate waiting for the learner's greeting. Send a message using code. Three guided beats and one small independent check; target duration around five minutes is a design estimate, not a measured result.

### Beat 1 — Run a real Python statement

Mochi: «وصلنا المزرعة! خلّنا نبدأ برسالة. اكتب تحيّتك داخل علامتي التنصيص، ثم شغّل الكود.»

Example:

    print("مرحبًا يا موشي!")

One explanation: «print تعرض النص المكتوب بين علامتي التنصيص.»

Visible result: a clearly labeled output strip displays the exact string; the game mirrors that output in Mochi's speech bubble and gives a small reaction. Explain that the bubble is this game's visualization of output: Python print normally writes to its output stream, not to a game character. Pressing Run causes the effect; clicking the character/floor cannot complete it. Do not open a permanent second information panel or cover the world with a slide.

### Beat 2 — Give the message a name

Mochi: «نقدر نعطي رسالتنا اسمًا ونستخدمه بدل ما نعيد كتابتها.»

    greeting = "مرحبًا يا موشي!"
    print(greeting)

One visual aid: a small name tag greeting attached to the message value. Describe a variable as a name referring to a value; don't introduce memory addresses/id() in the first interaction. Highlight assignment line, then print line, so order is observable. Do not animate movement for assignment/print or imply that print moves Mochi.

Before Run, a short prediction: «وش الرسالة اللي بتظهر؟» Reveal actual output after execution. Editing the string and running again visibly changes the greeting, without giving the learner an unexplained form-based shortcut.

### Beat 3 — Make sense of a small mistake

Explain Python case sensitivity with a controlled example only after the successful attempt. If learner types Print, gently explain: «بايثون تفرّق بين الحروف الكبيرة والصغيرة. جرّب print بحرف p صغير.» Quote/bracket/name errors get specific Arabic help near the offending line; preserve their code and successful world state. Never show an unsupported arbitrary-code capability or blame the learner.

If a variable is used before assignment, explain that the name has not been given a value yet, instead of silently creating it. Avoid a planned "wrong attempt" that is falsely represented as learner research.

### Independent check — A greeting of your own

Ask: «اكتب رسالة جديدة، واحفظها باسم greeting، ثم اعرضها.» Keep the editor empty for this check unless the learner chooses a hint. Accept any nonempty greeting satisfying the task; don't compare against one exact memorized string. Completion means an assignment followed by printing that same variable, with actual matching output. Recognizing output alone or clicking a choice does not complete the code task.

After success, offer the next navigation mission: reach a plant using learner-written step commands. Do not automatically choose the route or insert navigation code.

## Where the rest of Topic 1 belongs

| Mission/reference | Python idea from PDF | Original game adaptation |
| --- | --- | --- |
| First hello | First program, print, case sensitivity, assignment/strings | Learner sends a greeting; labeled output is mirrored in Mochi's bubble. |
| Find the first plant | Numeric variable, use a value through its name | steps = 3, then move_up(steps). Count highlighted grid tiles before running; learner still controls every movement. |
| Name your farm | Identifiers, meaningful names, strings, comments | farm_name variable used in output/a clearly bound farm sign. Naming errors explained; # is a note and does not act on the scene. This requires a documented game binding, not an assumption that all variable names alter the world. |
| Plan a small bed | Multiplication/rectangle exercise | length = 2, width = 3, area = length * width, print(area); show a 2-by-3 preview alongside six counted cells. Expansion/placement remains a later proposal, not an existing mechanic. |
| Optional "practice outside Mochi" | Interpreter, interactive vs saved script, .py, IDLE/Jupyter | A short Arabic reference and an exportable valid Python print/variable exercise. Do not include game-specific movement calls in a supposedly standalone script unless their functions are also supplied. |
| Later reference | Keywords, Python features, object identity/id() and indentation | Introduce at the point of use or as class revision; do not imply the deck teaches full loops/conditions merely because their keywords appear. |

These are proposals, not promises of implemented features or final chapter order. English identifiers are convenient examples, not a claim that Python categorically forbids Unicode identifier names. Strings require quotes; alphanumeric text is not a separate automatic Python type. Prefer accurate current behavior over copying an imprecise slide sentence verbatim.

## What must be implemented before claiming this works

Current engine accepts literal movement/crop commands only. It does not accept print(), assignment, variable arguments or arithmetic. Add and test a bounded, accurately behaving subset for the selected first mission: quoted strings, a simple variable environment, assignment, print of strings/defined variables, case-sensitive names, comments respecting quoted #, clear undefined-name/syntax errors, and exact output display. Never use JavaScript eval or claim a full Python interpreter.

Keep all world clicks inspection-only. Add translation keys for task, explanation, output label, success/error/hint text; preserve RTL/LTR separation. A language switch changes guidance, not learner-authored string contents or code. Keep output safe via textContent, especially for arbitrary greeting text. Maintain the original parser/actions for later navigation; variable-supported movement is separate scope until selected.

For a broad Python curriculum, a real sandboxed Python runtime is a later technical choice. The first bounded lesson can use valid Python syntax with faithful supported semantics, honestly labeled as the supported lesson subset. No runtime/dependency download or external action is authorized by this document.

## Review and verification before release

Owner selects the opening scope: recommend print + a greeting variable, with naming/comments/arithmetic spread across later missions. Verify literal/variable printing, changed string -> changed output, undefined/case/quote errors, one independent solution not exact-answer matching, comments with # inside quoted text, no mutation on clicks, no movement from print, language/state preservation and existing navigation regressions. Run real browser interaction and review Arabic text/code rendering.

If later authorized, observe a real beginner predict the output, change a greeting and explain assignment/print without the answer being supplied. Their prediction/explanation is different evidence from story preference, a passed code test or a completion badge. No learner testing or learning benefit is claimed now.
