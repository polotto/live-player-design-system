<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		tone = 'neutral',
		dot = false,
		children
	}: {
		tone?: 'neutral' | 'ok' | 'paused' | 'danger' | 'accent';
		dot?: boolean;
		children?: Snippet;
	} = $props();
</script>

<span class="lp-badge lp-badge-{tone}">
	{#if dot}<span class="lp-badge-dot" aria-hidden="true"></span>{/if}
	{@render children?.()}
</span>

<style>
	.lp-badge {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		font-family: var(--font-body, system-ui, sans-serif);
		font-size: 12.5px;
		font-weight: 600;
		color: var(--text-dim, #93a3aa);
	}
	.lp-badge-dot {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: currentColor;
		flex: none;
	}
	.lp-badge-ok {
		color: var(--ok, #4cbe8c);
	}
	.lp-badge-paused {
		color: var(--paused, #dca83e);
	}
	.lp-badge-danger {
		color: var(--danger, #e15c52);
	}
	.lp-badge-accent {
		color: var(--accent, #29b6d8);
	}
</style>
