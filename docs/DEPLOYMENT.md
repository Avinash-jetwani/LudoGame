Deployment (Netlify + Supabase)

Netlify
	1.	Create site from GitHub repo or drag‑and‑drop dist.
	2.	Build command: npm run build
	3.	Publish directory: dist
	4.	Env vars:
	•	VITE_SUPABASE_URL = https://<your>.supabase.co
	•	VITE_SUPABASE_ANON_KEY = <anon key>
	5.	Trigger a deploy; confirm URL https://<site>.netlify.app.

Supabase Auth Redirects
	•	In Authentication → URL Config, add:
	•	https://<site>.netlify.app and http://localhost:5173

Local Dev

npm i
cp .env.example .env   # add VITE_* values
npm run dev
