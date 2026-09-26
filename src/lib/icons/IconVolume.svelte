<script lang="ts">
  import IconBase from "./IconBase.svelte";
  let { size = 16 }: { size?: number } = $props();
</script>

<IconBase {size}>
  <path d="M4 9v6h4l5 4V5L8 9H4z" />
  <path d="M16.5 9a5 5 0 0 1 0 6" />
  <path d="M19 7a8.5 8.5 0 0 1 0 10" />
</IconBase>
