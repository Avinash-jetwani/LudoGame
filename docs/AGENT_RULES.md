Working Rules for Implementers
	1.	Small PRs: one phase or sub‑feature per PR; keep diffs under 300 lines where possible.
	2.	TypeScript strict: enable "strict": true in tsconfig.json.
	3.	Pure logic: rules.ts must be deterministic and side‑effect free; include unit‑like tests (vitest).
	4.	No schema drift: any DB change must update ARCHITECTURE.md SQL and RLS policies.
	5.	Accessibility: keyboard focus on dice; ARIA labels on interactive elements.
	6.	Mobile first: check layouts at 360×740 and 768×1024.
	7.	Logging: use small debug logger; avoid console.log noise in main branch.
	8.	Feature flags: hide non‑MVP UI behind constants.
	9.	Definition of Done: code + docs + tests + manual checklist ticked.
	10.	Security: never commit .env or secrets; review RLS after any change.

Branching & Commits
	•	Branch per phase: feat/phase-2-lobby etc.
	•	Conventional commits: feat: lobby colour pick, fix: capture on safe square, docs: update RLS.

Review Checklist
	•	Types are explicit; no any.
	•	RLS still passes intention.
	•	UI disables actions when not your turn.
	•	Tested on mobile viewport.
