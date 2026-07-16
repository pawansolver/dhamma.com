# Buddha Hospital & Research Institute (BHRI), Bodhgaya
## Comprehensive Technical & Functional Project Documentation
*Prepared for: Executive Management and Technical Stakeholders*
*Date: May 18, 2026*

---

### 📋 Executive Project Summary
The **Buddha Hospital & Research Institute (BHRI)** web portal is a modern, high-performance, single-page-grade React web application designed to serve as the digital gateway to one of Bihar's premium medical education and clinical care institutions located in Bodhgaya.

Conforming strictly to **National Medical Commission (NMC)** regulatory mandates and university guidelines, the platform delivers a dual-purpose experience:
1.  **Clinical Trust:** Elevating the hospital's diagnostic, OPD, IPD, and 24/7 Emergency response capabilities for patients and emergency services.
2.  **Academic Excellence:** Outlining detailed professional curriculum metrics, live interactive timetables, research publications registries, and individual specialized medical departments for students and faculty.

The portal has been engineered to feel exceptionally premium, featuring dynamic micro-animations, glassmorphic headers, tight vertical spacing, and fully responsive layouts that function seamlessly across all screen sizes.

---

### ⚡ Core Technology Stack
The application is built on modern web engineering standards to guarantee stability, security, rapid page speeds, and flawless SEO indexing:

| Technology Component | Framework / Library Used | Description & Purpose |
| :--- | :--- | :--- |
| **Core Architecture** | **Next.js (App Router)** | Provides high-performance Server-Side Rendering (SSR) mixed with Client-Side Hydration, secure folder-based page routing, and instant client prefetching. |
| **Component Library** | **React 18** | Handles component state management, modular reusability, and declarative UI rendering. |
| **UI Styling** | **Tailwind CSS & Vanilla CSS** | Drives a rigid grid layout system, consistent utility spacing, customized color systems, and modern visual aesthetics. |
| **Animations** | **Framer Motion** | Powers fluid micro-animations, staggered card entrances, tab transition fades, and slide-in alert bars. |
| **Vector Iconography** | **Lucide React** | Delivers crisp, scalable, light-weight icons for indicators, metrics, and categories. |
| **Type Safety** | **TypeScript (strict)** | Ensures compile-time code validation, prevents run-time interface exceptions, and locks down reliable props passing. |
| **Asset Optimization** | **Next.js Image (`next/image`)** | Automates picture caching, layout shifting protection, auto-WebP conversion, and optimized responsive resizing. |

---

### 🎨 Design System & Visual Aesthetics
The visual identity of BHRI has been polished to present a sophisticated, clean, and state-of-the-art healthcare presence:

*   **Color Palette (Harmonized & Intentional):**
    *   `Slate Dark (#090d16 to #0f172a)`: Deep base tones representing stability, clinical authority, and a premium luxury finish.
    *   `Classic Deep Blue (#1a3a6b)`: The core brand marker symbolizing safety, professionalism, and institutional trust.
    *   `Vibrant Saffron (#ff9933)`: Warm cultural accent representing Bodhgaya's heritage, used for highlighting active paths and important buttons.
    *   `Emergency Crimson Red (#dc2626)`: Specifically calibrated high-contrast tone for emergency dials and critical warning alerts.
*   **Typography System:**
    *   **Serif Headings (`Playfair Display`):** Applied exclusively to major hero section headings and page titles, presenting an elegant, scholarly academic posture.
    *   **Sans-Serif Body (`Montserrat` / `Inter`):** Applied across all body copy, statistics grids, clinical times, and tables for ultimate readability.
*   **Micro-Animations & Visual Polish:**
    *   Subtle hover-based lifts, card scale expansions, and drop-shadow glow effects.
    *   Glassmorphic overlays (`backdrop-blur-md`) with thin border highlights to prevent visual clutter and keep sections cleanly defined.
    *   Tightly optimized margins and paddings, eliminating excessive white space to achieve a modern, compact, unified grid.

---

### 📂 Site Map & Complete Route Architecture
Every page route is modularly placed within Next.js App Router folders under `src/app`. Below is the exhaustive route catalog:

#### A. Root & Functional Pages
*   **Home / Landing Portal (`/`)**
    *   *Path:* `src/app/page.tsx`
    *   *Role:* High-compact hero layout with integrated medical carousel, real-time news alerts, central clinical highlights, and a prominent emergency banner.
