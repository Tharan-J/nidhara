# Nidhara

> **Making informal businesses visible to formal finance.**

**Your Business. Our Support.**

Nidhara is an AI-powered financial inclusion platform designed to help underserved micro and small businesses become accessible to formal credit. Millions of small businesses generate real economic activity but lack the conventional financial documentation required by lending institutions — their transactions scattered across bank statements, UPI payments, handwritten ledgers, invoices and cash records.

Nidhara bridges this gap by transforming fragmented business activity into structured, evidence-backed financial profiles that lenders can independently examine.

> _We don't just help businesses find loans. We help them build the financial evidence needed to access them._

---

## 🚨 The Problem

A small business can be operationally viable and still remain **financially invisible**.

Consider a tailor, dairy owner or small fabricator:

- They receive regular payments through UPI and cash.
- They maintain handwritten records of orders and expenses.
- Their customers and suppliers have recurring business relationships.
- They may not have ITR filings, audited statements or formal bookkeeping.
- They often depend on intermediaries to understand and access available credit schemes.

Traditional lending processes rely heavily on formal financial documentation. When that documentation is missing, a business's actual economic activity can be difficult to assess — creating a gap between **business viability** and **financial visibility**.

---

## 🌟 What Makes Nidhara Different

### Evidence-Supported Income Assessment

Rather than relying entirely on self-declared turnover, Nidhara establishes a conservative, evidence-supported income floor through three core mechanisms:

| Mechanism | How it works |
|---|---|
| **Independence-Aware Corroboration** | Identifies related-party transactions, circular money movements and relationships that could artificially inflate reported business activity. |
| **Cost-Side Cash Reconstruction** | Uses business inputs (materials, electricity, rent, labour) to establish plausible operating capacity and revenue ranges for cash-heavy businesses with limited digital sales records. |
| **Replayable Financial Proof** | Traces every financial conclusion back to source records, calculation rules and assumptions — enabling lenders to independently reproduce and examine the analysis. |

### Core Principle

> **Every financial claim should have an identifiable source, a defensible basis and a clear indication of what remains unverified.**

---

## ⚙️ How It Works

The product experience follows five stages:

| Stage | What happens |
|---|---|
| **01. Business Onboarding** | Entrepreneurs describe their business through a local-language, voice-first interface. |
| **02. Evidence Collection** | Consented financial records, bills, invoices and business documents are collected. |
| **03. Financial Reconstruction** | Transactions, counterparties, business activity and payments are analysed and connected. |
| **04. Credit Readiness** | Evidence strength, supported income and missing information are assessed. |
| **05. Scheme Discovery & Application Prep** | Relevant schemes are evaluated and a lender-readable dossier is prepared for owner review. |

> The entrepreneur remains in control — explicit approval is required before any external sharing or application submission.

---

## 🏗️ Technology Vision

Nidhara is designed around a **modular, agentic AI architecture** combining language intelligence with deterministic financial computation.

### Agentic AI Layer

Four specialised agents coordinate the workflow:

- **Intake Agent** — Collects business information, understands the entrepreneur's requirements and identifies missing details.
- **Evidence Agent** — Coordinates reconstruction of fragmented financial records and resolves ambiguous information.
- **Verification Agent** — Independently challenges evidence, identifies inconsistencies and raises potential integrity concerns.
- **Case Agent** — Coordinates credit-readiness activities, scheme recommendations, follow-ups and dossier preparation.

Agents coordinate through controlled workflows. Financial calculations, evidence classification and eligibility decisions remain governed by **deterministic services** rather than unrestricted LLM decisions.

### Financial Intelligence Layer

Planned capabilities include:

- Transaction classification
- Counterparty resolution
- Multi-payment allocation and reconciliation
- Business-versus-household transaction separation
- Evidence provenance and T1–T4 classification
- Income reconstruction and integrity analytics
- Explainable scheme eligibility assessment

### Proposed Technology Stack

