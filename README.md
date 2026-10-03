# Rural Rise — Empowering Rural Youth Through AI-Driven Skills & Employment

> An AI-powered centralized ERP + LMS + Employment ecosystem built to transform rural skilling and career placement.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-brightgreen)](https://nodejs.org)
[![PWA Ready](https://img.shields.io/badge/PWA-Offline%20Ready-blue)](./sw.js)
[![Languages](https://img.shields.io/badge/Languages-EN%20%7C%20%E0%A4%B9%E0%A4%BF%E0%A4%82%20%7C%20%E0%A4%AE%E0%A4%B0%E0%A4%BE%E0%A4%A0%E0%A5%80-orange)](#multilingual-support)

---

## 🌟 Overview

**Rural Rise** is an end-to-end vocational skilling, certification, and career placement platform tailored specifically for rural communities. Designed based on Google Stitch UI specifications with high-contrast accessibility, multilingual support, and offline-first PWA resilience, the platform unifies trainees, trainers, administrators, and employers.

### Complete Trainee Journey
$$\text{Registration} \longrightarrow \text{Training} \longrightarrow \text{Adaptive LMS} \longrightarrow \text{Assessment} \longrightarrow \text{Certification} \longrightarrow \text{Verified Profile} \longrightarrow \text{Employment}$$

---

## 🚀 Key AI Features

### 1. 🎯 Adaptive Learning with Explainability (`/trainee/path`)
- **Dynamic Difficulty & Pacing:** Analyzes quiz performance, device constraints (Smart vs Feature phone), and network speeds (Fast 4G/5G vs Slow 2G).
- **Explainable "Why this for you?":** Transparent rule-based reasoning engine (`/lib/ai/adaptive.js`) explaining every recommendation.
- **Live Simulator Panel:** Interactive controls allowing users and evaluators to simulate different quiz scores, network qualities, and learning styles in real time.

### 2. 🔍 Evidence-Based Career Matching (`/trainee/career` & `/employer`)
- **Deterministic 4-Factor Matching Engine:**
  - **Skills Match:** 40%
  - **Verified Certificate:** 30% (with direct links to `/verify` using secure ID `RR-2026-004821`)
  - **Assessment Score:** 20%
  - **Classroom Attendance:** 10%
- **Transparent Evidence Breakdown:** Expandable cards on both Trainee Career Chatbot and Employer Recruitment Deck.

### 3. 📈 Adaptive Career & Mentoring (`/trainee/path`)
- **Skill Gap Diagnostics:** Bar chart comparing current competency vs target industry benchmark with weakest skills highlighted.
- **Tailored Roadmap:** 3 to 5 milestone steps dynamically generated to bridge identified gaps.
- **Integrated Mentorship Booking:** Direct session requests with expert trainers (e.g., Er. Sunita Devi) including date, topic, and confirmation toasts.

### 4. 📶 Offline-First & Multilingual AI (`/trainee/courses` & PWA)
- **Automatic Low Data Mode:** Detects slow/offline connections via `navigator.connection` and toggles video lessons to lightweight audio + synchronized text.
- **Bandwidth Savings Counter:** Live indicator showing estimated megabytes saved (e.g., `Saved ~42 MB`).
- **Complete Tri-lingual Localization:** Full support for **English**, **Hindi (हिन्दी)**, and **Marathi (मराठी)**.
- **Offline Resilience:** Service Worker (`sw.js`) caches course pages, mock data, and rule engines for disconnected classroom learning.

### 5. 🏛️ AI Implementation Readiness Deck (`/admin/readiness`)
- **Deployment Readiness Score Gauge:** Circular progress visualization dynamically computed from a weighted infrastructure checklist (`/lib/ai/readiness.js`).
- **Readiness Checklist:** Real-time green/saffron/red audits across Connectivity Coverage, Device Availability, Regional Language Support, Trainer Competency, and Data Quality.
- **Impact Metrics & District Heatmap:** Tracks Learning Gains (+34.2%), Skill Gap Closed (68.4%), and Placement Rates (82%) with district-wise comparisons.
- **Interactive "Act" Guidance:** Actionable interventions that update the readiness score in real time when resolved.

---

## 🎨 Design System

Adheres strictly to the Google Stitch design guidelines:
- **Primary Color:** Deep Forest Green (`#14532D`)
- **Accent Color:** Saffron (`#F59E0B`)
- **Surface / Background:** Off-White (`#FAFAF7`)
- **Typography:** Inter (Google Fonts)
- **UI Architecture:** Rounded cards (`rounded-xl` / `rounded-2xl`), consistent icon + label pairings, responsive desktop sidebars, and mobile bottom tab navigation.

---

## 📁 Repository Structure

```
Rural Rise/
├── admin/
│   ├── index.html            # Admin Operations Dashboard (ERP, Hostel, Logistics)
│   ├── timetable/index.html  # Timetable & Batch Scheduling
│   └── readiness/index.html  # AI Deployment Readiness Dashboard (Feature 5)
├── assets/
│   └── shared.js             # Design system components, i18n dictionaries, toasts
├── design/                   # Original Google Stitch UI screen exports & specs
├── employer/
│   └── index.html            # Employer Portal with Transparent Candidate Match Cards (Feature 2)
├── lib/
│   └── ai/                   # Modular rule-based AI engines (LLM-ready)
│       ├── adaptive.js       # Adaptive learning & simulation logic (Feature 1)
│       ├── adaptive.ts       # TypeScript type declarations
│       ├── matching.js       # 4-factor deterministic job match logic (Feature 2)
│       ├── matching.ts       # TypeScript type declarations
│       ├── readiness.js      # Weighted implementation readiness calculator (Feature 5)
│       └── readiness.ts      # TypeScript type declarations
├── register/
│   └── index.html            # Multi-step Trainee Aadhaar & Registration Portal
├── trainee/
│   ├── index.html            # Trainee Student Dashboard & Overview
│   ├── attendance/index.html # Biometric Face & Classroom QR Attendance
│   ├── career/index.html     # AI Career Tutor & Job Match Chatbot (Feature 2)
│   ├── courses/index.html    # Multilingual LMS with Low Data Mode (Feature 4)
│   └── path/index.html       # Adaptive Learning Path, Skill Gap & Mentoring (Features 1 & 3)
├── trainer/
│   └── session/index.html    # Live Classroom Session & Trainee Roster
├── verify/
│   └── index.html            # Public QR & Credential Verification Portal
├── index.html                # Public Landing Page & Solution Overview
├── package.json              # Project metadata & npm scripts
├── server.js                 # Lightweight zero-dependency local HTTP server
└── sw.js                     # Offline Service Worker cache
```

---

## 🛠️ Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org) (v16 or higher)
- Any modern web browser

### Running the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/khalidansari2707-spec/Rural-Rise.git
   cd Rural-Rise
   ```
2. Start the local server:
   ```bash
   npm start
   # or
   node server.js
   ```
3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## 🌐 Routes Overview

| Route | Page Name | Primary User Persona |
| :--- | :--- | :--- |
| `/` | Landing Page | Public / Prospective Students |
| `/register` | Trainee Registration | New Candidates |
| `/verify` | Digital Certificate Verification | Public / Employers |
| `/trainee` | Trainee Dashboard | Enrolled Trainees |
| `/trainee/courses` | Interactive LMS (Lite & Video Mode) | Trainees |
| `/trainee/path` | My Learning Path & Skill Gap AI | Trainees |
| `/trainee/attendance` | Biometric Face & QR Attendance | Trainees & Faculty |
| `/trainee/career` | AI Career Guidance Chatbot | Trainees |
| `/trainer/session` | Live Trainer Class Console | Faculty & Trainers |
| `/admin` | Central ERP & Facility Management | Administrators |
| `/admin/timetable` | Timetable & Session Planner | Program Coordinators |
| `/admin/readiness` | AI Implementation Readiness Deck | Policy & Admin Leads |
| `/employer` | Employer Recruitment & Match Deck | Recruiter / Hiring Partner |

---

## 📄 License
This project is open-source under the [MIT License](LICENSE).