*   **Admissions page (`/admissions`)**
    *   *Path:* `src/app/admissions/page.tsx`
    *   *Role:* Details candidate seat registration steps, NEET qualifying checkposts, fee structures, and direct enrollment enquiry forms.
*   **Career & Vacancies (`/career`)**
    *   *Path:* `src/app/career/page.tsx`
    *   *Role:* Live display of faculty requirements, residency vacancies, and job applications intake form.
*   **Contact Us (`/contact`)**
    *   *Path:* `src/app/contact/page.tsx`
    *   *Role:* Provides physical Gaya campus navigation maps, direct emergency phone dials, office department emails, and interactive contact forms.
*   **Central Library (`/library`)**
    *   *Path:* `src/app/library/page.tsx`
    *   *Role:* Lists total medical textbook counts (MEDLINE, WHO indexed), journals logbooks, computer lab node terminals, and library hours.
*   **Faculty & Doctors Directory (`/doctors`)**
    *   *Path:* `src/app/doctors/page.tsx`
    *   *Role:* Searchable grid of hospital HODs, senior residents, clinical consultants, and duty medical officers.

---

#### B. About Us Wing
*   **Overview & Identity (`/about/overview`)**
    *   *Path:* `src/app/about/overview/page.tsx`
    *   *Role:* Institutional history, vision guidelines, and foundational milestones.
*   **Chairman Message (`/about/chairman`)**
    *   *Path:* `src/app/about/chairman/page.tsx`
    *   *Role:* Leadership address, healthcare expansion goals, and research support undertakings.
*   **Dynamic Identity Pages (`/about/[slug]`)**
    *   *Path:* `src/app/about/[slug]/page.tsx`
    *   *Role:* Programmatic generator for subsidiary compliance reports and auxiliary legal registries.

---

#### C. Academics Hub
The academics core maps student curriculum guidelines directly to active UI containers:

*   **Academics Hub (`/academics`)**
    *   *Path:* `src/app/academics/page.tsx`
    *   *Role:* Central landing hub routing users to time tables, results, or CBME modules.
*   **MBBS Programmes (`/academics/programmes`)**
    *   *Path:* `src/app/academics/programmes/page.tsx`
    *   *Role:* Interactive breakdown of 4.5 Years MBBS Phases (Anatomy, Biochemistry, Pathology, and clinical specialties).
*   **NMC CBME Curriculum (`/academics/nmc-cbme-curriculum`)**
    *   *Path:* `src/app/academics/nmc-cbme-curriculum/page.tsx`
    *   *Role:* Mandatory regulatory logbooks tracker, AETCOM ethical module lists, and bedside certification logs.
*   **Academic Time Table (`/academics/time-table`)**
    *   *Path:* `src/app/academics/time-table/page.tsx`
    *   *Role:* Interactive calendar allowing students to toggle between Phase I, II, III and display day-specific (Mon-Sat) lectures.
*   **Medical Research & Publications (`/academics/research`)**
    *   *Path:* `src/app/academics/research/page.tsx`
    *   *Role:* Searchable database of PubMed/Scopus indexed journal publications, lead investigators, and abstract summaries.
*   **Student Details & Mentorship (`/academics/student-details`)**
    *   *Path:* `src/app/academics/student-details/page.tsx`
    *   *Role:* Male/female scholar ratios per batch, active anti-ragging cell contacts, and student wellness support groups.
*   **Holiday Almanac (`/academics/holidays`)**
    *   *Path:* `src/app/academics/holidays/page.tsx`
    *   *Role:* Filterable dashboard showing gazetted, restricted, and academic vacation periods.
*   **Academic Results (`/academics/results`)**
    *   *Path:* `src/app/academics/results/page.tsx`
    *   *Role:* Wall of Merit showcasing annual university exam gold medalists, board toppers, and pass percentages.

---

#### D. Hospital Care Wing
Engineered to deliver rapid information for patient services and diagnostic facilities:

*   **The Hospital Overview (`/hospital/the-hospital`)**
    *   *Path:* `src/app/hospital/the-hospital/page.tsx`
    *   *Role:* Broad view of advanced diagnostic systems, central laboratory setups, and clinical ward capabilities.
*   **Outpatient Department (`/hospital/opd`)**
    *   *Path:* `src/app/hospital/opd/page.tsx`
    *   *Role:* Daily OPD consultation timings per specialty, register-window hours, and patient check-in guidelines.
