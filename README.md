# Tevin Davis — Developer Portfolio

This repository contains my personal developer portfolio, built with Angular 17.
The site showcases my projects, skills, experience, and design approach with a clean, responsive UI and modern front-end practices.

🔗 Live Site:
<https://tevi22.github.io/Tevins-Portfolio/>

## Features

**Angular 17 (Standalone Components)**
-Built using Angular’s modern standalone architecture for clean, modular code.

**Responsive Design**
-Fully responsive layout optimized for desktop, tablet, and mobile devices.

**Light / Dark Theme Toggle**
-User-selectable theme with persistence via localStorage.

**Project Showcase**
-Project cards with screenshots, descriptions, technology tags, and GitHub links.

**Mobile-Optimized Experience Timeline**
-Desktop timeline layout with a simplified, card-based experience for mobile.

**Contact Section**
-Clear call-to-action with email and LinkedIn links.

**Modern UI Styling**
-Custom CSS with CSS variables, gradients, shadows, and smooth transitions.

**GitHub Pages Deployment**
-Production-ready build deployed using the docs/ directory.

## Tech Stack

**Framework:**
-Angular 17
**Language:**
-TypeScript
**Styling:**
-CSS (custom, no UI framework dependency)
**State / Utilities:**
-Angular Services
**Deployment:**
-GitHub Pages

## Getting Started (Local Development)

1. Clone the repository

```bash
git clone <https://github.com/Tevi22/Tevins-Porfolio.git>
cd Tevins-Porfolio
```

1. Install dependencies

```bash
npm install
```

1. Run the development server

ng serve

1. Open your browser and navigate to:

<http://localhost:4200/>

*The app will automatically reload when you make changes.*

## Build & Deployment (GitHub Pages)

This project is deployed using GitHub Pages via the docs/ folder.

## Build for production

```bash
ng build --configuration production --output-path docs --base-href /Tevins-Porfolio/
```

## Deployment steps

1. Commit and push the docs/ folder to the main branch

In GitHub:

2. Go to Settings → Pages

3. Set source to main / docs

Visit:

<https://tevi22.github.io/Tevins-Porfolio/>

## Project Structure

Tevins-Porfolio/
├── docs/                    # Production build (GitHub Pages)
├── src/
│   ├── app/
│   │   ├── components/       # Standalone UI components
│   │   ├── services/         # Angular services (theme, etc.)
│   │   ├── app.component.ts
│   │   ├── app.routes.ts
│   │   └── app.config.ts
│   ├── assets/               # Images, icons, static files
│   └── styles.css            # Global styles
├── angular.json
├── package.json
├── README.md
└── tsconfig.json

## Testing & Tooling

**Unit Tests: Karma + Jasmine**
ng test

## Scaffolding

```bash
ng generate component component-name
ng generate service service-name
```

## License

This project is licensed under the MIT License.

🙌 Contributions

While this is a personal portfolio, feedback and suggestions are welcome.
Feel free to open an issue or start a discussion.
