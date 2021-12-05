<script lang="ts" context="module">
	export async function load({ page, fetch }) {
		let pageNumber = Number(page.params.page);
		pageNumber = Number.isNaN(pageNumber) ? 1 : pageNumber;

		const response = await fetch('/blog.json');
		const data = await response.json();

		const lastPage = Math.floor(data.totalCount / 6) + (data.totalCount % 6 === 0 ? 0 : 1);
		let startIndex = 6 * (pageNumber - 1);
		let currentPageBlogs = data.blogs.slice(startIndex, startIndex + 6);

		return { props: { ...data, currentPage: pageNumber, lastPage, blogs: currentPageBlogs } };
	}
</script>

<script lang="ts">
	import { DateTime, Duration } from 'luxon';
	import { PfHeader, PfCard, PfButton } from '@propfull/kit';

	export let blogs;
	export let count;
	export let totalCount;
	export let currentPage;
	export let lastPage;
</script>

<svelte:head>
	<title>@mrsauravsahu/blog</title>
</svelte:head>

<section class="container blogs">
	<h1>blog</h1>
	<p>
		Here are few of the things that I learned in my 10-ish years of programming/learning journey.
		Hope it's helpful to you as well. These blogs are usually dictated by what I'm upto...
	</p>
	<ul class="posts-container">
		{#each blogs as blog}
			<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
			<li>
				<a rel="prefetch" href="posts/{blog.id}">
					<div class="post">
						<div class="title">
							<h3>{blog.title}</h3>
						</div>
						<div class="content">
							<hr />
							<div class="blog-meta">
								<h4>{DateTime.fromISO(blog.createdAt).toRelative()}</h4>
								•
								<h4>
									{#if Duration.fromISO(blog.approxTimeToRead).minutes <= 1}
										less than a minute
									{:else}
										{`${Duration.fromISO(blog.approxTimeToRead).minutes} minutes`}
									{/if}
								</h4>
								<h4>read</h4>
							</div>
							{#if blog.description}{blog.description}{/if}
						</div>
					</div>
				</a>
			</li>
		{/each}
	</ul>
	<div class="page-container">
		{#if currentPage !== 1}
			<a href={`/blog/${currentPage - 1}`} disabled={currentPage === 1}> ⟵ </a>
		{/if}
		&nbsp; {currentPage} of {lastPage} &nbsp;
		{#if currentPage !== lastPage}
			<a href={`/blog/${currentPage + 1}`} disabled={currentPage === lastPage}> ⟶ </a>
		{/if}
	</div>
</section>

<style>
	.posts-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-top: 2rem;
	}

	.page-container {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.post {
		background-color: rgb(237, 237, 237);
		box-shadow: rgb(191, 191, 191) 0.25rem 0.25rem 0.25rem;
		height: 12rem;
		padding: 1rem;
		border-radius: 2rem;
	}

	ul {
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	li {
		list-style-type: none;
		text-decoration: none;
		margin-bottom: 2rem;
		width: 100%;
		min-height: 12rem;
	}

	.title,
	.content {
		padding: 0 1rem;
	}

	:global(.blogs .title h1) {
		margin-top: 0;
	}

	.blog-meta > h4 {
		display: inline;
	}

	.blog-meta {
		margin: 1rem 0;
	}

	hr {
		background-color: rgb(45, 45, 45);
		height: 0.0625rem;
		border: none;
		stroke-width: 0;
	}
	
	a {
		text-decoration: none;
	}

	@media only screen and (min-width: 48rem) {
		li {
			width: calc(50% - 1rem);
		}
	}
</style>
