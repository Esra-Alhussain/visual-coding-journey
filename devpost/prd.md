---
doc: prd
status: draft
---

# Mochi — Product Requirements

A playful visual coding journey for beginners and people learning to connect programming concepts. Learners write their own code to bring Mochi to life, then combine their skills in a fresh mini show.

## Planning Status and Sources

Consolidated 2026-10-08. Individual decisions below are accepted unless marked open or tentative; the full revised scope and PRD remain draft. scope.md is the historical approved shop-only baseline, not the current boundary. This revision develops its The Unique Kernel and The Core Loop while replacing The POC Boundary according to learner decisions saved in vision-notes.md. Older PRD files are preserved as prd-before-consolidation-2026-10-08.md/html.

## The Core Journey

1. A playful introduction explains making code change Mochi’s world, before the map. The parcel visual remains provisional.
2. Begin Lesson 1 by writing Mochi’s name and greeting; tap Mochi to see and hear the greeting.
3. Reveal the visual map and continue five connected lessons: values → lists → sequences → choices → loops.
4. Each lesson offers a visual explanation/story, a separate small reference example, learner-typed practice, then an independent practical task. Passing unlocks the next lesson. Optional progressively clearer hints never reduce rewards.
5. A small celebration names the actual accomplishment. Milestone messages recognize progress; one special title is earned only after completing the level.
6. Complete the fresh final mission, Prepare Mochi’s mini show, using taught concepts with ribbon and bell rather than repeating the lesson toys.
7. Finish with a short reflection. Exact reflection and level-title wording remain open.
8. Sign-in is optional. Account progress follows learners between devices; existing guest work must be retained when signing in.

## Screens and Layout

Introduction, visual lesson map, and a connected lesson/play workspace. The workspace pairs Mochi’s scene, lesson guidance, separate code reference, and the growing learner-written editor. On phones the preview sits above the editor and either can expand; larger screens can place them side by side. Testing and playful interactions happen on the same screen, without separate modes. Sign-in and reflection presentation remain to be designed rather than presumed separate pages.

## Look and Feel

Use the accepted mochi-character.png direction: rounded turquoise companion, floppy ears, cream belly, coral cheeks, soft tactile texture. Colorful, playful, personal, visually clear. Creative identity and visible code consequences matter. The HTML planning review is not the final application design. After product review, design the key workspace for phone and computer, then complete technical planning before building.

## Learner-Written Code

Learners type every piece of their project code, during guided practice and independent tasks. The website/helper never inserts, completes, repairs, or replaces it. Small examples may appear separately beside the editor. Earlier learner-written code carries forward; highlight current lesson lines. This supersedes prefilled learner starter-code proposals. Provided drawing, animation and action internals support learner code; custom function definitions and event handlers are deferred.

## Lessons and Practical Checks

| Lesson | Guided learning | Independent completion check |
| --- | --- | --- |
| 1. Values and variables | Write a name/greeting; explain stored values versus provided display behavior | Choose a new name/greeting; name appears, and tapping displays and speaks the current greeting |
| 2. Lists | Add/remove toys through code before using them; animate list names → provided drawing behavior | Tentative: change ball-only list to hoop-only; hoop appears and ball disappears |
| 3. Sequences | Type block placement instructions and observe their order | Place large, medium, small blocks in that order to build the target tower |
| 4. Choices | Practice ball chasing and approaching/jumping through hoop; write a toy-based rule | Test both choices: hoop → approach then jump; ball → chase |
| 5. Loops | Write a loop tapping the drum three times | Write a loop producing three ball chases, rather than three separate chase calls |

Ball, hoop, drum and blocks are supported lesson toys. Learners add toys to their list before those toys appear or become usable. Lists store names; separate provided code draws objects. Sequence practice follows the written block order exactly; an incorrect order shows the actual stack, with a hint toward placing the largest first. Valid but unexpected results are not syntax errors. Ball-chase and hoop approach/jump actions must be practiced before checks require them. Exact locations for those action rehearsals remain to consolidate.

## Testing and Greeting

Try my code runs edited movement instructions. Tapping toys is not the run trigger. Tapping Mochi remains available and displays/speaks the current coded greeting each time; a hand cue invites a tap. No separate test/play modes. Immediate updates versus applied edits, replay/stop behavior, repeat limits, cue timing and speech interruption/fallback remain open.

## Final Mission — Prepare Mochi’s Mini Show

Fresh props and a fresh goal apply familiar concepts. Proposed detailed brief, positively received but requiring consolidated review:

- Name the show and write Mochi’s welcome greeting.
- Independently add ribbon and bell to the show’s stock/list. Neither is already stocked or visible in the scene. No repeated list tutorial or automatic additions.
- Walk to a stage mark, then bow.
- Choose behavior by prop: ribbon → twirl; bell → ring.
- Repeat the selected performance three times using a loop; test both props and tap Mochi for the welcome.

New action commands must be briefly practiced before independent assessment. Placement of rehearsal and exact sequence/loop boundaries remain open. Completion should verify the authored values/list, correct sequence, both branches and loop-based repetition. Do not silently introduce another concept. This replaces the earlier ball/hoop play-session finale.

## Help and Errors

Optional hints become clearer on request; learners still make their own edits and pass checks. AI mini stories tied to the learner’s choices can explain tasks/concepts without editing code. AI-unavailable behavior and help controls remain open.

