# EmeritaClinical Platform — Comprehensive Analysis
_Date: November 16, 2025_

This document consolidates the current architecture, capabilities, technology stack, compliance posture, and deployment readiness of the EmeritaClinical platform across web, mobile, and shared content layers. It is intended as a deep-dive reference for product leadership, engineering, and compliance teams preparing for the upcoming App Store and Google Play submissions.

---

## 1. Executive Summary
- **Platform scope:** A multi-surface EMT education environment that bundles curriculum, balanced assessments, scenario labs, PCR training, and instructor tooling across React (web) and React Native (mobile) clients fed by a shared content library.
- **Current health:** Web client is feature rich and passes builds/tests; mobile client has dependencies installed but lacks feature parity and validated release flows. Shared content is in sync and documented.
- **Recent highlights:** PCR Trainer overhaul (autosave stability, PHI guardrails, export suite, documentation, Vitest coverage), balanced quiz generator automation, refined access control and pricing experiences, enterprise/demo flows groundwork.
- **Critical focus (next 30 days):** Deliver mobile parity (PCR trainer, voice notes, balanced quizzes), resolve moderate dependency advisories, optimize bundle size, finalize compliance collateral (privacy policy, HIPAA/PHI statements), and configure store build pipelines with EAS/TestFlight.

---

## 2. Architecture Overview

| Layer | Location | Tech Stack | Key Responsibilities |
| --- | --- | --- | --- |
| Web Application | `promedix-ems-production/` (root + `web/`) | React 18, Vite 4, TypeScript 5, Tailwind, Vitest/RTL | Primary learner portal, PCR trainer, balanced quizzes, study notes, calculators, pricing/access wall, instructor dashboards. |
| Mobile Application | `app/` | React Native 0.72, React Navigation, Stripe RN SDK, Jest | Native experience for iOS/Android; parity work pending for PCR trainer & modules. |
| Shared Content & Utilities | `shared/`, `src/data`, `public/`, `assets/` | Static JSON/TS content, quiz banks, scenario data, UI tokens | Provides single source of truth for curriculum, balanced quiz metadata, and scenario content consumed by both clients. |
| Documentation & Operations | `docs/`, root markdown files | Markdown, status reports, guides | Deployment, compliance, marketing, store prep, audit and protocol notes. |
| Legacy UI Wrapper | `src/` | React 18 + legacy routing | Hosts remaining routes (e.g., `/pcr-practice`) until full migration into `web/` tree completes. |

Data currently ships entirely client-side. API placeholders exist (`/api/auth/login`, `/api/payments/create-checkout-session`) but require backend pairing (Supabase, Cloudflare Workers, etc.) for production environments.

---

## 3. Feature Inventory & Coverage

| Pillar | Modules & Features | Status |
| --- | --- | --- |
| **Learning Content** | 45-chapter study navigator, flashcards, scenario browser, study notes with completion tracking | ✅ Fully implemented (web) | 
| **Assessment** | Balanced quiz generator (675+ Q), legacy quiz bank, analytics dashboards | ✅ Generator-driven, needs expanded dashboards |
| **Simulation & Labs** | PCR trainer (autosave, scoring, PHI guardrails, exports), Skills practice, Voice Notes, Protocol browser | ✅ PCR trainer live on web; labs available; need RN parity |
| **Access & Commerce** | Protected routes, subscription tiers, AccessWall, pricing page, Stripe Checkout hooks | ✅ Web gating live; backend session endpoint still external |
| **Enterprise & Support** | Demo request lead capture (local storage), instructor onboarding docs | 🔄 Needs backend persistence + email notifications |
| **Mobile** | RN shell, navigation skeleton, asset pipeline | 🚧 Dependencies installed; features need migration |

---

## 4. Technology Stack Deep Dive

### Web (Vite/React)
- **Dependencies:** React 18.3, React Router 6.27, Tailwind 3.4, Lucide icons, Fuse.js search, Stripe JS, jsPDF, React Speech Recognition.
- **Dev Tooling:** Vite 4 build pipeline, Vitest + jsdom + React Testing Library, TypeScript strict mode, PostCSS/Tailwind.
- **Testing status:** `npm run test -- --run` passes (autosave hooks, exporters, scoring logic, voice notes). Coverage focus: add E2E/regression suites (Playwright/Cypress) for `/pcr-practice`, `/pricing`, and auth flows.
- **Performance:** Build succeeds with warnings about >500 kB bundles; consider dynamic imports for quiz banks/scenario data, vendor chunk splitting, and preloading strategy.

### Mobile (React Native / Expo-ready)
- **Dependencies:** React Native 0.72.6, React Navigation stack, Stripe RN, Secure storage, gesture handler, reanimated.
- **Scripts:** `npm run start`, `android`, `ios`, `build:android`, `build:ios`, `test` (Jest), `lint`.
- **Status:** `npm install` completed (per terminal log). Must run `npx expo-doctor`, configure EAS profiles, and port PCR trainer UI plus storage and PHI safeguards. Offline storage should leverage `expo-secure-store` or encrypted AsyncStorage wrappers.

