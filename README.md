# Next.js 15 Markdown Boilerplate

A minimal Next.js 15 application that renders content from Markdown files.

## Features

- Render Markdown files as dynamic pages
- Add React components anywhere in your Markdown
- The folder structure becomes the URL path
- Global styles using Tailwind CSS and DaisyUI

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

## Requirements

- Node.js 18+
- npm 9+
- TypeScript

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

## License

MIT
