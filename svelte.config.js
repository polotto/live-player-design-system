import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		// Only used by the local reference-page preview app - the published
		// package is the svelte-package output in dist/, not this adapter's
		// build. Any adapter works here; auto picks a sane default.
		adapter: adapter()
	}
};

export default config;
