Test Plan

Smoke (after each deploy)
	•	Sign in → Create game → Join from second browser → Ready → Finish a full game.

Rules Matrix
	•	Enter on 6: yard→start only on 6; extra roll granted.
	•	Three 6s: 6,6,6 sequence forfeits turn; no movement from the third roll.
	•	Safe squares: landing on [0,8,13,21,26,34,39,47] never captures.
	•	Capture: landing on opponent elsewhere sends them to yard.
	•	Home: exact roll required for each slot 100..103.
	•	Turn: changes correctly unless extra roll.

Realtime
	•	When Player A rolls/moves, Player B sees it within ~<1s.
	•	Reload restores state; no duplicate moves.

Mobile
	•	Board fits common devices (iPhone 12/13/14, Pixel 6/7) in portrait.
	•	Tap targets ≥ 40px.

Performance
	•	First load < 2s on 4G (Netlify, cached).
