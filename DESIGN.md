# Design rationale

## Color — Direção B, "Console"

Cool electric cyan (`--accent: #29b6d8`) on a near-black, blue-tinted
ground. Chosen to echo the waveform/VU-meter glow already on screen in the
app — a precision-instrument register, not a generic SaaS palette.

A second direction ("Downstage" — warm magenta-violet) was explored in
parallel and discarded: it sat too close to QLab's own purple, which this
product competes directly against as a category. Never shipped to either
repo.

`--ok` (green), `--paused` (amber), `--danger` (red) are **reserved** for
playback/save status and must never be reused as a theme or brand color —
both directions were designed to keep their brand hue clear of all three.

## Cor de projeto vs. cor de marca — the rule that must not regress

Live Player lets an operator tag each project with a color, for
identification across multiple open projects/windows. Early on, that color
re-themed the *entire app* (every button, focus ring, progress fill) by
overriding `--accent`. That broke the brand: a project tagged red no
longer looked like Live Player.

**The fix, current and final**: `--accent` is fixed to the brand cyan
everywhere in the operating UI — buttons, focus rings, progress, trim
handles. Project color is a **contained identification tag** only: a small
swatch next to the project name, plus a 4px stripe along the top edge of
the header. It never touches `--accent` again.

If you're building a new surface (a future admin panel, a plugin UI,
whatever) and it has any per-user/per-project color concept, follow the
same split: one fixed brand color for chrome, a separate contained tag for
identification. Don't let the two merge again.

## Typography

- **Bricolage Grotesque** — display/headings. A distinctive grotesque with
  real character, not a generic geometric sans — avoids the "this could be
  any startup" look that Inter/Roboto/Arial produce as a default.
- **IBM Plex Sans** — body/UI text. Neutral, highly legible at small
  sizes, and (unlike Inter) doesn't read as a template default.
- **IBM Plex Mono** — timecodes and any other tabular/numeric readout.
  Monospace so digits don't jitter in width as they change live.

## The mark

A solid play triangle, and one separate bar in front of it — not
overlapping, not fused into a single shape. Two simple forms, side by
side: the gesture of moving forward (play), and pause reduced to the
minimum possible (a single bar).

Landed on this after a long exploration (a dachshund mark, several
abstract concepts, a stage-light/speaker fusion) that all either lacked
clear meaning or looked disconnected from what the tool actually does.
Competitive research (QLab, Audacity, Ableton, SoundCloud, Native
Instruments) informed the final round, without tracing or copying any
specific competitor's mark.

## Icons

Functional UI icons (play, pause, loop, trim, folder, save, settings,
help, menu, add, search, drag, export, volume) are a separate, independent
set from the brand mark — see `live-player`'s own component boards if you
need to extend that set; they don't live in this repo (they're
implementation, not brand).