| Component | Candidate Technologies |
|---|---|
| Mobile Application | Kotlin, Jetpack Compose |
| Landing Page | Next.js, Tailwind CSS, TypeScript |
| Backend | Python, FastAPI |
| Agent Orchestration | LangGraph |
| Voice Interface | Vapi, Sarvam AI |
| Speech Processing | Sarvam STT / TTS |
| Document Intelligence | OCR, Vision-Language Models |
| Financial Reconciliation | OR-Tools, CP-SAT |
| Entity Resolution | Probabilistic Record Linkage |
| Database | PostgreSQL, pgvector |
| Background Processing | Redis, Celery |
| File Storage | Encrypted Object Storage |

> These are proposed architecture choices and candidates, not a claim that all components have been implemented or integrated.

---

## ♿ Designed for Accessibility

Nidhara is envisioned for entrepreneurs who may have limited digital literacy, inconsistent connectivity or low-cost smartphones.

- 🗣️ **Voice-first interaction** — Local-language guidance instead of complex forms.
- 📋 **Simple workflows** — One question or action at a time.
- 💡 **Explainable recommendations** — Clear reasons behind scheme matches and missing requirements.
- 🔐 **Consent-based data access** — Financial information accessed and shared only with appropriate authorisation.
- 🙋 **Human control** — Entrepreneurs review and approve their applications.
- 📶 **Low-bandwidth experience** — Minimised data usage with practical document capture support.

---

## 🛡️ Responsible AI & Trust

Financial inclusion must not come at the cost of financial privacy or misleading decisions.

Nidhara's proposed safeguards include:

- Consent-based financial data collection
- Encrypted storage and controlled access
- Source-linked financial claims
- Evidence classification from **T1** (source-attested) to **T4** (self-declared)
- Conservative treatment of unresolved transactions
- Explainable eligibility and assessment outcomes
- Independent verification workflows
- Explicit owner approval before external sharing
- No automatic loan approval or guarantee of credit

> Nidhara is intended to support financial assessment — **not** replace the lending institution's underwriting authority.

---

## 📦 This Repository — Current Scope

**Current repository scope: Landing Page (Initial Prototype)**

This repository contains the public-facing **landing page** built to communicate the Nidhara product vision and its intended value proposition. It is submitted as the initial prototype for evaluation.

The broader mobile application, agentic AI architecture, financial evidence reconstruction engine and lender integrations represent the proposed product roadmap and should not be interpreted as completed production capabilities.

### Tech Stack (Landing Page)

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **3D / Animation:** Three.js
- **Icons:** Lucide React

### Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

```bash
# Build for production
npm run build
npm run start
```

### Project Structure

```
nidhara/
├── public/
│   └── assets/          # Images and visual assets
├── src/
│   ├── app/             # Next.js App Router (layout, page, global styles)
│   └── components/      # Landing page sections
│       ├── HeroSection.tsx
│       ├── ProblemSection.tsx
│       ├── HowItWorksSection.tsx
│       ├── DifferentiatorSection.tsx
│       ├── IntelligenceSection.tsx
│       ├── TrustSection.tsx
│       ├── ReadinessSimulator.tsx
│       └── ...
├── package.json
├── tailwind.config.js
└── next.config.js
```

---

## 🗺️ Development Roadmap

- [x] Product concept and problem definition
- [x] Initial product positioning and branding
- [x] Landing page design and development
- [x] Proposed system architecture
- [x] Mobile application UI/UX concepts
- [ ] Mobile application implementation
- [ ] Voice-based onboarding integration
- [ ] Financial document ingestion pipeline
- [ ] Business transaction evidence reconstruction
- [ ] Evidence-supported income assessment prototype
- [ ] Explainable scheme recommendation engine
- [ ] Lender dossier generation
- [ ] Pilot validation with real MSME data and institutional partners

---

## 🎯 Intended Impact

Nidhara aims to contribute to a financial ecosystem where a business's lack of conventional paperwork does not automatically make its economic activity invisible.

We want to help:

- **Small businesses** build stronger financial records.
- **Entrepreneurs** understand the credit options available to them.
- **Lending institutions** examine previously underserved businesses with better evidence.
- **Financial inclusion programmes** reach viable enterprises more effectively.

> **Our ambition is not to become another loan marketplace. It is to build the evidence layer connecting informal businesses with formal finance.**

---

## 📄 License

This project is submitted as an initial prototype. Licensing terms to be defined as the project develops.
