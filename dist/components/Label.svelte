<script lang="ts">
	import type { Snippet } from 'svelte';

	let { for: htmlFor = undefined, children }: { for?: string; children?: Snippet } = $props();
</script>

<label for={htmlFor} class="lp-label">
	{@render children?.()}
</label>

<style>
	.lp-label {
		display: block;
		font-family: var(--font-body, system-ui, sans-serif);
		font-size: 12.5px;
		font-weight: 600;
		color: var(--text-dim, #93a3aa);
		text-transform: uppercase;
		letter-spacing: 0.04em;
		margin-bottom: 6px;
	}
</style>
