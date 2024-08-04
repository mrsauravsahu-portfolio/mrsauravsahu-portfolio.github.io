<script lang="ts">
	import { DateTime, Duration } from 'luxon';
	import type { PageData } from './$types';
	import Icon from 'svelte-awesome/components/Icon.svelte';
	import { faBackward } from '@fortawesome/free-solid-svg-icons';
	import { faForward } from '@fortawesome/free-solid-svg-icons';
	export let data: PageData;
	$: ({ blogs, currentPage, lastPage } = data);
</script>

<svelte:head>
	<title>Blog</title>
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
				<a href={`posts/${blog.id}`}>
					<div class="post">
						<div class="title">
							<h2>{blog.title}</h2>
						</div>
						<hr />
						<div class="content">
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
			<a href={`${currentPage - 1}`}>
				<Icon data={faBackward} scale={1} style="color: black" />
			</a>
		{/if}
		&nbsp; {currentPage} of {lastPage} &nbsp;
		{#if currentPage !== lastPage}
			<a href={`${currentPage + 1}`}>
				<Icon data={faForward} scale={1} style="color: black" />
			</a>
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
		padding-bottom: 4rem;
	}

	.content {
		padding: 1rem;
		padding-top: 0;
	}

	.page-container > a {
		display: flex;
	}

	.post {
		/* box-shadow: rgb(191, 191, 191) 0.25rem 0.25rem 0.25rem; */
		height: 16rem;
		/* padding: 1rem; */
		background-color: #bbb;
		border-radius: 0.25rem;
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

	.title > h2 {
		padding: 2rem 1rem 1rem 1rem;
		margin: 0;
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
		width: 75%;
		height: 0.0125rem;
		border: none;
		stroke-width: 0;
	}

	a {
		text-decoration: none;
	}

	@media (min-width: 48rem) {
		li {
			width: calc(50% - 1rem);
		}
	}

	@media (max-width: 40rem) {
		.post {
			height: auto;
		}
	}
</style>