### Shared Content
- Balanced quiz generator (`src/data/practice-quizzes-new-balanced.ts`) synthesizes question banks; wrapper `practice-quizzes-balanced.ts` keeps legacy export shape.
- Scenario data, PCR templates, and progress metadata live in `shared/` and `src/features/pcr-trainer/data/`.
- Keep content updates centralized to avoid divergence between web and mobile when parity work begins.

---

## 5. System Capabilities by Surface

| Capability | Web Status | Mobile Status | Notes |
| --- | --- | --- | --- |
| Authentication & Access Control | ProtectedRoute + AccessWall enforce subscription tiers (`free`, `monthly`, `semiannual`, `lifetime`). Demo unlock codes available. | Needs implementation; RN app currently lacks gating UI. | Backend verification still required for production (serverless auth/Stripe webhook). |
| PCR Trainer | Fully functional (`PcrTrainerApp`, hooks, autosave intervals, PHI banner, export suite). Documented in `docs/PCR_TRAINER_GUIDE.md`. | Not yet ported. Requires adapting hooks/storage and UI layout for native components. | Shared logic (scoring, serialization) can be moved to `/shared/pcr-trainer`. |
| Balanced Quiz System | Auto-generated question sets with UI integration and analytics summary. | Not implemented. | Need RN quiz components, timer/performance tracking, offline caching. |
| Voice Notes / Skills Labs | Implemented with speech recognition (web). | Pending RN microphone permission handling + waveform UI. | Evaluate Expo AV and speech-to-text options. |
| Pricing & Commerce | Web UI ready, Stripe client integrated (requires backend). | Pending design & IAP policy decision. | Consider In-App Purchase or external purchase justification for App Review. |
| Demo / Enterprise Funnel | Local storage capture for `/demo-request`. | Not available. | Must connect to backend for secure lead tracking. |

---

## 6. Security & Compliance Posture
- **Current safeguards:** Client-side ProtectedRoute gating, privacy banner for PCR trainer, PHI keyword scanner preventing exporting flagged narratives, local-only storage for drafts.
- **Known gaps (per `SECURITY_NOTES.md`):** No backend authentication, roles stored in `localStorage`, static content still downloadable, demo request data lacks secure persistence, security headers undocumented.
- **Mitigations in progress:** Access wall ensures modules aren’t visually exposed before login, Stripe integration scaffolding prevents unauthorized purchase flows, docs highlight PHI handling expectations.
- **Next security steps:**
  1. Stand up managed auth + backend session validation; tie subscription tiers to verified payments.
  2. Offload PHI storage to encrypted stores on mobile, add data retention statement for App Review.
  3. Remove committed `dist/` artifacts and enforce `.env` hygiene; add lint rule to block console logs in production.
  4. Document CSP, HSTS, and SameSite guidelines in `SECURITY_NOTES.md` post-backend integration.

---

## 7. Testing & Quality Engineering
- **Unit/Integration:** Vitest suites cover PCR scoring (`logic/scoreEngine`), exporters (`logic/exporters`), storage hooks (`usePcrStorage`, `useNarrativeEditor`), and Voice Notes. Hooks tests leverage jsdom timers/localStorage mocks.
- **Manual QA:** PCR trainer guide includes scenario-based QA checklist; status report recommends regression pass on `/pcr-practice`, `/pricing`, `/dashboards` before releases.
- **Gaps:**
  - Missing automated UI tests for flows requiring routing/auth.
  - No RN Jest suites implemented despite script scaffolding.
  - No CI pipeline configured to run builds/tests on PRs.
- **Recommendations:**
  1. Introduce Playwright smoke tests for login → dashboard, PCR trainer scenario creation, pricing CTA → Stripe session stub.
  2. Configure GitHub Actions to run `npm run test -- --run` and `npm run build` for root (`web/`) plus `app/` lint/test steps.
  3. Add RN-specific Jest tests for storage helpers and navigation guards as parity lands.

---

## 8. Deployment & Operations
- **Web:** `npm run build` validated (Nov 16). Output can deploy to Netlify, Vercel, or S3/CloudFront. Need environment variables for Stripe keys and API URLs. Consider removing tracked `dist/` artifacts.
- **Mobile:** Need EAS or native build workflows. Scripts exist for Gradle/Xcode, but provisioning, keystores, and EAS profiles must be configured. Run `npx expo-doctor`, `npm run start`, and `npm run ios/android` once parity work begins.
- **Monitoring:** No analytics/logging instrumentation captured in repo. Recommend adding Sentry (web/mobile) and privacy-compliant analytics (PostHog, RudderStack) prior to launch.
- **Release management:** Branching strategy defined in `README.md` (`main`, `develop`, `feature/*`, `release/*`). Document release checklist referencing new PCR trainer doc and store prep files.

