<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		variant = 'secondary',
		icon = false,
		type = 'button',
		disabled = false,
		title = undefined,
		class: className = '',
		ref = $bindable(null),
		children,
		...rest
	}: {
		variant?: 'primary' | 'secondary' | 'ghost';
		icon?: boolean;
		type?: 'button' | 'submit' | 'reset';
		disabled?: boolean;
		title?: string;
		class?: string;
		ref?: HTMLButtonElement | null;
		children?: Snippet;
		[key: string]: unknown;
	} = $props();
</script>

<!-- class comes before {...rest}: a spread placed after a static class
     attribute overwrites it entirely on a key collision, which would
     silently drop lp-btn/lp-btn-{variant} the moment a caller passes its
     own `class` (e.g. a layout class) through rest. Destructuring class
     out above and re-composing it here is what avoids that.

     `bind:this` on a Svelte COMPONENT binds the component instance, not
     a DOM node - a caller that needs the real <button> (to measure it
     for a popover's position, say) can't get it that way. `ref` is a
     bindable prop instead: bind:ref={..} on THIS component, bound
     internally to the native element via bind:this. -->
<button {type} {disabled} {title} {...rest} bind:this={ref} class="lp-btn lp-btn-{variant} {className}" class:lp-btn-icon={icon}>
	{@render children?.()}
</button>

<style>
	.lp-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		border-radius: var(--radius-sm, 6px);
		border: 1px solid var(--border, #2c383f);
		background: var(--panel-2, #1b252a);
		color: var(--text, #eaf2f4);
		font-family: var(--font-body, system-ui, sans-serif);
		font-size: 14px;
		font-weight: 600;
		line-height: 1;
		padding: 11px 16px;
		cursor: pointer;
		transition:
			filter 0.15s,
			border-color 0.15s,
			background 0.15s;
	}
	.lp-btn:hover:not(:disabled) {
		border-color: var(--accent, #29b6d8);
	}
	.lp-btn:focus-visible {
		outline: 2px solid var(--accent, #29b6d8);
		outline-offset: 2px;
	}
	.lp-btn:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.lp-btn-primary {
		background: var(--accent, #29b6d8);
		border-color: var(--accent, #29b6d8);
		color: var(--bg, #0e1417);
	}
	.lp-btn-primary:hover:not(:disabled) {
		filter: brightness(1.08);
		border-color: var(--accent-strong, #5fd4ef);
	}

	.lp-btn-ghost {
		background: transparent;
		border-color: transparent;
	}
	.lp-btn-ghost:hover:not(:disabled) {
		border-color: var(--border-strong, #3c4c53);
		background: var(--panel-2, #1b252a);
	}

	.lp-btn-icon {
		width: 36px;
		height: 36px;
		padding: 0;
		font-size: 16px;
	}
</style>
