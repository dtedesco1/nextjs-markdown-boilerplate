AGENTS.md – repo guide for AI agents

Build/lint/test
- Install: npm install (Node 18+, npm 9+)
- Dev server: npm run dev
- Build: npm run build
- Start prod: npm start
- Lint: none configured; prefer eslint + @typescript-eslint + eslint-config-next. If adding, expose: npm run lint
- Tests: none configured. If adding Vitest/Jest, expose: npm test and npm test -- myfile.test.ts for a single test

Code style
- Language: TypeScript, Next.js 15 App Router, React 18, MDX pages in app/content
- Imports: use path aliases (@/, @content/, @components/); group std lib, third-party, internal; no unused imports. Use type-only imports (import type {...})
- Formatting: 4-space indentation, semicolons on, single quotes; wrap at ~100 cols; keep JSX props on new lines when multi-prop
- Types: TS strict mode disabled; annotate public exports, props, return types. Prefer unknown over any; use satisfies for object literals
- React/Next: Client components only when needed ('use client'); server-first by default. Use async components for data. Avoid useEffect for simple rendering
- Naming: files kebab-case; React components PascalCase; hooks useCamelCase with use prefix; constants UPPER_SNAKE; types/interfaces PascalCase T/I suffix optional
- Errors: throw Error with clear message; narrow errors with instance checks; never swallow errors. In UI, render friendly fallback; log server-side only
- MDX: Keep imports at top; export const metadata when needed; keep headings structured; avoid heavy client components in MDX
- Styling: Tailwind first; keep className small via extracted components; avoid inline style unless dynamic
- Performance: prefer static generation where possible; cache with React/Next helpers; memoize expensive client components

Notes
- No Cursor or Copilot instruction files found (.cursor/rules or .github/copilot-instructions.md)
- Before adding tools (eslint, tests), update package.json scripts and commit separately