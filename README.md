# Gautam Kumar — Data Analyst Portfolio

A responsive React + Vite portfolio showcasing data quality, analytics, cloud workflows, and DataMind AI.

## Highlights
- Lavender/plum visual redesign with responsive layouts and project filtering
- Animated SVG analytics line chart, moving data point, and pulsing bar chart
- Resume download helper that fetches the same-origin PDF and triggers a named download
- Experience, skills, projects, DataMind AI case study, and contact sections
- Respects reduced-motion preferences for chart animations

## Run locally
Requires Node.js 18+ and npm.

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The static build is created in `dist/`. Deploy on Vercel with Framework Preset `Vite`, Build Command `npm run build`, and Output Directory `dist`.

## Resume and profile image
Keep `public/resume.pdf` and `public/profile.jpg` in place. The site links to `/resume.pdf` and `/profile.jpg`.

## Updating the deployed site
Commit and push your changes to the connected GitHub `main` branch; Vercel will redeploy automatically.
