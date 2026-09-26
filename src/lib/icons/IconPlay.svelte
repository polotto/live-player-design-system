<script lang="ts">
  // Filled, not stroked (overrides IconBase's default outline style on its
  // own child) - a play triangle reads better solid, same as every native
  // media-player play glyph. Distinct from Logo.svelte's brand mark - this
  // is a plain, generic UI icon for the library preview button, not the
  // app's identity.
  import IconBase from "./IconBase.svelte";
  let { size = 16 }: { size?: number } = $props();
</script>

<IconBase {size}>
  <path d="M7 4.5v15l13-7.5-13-7.5z" fill="currentColor" stroke="none" />
</IconBase>
