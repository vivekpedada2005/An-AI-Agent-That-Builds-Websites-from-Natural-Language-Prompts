# Prompt to Website

> Describe a website in one sentence. Get a fully unique, multi-page site with real content — instantly.

[![CI/CD](https://github.com/YOUR_USERNAME/prompt-to-website/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/YOUR_USERNAME/prompt-to-website/actions)
[![Tests](https://img.shields.io/badge/tests-24%20passing-brightgreen)]()
[![Built with Vite](https://img.shields.io/badge/built%20with-Vite-646cff)]()
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178c6)]()

---

## What is this?

**Prompt to Website** is a deterministic AI website generator. Type a prompt like `"build a hospital website"` and receive a complete, multi-page website with:

- ✅ Correct industry detection (20+ industries)
- ✅ Real copywriting — no lorem ipsum
- ✅ Unique layout per industry
- ✅ Every button and nav link functional
- ✅ Export as ZIP or publish live

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build | Vite 8 |
| State | Zustand (persisted) |
| Styling | Vanilla CSS + Tailwind v4 |
| Testing | Vitest + Testing Library |
| CI/CD | GitHub Actions |
| Hosting | Vercel |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# → http://localhost:5173
```

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server (hot reload) |
| `npm run build` | Type-check + production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | ESLint check |
| `npm run type-check` | TypeScript strict typecheck |
| `npm run test` | Run all unit tests (single pass) |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Run tests + generate HTML coverage report |

---

## CI/CD Pipeline

Every push to `main` triggers a 4-stage pipeline:

```
Push to main
     │
     ▼
┌─────────────┐     ┌─────────────────┐
│  🔍 Lint &  │     │  🧪 Unit Tests  │
│  Typecheck  │     │  + Coverage     │
└──────┬──────┘     └────────┬────────┘
       │                     │
       └──────────┬──────────┘
                  ▼
          ┌───────────────┐
          │  🏗️ Build     │
          │  (npm run     │
          │   build)      │
          └───────┬───────┘
                  │ (only on push to main)
                  ▼
          ┌───────────────┐
          │  🚀 Deploy    │
          │  to Vercel    │
          │  (Production) │
          └───────────────┘
```

Pull Requests only run **Lint + Test + Build** (no deploy).

---

## Deploying to Vercel

### Option A — One-click (recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/prompt-to-website)

### Option B — GitHub Actions (automated)

Add these secrets to your GitHub repository (`Settings → Secrets → Actions`):

| Secret | Where to find it |
|---|---|
| `VERCEL_TOKEN` | [vercel.com/account/tokens](https://vercel.com/account/tokens) |
| `VERCEL_ORG_ID` | `.vercel/project.json` after `vercel link` |
| `VERCEL_PROJECT_ID` | `.vercel/project.json` after `vercel link` |

**To get org/project IDs:**
```bash
npm i -g vercel
vercel link   # follow prompts, then read .vercel/project.json
```

---

## Project Structure

```
promptforge-ai/
├── .github/
│   └── workflows/
│       └── ci-cd.yml          # GitHub Actions pipeline
├── src/
│   ├── engine/
│   │   ├── promptAnalyzer.ts  # Industry detection (20+ industries)
│   │   ├── blueprintGenerator.ts # Page + section generator
│   │   ├── copyEngine.ts      # Industry-specific copywriting
│   │   └── types.ts           # Shared types
│   ├── renderer/
│   │   ├── SiteRenderer.tsx   # Routes sections to components
│   │   ├── Navbars.tsx        # 7 navbar variants
│   │   ├── Heroes.tsx         # 9 hero section variants
│   │   ├── Sections.tsx       # General sections
│   │   ├── Cards.tsx          # Card components
│   │   └── MoreSections.tsx   # Industry-specific sections
│   ├── components/
│   │   ├── landing/Hero.tsx   # Landing page hero
│   │   └── dashboard/Dashboard.tsx # Generator dashboard
│   ├── store/
│   │   └── useForgeStore.ts   # Zustand global store
│   ├── test/
│   │   ├── setup.ts           # Vitest setup
│   │   └── engine/
│   │       ├── promptAnalyzer.test.ts    # 18 unit tests
│   │       └── blueprintGenerator.test.ts # 6 unit tests
│   └── utils/
│       ├── export.ts          # ZIP export
│       └── publish.ts         # Publish simulation
├── vercel.json                # Vercel deployment config
└── vite.config.ts             # Vite + Vitest config
```

---

## Supported Industries

| Industry | Nav Links | Unique Pages |
|---|---|---|
| 🏥 Hospital | Doctors, Departments, Appointments, Contact | 5 |
| 📚 Bookstore | Books, Categories, New Arrivals, About, Contact | 6 |
| 🎨 Portfolio | Work, About, Skills, Contact | 5 |
| 🍽 Restaurant | Menu, Reservations, About, Contact | 5 |
| 👗 Fashion | Collections, New In, Sale, About | 5 |
| 🛍 Ecommerce | Products, Collections, Sale, Contact | 5 |
| 💪 Fitness | Classes, Trainers, Membership, Contact | 5 |
| ⚖️ Law | Practice Areas, Attorneys, About, Contact | 5 |
| 🎓 Education | Courses, Instructors, Pricing, Contact | 5 |
| 💅 Salon | Services, Stylists, Gallery, Book | 5 |
| 🎉 Event | Events, Services, Gallery, Contact | 5 |
| 🏠 Real Estate | Listings, Agents, About, Contact | 5 |
| ✈️ Travel | Destinations, Tours, About, Contact | 5 |
| 💰 Fintech | Features, Pricing, About, Contact | 5 |
| 🚀 SaaS | Features, Pricing, About, Contact | 5 |
| 🌱 NGO | Programs, Work, About, Donate | 5 |
| 📝 Blog | Articles, Categories, About, Contact | 5 |
| 🏢 Corporate | Services, Industries, About, Contact | 5 |
| 🌟 Startup | Features, Pricing, About, Contact | 5 |
| 🤝 Agency | Work, Services, About, Contact | 5 |

---

## License

MIT © 2025 Prompt to Website
