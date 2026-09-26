<script lang="ts">
  import IconBase from "./IconBase.svelte";
  let { size = 16 }: { size?: number } = $props();
</script>

<IconBase {size}>
  <rect x="4" y="3" width="16" height="18" rx="2" />
  <path d="M9 12h6M12 9v6" />
</IconBase>
