<script lang="ts">
  // Moved here from live-player's CueRow.svelte (explicit user request to
  // centralize icons in the design system) - the per-cue volume/effects
  // panel trigger. A plain three-slider/mixer glyph.
  import IconBase from "./IconBase.svelte";
  let { size = 16 }: { size?: number } = $props();
</script>

<IconBase {size}>
  <line x1="4" y1="21" x2="4" y2="4" />
  <circle cx="4" cy="12" r="2.5" fill="currentColor" />
  <line x1="12" y1="21" x2="12" y2="4" />
  <circle cx="12" cy="9" r="2.5" fill="currentColor" />
  <line x1="20" y1="21" x2="20" y2="4" />
  <circle cx="20" cy="15" r="2.5" fill="currentColor" />
</IconBase>
