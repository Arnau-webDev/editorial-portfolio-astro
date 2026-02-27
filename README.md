# arnau-mq.dev

Personal portfolio built with Astro 5 (SSG), Tailwind CSS, and vanilla TypeScript.

**Live:** [arnau-mq.dev](https://arnau-mq.dev)

## Stack

- **Astro 5** — static site generation, zero JS by default
- **Tailwind CSS 3** — utility-first styling
- **TypeScript** — type-safe client scripts and data files
- **Self-hosted fonts** — Noto Serif, Inter, Playfair Display (WOFF2)

## Performance

Lighthouse 100 across all categories. FCP 0.2s, ~4 KB total client JS (scroll reveals, header, typing effect).
<img width="857" height="189" alt="image" src="https://github.com/user-attachments/assets/2af0b880-c10a-4c7e-8884-697cc7094536" />


## Project Structure

```
src/
├── components/        # Astro components (Header, Hero, Skills, etc.)
│   ├── case-study/    # Case study-specific components
│   └── diagrams/      # Architecture diagram components
├── data/              # TypeScript data files (projects, skills, experience)
├── layouts/           # BaseLayout
├── pages/             # File-based routing
│   └── case-studies/  # Individual case study pages
├── scripts/           # Vanilla TS client modules
└── styles/            # Global CSS
public/
├── fonts/             # Self-hosted WOFF2 fonts
└── images/            # Static images, logos, screenshots
```

## Development

```bash
npm install
npm run dev       # Start dev server
npm run build     # Build for production
npm run preview   # Preview production build
npm run check     # TypeScript checking
```

## Deployment

Static output deployed to Vercel. Builds produce pre-rendered HTML files with no server runtime.
