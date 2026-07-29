<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>G&Co. OCEAN Assessment</title>
  </head>
  <body style="margin:0;">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

{
  "name": "ocean-assessment-app",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "firebase": "^10.12.2",
    "jspdf": "^2.5.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "vite": "^5.2.0"
  }
}

# G&Co. OCEAN Behavioral Assessment

A standalone web app for the 30-question OCEAN (Five-Factor Model) scenario-based
assessment. Candidates take it via a public link; the G&Co. team views full
narrative analyses, targeted interview questions, and downloads real PDF
reports behind a passcode.

This version fixes the two things the Claude-artifact version couldn't do:
- **Real, permanent storage** via Firebase Firestore (so deleting a candidate's
  data actually deletes it, and it doesn't depend on Claude's sandbox storage)
- **Real PDF downloads** via the `jspdf` library (an actual generated PDF file,
  not the browser's print dialog)

---

## Step 1 — Firebase setup

**If you already set up Firebase for the earlier G&Co. finance-roles assessment,
you can reuse that exact same project and config** — this app writes to a
different collection (`ocean_submissions`), so the two assessments' data won't
mix. Just copy your existing `firebaseConfig` values into `src/firebase.js`
and skip to Step 2.

Otherwise, starting fresh (~5 minutes):

1. Go to https://console.firebase.google.com → **Add project** → name it
   (e.g. `gco-assessments`) → Analytics can be off → **Create project**.
2. Click the **`</>`** (web) icon to register a web app → skip Firebase
   Hosting → **Register app**. Copy the `firebaseConfig` object it shows you.
3. Paste those values into `src/firebase.js`, replacing the `PASTE_YOUR_...`
   placeholders.
4. In the left sidebar: **Build → Firestore Database → Create database** →
   pick any region → **Start in test mode** → Create.

## Step 2 — Push to GitHub

```bash
cd ocean-assessment-app
git init
git add .
git commit -m "G&Co. OCEAN behavioral assessment"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/ocean-assessment-app.git
git push -u origin main
```

(Create the empty repo on github.com/new first if it doesn't exist yet.)

If you're doing this through the GitHub website instead of the command line:
create the repo, then **Add file → Upload files**, and drag in everything
inside this folder (`src/`, `public/`, `package.json`, `index.html`, etc. —
not the outer folder itself).

## Step 3 — Deploy on Vercel

1. https://vercel.com → sign in with GitHub → **Add New → Project** → select
   your repo.
2. Leave all settings as default (Vercel auto-detects this is a Vite project).
3. Click **Deploy**. You'll get a live URL in about a minute, e.g.
   `https://ocean-assessment-app.vercel.app`.
4. Every future GitHub commit auto-redeploys within a minute or so.

## Step 4 — Test it end-to-end

- Visit your Vercel URL → **Begin Assessment** → answer all 30 scenarios →
  submit. You should land on a "Thank you" screen showing your OCEAN score
  only (no narrative — that's intentional, see below).
- Back on the menu → **"G&Co. team member? View results"** → passcode
  `homer&gus` → you should see your test submission in the dashboard.
- Try **Download PDF** on your own submission — it should generate and
  download an actual `.pdf` file.
- Try checking a row's checkbox and clicking **Delete Selected** — the row
  should disappear permanently (refresh to confirm it's really gone from
  Firestore, not just hidden in the UI).

---

## What candidates see vs. what the team sees

- **Candidates**, after submitting, see only their five OCEAN trait scores —
  no interpretive text.
- **G&Co. team members** (passcode-gated) see, per candidate: a synthesized
  narrative analysis (strongest trait, how it pairs with the second, and the
  weakest trait to probe), the full per-trait breakdown with explanatory text,
  and four targeted interview questions aimed at that candidate's specific
  weakest trait — the last one flagged as the "toughest follow-up."

## Changing the passcode

Search for `"homer&gus"` in `src/App.jsx` (one occurrence) and replace it.
Nothing on the page displays the passcode — if you forget it, you'll need to
look at the code to find or change it.

## Editing question content

Everything — the 30 scenarios, OCEAN trait descriptions, and interview
question bank — lives in `src/data.js`. Edit that file directly, or ask
Claude to regenerate it, to change wording or add content.

## Security note

Firestore's "test mode" (Step 1.4) allows anyone with your Firebase config
(visible in the deployed JavaScript) to read/write the database directly,
bypassing the app's passcode. That's a reasonable tradeoff for an internal
tool at this scale, but before this holds real, sensitive candidate data long
term, add
[Firestore Security Rules](https://firebase.google.com/docs/firestore/security/get-started)
to lock down the `ocean_submissions` collection, and/or replace the plain-text
passcode with real Firebase Authentication.

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
