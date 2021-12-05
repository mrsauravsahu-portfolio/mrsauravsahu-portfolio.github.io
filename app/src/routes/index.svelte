<script>
	import BlogPost from '../components/blog-post.svelte';
</script>

<svelte:head>
	<title>@mrsauravsahu</title>
</svelte:head>

<section class="home" id="home">
	<div class="bio">
		<p>
			software engineer by profession; <br />
			photographer, cook and a student at heart.
		</p>
	</div>
</section>

<hr />

<section class="blog">
	<h1 id="blog">recent blogs</h1>
		<p>
			Well, I occassionally write things. You can also find them on your favorite blogging platforms,
			like <a href="https://mrsauravsahu.medium.com">medium</a>
			and <a href="https://dev.to/mrsauravsahu">dev.to</a>.
		</p>
		<div class="blog-posts">
			<BlogPost />
			<BlogPost />
			<BlogPost />
		</div>
		<a role="button" href="/blog">read more ⟶</a>
</section>

<style>
	section {
		height: calc(100vh - 1rem - 4rem);
		padding: 2rem;
		padding-bottom: 0;
	}

	h1 {
		font-size: 6rem;
	}

	hr {
		margin: 0;
		padding: 0.0625rem;
		background-color: black;
		stroke-width: 0;
		border: none;
	}

	.home {
		display: flex;
		padding: 0 0.5rem;
		background: url('/img/mrss-silhouette.svg');
		background-repeat: no-repeat;
		background-position: right bottom;
		background-size: calc(20%);
	}

	.bio {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.home p {
		font-size: 4rem;
		margin: 2rem;
	}

	/* blog */

	.blog {
		display: flex;
		flex-direction: column;
	}
	.blog-posts {
		display: flex;
		justify-content: space-between;
		margin-top: 2rem;
	}

	.blog a {
		align-self: flex-end;
		margin-top: 4rem;
	}

	.blog p {
		font-size: 1.5rem;
	}
</style>
