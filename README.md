# Aveta Biomics website — Vercel handoff

This package contains the complete Aveta Biomics website source, page content,
images, downloadable PDFs and fonts. It has been prepared as a standard Next.js
App Router project for review and deployment on Vercel.

The original review site was built with React, TypeScript and CSS using Next.js
App Router conventions, then compiled with Vinext for OpenAI Sites. This handoff
keeps the approved website content and design while replacing the OpenAI
Sites/Cloudflare-specific build tooling with the standard Next.js scripts that
Vercel expects.

## Technology

- Next.js 16 (App Router)
- React 19
- TypeScript
- Plain CSS
- Inter for body and navigation text
- Barlow Condensed for display headings
- Static images and PDFs under `public/`

There is no database, CMS or external runtime service required by the current
website.

## Local setup

Requirements:

- Node.js 22.13 or newer
- npm

Commands:

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

Production validation:

```bash
npm run build
npm run start
```

## Deploying to Vercel

1. Place the contents of this folder in a Git repository.
2. Import that repository into Vercel.
3. Vercel should detect **Next.js** automatically.
4. Keep the project root as the repository root.
5. Use the default install command (`npm install` or `npm ci`), build command
   (`npm run build`) and output settings.
6. Select Node.js 22.x if Vercel asks for a runtime version.
7. Deploy, then review every route and downloadable link listed below.

No `vercel.json` file is required for this project.

## Optional review password

The source includes the temporary password-review screen used during website
review. The password is not stored in this package.

- For a public website, do not define `SITE_PASSWORD`.
- To enable the review screen, add `SITE_PASSWORD` in Vercel under
  **Project Settings → Environment Variables**, apply it to the desired
  environments and redeploy.
- `.env.example` documents the variable name for local development.

This is a lightweight review gate, not a replacement for enterprise access
control. If the site must remain private long term, the IT team should use
Vercel's access controls or another production authentication solution.

## Routes to verify

- `/` — Home
- `/about` — About and team biographies
- `/mission` — Our Mission, Our Heroes
- `/science` — Our Science
- `/pipeline` — Pipeline and ClinicalTrials.gov links
- `/publications` — Publications and conference materials
- `/newsroom` — Newsroom
- `/expanded-access` — Expanded Access
- `/join-us` — Join Us

The Contact links currently use `betterhealth@avetabiomics.com`.

## Content and assets

- Application source: `app/`
- Shared styling: `app/globals.css`
- Images and logos: `public/assets/`
- Downloadable scientific materials: `public/docs/`
- Local font packages: `@fontsource/inter` and
  `@fontsource/barlow-condensed`

All current images and downloadable files are included. External journal,
ClinicalTrials.gov, Spotify and email links remain external hyperlinks.

## Important handoff notes

- The package intentionally excludes dependency folders, compiled output,
  source-control history, OpenAI Sites configuration and deployment
  credentials.
- Run `npm ci` after extracting the ZIP. Do not upload `node_modules` to Vercel.
- If the IT team changes the public URL, verify metadata, analytics, SEO,
  privacy/cookie requirements and any desired redirects before launch.
- The current website does not include a CMS. Content changes are made in the
  TypeScript files under `app/`.
