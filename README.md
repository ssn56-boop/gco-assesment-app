# G&Co. Candidate Behavioral Assessment

A standalone web app covering all 8 G&Co. role assessments (IR Associate, Investment
Professional, CFO, COO, Chief of Staff, Family Office Specialist, Origination
Professional, Risk + Quantitative Analyst). Candidates take the assessment via a public
link; the G&Co. team views a ranked comparison leaderboard behind a passcode.

This uses **Firebase Firestore** (Google's free-tier database) to store submissions, and
is meant to be deployed on **Vercel** (free), connected directly to your GitHub repo.

---

## Step 1 — Set up Firebase (free, ~5 minutes)

1. Go to https://console.firebase.google.com and sign in with any Google account.
2. Click **Add project** → name it e.g. `gco-assessments` → you can disable Google
   Analytics for this project (not needed) → **Create project**.
3. Once created, click the **</> (Web)** icon on the project overview page to register
   a web app. Give it any nickname (e.g. "assessment-app"). You do **not** need Firebase
   Hosting for this — skip that checkbox.
4. Firebase will show you a `firebaseConfig` object that looks like this:
   ```js
   const firebaseConfig = {
     apiKey: "AIza...",
     authDomain: "gco-assessments.firebaseapp.com",
     projectId: "gco-assessments",
     storageBucket: "gco-assessments.appspot.com",
     messagingSenderId: "123456789",
     appId: "1:123456789:web:abc123"
   };
   ```
   Copy these values into `src/firebase.js` in this project, replacing the
   `PASTE_YOUR_...` placeholders.
5. In the left sidebar, go to **Build → Firestore Database → Create database**.
   - Choose a location close to you (any US region is fine).
   - Start in **test mode** for now (this allows read/write without login — fine for an
     internal intern-project tool, but see the security note at the bottom).
6. That's it — Firebase is ready. No billing setup needed for this volume of usage
   (free tier covers far more reads/writes than a hiring assessment will generate).

## Step 2 — Push this project to your GitHub

From your computer (or from this sandbox if you're downloading the files):

```bash
cd gco-assessment-app
git init
git add .
git commit -m "Initial commit: G&Co. candidate assessment app"
git branch -M main
git remote add origin https://github.com/ssn56-boop/gco-assessment-app.git
git push -u origin main
```

(If that repo doesn't exist yet, create it first at github.com/new — call it
`gco-assessment-app`, leave it empty/no README, then run the commands above.)

## Step 3 — Deploy on Vercel (free)

1. Go to https://vercel.com and sign in with your GitHub account.
2. Click **Add New → Project**, and select your `gco-assessment-app` repo.
3. Vercel auto-detects this is a Vite project — leave all settings as default.
4. Click **Deploy**. In about a minute you'll get a live URL like
   `https://gco-assessment-app.vercel.app`.
5. That URL is what you send to candidates. Every time you push a change to GitHub,
   Vercel automatically redeploys.

## Step 4 — Try it

- Visit your Vercel URL → pick a role → take the assessment → submit.
- Go back to the menu → "G&Co. team member? View results" → passcode `goldsmith2026`
  (search for this string in `src/App.jsx` and change it before sending the link out
  widely) → pick the same role → you should see your test submission on the leaderboard.

---

## Local development (optional)

If you want to preview or edit before deploying:

```bash
npm install
npm run dev
```

This runs the app at `http://localhost:5173`.

---

## Important notes

- **Security**: Firestore's "test mode" (step 1.5 above) allows anyone with your
  Firebase config to read/write the database, not just this app. That config is visible
  to anyone who views your site's source (this is normal for client-side Firebase apps).
  For an internal intern project this is a reasonable tradeoff, but before this holds
  real, sensitive candidate data long-term, you should add
  [Firestore Security Rules](https://firebase.google.com/docs/firestore/security/get-started)
  restricting writes to the `submissions` collection shape you expect, and/or add
  Firebase Authentication in front of the admin view instead of the plain-text passcode
  currently in the code.
- **Admin passcode**: currently hardcoded as `"goldsmith2026"` in `src/App.jsx`. This is
  a light deterrent, not real access control — anyone who reads the deployed JavaScript
  can find it. Treat it as "keep casual visitors out," not as security.
- **Editing role content**: all assessment items, weights, benchmarks, and narrative
  text live in `src/data.js`. Edit that file (or ask Claude to regenerate it) to change
  wording, add a Sales Associate assessment, or adjust scoring.
