# Anusree & Sanju — Wedding Invitation

Digital wedding invitation for **Anusree PK & Sanju Sajeev** — Wedding, 31 January 2027, Bride's Residence, Palayad, Thalassery, Kerala.
Built with **React + Vite**.

## Features

- Landing screen with invocation and "Open Invitation"
- Live countdown to the muhurtham
- Single arch-framed couple portrait — image shipped with the site (no Firebase Storage needed)
- Wedding details with Google Maps link (plus a short note below the card)
- Vedic verse and family details
- **Wishes wall** — guests can send blessings (Firebase Realtime Database only, free Spark plan)
- No RSVP / no WhatsApp sections

## Project structure

```
├── index.html                 # Vite entry HTML
├── vite.config.js             # base path set to /AnsureeWedsSanju/ for GitHub Pages
├── package.json
└── src/
    ├── main.jsx               # React entry point
    ├── App.jsx                # Page layout + toast state
    ├── config.js              # ALL editable content: names, dates, venues, Firebase
    ├── lib/
    │   └── firebase.js        # Firebase app + Realtime Database init
    ├── hooks/
    │   ├── useCountdown.js    # Live countdown timer
    │   ├── useReveal.js       # Scroll-reveal animations
    │   └── useWishes.js       # Load/submit wishes (Firebase + localStorage)
    ├── styles/
    │   └── global.css         # Theme variables + shared styles
    └── components/            # One component + CSS file per section
        ├── Landing.jsx / .css
        ├── Invite.jsx / .css
        ├── Countdown.jsx / .css
        ├── Portrait.jsx / .css
        ├── Events.jsx / .css
        ├── Verse.jsx / .css
        ├── Families.jsx / .css
        ├── Wishes.jsx / .css
        ├── Footer.jsx / .css
        ├── MonogramBadge.jsx / .css
        └── Toast.jsx / .css
```

## Run locally

```bash
cp .env.example .env
# Fill .env with your Firebase web config (never commit .env)

npm install
npm run dev
```

## Build

```bash
npm run build     # outputs to dist/
npm run preview   # preview the production build
```

## Deploy to GitHub Pages (manual)

1. Create a GitHub repo named `AnsureeWedsSanju` and push this project to `main`.
   (If you use a different repo name, update `base` in `vite.config.js`.)
2. Deploy the built site to the `gh-pages` branch:

```bash
npm run deploy
```

3. In the repo: Settings → Pages → Source: `gh-pages` branch, `/ (root)`.

Live URL: `https://<username>.github.io/AnsureeWedsSanju/`

## Customization

- All names, dates, venues, and map links: `src/config.js`
- Personalized guest greeting: share the link with `?to=Guest%20Name`

## Couple photo (free — no Firebase Storage)

```
public/photos/couple.jpg   ← arch portrait and favicon
public/photos/share-v3.jpg    ← link preview (WhatsApp / Open Graph), landscape 1200x630, < 300 KB
```

Then rebuild / redeploy. The path lives in `src/config.js` (`COUPLE_PHOTO`).

After Pages is live, for reliable WhatsApp previews update `og:image` / `twitter:image` in `index.html` to the full URL, e.g. `https://<username>.github.io/AnsureeWedsSanju/photos/share-v3.jpg`.
