# live-player-design-system

Shared design tokens, typography, and brand mark for **Live Player** — the
desktop/browser app ([`live-player`](https://github.com/polotto/live-player))
and the marketing site ([`live-player-website`](https://github.com/polotto/live-player-website)).
One source of truth so the two never drift into looking like two different
products.

## What's here

- **`tokens.css`** — CSS custom properties (colors, type, radius, spacing).
  Drop the `:root` block into any stylesheet as-is; variable names already
  match what `live-player` uses internally (`--bg`, `--panel`, `--accent`,
  etc.), so no renaming is needed when applying this to an existing
  stylesheet.
- **`assets/logo-mark.svg`** — the bare brand mark (`currentColor` fill, so
  it inherits `--accent` or whatever color context wraps it).
- **`assets/logo-badge.svg`** — the mark inside a rounded-square badge with
  colors baked in as literal hex (for favicons, app icons, anywhere CSS
  variables aren't available).
- **`DESIGN.md`** — the rationale: why this palette, why this mark, and the
  one rule that must not regress (cor de projeto vs. cor de marca).

## Using it in a new stylesheet

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;500;600;700;800&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap">
<link rel="stylesheet" href="tokens.css">
```

Then: `--font-display` for headings, `--font-body` for everything else,
`--font-mono` for timecodes/numeric readouts. `--accent` is the brand color
— **never** re-theme it from user/project data; see `DESIGN.md`.

## Status

Applied to `live-player` (the app) as of 2026-09-25. `live-player-website`
still runs its own older palette — next in line to adopt this.
