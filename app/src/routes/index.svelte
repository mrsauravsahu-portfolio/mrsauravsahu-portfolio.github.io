<script lang="ts" context="module">
	export async function load({ fetch }) {
		const response = await fetch('/blog.json');
		const data: { blogs: any[] } = await response.json();
		// Get latest 3 blogs
		let currentPageBlogs = data.blogs.slice(0, 3);
		return { props: { recentBlogs: currentPageBlogs } };
	}
</script>

<script lang="ts">
	import BlogPost from '../components/blog-post.svelte';
	export let recentBlogs: any[];
	import Icon from 'svelte-awesome/components/Icon.svelte';
	import {
		faYoutube,
		faTwitter,
		faGithub,
		faLinkedin,
		faInstagram,
		faUnsplash
	} from '@fortawesome/free-brands-svg-icons';
	import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';
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

<section class="blog" id="blog">
	<h1>recent blogs</h1>
	<p>
		Well, I occassionally write things. You can also find these on your favorite blogging platforms,
		like <a href="https://mrsauravsahu.medium.com">medium</a>
		and <a href="https://dev.to/mrsauravsahu">dev.to</a>.
	</p>
	<div class="blog-posts">
		{#each recentBlogs as blog}
			<BlogPost {blog} />
		{/each}
	</div>
	<a role="button" href="/blog">read more ⟶</a>
</section>

<section class="contact" id="contact">
	<h1>contact</h1>
	<p>
		Here's how you can get in touch with me - links to all social media. I still don't understand Snapchat 😂 Most active on Github and
		Instagram; but you can send a quick email, or a pull request, or a direct message or a tweet...
		😝
	</p>
	<div class="contact-tiles">
		<a href="mailto:mrsauravsahu@outlook.com">
			<div>
				<Icon data={faEnvelopeOpen} scale={4} />
			</div>
		</a>
		<a href="https://youtube.com/channel/UCPWETNZS6Cu3X2fYnpME32g">
			<div>
				<Icon data={faYoutube} scale={4} />
			</div>
		</a>
		<a href="https://instagram.com/photosbysaurav">
			<div>
				<Icon data={faInstagram} scale={4} />
			</div>
		</a>
		<a href="https://twitter.com/mrsauravsahu">
			<div>
				<Icon data={faTwitter} scale={4} />
			</div>
		</a>
		<a href="https://github.com/mrsauravsahu">
			<div>
				<Icon data={faGithub} scale={4} />
			</div>
		</a>
		<a href="https://www.linkedin.com/in/mrsauravsahu">
			<div>
				<Icon data={faLinkedin} scale={4} />
			</div>
		</a>
		<a href="https://unsplash.com/mrsauravsahu">
			<div>
				<Icon data={faUnsplash} scale={4} />
			</div>
		</a>
	</div>
</section>

<style>
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

	.bio > p {
		font-size: 4rem;
		font-weight: 100;
		margin: 4rem;
	}

	p {
		margin: 2rem 0;
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

	/* contact */
	.contact-tiles {
		padding: 6rem 0;
		display: flex;
		justify-content: space-evenly;
	}

	.contact a {
		transition: 0.2s ease-in-out transform;
	}

	.contact a:hover {
		transform: scale(1.25);
	}
</style>
