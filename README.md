# Gautam Kumar — Personal Portfolio

Responsive React + Vite portfolio for Data Analytics, Data Quality, Data Engineering, and AI projects.

## Run locally
Requires Node.js 20.19+ or 22.12+ (Vite 7 requirement).

```bash
npm install
npm run dev
```

Production build:
```bash
npm run build
npm run preview
```

## Add your professional photo
The hero currently has a stylized GK photo placeholder. To use your photo, put it at `public/profile.jpg`, then replace the `portrait-placeholder` div in `src/main.jsx` with:
```jsx
<img className="profile-photo" src="/profile.jpg" alt="Gautam Kumar" />
```
Add this CSS:
```css
.profile-photo { width:69%; height:78%; object-fit:cover; border-radius:150px 150px 24px 24px; position:relative; z-index:1; }
```

## Resume
`public/resume.pdf` is included as a starter resume built from previously provided career details. Review dates, claims, and project status before using it in applications. Replace it with your latest verified resume PDF, keeping the filename `resume.pdf` so download links keep working. No phone or email was invented.

## Deploy on Vercel (free plan)
1. Push this folder to a new GitHub repository.
2. Import the repository at https://vercel.com/new.
3. Framework preset: **Vite**; build command: `npm run build`; output directory: `dist`.
4. No environment variables are required for this static portfolio.
5. Deploy; Vercel will provide a `*.vercel.app` URL.

Before publishing, review the resume, add your professional photo, and confirm project claims accurately reflect current functionality.


## Updated resume
Replace `public/resume.pdf` with your latest verified resume PDF before publishing. Keep the filename `resume.pdf` so both download links continue working. The updated local PDF shown in your screenshot is not included automatically; copy it into this folder and overwrite the starter PDF.
