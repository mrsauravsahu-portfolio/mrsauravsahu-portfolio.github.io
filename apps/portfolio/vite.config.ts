import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		proxy: {
			// https://stackoverflow.com/questions/64677212/how-to-configure-proxy-in-vite
			'/graphql': `http://localhost:30001/graphql`
		}
	}
});
