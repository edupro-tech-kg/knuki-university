# Knuki University Website

A modern React-based website for Knuki University built with Vite, featuring multilingual support and responsive design.

## Project Overview

This is the official website for Knuki University (knuki.kg), built with:

- React 19 with Vite for fast development
- TailwindCSS for styling
- React Router for navigation
- i18next for internationalization (Kyrgyz, Russian, English)
- FullCalendar for events management
- Framer Motion for animations

## Development Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Environment Variables

Create `.env` files based on `.env.example`:

- `.env` - Development environment
- `.env.production` - Production environment

Required variables:

- `VITE_SITE_URL=https://www.knuki.kg`

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
```

## Project Structure

- `src/pages/` - Main page components
- `src/components/` - Reusable UI components
- `src/sections/` - Page sections
- `src/locales/` - Translation files (en, ky, ru)
- `src/assets/` - Static assets (images, PDFs)
- `src/data/` - Static data (faculties, news, etc.)

## Deployment

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

The build output is in the `dist/` directory and can be deployed to any static hosting service.

### Vercel Deployment

The project is configured for Vercel deployment via `vercel.json`.

## Code Quality

Before committing changes:

1. Run linting: `npm run lint`
2. Format code: `npm run format`
3. Test build: `npm run build`

## Known Issues

There are some linting warnings that need to be addressed:

- Unused variables in locale files
- React hooks optimization opportunities
- Some escape characters in data files

These do not affect functionality but should be cleaned up for better code quality.

## Contact

For questions about this project, contact the development team.
