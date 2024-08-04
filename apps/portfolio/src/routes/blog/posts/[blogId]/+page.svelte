<script lang="ts">
	import { DateTime, Duration } from 'luxon';
	import { onMount } from 'svelte';
	import Utterance from '../../../../components/utterance.svelte';
	import type { PageData } from './$types';
	 import SvelteMarkdown from 'svelte-markdown'

	export let data: PageData;
	$: ({ blog, blogContent } = data);

	// Duration.fromISO(blog.approxTimeToRead);
	// const duration = { minutes: 0 };
	// const durationText = 'less than a minute';
	// duration.minutes <= 1 ? 'less than a minute' : `${duration.toFormat('m')} minutes`;
</script>

<svelte:head>
	<title>{blog?.title}</title>
</svelte:head>

<section class="blog-post">
	<!-- {#if blog} -->
		<h1>{blog.title}</h1>
		<h4>
			<span class="prefix"> Published on </span>
			{DateTime.fromISO(blog.createdAt).toFormat('EEEE, MMMM dd yyyy')}
			•
			<!-- {durationText} -->
			<span class="prefix">read</span>
		</h4>
		<!-- <a href={blogUrl}>
		<h2 type="h4">🔽 download raw</h2>
	</a> -->
		<!-- TODO: fix crawling without this extra anchor tag -->
		<!-- <a href={blogUrl} /> -->
		<!-- {#if blogUrl !== ''} -->
		 <!-- <p style='display: none;'>{blogContent}</p> -->
			<!-- <wc-markdown highlight>
				{blogRender}
			</wc-markdown> -->
			<SvelteMarkdown source={blogContent} />

		<!-- {/if} -->
		<!-- TODO: Theme switching without reloads -->
		<Utterance />
	<!-- {/if} -->
</section>

<style>
	section {
		width: 100%;
	}

	.prefix {
		font-weight: 100;
	}

	.blog-post {
		line-height: 1.8;
	}

	h1 {
		font-size: 2.5rem;
	}

	h4 {
		font-family: unset;
	}

	/*
	
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
	
	*/
</style>
