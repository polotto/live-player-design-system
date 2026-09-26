<script lang="ts">
  // Shared <svg> shell for every icon in icons/ - explicit user request
  // ("centralizar esses ícones no Design system"): live-player used to mix
  // real emoji for its toolbar/action icons with two hand-drawn inline SVGs
  // (a cue's note/effects toggles). The user asked for the whole set to be
  // real icons instead of emoji, consistently, in ONE shared place both
  // the app and (eventually) the website can pull from - not re-drawn
  // per call site.
  //
  // 24x24 viewBox, a plain stroke-based outline style (1.75 stroke-width,
  // round caps/joins) by default - matches the two icons this replaces
  // (CueRow.svelte's old inline note/sliders SVGs). A filled icon (Play/
  // Pause) just overrides fill/stroke on its own child shapes; IconBase
  // only sets the DEFAULT, not a hard requirement.
  let { size = 16, children }: { size?: number; children: import("svelte").Snippet } = $props();
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="1.75"
  stroke-linecap="round"
  stroke-linejoin="round"
  xmlns="http://www.w3.org/2000/svg"
  aria-hidden="true"
  focusable="false"
>
  {@render children()}
</svg>
