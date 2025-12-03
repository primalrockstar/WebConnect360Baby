

# EmeritaClinical Marketing Website

A modern, responsive marketing website for EmeritaClinical - Empowering EMS Education with innovative digital solutions.

## Tech Stack

- **Framework:** Next.js 16.0.3 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Icons:** Lucide React

## Features

- ✅ Mobile-first responsive design
- ✅ Clean, modern UI with shadcn/ui components
- ✅ Six main pages: Home, Suite, Pricing, EMT-B App, For Programs, Contact
- ✅ Sticky navigation with mobile menu
- ✅ Professional footer with navigation links
- ✅ TypeScript for type safety
- ✅ ESLint for code quality

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Project Structure

```
EmeritaClinicalWeb/
├── app/                    # Next.js app directory
│   ├── contact/           # Contact page
│   ├── emt-b-app/         # EMT-B App page
│   ├── for-programs/      # For Programs page
│   ├── pricing/           # Pricing page
│   ├── suite/             # Suite page
│   ├── globals.css        # Global styles with shadcn/ui variables
│   ├── layout.tsx         # Root layout with Navbar and Footer
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components (Button, Card)
│   ├── footer.tsx        # Footer component
│   └── navbar.tsx        # Navigation component with mobile menu
├── lib/                   # Utility functions
│   └── utils.ts          # cn() utility for className merging
├── public/               # Static assets
│   └── logo.svg          # Placeholder logo
└── package.json
```

## Pages

- **Home** (`/`) - Landing page with hero, features, and CTA sections
- **Suite** (`/suite`) - Complete EMS education tools overview
- **Pricing** (`/pricing`) - Pricing plans with FAQ section
- **EMT-B App** (`/emt-b-app`) - Mobile app features and benefits
- **For Programs** (`/for-programs`) - Solutions for training programs and institutions
- **Contact** (`/contact`) - Contact form and information

## Development

```bash
# Lint code
npm run lint

# Build for production
npm run build

# Start production server
npm start
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

All rights reserved © 2025 EmeritaClinical

=======
# EmeritaClinical Suite

Your comprehensive Emergency Medical Services training platform.

## Features

- **Suite Page**: Browse all available training modules and tools
- **EMT-B**: Emergency Medical Technician - Basic certification training (Available)
- **AEMT**: Advanced Emergency Medical Technician program (Coming Soon)
- **Paramedic**: Paramedic certification and advanced life support (Coming Soon)
- **VoiceNotes**: Record and manage voice notes for patient care documentation
- **PCR Lab**: Patient Care Report laboratory for practice and learning
- **Flashcards**: Interactive flashcards for studying EMS concepts

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Build for Production

```bash
npm run build
npm start
```

## Configuration

App modules can be easily configured by editing `/config/apps.ts`. This file contains all the module definitions including titles, descriptions, status, and links.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

