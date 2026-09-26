<script lang="ts">
  import IconBase from "./IconBase.svelte";
  let { size = 16 }: { size?: number } = $props();
</script>

<IconBase {size}>
  <circle cx="12" cy="12" r="9" />
  <path d="M9.5 9.2a2.5 2.5 0 0 1 4.7 1.2c0 1.7-2.2 2-2.2 3.6" />
  <path d="M12 17.5v.1" />
</IconBase>
