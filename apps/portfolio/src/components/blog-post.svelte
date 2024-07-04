<script>
	export let blog;
</script>

<!-- note: rotate randomly between -4deg and 4deg -->
<a href={`/blog/posts/${blog.id}`}>
	<div class="blog-post" style={`--rotation: ${Math.ceil(Math.random() * 8 - 4)}deg;`}>
		<img src={blog.coverImageUrl} alt={blog.title} />
		<div class="title">{blog.title}</div>
		<div class="description">{blog.description}</div>
	</div>
</a>

<style>
	a {
		text-decoration: none;
		width: 30%;
	}

	.blog-post {
		background-color: #bbb;
		/* border-radius: 1.5rem; */
		display: flex;
		flex-direction: column;
		padding: 1rem;
		transition: 0.2s ease-in-out transform;
		/* transform: rotate(var(--rotation)); */
		cursor: pointer;
	}

	.blog-post:hover {
		transform: scale(1.1) rotate(-4deg);
	}

	img {
		margin-bottom: 0.25rem;
		/* border-radius: 1rem; */
		filter: grayscale();
	}

	.title,
	.description {
		display: -webkit-box;
		line-clamp: 2;
		-webkit-line-clamp: 2;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
	}

	.title {
		font-weight: 500;
		margin: 0.5rem 0;
	}

	.description {
		font-size: 1rem;
		font-weight: 200;
	}

	@media (max-width: 40rem) {
		.blog-post {
			width: 70vw;
		}

		a {
			margin: 1rem 0;
		}
	}

	@media (max-width: 48rem) {
		.title {
			font-size: 0.75rem;
		}
		.description {
			font-size: 0.75rem;
		}
		.blog-post {
			padding: 0.75rem;
			width: calc(100% - 2 * .75rem);
		}
		a {
			width: 100%;
		}
	}
</style>
