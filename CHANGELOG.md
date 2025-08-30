# Changelog

All notable changes to this project will be documented in this file.

## [1.1.0] - 2025-08-30

### Added
- CHANGELOG.md to track releases.

### Changed
- Upgraded to latest stable toolchain:
  - Next.js 15.5.2
  - React 19.1.1 and React DOM 19.1.1
  - @next/mdx 15.5.2 and @mdx-js/loader 3.1.1
  - DaisyUI 5.0.54 and Tailwind CSS 3.4.14
  - PostCSS 8.5.6 and Autoprefixer 10.4.21
  - ESLint 9.34.0 and eslint-config-next 15.5.2
  - @types/react 19.1.12 and @types/react-dom 19.1.1
- Updated error boundary typing for React 19 (use `unknown` and safe access).
- Normalized and typed `params` for Next 15 async behavior in catch-all page.

### Notes
- Static-first defaults preserved. No experimental flags enabled.
- If you see a webpack runtime wrapper error during dev, restart the dev server.

