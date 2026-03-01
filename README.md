# Portfolio — Next.js

A minimalist portfolio for CS students. Editorial aesthetic with a systems-programming edge.

## Quick Start

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Customise

### `app/page.js`
- **Your name**: Replace `Alex` / `Kim` in the hero `<h1>`
- **Bio text**: Edit the `<p>` inside `.heroBio`
- **Status**: Change `open to opportunities` in `.heroStatus`
- **Location**: Update `based in New York` in the hero top label
- **Email**: Replace `alex@kim.dev` in the contact section
- **Projects**: Edit the `PROJECTS` array at the top of the file
- **Social links**: Update the three `<a>` hrefs in the about section

### `app/globals.css`
- **Colors**: Edit the `:root` CSS variables
  - `--ink` → text color
  - `--paper` → background
  - `--red` → accent color (try `#2563EB` for blue, `#16A34A` for green)
- **Fonts**: Swap the Google Fonts import URL for different typefaces

## Structure

```
app/
  layout.js        ← root layout + metadata
  page.js          ← full single-page portfolio
  page.module.css  ← all styles (scoped CSS modules)
  globals.css      ← resets, fonts, CSS variables, animations
```

## Deploy

```bash
npm run build  # production build
```

Push to GitHub → deploy on **Vercel** in one click (it auto-detects Next.js).
# realportfolio
# realportfolio # realportfolio
# realportfolio
