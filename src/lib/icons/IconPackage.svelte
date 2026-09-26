<script lang="ts">
  import IconBase from "./IconBase.svelte";
  let { size = 16 }: { size?: number } = $props();
</script>

<IconBase {size}>
  <path d="M21 8l-9-5-9 5 9 5 9-5z" />
  <path d="M3 8v8l9 5 9-5V8" />
  <path d="M12 13v8" />
</IconBase>
