<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children?: Snippet } = $props();
</script>

<div class="lp-wrap">
	{@render children?.()}
</div>

<style>
	.lp-wrap {
		width: min(1240px, calc(100% - 80px));
		margin: 0 auto;
	}
</style>
