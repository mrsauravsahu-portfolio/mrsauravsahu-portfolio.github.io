<script>
	let data = {
		id: 49,
		title: 'Software Versioning - An Introduction with GitVersion',
		description:
			"Software Versioning is something we all must do. Let's checkout the basics, and also, GitVersion."
	};
</script>

<!-- note: rotate randomly between -4deg and 4deg -->
<a href={`/blog/posts/${data.id}`}>
<div class="blog-post" style={`--rotation: ${Math.ceil((Math.random() * 8) - 4)}deg;`}>
	<img src="/img/donut.jpg" alt={data.title} />
	<div class="title">{data.title}</div>
	<div class="description">{data.description}</div>
</div>
</a>

<style>
	a {
		text-decoration: none;
	}

	.blog-post {
		width: calc((100vw - 30rem) / 3);
		background-color: rgb(237, 237, 237);
		border-radius: 1.5rem;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		box-shadow: rgb(191, 191, 191) 0.25rem 0.25rem 0.25rem;
		transition: 0.2s ease-in-out transform;
		transform: rotate(var(--rotation));
		cursor: pointer;
	}

	.blog-post:hover {
		transform: scale(1.1) rotate(-4deg);
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
