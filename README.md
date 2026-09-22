# me.sergio.run

Personal site for [Sérgio Rafael Siqueira](https://me.sergio.run) — home page, résumé, blog and homelab notes.

Built with [Astro](https://astro.build) and deployed to [Cloudflare Workers](https://developers.cloudflare.com/workers/) via the `@astrojs/cloudflare` adapter.

## Tech Stack

- **Astro 7** — pages, routing and content collections
- **MDX** (`@astrojs/mdx`) — blog posts in `src/posts/`
- **React 19** (`@astrojs/react`) — interactive islands only
- **Tailwind CSS 4** (`@tailwindcss/vite`) with the typography plugin
- **shadcn/ui** primitives (`radix-ui`, `class-variance-authority`, `lucide-react`)
- **Cloudflare Workers** — hosting, with Cloudflare Images for image processing

## Project Structure

```text
/
├── public/
│   ├── favicon.svg
│   └── images/homelab/       # optimised photos of the homelab host
├── src/
│   ├── components/
│   │   ├── Header.astro     # sticky nav with active-link state
│   │   ├── Footer.astro     # site footer and social links
│   │   ├── PostList.astro   # blog index list item
│   │   ├── ResumeSection.astro # resume section wrapper
│   │   ├── Terminal.astro   # home page terminal hero
│   │   └── ui/              # shadcn/ui components
│   ├── data/
│   │   └── resume.ts        # resume content and types (contacts, stack, experience, projects, languages)
│   ├── layouts/
│   │   └── layout.astro     # base layout, metadata, nav and theme bootstrap
│   ├── lib/
│   │   └── utils.ts         # cn() helper
│   ├── pages/
│   │   ├── index.astro
│   │   ├── resume.astro
│   │   ├── homelab.astro
│   │   └── blog/
│   │       ├── index.astro
│   │       └── [slug].astro
│   ├── posts/               # MDX blog posts
│   ├── styles/
│   │   └── global.css       # Tailwind entrypoint, design tokens and utilities
│   ├── consts.ts            # site metadata and navigation
│   └── content.config.ts    # blog collection schema
├── astro.config.mjs
├── wrangler.toml            # Cloudflare Worker config
└── package.json
```

## Commands

All commands are run from the root of the project:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `pnpm install`         | Installs dependencies                              |
| `pnpm dev`             | Starts local dev server at `localhost:4321`        |
| `pnpm build`           | Builds the production site to `./dist/`            |
| `pnpm preview`         | Previews the build locally, before deploying       |
| `pnpm check`           | Runs `astro check` (types and diagnostics)         |
| `pnpm generate-types`  | Generates Cloudflare Worker types with `wrangler`  |
| `pnpm astro ...`       | Runs Astro CLI commands                            |

## Content

Blog posts live in `src/posts/` as `.md` or `.mdx` files and are validated against the `blog` collection schema in `src/content.config.ts`. Each post requires:

- `title` — post title
- `slug` — URL slug, used by `/blog/[slug]`
- `pubDate` — publication date

## Deployment

The site is deployed as a Cloudflare Worker. `wrangler.toml` points `main` at the Astro Cloudflare entrypoint, serves the build output from `./dist` and binds the custom domain `me.sergio.run`.

To deploy, build first and then publish with Wrangler:

```sh
pnpm build
pnpm wrangler deploy
```

If you change Cloudflare bindings, regenerate the Worker types with `pnpm generate-types`.