*   **Inpatient IPD Wards (`/hospital/in-wards`)**
    *   *Path:* `src/app/hospital/in-wards/page.tsx`
    *   *Role:* Details critical intensive care beds, private wards comfort parameters, nursing shifts, and visitor policy.
*   **Diagnostics & Lab Services (`/hospital/diagnostics`)**
    *   *Path:* `src/app/hospital/diagnostics/page.tsx`
    *   *Role:* Lists biochemistry assays, pathology biopsy schedules, radiology scans (CT, X-Ray), and digital report delivery channels.
*   **24/7 Emergency Response (`/hospital/emergency`)**
    *   *Path:* `src/app/hospital/emergency/page.tsx`
    *   *Role:* High-visibility trauma response layout with instant emergency phone connections, critical triage descriptions, and ambulance requests dispatching.

---

#### E. Specialized Academic Departments (19 NMC-Compliant Pages)
Each department functions as an individual sub-portal detailing core faculties, lab equipment catalogs, teaching timetables, and specialized research profiles:

1.  **Human Anatomy (`/departments/anatomy`)**
    *   *Role:* Features dissection hall storage, histology lab microscopes, and bone library details.
2.  **Physiology (`/departments/physiology`)**
    *   *Role:* Hematology testing benchmarks, clinical physiology labs, and human simulation models.
3.  **Biochemistry (`/departments/biochemistry`)**
    *   *Role:* High-precision blood diagnostics machinery, dry chemistry units, and analytical labs.
4.  **Pharmacology (`/departments/pharmacology`)**
    *   *Role:* Clinical trial setups, drug-action simulation software, and toxicology archives.
5.  **Pathology (`/departments/pathology`)**
    *   *Role:* Biopsy analysis center, fine needle aspirations, hematology analyzers, and autopsy clinics.
6.  **Microbiology (`/departments/microbiology`)**
    *   *Role:* Bacterial culture log systems, viral PCR test suites, and diagnostic serology labs.
7.  **Forensic Medicine & Toxicology (`/departments/forensic-medicine`)**
    *   *Role:* Autopsy watch corridors, poisoning antidotes catalog, and legal-medical consult systems.
8.  **Community Medicine / PSM (`/departments/community-medicine`)**
    *   *Role:* Primary Health Center postings, immunization statistics logs, and family study health programs.
9.  **General Medicine (`/departments/general-medicine`)**
    *   *Role:* Inpatient ward allocations, specialty cardiology/endocrinology OPDs, and clinical diagnostics.
10. **General Surgery (`/departments/general-surgery`)**
    *   *Role:* Advanced laparoscopic surgery theaters, postoperative critical recovery bays, and clinical post guidelines.
11. **Paediatrics (`/departments/paediatrics`)**
    *   *Role:* Neonatal Intensive Care (NICU), pediatric vaccines center, and child welfare clinics.
12. **Obstetrics & Gynecology (`/departments/obstetrics-gynecology`)**
    *   *Role:* Ultra-modern delivery suites, maternal-fetal care units, and pre-natal consultation schedules.
13. **Orthopaedics (`/departments/orthopaedics`)**
    *   *Role:* Fracture stabilization rooms, joint replacements clinic, and sports medicine rehabilitations.
14. **Ophthalmology (`/departments/ophthalmology`)**
    *   *Role:* Refraction rooms, sutureless cataract procedures (MICS), and specialized optical clinics.
15. **Oto-Rhino-Laryngology / ENT (`/departments/ent`)**
    *   *Role:* Audiometry assessment rooms, endoscopy procedures center, and specialized ENT clinics.
16. **Psychiatry (`/departments/psychiatry`)**
    *   *Role:* Patient psychological counseling, de-addiction consultation setups, and diagnostic therapy rooms.
17. **Dermatology & Venereology (`/departments/dermatology`)**
    *   *Role:* Phototherapy cabinets, clinical skin biopsy centers, and aesthetic laser therapy services.
18. **Radiodiagnosis (`/departments/radiology`)**
    *   *Role:* Multi-slice CT scan, digital X-Ray grids, high-res ultrasound, and MRI report portals.
19. **Dentistry (`/departments/dentistry`)**
    *   *Role:* Modern dental chair assemblies, panoramic X-Rays, and dental surgery services.

---

