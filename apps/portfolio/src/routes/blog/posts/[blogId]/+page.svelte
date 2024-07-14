<script lang="ts">
	import { DateTime, Duration } from 'luxon';

	import Utterance from '../../../../components/utterance.svelte';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { urqlClient } from '../../../../setup/urql';

	export let data: PageData;
	$: ({ blogId } = data);

	let blog: any = null;
	let blogUrl = '';
	onMount(async () => {
		blog = (
			await urqlClient
				.query(
					`
			query ($blogId: Int!) {
			blogById(input: {
				id: $blogId
			}) {
				id
				title
				description
				createdAt
				approxTimeToRead
				coverImageUrl
			}
			}`,
					{ blogId: +blogId }
				)
				.toPromise()
		).data.blogById;
		blogUrl = `/api/blogs/${blog.id}/file`;
	});

	const duration = { minutes: 0 };
	// Duration.fromISO(blog.approxTimeToRead);
	const durationText = 'less than a minute';
	// duration.minutes <= 1 ? 'less than a minute' : `${duration.toFormat('m')} minutes`;
</script>

<svelte:head>
	<title>{blog?.title}</title>
</svelte:head>

<section class="blog-post">
	{#if blog}
		<h1>{blog.title}</h1>
		<h4>
			<span class="prefix"> Published on </span>
			{DateTime.fromISO(blog.createdAt).toFormat('EEEE, MMMM dd yyyy')}
			•
			{durationText}
			<span class="prefix">read</span>
		</h4>
		<!-- <a href={blogUrl}>
		<h2 type="h4">🔽 download raw</h2>
	</a> -->
		<!-- TODO: fix crawling without this extra anchor tag -->
		<!-- <a href={blogUrl} /> -->
		{#if blogUrl !== ''}
			<wc-markdown src={blogUrl} highlight />
		{/if}
		<!-- TODO: Theme switching without reloads -->
		<Utterance />
	{/if}
</section>

<style>
	section {
		width: 100%;
	}

	.prefix {
		font-weight: 100;
	}

	wc-markdown :global(:not(pre) > code) {
		background-color: rgb(var(--ss-accent));
		padding: 0.1rem 0.5rem;
		color: rgb(var(--ss-bg));
	}

	wc-markdown :global(pre) {
		font-size: var(--ss-base-font-size);
		font-family: 'Courier New', Courier, monospace;
	}

	wc-markdown :global(a) {
		color: rgb(150, 150, 150);
		font-weight: 800;
	}

	wc-markdown :global(img) {
		max-width: 100%;
		margin-bottom: 0.5rem;
		display: block;
	}

	a {
		all: unset;
		cursor: pointer;
	}

	@media (max-width: 40rem) {
		h1 {
			font-size: 2rem;
		}
	}
</style>
