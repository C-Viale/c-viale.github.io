# Caio Viale's Portifolio

This is a personal website built as a professional portifolio.

Built with [Astro](https://astro.build/) and [Bun](https://bun.sh). No other external dependencies.

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── card.astro
│   ├── layouts
│   │   └── app-layout.astro
│   ├── pages
│   │   └── index.astro
│   ├── styles
│   │   └── globals.css
│   └── utils
│       ├── constants
│       │   └── projects.ts
│       └── functions
│           └── slugify.ts
└── package.json
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command               | Action                                           |
| :-------------------- | :----------------------------------------------- |
| `bun install`         | Installs dependencies                            |
| `bun dev`             | Starts local dev server at `localhost:4321`      |
| `bun build`           | Build your production site to `./dist/`          |
| `bun preview`         | Preview your build locally, before deploying     |
| `bun astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun astro -- --help` | Get help using the Astro CLI                     |
