# Next.js 15 Markdown Boilerplate

A minimal Next.js 15 application that renders content from Markdown files.

## Features

- Render Markdown files as dynamic pages
- Add React components anywhere in your Markdown
- The folder structure becomes the URL path
- Global styles using Tailwind CSS and DaisyUI

**See a live example at [nextjs-markdown-boilerplate.vercel.app/](https://nextjs-markdown-boilerplate.vercel.app/)**

## How to use it

I'm lazy, so I made this extremely simple.

### Pages

Just write some markdown in a `.mdx` file, and it will automatically become a properly styled page.

```mdx
# My Page

This is my page.
```

### Routing

Add new pages by creating `.mdx` files in the `app/content` directory. The file name becomes the URL path:

- `app/content/index.mdx` → `/`
- `app/content/a-beautiful-page.mdx` → `/a-beautiful-page`
- `app/content/more-content/another-page.mdx` → `/more-content/another-page`

### React Components

Add custom React components to the `components` directory. Then, import them at the top of an MDX file and use them like any other React component.

```mdx
import MyComponent from '../components/my-component'

**Hey**, here's a component:

<MyComponent />

*And here's some more markdown content.*
```

### Next.js 15 Async API Caveats

In Next.js 15, dynamic APIs like `params` and `searchParams` are now asynchronous. The boilerplate handles this automatically in the page component, but if you add custom logic:

```tsx
// In a page or layout
export default async function Page({ params, searchParams }) {
  const { slug } = await params  // Await params
  const { query } = await searchParams  // Await searchParams
  // Your code
}
```

For static behavior, avoid using `cookies()`, `headers()`, `draftMode()` in layouts or pages unless necessary.

### Static vs Dynamic Behavior

This boilerplate is static-first: pages are pre-rendered at build time. If you need dynamic features (e.g., user-specific content), opt into dynamic rendering by using the async APIs above or adding `export const dynamic = 'force-dynamic'` to a page.

### Optional Recipes

- **SEO/Sitemap**: Add `next-sitemap` for automatic sitemap generation.
- **Analytics**: Integrate with Vercel Analytics or Google Analytics.
- **Testing**: Add Vitest with `npm install -D vitest @testing-library/react`.
- **Linting**: Run `npm run lint` (already configured).
- **Static Export**: For non-server deployments, add `output: 'export'` to `next.config.mjs` (note: disables server features).

## Requirements

- Node.js 18+
- npm 9+
- TypeScript
- React 19
- Next.js 15

## Setup

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Visit <http://localhost:3000>

### Build for production

```bash
npm run build
npm start
```

## Project Structure

I tried to make this as simple as possible, given the constraints of modern web development.

```bash
my-markdown-app/
.
├── README
├── app
│   ├── [...slug]     # Dynamic route for all pages
│   │   └── page.tsx    # Page component
│   ├── content        # **This is the only folder you need to worry about.**
│   │   ├── more-content  # Example of a nested folder
│   │   │   └── another-page.mdx  # Another page, routes to /more-content/another-page
│   │   └── index.mdx  # Home page content
│   ├── globals.css    # Global styles and Tailwind imports
│   ├── layout.tsx     # Root layout with shared styling
│   └── page.mdx       # Home page content (renders index.mdx at root)
├── components       # Add custom React components in this directory
├── mdx-components.tsx # Sets up MDX components
├── next.config.mjs    # Next.js configuration  
├── package.json       # Project dependencies
├── postcss.config.js  # PostCSS configuration
├── tailwind.config.js # Tailwind CSS configuration
└── tsconfig.json      # TypeScript configuration
```

## Contributing

Pull requests are welcome.

## License

MIT

## Release Notes

### 1.1.0
- Upgrade to latest stable: Next.js 15.5.2, React 19.1.1, @next/mdx 15.5.2, @mdx-js/loader 3.1.1, DaisyUI 5.0.54, PostCSS 8.5.6, Autoprefixer 10.4.21, ESLint 9.34.0, eslint-config-next 15.5.2, updated React type packages.
- React 19 compatibility: error boundary uses `unknown` for error prop with safe access.
- Next 15 compatibility: async `params` normalization in catch‑all page.
- Static-first defaults preserved; no experimental flags.

### 1.0.0

- Initial release
- Render Markdown files as dynamic pages
- Add React components anywhere in your Markdown
- The folder structure becomes the URL path
- Global styles using Tailwind CSS and DaisyUI
