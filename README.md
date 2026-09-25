# live-player-design-system

Shared design tokens **and Svelte components** for **Live Player** — the
desktop/browser app ([`live-player`](https://github.com/polotto/live-player))
and the marketing site ([`live-player-website`](https://github.com/polotto/live-player-website)).
One source of truth so the two never drift into looking like two different
products, and so a button/input/card is written once, not reimplemented
per repo.

Public repo — no publish/registry step needed, install straight from git.

## What's here

- **`src/lib/tokens.css`** — CSS custom properties (colors, type, radius,
  spacing). Import it once, globally, in each consuming app.
- **`src/lib/components/`** — `Button`, `Input`, `Label`, `Badge`, `Card`,
  `Wrap` (a max-width layout container). Each is fully self-styled from
  `tokens.css` alone — no dependency on either consumer's own stylesheet.
- **`assets/logo-mark.svg`** — the bare brand mark (`currentColor` fill).
- **`assets/logo-badge.svg`** — the mark inside a rounded-square badge
  with colors baked in as literal hex (favicons, app icons).
- **`DESIGN.md`** — the rationale: why this palette, why this mark, and
  the one rule that must not regress (cor de projeto vs. cor de marca).

## Installing

```sh
npm install github:polotto/live-player-design-system
```

```svelte
<script>
  import { Button, Card, Badge } from 'live-player-design-system';
  import 'live-player-design-system/tokens.css';
</script>

<Card>
  <Button variant="primary">Carregar áudios</Button>
  <Badge dot tone="ok">available</Badge>
</Card>
```

Fonts (Bricolage Grotesque, IBM Plex Sans, IBM Plex Mono) aren't bundled —
load them via the Google Fonts `<link>` documented at the top of
`tokens.css`, once per app.

## Developing this package

```sh
npm install
npm run dev      # local reference page at /, renders every component
npm run check     # svelte-check
npm run build     # vite build + svelte-package -> dist/
```

The reference page (`src/routes/+page.svelte`) is dev-only preview, not
published - the published surface is `src/lib/` via `dist/`.

## Status

Applied to `live-player` (the app, tokens only) and `live-player-website`
(tokens + logo) on 2026-09-25. This package form (real Svelte components,
not just CSS) lands next, wired into both consumers per-component rather
than as a wholesale rewrite of every existing control.
