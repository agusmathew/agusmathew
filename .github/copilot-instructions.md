# Copilot Instructions for Portfolio

## Project Overview
This is a Next.js 16 portfolio website bootstrapped with `create-next-app`. It uses the App Router pattern (file-based routing in `app/` directory) with TypeScript, Tailwind CSS v4, and ESLint for code quality.

## Architecture & Structure

### App Router Pattern (`app/` directory)
- **`app/layout.tsx`**: Root layout that wraps all pages with metadata, font configuration (Geist and Geist Mono), and global CSS imports
- **`app/page.tsx`**: Home page component - the primary entry point
- **`app/globals.css`**: Global styles and Tailwind CSS directives
- Create new pages by adding `.tsx` files directly in `app/` or subdirectories; Next.js automatically creates routes

### Configuration
- **`next.config.ts`**: Next.js configuration (currently minimal, add custom settings here if needed)
- **`tsconfig.json`**: TypeScript config with path alias `@/*` pointing to project root for cleaner imports
- **`tailwindcss.config.js`** (implicit): Tailwind v4 is configured via PostCSS, no explicit config file needed unless customization is required

## Development Workflow

### Essential Commands
```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm start        # Run production server
npm run lint     # Run ESLint checks
```

### Dev Server Behavior
- Hot Module Replacement (HMR) enabled - changes to `app/` files auto-refresh the browser
- TypeScript errors appear in terminal and browser overlay

## Code Patterns & Conventions

### React/TypeScript
- Use **functional components** with TypeScript (`export default function ComponentName() {}`)
- Leverage **Next.js built-in Image component** (`next/image`) for optimized images; always include `alt` prop and dimensions
- Example from `page.tsx`: Images use `priority` prop for above-the-fold optimization

### Styling
- **Utility-first CSS** with Tailwind v4 exclusively - do not add custom CSS for layout/spacing
- Dark mode supported via `dark:` prefix classes; check `page.tsx` for dark mode patterns (e.g., `dark:bg-black`)
- Use responsive prefixes (`sm:`, `md:`) for mobile-first design

### TypeScript
- Strict mode enabled - leverage type safety, use explicit types for component props
- `@/` path alias preferred for imports over relative paths
- `Metadata` type imported from `"next"` for page/layout metadata

## Code Quality
- **ESLint**: Enforces Next.js best practices and TypeScript strict checks via `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`
- Ignored patterns: `.next/`, `out/`, `build/`, `next-env.d.ts`
- Run `npm run lint` before committing; fix violations before deployment

## Key Dependencies
- **Next.js 16.1.6**: Latest App Router with React 19
- **React 19.2.3**: Latest React with automatic JSX transform
- **Tailwind CSS v4**: Utility framework via PostCSS integration
- **TypeScript 5**: Strict type checking enabled
- **ESLint 9**: Modern flat config system

## Common Pitfalls to Avoid
- Don't use `<img>` tags - use `next/image` for performance
- Don't manually configure Tailwind without understanding v4's PostCSS-first approach
- Don't commit to `main` without running `npm run lint` - CI/CD will fail
- Avoid hardcoding metadata; use `Metadata` export from root layout or page layouts

## File Extension Conventions
- React components: `.tsx` for TypeScript
- Config files: `.ts` or `.mjs` depending on module system needs
- Styles: embedded in JSX via Tailwind classes, no separate `.css` files except `globals.css`
