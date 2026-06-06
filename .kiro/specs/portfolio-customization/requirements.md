# Requirements Document

## Introduction

This feature customizes an existing React + TypeScript + Vite 3D portfolio (originally built for Redoyanul Haque) for Qusai Shergardwala, an AI Engineer & Full-Stack Developer and final-year B.Tech student at VIT Pune. The customization covers personal content replacement, a full dark-to-light theme overhaul with a warm/earthy/citrusy palette and new Google Fonts, component text updates, new UI treatments (wavy underlines, bold skill pills), a new Publications section, and placeholder project images.

## Glossary

- **Portfolio**: The React + TypeScript + Vite single-page application
- **Config**: `src/config.ts` — single source of truth for all personal content
- **Theme**: Global visual style defined in `src/index.css` and component CSS files
- **Accent Color**: Primary brand color referenced via `--accentColor` CSS variable
- **Secondary Accent**: Second brand color via `--secondaryAccent` CSS variable
- **Tertiary Accent**: Third brand color via `--tertiaryAccent` CSS variable
- **Background Color**: Page background via `--backgroundColor` CSS variable
- **GSAP**: GreenSock Animation Platform — scroll animations must not be altered
- **Character**: 3D model in `src/components/Character/` — must not be altered
- **Publications**: New section listing Qusai's research publications

---

## Requirements

### Requirement 1: Replace All Personal Content in config.ts

**User Story:** As Qusai Shergardwala, I want all portfolio content to reflect my identity and career history, so that visitors see accurate information about me.

#### Acceptance Criteria

1. THE Portfolio SHALL display `name: "Qusai"`, `fullName: "Qusai Shergardwala"`, `title: "AI Engineer & Full-Stack Developer"` in the developer block of `src/config.ts`.
2. THE Portfolio SHALL display social fields `github: "qusaii21"`, `email: "qusher9953@gmail.com"`, `location: "Pune, India"` in `src/config.ts`.
3. THE Portfolio SHALL display an about description identifying Qusai as a final-year B.Tech AI & Data Science student at VIT Pune with CGPA 8.74, interning at Rapid7.
4. THE Portfolio SHALL list exactly 4 work experiences in order: Rapid7 (Software Engineer Intern), DesignerNest (Junior Software Developer), IEEE Student Branch VIT Pune (Project Head), Visionary Services (Summer Intern).
5. THE Portfolio SHALL list exactly 8 projects: Multi-Agent Vulnerability Scanner, MediClear, IEEE SB VIT Pune App, Multi-Agent SQL Optimizer, Ganga Prabodhanam App, Smart Chaukidar, Sofiya Properties, Cold Email Generator.
6. THE Portfolio SHALL set contact links with `github: "https://github.com/qusaii21"`, `linkedin`, `twitter`, and empty strings for `facebook` and `instagram`.
7. THE Portfolio SHALL define two skill categories: AI Engineer (with relevant AI/ML tools) and Full Stack (with relevant web development tools).

---

### Requirement 2: Dark-to-Light Theme Overhaul

**User Story:** As Qusai, I want the portfolio to use a warm, light, earthy/citrusy color palette instead of the dark purple theme, so that the site has a distinctive and personal aesthetic.

#### Acceptance Criteria

1. THE Portfolio SHALL set `--backgroundColor` to a warm off-white value (e.g., `#F5F0E8`) in `src/index.css`.
2. THE Portfolio SHALL set `--accentColor` to a warm punchy color — burnt orange/terra cotta (e.g., `#E85D26`) — with NO purple and NO startup blue.
3. THE Portfolio SHALL set `--secondaryAccent` to a golden amber color (e.g., `#C8A84B`).
4. THE Portfolio SHALL set `--tertiaryAccent` to a forest green color (e.g., `#2A7A4B`).
5. THE Portfolio SHALL set `color-scheme: light` (removing `dark`) in `:root`.
6. THE Portfolio SHALL use a warm near-black (e.g., `#1A1208`) for default text color, replacing `#eae5ec`.
7. WHEN `--backgroundColor` is set to off-white, THE Portfolio SHALL correctly fade the 3D character model to off-white via the existing `var(--backgroundColor)` gradient rules (no changes needed to those gradient rules).
8. THE Portfolio SHALL replace all hardcoded dark background colors (`#0b080c`, `#000`, `#000000`) with the new `--backgroundColor` or appropriate light equivalents throughout all CSS files.
9. THE Portfolio SHALL replace all purple/violet accent occurrences (`#c2a4ff`, `#a87cff`, `#aa42ff`, `#7f40ff`, `#fb8dff`, `#f59bf8`, `#d29bff`, `#d097ff`, `#f2c0ff`, `#c481ff`) with the new accent or complementary colors.

---

### Requirement 3: Font Replacement

**User Story:** As Qusai, I want the portfolio to use distinctive Google Fonts instead of Geist, so that the typography feels personal and warm.

#### Acceptance Criteria

1. THE Portfolio SHALL import two Google Fonts in `src/index.css`: a display/heading font with personality (e.g., "Playfair Display") and a warm readable body font (e.g., "Inter").
2. THE Portfolio SHALL apply the display font to all heading elements (`h1`–`h6`) and the body font as the default font-family in `:root`.
3. THE Portfolio SHALL remove the Geist font import and all `font-family: "Geist"` references across all CSS files, replacing them with the new fonts.

---

### Requirement 4: Landing Component Text Updates

