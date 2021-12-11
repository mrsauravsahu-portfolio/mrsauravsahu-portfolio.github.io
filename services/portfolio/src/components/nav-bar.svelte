<script>
	import { goto } from '$app/navigation';
</script>

<nav>
	<a href='/#home'>
		<img src="/img/brand.svg" alt="brand" />
	</a>
	<ul class="navlinks">
		<li class="navlink"><a href="/#contact">contact</a></li>
		<li class="navlink"><a href="/blog/1">blog</a></li>
		<li class="navlink"><a href="/made-with">made-with</a></li>
		<li class="navlink"><a href="https://poly.mrsauravsahu.tech">polywork</a></li>
	</ul>
</nav>

<style>
	nav {
		display: flex;
		align-items: center;
		background-color: var(--accent);
		padding: 0;
		margin: 0.5rem;
		border-radius: 1rem;
		height: 4rem;
	}

	.navlinks {
		list-style-type: none;
		display: flex;
		height: 100%;
		margin: 0;
	}

	.navlink {
		display: flex;
		align-items: center;
	}

	a,
	a:visited {
		color: var(--bg);
		text-decoration: none;
		padding: 0 2rem;
		cursor: pointer;
		transform: translateY(0);
		transition: transform 0.3s ease-in-out;
	}

	a:hover,
	span:hover {
		transform: translateY(-0.15rem);
	}
</style>
