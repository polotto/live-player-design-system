<script lang="ts">
  import IconBase from "./IconBase.svelte";
  let { size = 16 }: { size?: number } = $props();
</script>

<IconBase {size}>
  <path d="M5 3h10l4 4v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
  <path d="M8 3v5h6V3" />
  <rect x="7" y="14" width="8" height="6" />
</IconBase>
