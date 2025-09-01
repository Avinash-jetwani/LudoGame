Implementation Plan (Phased, Testable)

Each phase has: Prereqs, Tasks, Definition of Done (DoD), and Manual Tests. Keep phases small; ship a playable slice early.

Phase 0 — Project & Supabase Setup

Prereqs: Supabase account, Netlify account, GitHub repo.

Tasks
	•	Create Supabase project → get SUPABASE_URL, ANON_KEY.
	•	Run SQL from ARCHITECTURE.md to create enums, tables, and policies.
	•	In Authentication → Settings → redirect URLs add Netlify site URL (e.g. https://<site>.netlify.app/*).
	•	npm create vite@latest ludo-web -- --template react-ts.
	•	Install deps: @supabase/supabase-js, zustand, clsx, tailwindcss.
	•	Tailwind init + basic styles.
	•	Create .env with VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY.
	•	Build supabase.ts (singleton client) and smoke‑test auth.getSession().

DoD
	•	Local dev runs; can sign in via email magic link; session persists.
	•	games table exists; RLS enabled; sample insert works via SQL editor.

Manual Tests
	•	Sign up with your email; refresh → still authed.
	•	From SQL editor, insert a games row; query visible from app (read‑only).

⸻

Phase 1 — Local Pass‑and‑Play (No Network)

Goal: Finish the pure rules engine + board UI before wiring realtime.

Tasks
	•	Implement track.ts: define start indices, safe squares, helper nextPos(colour, from, roll).
	•	Implement rules.ts: given board, turn, lastRoll, return valid moves; apply move logic (captures, home, extra turn, three 6s rule).
	•	Build Board.tsx (SVG) and Dice.tsx.
	•	Basic theme with four colours; mobile‑first sizing.

DoD
	•	You can simulate two colours locally: roll → pieces highlight → click to move → victory triggers.

Manual Tests
	•	Try entering from yard only on 6.
	•	Land on safe square with opponent: no capture.
	•	Three 6s: third 6 forfeits turn.
	•	Exact home required.

⸻

Phase 2 — Auth, Lobby, Create/Join

Tasks
	•	Build Home.tsx with Sign‑In (magic link) and "Play" CTA.
	•	Lobby.tsx: Create Game (insert into games with random secret), Join Game by ID; show shareable link ?g=<id>&s=<secret>.
	•	game_players upsert: user picks colour; unique per game enforced by constraint.
	•	Ready/Unready toggle; when 2+ players ready → set status='playing' and assign turn.

DoD
	•	Two browsers join same game id; colours locked; ready starts the match.

Manual Tests
	•	Colour conflict shows friendly error.
	•	Refresh preserves membership and colour.

⸻

Phase 3 — Realtime Game State

Tasks
	•	Subscribe to games row for this id; re‑render on change.
	•	Hook Dice: current player writes last_roll, updates roll_streak.
	•	Apply moves: write new board, advance turn, append moves row.
	•	Disable actions if auth.uid() is not the colour's owner or not your turn.

DoD
	•	Two browsers see dice/moves in real time with turn gating.

Manual Tests
	•	Network flap: one user disconnects/reconnects; game resumes.
	•	Attempt to move when not your turn: blocked in UI.

⸻

Phase 4 — Full Rules & Edge Cases

Tasks
	•	Enforce captures vs safe squares.
	•	Enforce home entry; exact finish.
	•	Enforce 3×6 rule precisely.
	•	Detect winner and lock board.

DoD
	•	All main rules behave correctly across 20+ manual sequences.

Manual Tests
	•	Capture and send token to yard.
	•	Multiple valid moves prompt chooser UI.
	•	Finish condition triggers and prevents further input.

⸻

Phase 5 — Presence, Resilience, Rematch

Tasks
	•	(Optional) Realtime Presence channel game-<id> to show who's online.
	•	"Rematch" button: reset board, turn, status without changing players.
	•	Idle turn timer (e.g., 90s) to gently nudge or auto‑advance if desired (configurable).

DoD
	•	Presence badges visible; rematch creates fresh round.

Manual Tests
	•	Toggle online/offline and see presence update.
	•	Rematch preserves colours and settings.

⸻

Phase 6 — Polish

Tasks
	•	Subtle animations; tap feedback; accessibility labels.
	•	Emoji chat (messages table) with very short retention.
	•	Sound effects toggle.

DoD
	•	Feels smooth on mobile; Lighthouse ≥ 90.

Manual Tests
	•	iPhone + Android responsive checks; no layout shift.

⸻

Phase 7 — Deploy & Verify

Tasks
	•	Netlify site set up; env vars configured; build on push.
	•	Supabase Auth redirect updated to Netlify URL.

DoD
	•	Public URL works; both can sign in and play a full match end‑to‑end.

Manual Tests
	•	Play at least two full games from phones on mobile data.

⸻

Phase 8 — QA & Handover

Tasks
	•	Write short user guide for your partner; record a 1‑minute Loom if helpful.
	•	Export Supabase SQL and env template.

DoD
	•	Project can be picked up by any engineer using these docs.
