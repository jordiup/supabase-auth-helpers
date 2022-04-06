import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { loadEnv } from 'vite';

process.env = { ...process.env, ...loadEnv(process.env.NODE_ENV, process.cwd()) };

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter()
	}
};

export default config;
