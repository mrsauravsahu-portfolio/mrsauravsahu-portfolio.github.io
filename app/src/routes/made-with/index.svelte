<script context="module" lang="ts">
	export async function load({ fetch }) {
		const healthResponse = await fetch('/made-with/svc-health.json');
const health = await healthResponse.json();
		return { props: { health: health } };
	}
</script>

<script>
  export let health;
</script>

<svelte:head>
	<title>@mrsauravsahu/made-with</title>
</svelte:head>

<section>
  <h1>made with</h1>
  <p>Things that make this portfolio work. This portfolio uses a couple of services to get all the data required to create this site, and is built within Github Actions as a static site.</p>
  {#each health as svcHealth}
  <!-- add poweredBy property to health -->
  <!-- get versions for portfolio dynamically -->
  <h2>portfolio • v0.0.1 • SvelteKit</h2>
  <h2>{svcHealth.data.name} • {svcHealth.data.version} • .NET 5</h2>
  {/each}
</section>

<style>
  h2 > span {font-weight: 100;}
</style>