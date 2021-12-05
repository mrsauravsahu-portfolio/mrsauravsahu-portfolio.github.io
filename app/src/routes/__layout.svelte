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
	@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;900&display=swap');

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
		border-radius: .5rem;
		cursor: pointer;
	}
</style>
