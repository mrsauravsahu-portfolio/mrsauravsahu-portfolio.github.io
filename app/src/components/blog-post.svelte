<script>
	let data = {
		id: 49,
		title: 'Software Versioning - An Introduction with GitVersion',
		description:
			"Software Versioning is something we all must do. Let's checkout the basics, and also, GitVersion."
	};
</script>

<!-- note: rotate randomly between -2deg and 2deg -->
<div class="blog-post" style={`transform: rotate(${(Math.random() * 4) - 2}deg);`}>
	<img src="/img/donut.jpg" height="240" alt={data.title} />
	<div class="title">{data.title}</div>
	<div class="description">{data.description}</div>
</div>

<style>
	.blog-post {
		width: calc((100vw - 16rem) / 3);
		background-color: rgb(237, 237, 237);
		border-radius: 1.5rem;
		display: flex;
		flex-direction: column;
		padding: 1rem;
    box-shadow: rgb(191, 191, 191) .25rem .25rem .25rem;
	}

	img {
		border-radius: 1rem;
		margin-bottom: 1rem;
	}

	.title {
		font-weight: 500;
		margin: 0.5rem 0;
	}

  .description {
    font-size: 1rem;
		font-weight: 200;
  }
</style>
