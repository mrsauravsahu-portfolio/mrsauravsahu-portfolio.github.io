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
		margin: 0.5rem;
		margin-bottom: 0;
		height: calc(100% - 0.5rem);
		display: flex;
		flex-direction: column;
	}

	:global(*) {
		font-family: 'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	:root {
		--accent: #333;
		--bg: #F8F8F8;
	}

	main {
		margin: 0 0.5rem;
		background-color: var(--bg);
		overflow-y: scroll;
		scroll-behavior: smooth;
	}
</style>