---

## 9. Store Readiness Checklist Snapshot
Derived from `APP_STORE_PREPARATION.md`, `APP_ICON_REQUIREMENTS.md`, `MOBILE_APP_CONTENT_VERIFICATION.md`, and the status report.

| Track | Status | Required Artifacts |
| --- | --- | --- |
| Branding Assets | Spec documented; final exports pending. | App icon variants, splash, adaptive icons, marketing tiles. |
| Metadata | Draft copy exists in docs; needs PCR trainer & voice notes updates. | App description, keywords, support URL, privacy policy, compliance statements. |
| Screenshots & Video | Not yet captured for new PCR trainer UI. | 6.5", 5.5", iPad Pro, Android phone/tablet sets; optional promo video. |
| Privacy | PCR trainer guide covers autosave + PHI disclaimers; no formal privacy policy addendum yet. | App privacy questionnaire, data usage statements, HIPAA guardrail narrative. |
| Payments | Stripe client integrated; backend session service required plus App Store IAP decision. | Payment flow diagram, compliance rationale if using external checkout. |
| Testing | Web builds/test logs attached (Nov 16). Mobile builds outstanding. | TestFlight internal testers, Android internal testing track, QA checklist evidence. |

---

## 10. Gap Analysis & Prioritized Roadmap

| Priority | Gap | Impact | Recommended Action |
| --- | --- | --- | --- |
| P0 | Mobile lacks PCR trainer/quiz parity | Blocks App Store/Play release | Extract shared logic, implement RN components, ensure SecureStore autosave + PHI alerts. |
| P0 | No backend auth/payment verification | Security & monetization risk | Pair with Supabase/Firebase or edge functions for auth + Stripe webhooks; update ProtectedRoute to honor server tokens. |
| P1 | Bundle size warnings >500 kB | Potential store rejection/perf issues | Code-split heavy data modules, leverage dynamic imports, analyze vendor chunking. |
| P1 | Missing automated CI/CD | Regressions risk | Add GitHub Actions running tests/builds for `web/` and `app/`, add linting gates. |
| P1 | Security documentation outdated | Compliance review delays | Update `SECURITY_NOTES.md` post-auth, include CSP/Header plan, document PHI retention. |
| P2 | Demo lead capture lacks backend | Enterprise pipeline limited | Build `/api/demo-request` with persistence + notifications.
| P2 | Monitoring/analytics absent | Limited operational insights | Add Sentry/PostHog, define KPIs (session time, progression, conversion). |

---

## 11. Recommended Metrics & Dashboards
- **Learning Outcomes:** Session duration, chapter completion %, quiz delta improvement, PCR trainer completion rate vs. PHI warnings triggered.
- **Commercial:** Conversion rate from AccessWall, Stripe checkout starts/completions, instructor lead response time.
- **Reliability:** Build/test pass rate, bundle size trend, RN crash-free sessions, storage errors per 1k PCR attempts.
- **Compliance:** Privacy policy updates, HIPAA statement approvals, App Review feedback loops.

---

## 12. Action Plan (Next 6 Weeks)
1. **Week 1–2 (Mobile Parity Sprint)**
   - Port PCR trainer + balanced quiz UI to RN.
   - Implement secure local storage and PHI banner native component.
   - Add Jest tests for RN hooks.
2. **Week 3 (Backend & Security)**
   - Stand up auth/payment microservice; integrate Stripe webhooks.
   - Enforce server-verified sessions in both clients; update security notes & privacy policy.
3. **Week 4 (Store Asset Push)**
   - Capture screenshot/video sets, finalize metadata, update docs.
   - Configure EAS builds, run TestFlight/Internal testing.
4. **Week 5 (Automation & Monitoring)**
   - Add CI/CD workflows, integrate Sentry/PostHog, implement Playwright smokes.
5. **Week 6 (Launch Readiness)**
   - Resolve remaining npm audit items, re-run full regression, submit to App Store/Play, monitor review feedback, iterate.

---

## 13. Reference Documents
- `docs/PCR_TRAINER_GUIDE.md` — Architecture + QA for PCR trainer.
- `docs/PLATFORM_STATUS_REPORT.md` — Latest progress log (Nov 16).
- `EXECUTIVE_AUDIT_SUMMARY.md` — High-level health score (Nov 3).
- `APP_STORE_PREPARATION.md`, `APP_ICON_REQUIREMENTS.md`, `MOBILE_APP_CONTENT_VERIFICATION.md` — Store artifact requirements.
- `SECURITY_NOTES.md` — Phase 1 security assessment and roadmap.

Maintain this analysis alongside the status report to track deltas as new sprints land. Update sections after each major release so stakeholders have a single source of truth ahead of compliance reviews and store submissions.