**User Story:** As Qusai, I want the landing section greeting and alt text to match my identity, so that the page introduces me correctly.

#### Acceptance Criteria

1. THE Landing SHALL display `"Hey, I'm"` as the greeting text instead of `"Hello! I'm"`.
2. THE Landing SHALL use `alt="Qusai Shergardwala"` on the mobile photo `<img>` element.
3. THE Landing SHALL display `"Full-Stack Dev"` in the subtitle `h2` instead of `"Full-Stack Developer"`.
4. THE Landing SHALL include a comment noting that `/public/images/mypicnbg.png` should be replaced with Qusai's photo.

---

### Requirement 5: Contact Component Updates

**User Story:** As Qusai, I want the contact section to skip empty social links and display a personal footer credit, so that the section is accurate and branded.

#### Acceptance Criteria

1. WHEN `config.contact.facebook` is an empty string, THE Contact SHALL NOT render the Facebook anchor tag.
2. WHEN `config.contact.instagram` is an empty string, THE Contact SHALL NOT render the Instagram anchor tag.
3. THE Contact SHALL display the footer credit: `"Built with chaos & caffeine by Qusai Shergardwala"` (with name wrapped in an accent-colored span or similar markup).

---

### Requirement 6: Career Heading Update

**User Story:** As Qusai, I want the career section heading to feel personal and fresh, so that it matches my tone.

#### Acceptance Criteria

1. THE Career section SHALL display the heading `"My journey & experience"` (replacing `"My career & experience"`).

---

### Requirement 7: Skill Tag Pill Styling

**User Story:** As Qusai, I want skill tags to be visually bold and colorful, so that they draw attention and complement the new palette.

#### Acceptance Criteria

1. THE `.what-tags` elements SHALL have a solid background color with no border, using one of the accent colors.
2. THE `.what-tags` elements SHALL display bold text with high-contrast color against the solid background.
3. THE `.what-tags` elements SHALL have rounded pill shape (large `border-radius`).
4. WHEN there are multiple `.what-tags` siblings, THE Portfolio SHALL alternate colors using CSS `:nth-child` selectors with the accent colors.

---

### Requirement 8: About Section Wavy Underline

**User Story:** As Qusai, I want the About section heading to have a wavy underline in an accent color, so that it has visual personality.

#### Acceptance Criteria

1. THE `.about-me h3` element SHALL have a wavy underline applied via `text-decoration: underline wavy` using an accent color.

---

### Requirement 9: TechStack Section Light Theme Fix

**User Story:** As Qusai, I want the TechStack section to match the new light palette, so that it doesn't appear as an inconsistent dark island.

#### Acceptance Criteria

1. THE TechStack section SHALL override the dark background (`rgba(0,0,0,...)` overlay and hardcoded `#0b080c` gradient values) to match the light palette.
2. THE `.techstack-content h2` gradient (`#ffffff` to `#c2a4ff`) SHALL be replaced with a plain readable dark color or a new accent-based gradient appropriate for light backgrounds.
3. THE TechStack item borders, text, and hover states SHALL be updated to work on the light background.

---

### Requirement 10: Loading Screen Color Update

**User Story:** As Qusai, I want the loading screen colors to match the new palette, so that the first impression is consistent.

#### Acceptance Criteria

1. THE Loading screen SHALL update its background color from `#eae5ec` to the new `--backgroundColor` off-white.
2. THE Loading screen SHALL replace the `#a87cff` hover element color with the new `--accentColor`.
3. THE Loading screen `.loading-button` and `.loading-wrap` dark backgrounds (`#000`) SHALL be updated to the new dark text color or remain dark as appropriate for contrast.
4. THE Loading screen `.loaderGame-ball` color SHALL be updated from `#a87cff` to the new `--accentColor`.

---

### Requirement 11: Publications Section (New Component)

**User Story:** As Qusai, I want a Publications section listing my research papers, so that visitors can see my academic contributions.

#### Acceptance Criteria

1. THE Portfolio SHALL include a new `src/components/Publications.tsx` component with exactly 4 hardcoded publications:
   - "Fake News Detector..." — Publisher: Springer (Scopus), Year: 2024, has link
   - "Synthetic Data Generation..." — Publisher: IEEE Xplore, Year: 2024, no link
   - "Intelligent Robot..." — Publisher: IJIRT, Year: 2024, has link
   - "Smart Entry Access Control System..." — Publisher: Dastavej Research Journal, Year: 2024, has link
2. WHEN a publication has a non-empty link, THE Publications component SHALL render an anchor tag linking to it.
3. WHEN a publication has an empty link, THE Publications component SHALL NOT render an anchor tag.
4. THE Publications component SHALL have a matching `src/components/styles/Publications.css` file with bold tag pills using accent colors.
5. THE Publications component SHALL be added to `src/components/MainContainer.tsx` between the Career and Work sections.

---

### Requirement 12: Project Image Placeholders

**User Story:** As Qusai, I want placeholder image files for each project, so that the portfolio renders without broken image errors.

#### Acceptance Criteria

1. THE Portfolio SHALL have placeholder image files in `/public/images/` for each of the 8 projects: `vuln-scanner.png`, `mediclear.png`, `ieee-app.png`, `sql-optimizer.png`, `ganga-app.png`, `chaukidar.png`, `sofiya.png`, `cold-email.png`.
2. THE placeholder images SHALL be valid image files (the existing `placeholder.webp` can be copied or a simple PNG can be created).
