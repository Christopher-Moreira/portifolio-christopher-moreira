# Christopher Moreira | Portfolio

Personal portfolio and resume landing page for Christopher Moreira, built with Next.js, React, TypeScript, Tailwind CSS, and Vercel Analytics.

The site presents a bilingual professional profile with sections for summary, technical skills, experience, education, languages, and certificates.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Vercel Analytics

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

```bash
npm run dev
```

Starts the local Next.js development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Starts the production server after a successful build.

```bash
npm run lint
```

Runs ESLint.

## Project Structure

```text
app/
  components/      Reusable page components
  globals.css      Global styles and theme tokens
  layout.tsx       Root layout, metadata, fonts, and analytics
  page.tsx         Main portfolio page content and translations
public/            Static images and icons
```

## Content

Most portfolio content is currently defined in `app/page.tsx`, including the Portuguese and English translations, experience entries, skills, education, and contact links.

Static visual assets live in `public/`.

## Deployment

This project can be deployed on Vercel or any platform that supports Next.js.

For a production deployment, run:

```bash
npm run build
```
