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
	@import url('https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Concert+One&family=Courier+Prime&display=swap');

	:global(html) {
		margin: 0;
		font-size: .8em;
		background-color: var(--bg);
	}

	:global(body) {
		margin: 0rem;
		height: 100%;
	}

	:global(h1,h2,h3,h4,h5,h6) {
		font-family: 'Concert One', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	:global(*) {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
	:global(img){
		width: 100%;
	}

	:global(img.half){
		width: 50%;
	}

	:global(pre,code) {
		border-radius: .2rem;
		background-color: #333;
		font-family:  'Courier Prime', monospace;
		color: #aaa;
	}

	:global(pre) {
	padding: 1rem;
	}

	:global(code) {
		padding: .125rem .25rem;
	}

	:root {
		--accent: #333;
		--bg: #aaa;

		--font-title: 'Concert One', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	main {
		background-color: var(--bg);
		scroll-behavior: smooth;
		height: 100vh;
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
		/* border-radius: 0.5rem; */
		cursor: pointer;
		transition: 0.2s ease-in-out transform;
	}

	:global(a[role='button']:hover) {
		transform: scale(1.1);
	}

	:global(section) {
		padding: 2rem;
		padding-bottom: 0;
		box-sizing: border-box;
		height: 100vh;
		padding-top: 5rem !important;
	}

	:global(h1) {
		font-size: 4rem;
		margin: 0.25rem 0;
	}

	:global(hr) {
		margin: 0;
		padding: 0.0625rem;
		background-color: black;
		stroke-width: 0;
		border: none;
	}

	@media (max-width: 40rem) {
		:global(section) {
			height: auto;
		}
		:global(section.page-section) {
			height: 100vh;
		}
	}

	@media (min-width: 90rem) {
		main {
			padding: 0 calc((100vw - 90rem)/2);
		}
	}
</style>
