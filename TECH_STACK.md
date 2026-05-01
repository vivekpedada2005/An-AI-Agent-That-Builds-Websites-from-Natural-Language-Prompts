# Tech Stack Policy — Prompt to Website

## ✅ APPROVED Technologies

| Layer | Technology | Version |
|---|---|---|
| Language | TypeScript | ~6.x (strict) |
| UI Framework | React | ^19 |
| Build Tool | Vite | ^8 |
| State Management | Zustand | ^5 |
| Styling | Vanilla CSS + Tailwind v4 | ^4 |
| Icons | Lucide React | ^1 |
| Testing | Vitest + Testing Library | ^4 |
| CI/CD | GitHub Actions | — |
| Hosting | Vercel | — |
| Runtime | Node.js | 20 LTS |

---

## 🚫 STRICTLY PROHIBITED Frameworks

The following frameworks are **banned** from this project. Any PR introducing them will be rejected.

| Framework | Why Prohibited |
|---|---|
| **Streamlit** | Python-only, server-rendered, not a web stack |
| **Gradio** | Python ML demo UI, not production web |
| **Flask / Django / FastAPI** | Backend Python frameworks, not frontend |
| **Dash / Plotly** | Python data viz, not UI framework |
| **Panel / Bokeh** | Python dashboard libs, not web-native |
| **NiceGUI / Reflex / Anvil** | Python-to-web wrappers, non-standard |
| **jQuery** | Legacy, superseded by React |
| **Angular / Vue** | Not part of this project's stack |

---

## Why?

This is a **pure React + TypeScript + Vite** web application.

- All code must be TypeScript or TSX
- No Python files (`*.py`) in `src/`
- No `requirements.txt`, `Pipfile`, `setup.py`, or `pyproject.toml`
- No server-side rendering (this is a pure SPA)
- `npm` is the only package manager (no `pip`, `conda`, `poetry`)

---

## Enforcement

The CI pipeline (`ci-cd.yml`) checks:
1. **TypeScript strict typecheck** — `npm run type-check`
2. **ESLint** — `npm run lint`
3. **Unit tests** — `npm run test`
4. **Production build** — `npm run build`

Any failure in these gates **blocks deployment**.
