<script lang="ts">
  import IconBase from "./IconBase.svelte";
  let { size = 16 }: { size?: number } = $props();
</script>

<IconBase {size}>
  <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v1H4z" />
  <path d="M3 8l1.4 10.2A2 2 0 0 0 6.4 20h11.2a2 2 0 0 0 2-1.8L21 8" />
</IconBase>
