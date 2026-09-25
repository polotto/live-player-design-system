<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';
	import Label from '$lib/components/Label.svelte';
	import Badge from '$lib/components/Badge.svelte';
	import Card from '$lib/components/Card.svelte';
	import Wrap from '$lib/components/Wrap.svelte';

	let name = $state('');
	let nameError = $state('');
</script>

<svelte:head>
	<title>Live Player — Design System</title>
</svelte:head>

<Wrap>
	<div class="page">
		<header>
			<h1>Live Player — Design System</h1>
			<p>Reference render of every component this package ships. Not published - local preview only.</p>
		</header>

		<section>
			<h2>Button</h2>
			<div class="row">
				<Button variant="primary">Primary</Button>
				<Button variant="secondary">Secondary</Button>
				<Button variant="ghost">Ghost</Button>
				<Button variant="primary" disabled>Disabled</Button>
				<Button variant="primary" icon title="Menu">☰</Button>
			</div>
		</section>

		<section>
			<h2>Input</h2>
			<div class="row column">
				<div>
					<Label for="name">Project name</Label>
					<Input id="name" bind:value={name} placeholder="Untitled project" />
				</div>
				<div>
					<Label for="name-error">With error</Label>
					<Input id="name-error" bind:value={nameError} placeholder="Required" error />
				</div>
			</div>
		</section>

		<section>
			<h2>Badge</h2>
			<div class="row">
				<Badge dot tone="ok">available</Badge>
				<Badge dot tone="paused">paused</Badge>
				<Badge dot tone="danger">missing audio</Badge>
				<Badge tone="accent">accent</Badge>
				<Badge>neutral</Badge>
			</div>
		</section>

		<section>
			<h2>Card</h2>
			<div class="row">
				<Card padding="sm">Small padding</Card>
				<Card>Default padding</Card>
				<Card padding="lg">Large padding</Card>
			</div>
		</section>
	</div>
</Wrap>

<style>
	.page {
		padding: 64px 0 96px;
		display: flex;
		flex-direction: column;
		gap: 48px;
	}
	header h1 {
		font-family: var(--font-display);
		font-size: 32px;
		margin: 0 0 8px;
	}
	header p {
		color: var(--text-dim);
		margin: 0;
	}
	section h2 {
		font-family: var(--font-display);
		font-size: 20px;
		margin: 0 0 16px;
	}
	.row {
		display: flex;
		gap: 16px;
		flex-wrap: wrap;
		align-items: center;
	}
	.row.column {
		flex-direction: row;
		align-items: flex-start;
	}
</style>
