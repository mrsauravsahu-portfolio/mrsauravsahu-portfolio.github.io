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

<section class="blog" id="blog">
	<h1>blog</h1>
		<p>
			Well, I occassionally write things. You can also find them on your favorite blog platforms, like <a href="https://mrsauravsahu.medium.com">medium</a> and <a href="https://dev.to/mrsauravsahu">dev.to</a>.
		</p>
</section>

<style>
	section {
		height: calc(100vh - 0.5rem - 4rem);
		padding: 1rem;
		padding-left: 2rem;
	}

	h1 {
		margin-top: 2rem;
	}

	.home {
		width: 100%;
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
		font-weight: 900;
		font-size: 3rem;
		margin: 2rem;
	}
</style>
