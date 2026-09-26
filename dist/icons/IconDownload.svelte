<script lang="ts">
  import IconBase from "./IconBase.svelte";
  let { size = 16 }: { size?: number } = $props();
</script>

<IconBase {size}>
  <path d="M12 3v12" />
  <path d="M7 10l5 5 5-5" />
  <path d="M4 19h16" />
</IconBase>
