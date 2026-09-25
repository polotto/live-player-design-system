<script lang="ts">
	import '../lib/tokens.css';
	import type { Snippet } from 'svelte';

	let { children }: { children?: Snippet } = $props();
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;500;600;700;800&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
	/>
</svelte:head>

<div class="lp-shell">
	{@render children?.()}
</div>

<style>
	:global(html, body) {
		margin: 0;
		background: var(--bg);
	}
	.lp-shell {
		min-height: 100vh;
		background: var(--bg);
		color: var(--text);
		font-family: var(--font-body);
	}
</style>
