<script>
	import { onMount } from 'svelte';

	import Nav from '../components/nav-bar.svelte';

	onMount(() => {
		import('@vanillawc/wc-markdown/themes/prism-okaidia.css');
		import('@vanillawc/wc-markdown/index');
	});
</script>

<Nav />
<main>
	<slot />
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@200;500;800&display=swap');

	:global(html) {
		margin: 0;
		height: 100vh;
		background-color: var(--bg);
	}

	:global(body) {
		margin: 0rem;
		height: 100vh;
		display: flex;
		flex-direction: column;
	}

	:global(*) {
		font-family: 'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	:root {
		--accent: #333;
		--bg: #f8f8f8;
	}

	main {
		background-color: var(--bg);
		scroll-behavior: smooth;
		overflow-y: scroll;
	}

	:global(a),
	:global(a:visited) {
		color: black;
	}

	:global(a[role='button']) {
		text-decoration: none;
		margin: 2rem 0;
		padding: 2rem;
		background-color: black;
		color: #aaa;
		border-radius: 0.5rem;
		cursor: pointer;
		transition: 0.2s ease-in-out transform;
	}

	:global(a[role='button']:hover) {
		transform: scale(1.1);
	}

	:global(section) {
		height: calc(100vh - 1rem - 4rem);
		padding: 2rem;
		padding-bottom: 0;
	}

	:global(h1) {
		font-size: 6rem;
	}

	:global(hr){
		margin: 0;
		padding: 0.0625rem;
		background-color: black;
		stroke-width: 0;
		border: none;
	}
</style>
