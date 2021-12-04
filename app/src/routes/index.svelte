<svelte:head>
	<title>@mrsauravsahu</title>
</svelte:head>

<section class="home">
	<div class="bio">
		<p>
			software engineer by profession; <br />
			photographer, cook and a student at heart.
		</p>
	</div>
</section>

<style>
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

	p {
		font-weight: 900;
		font-size: 5rem;
		margin: 8rem;
	}
</style>
