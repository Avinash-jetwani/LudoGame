Ludo Web (Private Two‑Player Focus)

A lightweight, private, web‑only Ludo you can play with up to four players (primarily 2‑player), built with React, synced via Supabase Realtime (Postgres + RLS), and deployed to Netlify. Includes auth, lobby with colour selection, realtime turns, dice, captures, safe squares, and win detection.

Goals
	•	Zero app stores. Just a private web link for you two.
	•	Plays smoothly on phones and laptops.
	•	Minimal backend maintenance (Supabase managed Postgres + Realtime).

Non‑Goals (for MVP)
	•	No public matchmaking or global chat.
	•	No payments or monetisation.
	•	No complex cosmetics; simple clean UI first.

Tech Stack
	•	Frontend: React + Vite + TypeScript, Tailwind CSS, Zustand.
	•	Sync & Storage: Supabase (Postgres tables + Realtime on table changes + optional Presence).
	•	Auth: Supabase Auth (email magic link recommended; you can add Google later).
	•	Hosting: Netlify (no custom domain required; free subdomain is fine).

Core Features (MVP)
	•	Create / Join game room via short code or link.
	•	Choose colours (Red / Yellow / Green / Blue).
	•	Standard Ludo rules: roll 6 to enter, extra roll on 6, three 6s in a row forfeits turn, safe squares, captures, exact roll to finish.
	•	Reconnect & resume game state.
	•	Simple emoji chat / quick reactions (optional in MVP+ phase).

High‑Level Flow
	1.	Create Game → new games row with secret; host becomes first player.
	2.	Join Game → second player joins via code/link; chooses colour.
	3.	Start → both set ready=true; status switches to playing and first turn is assigned.
	4.	Play → current player rolls; valid moves calculated client‑side; move persisted; turn advances.
	5.	Win → when a colour has all four home, status = finished.

Quick Start (after repo is set up)
	1.	cp .env.example .env and fill VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.
	2.	npm i && npm run dev to run locally.
	3.	npm run build and deploy /dist to Netlify.