#### F. Campus Infrastructure Wing
Highlights the campus's state-of-the-art administrative and wellness setups:

*   **Academic Complex (`/infrastructure/academic-complex`)**
    *   *Path:* `src/app/infrastructure/academic-complex/page.tsx`
    *   *Role:* Modern multi-seat lecture halls, smart interactive boards, and anatomical dissection facilities.
*   **Residential Block & Hostels (`/infrastructure/residential-block`)**
    *   *Path:* `src/app/infrastructure/residential-block/page.tsx`
    *   *Role:* High-security male and female student hostels, visitor rooms, and common lounges.
*   **Cafeteria & Student Mess (`/infrastructure/cafeteria-mess`)**
    *   *Path:* `src/app/infrastructure/cafeteria-mess/page.tsx`
    *   *Role:* Clean, organic kitchen setups, multi-cuisine menu options, and modern seating plans.
*   **Sports Arena & Gymnasium (`/infrastructure/sports-gymnasium`)**
    *   *Path:* `src/app/infrastructure/sports-gymnasium/page.tsx`
    *   *Role:* Multi-station indoor gym, outdoor sports courts, and recreational games setups.

---

#### G. Media & Gallery
*   **Events Calendar (`/gallery/events`)**
    *   *Role:* Visual archive of annual sports events, health camps, and cultural events.
*   **Photo Gallery (`/gallery/photos`)**
    *   *Role:* Dynamic grid of campus layout photos, laboratory setups, and classroom activities.
*   **Video Gallery (`/gallery/videos`)**
    *   *Role:* Video archive showcasing campus walk-throughs, medical seminars, and student testimonies.

---

### 🔄 Interactive User Experience (UX) Flow
The application has been architected with a **patient-first, student-centric** navigation flow to ensure frictionless information discovery. Navigation options route seamlessly between:
*   **Emergency Cases:** High-visibility clinical warning systems linking directly to mobile phone-dials and directions.
*   **Academics Support:** Instant lookup systems for student time-tables, continuous CBME skill-books, and active PubMed research publications.
*   **Hospital Consultations:** Live schedulers displaying consultation hours, diagnostics logbooks, and ward occupancy specifications.
*   **Medical Specializations:** 19 individual portals explaining teaching equipment, HOD contact info, and medical research projects.

---

### 🏆 Recent Core Enhancements & Premium Assets Integration
To ensure the website looks extremely modern, cohesive, and professional, we have completed a major site-wide update:

1.  **Aesthetic Upgrade (Sleek inner Page Heros):** Removed generic blue/green backgrounds. Every main interior page now features a **premium, unique contextually accurate generated graphic** that reflects the page topic.
2.  **Navigation System Refinements:** Adjusted the top navigation bar to render under the correct brand logo: **Buddha Hospital and Research Institute (BHRI)**.
3.  **Strict Performance Validation:** Verified all pages against Next.js App Router rules and confirmed all active component hooks are backed by the appropriate `"use client"` directives.

---

### 🛠️ Technical Maintenance & Build Quality Guidelines
To preserve the premium aesthetics and flawless compilation of the codebase, technical teams must adhere to the following rules:

#### A. Code Standards & Compilation Check
Before pushing any updates to production, you **MUST** run the strict TypeScript type checker:
```powershell
# Run strict compilation check
npx tsc --noEmit
```
*An output with zero errors ensures that Next.js will build the highly optimized production bundle smoothly.*

#### B. Adding a New Academic Department
1.  Create a folder representing the department under `src/app/departments/`.
2.  Add a `page.tsx` utilizing standard import headers (`Image`, `motion` from `framer-motion`, `lucide-react` icons).
3.  Define the HOD details, lab infrastructure grids, and teaching syllabus arrays.
4.  Add a link to the new department inside the `src/components/layout/Navbar.tsx` children array so it appears in the navigation dropdown automatically.

#### C. Updating Timetable or Holidays
*   **Academic Time Table:** Open `src/app/academics/time-table/page.tsx`. Modify the structured `schedules` JSON object under the respective Phase (`phase1`, `phase2`, `phase3`) and Day (`Mon` - `Sat`).
*   **Holidays almanac:** Open `src/app/academics/holidays/page.tsx` and append the new holiday objects to `holidaysList` array in exact `{ date: "Month Day", day: "Weekday", occasion: "Name", type: "Gazetted/Restricted/Academic Vacation" }` format.


