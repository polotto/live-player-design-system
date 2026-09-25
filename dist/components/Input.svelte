<script lang="ts">
	let {
		value = $bindable(''),
		type = 'text',
		placeholder = '',
		disabled = false,
		error = false,
		id = undefined,
		class: className = '',
		...rest
	}: {
		value?: string;
		type?: string;
		placeholder?: string;
		disabled?: boolean;
		error?: boolean;
		id?: string;
		class?: string;
		[key: string]: unknown;
	} = $props();
</script>

<!-- class before rest, then re-applied after: same reasoning as
     Button.svelte - a spread's `class` would otherwise silently replace
     lp-input instead of adding to it. -->
<input {id} {type} {placeholder} {disabled} bind:value {...rest} class="lp-input {className}" class:lp-input-error={error} />

<style>
	.lp-input {
		font-family: var(--font-body, system-ui, sans-serif);
		font-size: 14px;
		color: var(--text, #eaf2f4);
		background: var(--panel-2, #1b252a);
		border: 1px solid var(--border, #2c383f);
		border-radius: var(--radius-sm, 6px);
		padding: 10px 12px;
		min-width: 0;
	}
	.lp-input:hover:not(:disabled) {
		border-color: var(--border-strong, #3c4c53);
	}
	.lp-input:focus {
		outline: none;
		border-color: var(--accent, #29b6d8);
	}
	.lp-input::placeholder {
		color: var(--text-dim, #93a3aa);
	}
	.lp-input:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
	.lp-input-error {
		border-color: var(--danger, #e15c52);
	}
	.lp-input-error:focus {
		border-color: var(--danger, #e15c52);
	}
</style>
