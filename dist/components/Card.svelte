<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		padding = 'md',
		class: className = '',
		children
	}: {
		padding?: 'sm' | 'md' | 'lg';
		class?: string;
		children?: Snippet;
	} = $props();
</script>

<div class="lp-card lp-card-{padding} {className}">
	{@render children?.()}
</div>

<style>
	.lp-card {
		background: var(--panel, #141c20);
		border: 1px solid var(--border, #2c383f);
		border-radius: var(--radius-lg, 16px);
	}
	.lp-card-sm {
		padding: var(--space-3, 12px);
	}
	.lp-card-md {
		padding: var(--space-5, 24px);
	}
	.lp-card-lg {
		padding: var(--space-6, 32px);
	}
</style>
