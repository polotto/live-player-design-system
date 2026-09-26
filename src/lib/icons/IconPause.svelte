<script lang="ts">
  import IconBase from "./IconBase.svelte";
  let { size = 16 }: { size?: number } = $props();
</script>

<IconBase {size}>
  <rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor" stroke="none" />
  <rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor" stroke="none" />
</IconBase>
