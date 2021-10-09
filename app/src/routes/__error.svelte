<script context="module">
export function load({ error, status }) {
		return {
			props: {
				error,
				status
			}
		};
	}
</script>

<script>
	export let error;
	export let status;

	const dev = process.env.NODE_ENV != 'production';
</script>

<section>
<h1>whoops, something went wrong!</h1>

{#if dev && error}
	<div>
		<p>{error.message}</p>
	</div>
{/if}
</section>