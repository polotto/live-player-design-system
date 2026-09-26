<script lang="ts">
  import IconBase from "./IconBase.svelte";
  let { size = 16 }: { size?: number } = $props();
</script>

<IconBase {size}>
  <circle cx="11" cy="11" r="7" />
  <path d="M21 21l-4.3-4.3" />
</IconBase>
