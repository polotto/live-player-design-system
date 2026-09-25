<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		tone = 'neutral',
		dot = false,
		pill = false,
		children
	}: {
		tone?: 'neutral' | 'ok' | 'paused' | 'danger' | 'accent';
		dot?: boolean;
		/** Chip look (padding + tinted rounded background) instead of plain
		 * inline text - for a status pill sitting inside a busier row, where
		 * bare colored text alone doesn't stand out enough. */
		pill?: boolean;
		children?: Snippet;
	} = $props();
</script>

<span class="lp-badge lp-badge-{tone}" class:lp-badge-pill={pill}>
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

	.lp-badge-pill {
		font-size: 11px;
		padding: 2px 7px;
		border-radius: 20px;
		background: color-mix(in srgb, currentColor 14%, transparent);
	}
	/* Neutral tone's pill uses --panel-2 as a flat background rather than a
	   currentColor tint (var(--text-dim) tinted at 14% reads as barely-there
	   on a dark ground) - every other tone tints fine against the dark
	   surfaces this system assumes. */
	.lp-badge-neutral.lp-badge-pill {
		background: var(--panel-2, #1b252a);
	}
</style>
