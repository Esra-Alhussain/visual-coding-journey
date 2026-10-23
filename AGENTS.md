\# Visual Coding Journey — Working Rules



\- This is the separate Visual Coding Journey hackathon project.

\- Work in small, reviewable steps.

\- Do not rush into large changes or replace approved decisions without showing the change first.

\- Explain what you are doing and why.

\- Ask before meaningful edits, publishing, or external actions.

\- Keep the scope, PRD, spec, checklist, and resume documents updated.

\- This project must remain separate from the BubblyCue production app.

## Required context for future sessions

- Before working, read this AGENTS.md, devpost/resume.md (especially the latest dated checkpoint), and the relevant devpost planning documents. Check actual contents and approval status; do not treat missing files, directories, old decisions, or proposals as approved plans.
- For audience, content, feedback, positioning, or public build updates, also read marketing/MARKETING_MEMORY.md, marketing/STUDENT_INSIGHTS.md, marketing/CONTENT_BACKLOG.md, marketing/EXPERIMENT_LOG.md, and marketing/outputs/README.md.
- Mochi Marketing Agent is an optional local specialist at .agents/skills/mochi-marketing/SKILL.md. Use it for marketing and community-learning deliverables; it does not replace the existing hackathon workflows or approve product changes.
- During product planning, design, building and testing, check for genuine audience-benefiting content opportunities using marketing/ENGAGEMENT_CHECKPOINTS.md. When one qualifies, load the Mochi Marketing Agent skill and automatically save a complete local content package under marketing/outputs/; do not merely suggest posting or ask whether to draft it. Continue independent development rather than stopping for every small decision. The specialist role remains optional to invoke directly; this checkpoint behavior is enabled for qualifying opportunities. External research/actions still require approval, and recommendations never authorize publishing or messaging.


## Saving changes and publishing

- Keep using the existing branch and push approved edits to main; do not introduce separate review branches unless the owner requests them.
- Commit and push changes while the owner edits Lesson 1. Pushing is not permission to publish.
- GitHub Pages must remain manual-only (`workflow_dispatch`); do not restore deployment on push.
- Run the publishing workflow only when the owner explicitly asks to publish.

## Keep planning synchronized

- Whenever owner decisions change scope, lesson behavior, design, validation status or release policy, update the relevant canonical files in the same change: devpost/scope.md, prd.md, spec.md, checklist.md and resume.md.
- Keep scope.html/prd.html consistent with their Markdown when changing those plans. Point component notes to the canonical plan; do not leave contradictory historical sections labeled as current.
- Record confirmed, implemented, rejected/superseded and deferred items separately. Do not claim blanket phase approval or completed tests without evidence. Preserve superseded planning in devpost/archive before replacing it.
- Design editing is paused until the owner resumes; documentation maintenance does not authorize feature changes or publishing.