Code that cannot run shows the prior scene visibly dimmed/stale, highlights the affected line and explains a correction. Learners fix it themselves; valid code restores the scene. Update old shop-specific error wording for the play-space setting during review. Valid code with unexpected behavior shows its actual result.

## Progress and Rewards

Each independent check unlocks the next lesson. Completion messages recognize demonstrated work, such as: “Yaaay! Your first lesson is complete! You gave Mochi a name and a greeting through code. Your coding journey has begun!” Adapt later messages to toy lists, sequences, choices and loops. One special title per full level grows with demonstrated abilities; exact title remains undecided. Do not claim beginner completion makes someone a professional programmer. Decorations and bonus-reaction rewards were rejected. Badges were liked, but final badge presentation is open.

## Accounts and Returning Progress

Offer Google and email/password sign-up/sign-in, with Forgot password. Keep starting simple and sign-in optional. Reminder: “Keep your progress safe ✨ Sign in to save and play on any device.” Buttons: Save my progress / Not now. Account-backed code, lesson completion and achievements follow the same learner across phone and laptop. Preserve guest work on sign-in. Guest retention, existing-account conflicts, offline saving and save-error feedback need definition. Start-over confirmation is proposed, not yet approved.

## States and Boundaries

- Empty valid toy list: show no toys and “No toys yet! Add a ball or hoop to give Mochi something to play with.” Empty lists are not syntax errors. Wording now needs review for expanded toy support.
- Unsupported names: a list can store them; scene representation/guidance is unresolved. Do not treat arbitrary unsupported names as ball choices.
- Missing toy used by instructions: behavior unresolved.
- Passing tasks: celebrate and unlock; hints do not remove rewards.
- Failed checks: learner keeps their code and can retry; exact feedback remains to specify.

## What We're Building

One beginner level in Mochi’s play space: five connected concepts, four lesson toys, learner-written cumulative code, reference examples, visual explanations, practical progression checks, hints, accurate error/result feedback, greeting speech, fresh mini-show mission, reflection, achievement feedback and optional cross-device accounts. The complete revision is not approved for implementation yet.

## Deferred From the POC

Shop-building comes afterward as a later teaching level. Preserve the broader build-a-place vision, full curriculum, other locations/projects, learner-authored functions and events, hunger/food behavior, appearance-building, GitHub workflows and personalized later journeys. No coins/reward shop, decoration rewards or extra levels automatically enter the first build.

## Observable Acceptance Criteria

- Learner code is typed by the learner; reference examples never populate the editor automatically.
- Earlier work remains accessible in the same growing project.
- Toys/props appear only after authored list additions; removing them changes the scene.
- Each approved task produces the observable result specified in its lesson check.
- Actual written action order and repetition are visible; errors are distinguished from valid unexpected results.
- Greeting reflects current code visually and audibly on tap, subject to the pending speech fallback decision.
- Hints support independent work without editing code or reducing rewards.
- Passing unlocks progression and shows accomplishment-specific feedback.
- Mini-show requirements use previously introduced concepts/actions and learner-added props.
- Account-backed progress can continue on another device; sign-in retains guest work subject to an agreed conflict rule.

## Open Questions

Resolve consequential behaviors before product approval and 4-spec:

1. Exact run/apply/replay behavior and safe action/repeat limits.
2. Confirm tentative lists check; action rehearsal placement and final mission sequence/loop boundaries.
3. Unsupported/missing toys and expanded empty-list wording.
4. Guest saving, offline/save failure, guest/account conflict handling and reset behavior.
5. Speech-unavailable and repeated-tap behavior; cue timing.
6. Help controls and unavailable AI fallback.
7. Short reflection and specific level title; badge/milestone presentation can be refined in design after their behavior is agreed.

Platform remains undecided: responsive web app was recommended; Android was an earlier preference. Choose in technical planning. Illustrations, typography and detailed layout are design work after product review.

## Playful Adventure Experience

Approved 2026-10-08: each lesson feels like helping Mochi accomplish something through code, rather than completing a worksheet. Use small story missions such as “Mochi’s tower needs your help!” Mochi reacts expressively to actual outcomes, including funny harmless mistakes; reactions must not hide errors, misrepresent code behavior, or correct code automatically. Completed adventure-map stops visibly come to life. After passing, learners can stay and experiment with their code rather than being forced onward. The finale presents the learner-authored mini show as a showtime performance, followed by the earned level title. Exact animations, map treatment and reaction presentation belong in the key-screen design review. This is presentation supporting the existing learning journey, not additional levels or reward-unlocked reactions.

## Repeatable Code Testing

Approved 2026-10-08: each press of Try my code clears the previous run’s temporary result (such as a block tower), returns Mochi to its starting position, and runs the current instructions from the beginning. Preserve written code, authored toy/prop lists and earned progress. This makes experiments comparable without leftover run results. Mid-run button behavior and exact immediate/apply timing remain open.

## Recovery and Fallbacks — Approved 2026-10-08

If internet drops, keep work on the device and sync when connected; show “Saved here · waiting to sync.” If speech is unavailable, keep the greeting bubble functional and show “Sound isn’t available right now”; unavailable speech must not block lesson progress. If AI help is unavailable, provide prepared hints. Start over requires confirmation before clearing work; exact reset scope remains to specify. Unsupported toys receive guidance toward available toys; preserve learner code for learner-led correction. Existing account/guest save conflicts still need a non-destructive resolution rule before implementation.
