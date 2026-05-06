# Ashirwadh Dental Clinic

Professional dental clinic website for Dr. Sowmya H.M (BDS) in Bengaluru, with service information, online appointment booking via NammaDr, and clinic contact details.

**Live site:** https://ashirwadh-dental-clinic.netlify.app

---

## What the App Does

- Showcases dental services: cosmetic dentistry, general dentistry, root canal treatment, dental implants, pediatric dentistry, and oral surgery
- Integrates with the [NammaDr](https://nammadr.vercel.app) platform for online appointment booking
- Displays clinic timings, location via embedded Google Maps, and contact options (phone, email, WhatsApp)
- Provides a FAQ section, animated patient stats, and testimonials
- Supports light/dark theme with localStorage persistence

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend framework | React 18 |
| Build tool | Vite 7 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| UI components | Radix UI |
| Routing | Wouter |
| Forms | React Hook Form + Zod |
| Data fetching | TanStack React Query |
| Animations | Framer Motion |
| Backend | Express.js (static file server) |
| Package manager | pnpm |
| Deployment | Netlify |

---

## Folder Structure

```
dental_web/
├── client/
│   ├── index.html               # Vite HTML entry point
│   ├── public/
│   │   └── doctor.png           # Doctor profile image asset
│   └── src/
│       ├── components/
│       │   ├── ErrorBoundary.tsx
│       │   └── ui/              # Radix UI-based component library (50+ components)
│       ├── contexts/
│       │   └── ThemeContext.tsx
│       ├── pages/
│       │   ├── Home.tsx         # Main landing page
│       │   └── NotFound.tsx     # 404 page
│       ├── lib/
│       │   └── utils.ts         # cn() utility (clsx + tailwind-merge)
│       ├── App.tsx              # Root component with routing
│       ├── const.ts             # App-level constants (APP_TITLE)
│       ├── main.tsx             # React DOM entry point
│       └── index.css            # Global styles
├── server/
│   └── index.ts                 # Express server — serves static SPA files
├── patches/
│   └── wouter@3.7.1.patch       # Patch for wouter router
├── components.json              # shadcn/ui component config
├── netlify.toml                 # Netlify build config and SPA redirect rules
├── NETLIFY_DEPLOY.md            # Netlify-specific deployment notes
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
└── package.json
```

---

## Running Locally

### Prerequisites

- Node.js 18+
- pnpm (`npm install -g pnpm`)

### Install dependencies

```bash
pnpm install
```

### Start the development server

```bash
pnpm dev
```

The app runs on [http://localhost:3000](http://localhost:3000) with hot reload.

### Build for production

```bash
# Frontend only (used by Netlify)
pnpm build:netlify

# Full build (frontend + Express server bundle)
pnpm build
```

### Type checking

```bash
pnpm check
```

---

## Deployment

The app is deployed on **Netlify** as a static site (frontend only).

- **Build command:** `pnpm build:netlify` (runs `vite build`)
- **Publish directory:** `dist/public`
- **SPA routing:** `netlify.toml` redirects all routes (`/*`) to `index.html` with HTTP 200, enabling client-side routing via Wouter
- **Node version:** 18

The Express server (`server/index.ts`) is included for local or self-hosted environments. On Netlify, only the static Vite output is used.

---

## Screenshots

> Add screenshots here.

| Home page | Services section | Contact section |
|---|---|---|
| _placeholder_ | _placeholder_ | _placeholder_ |

---

## Clinic Details

- **Doctor:** Dr. Sowmya H.M — Dental Surgeon, BDS
- **Location:** Sollapuradamma Layout, Sreenivas Nagar, Sunkadakatte, Bengaluru 560091
- **Hours:** Mon–Sat 10 AM–2 PM, 5:30 PM–9 PM | Sunday by appointment
- **Phone / WhatsApp:** +91 99863 81155
- **Email:** drsowmyahm@gmail.com
