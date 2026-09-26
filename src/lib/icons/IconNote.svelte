<script lang="ts">
  // Moved here from live-player's CueRow.svelte (explicit user request to
  // centralize icons in the design system) - originally recovered as-is
  // from the "Marcação de cues" design canvas board's own note-icon
  // mockup: a rounded square with two text lines inside it.
  import IconBase from "./IconBase.svelte";
  let { size = 16 }: { size?: number } = $props();
</script>

<IconBase {size}>
  <rect x="5" y="5" width="14" height="14" rx="3" />
  <path d="M8 10h8M8 13.5h5" />
</IconBase>
