<script context="module">
	export async function preload() {
		const services = ["api", "parser"];

		const requestPromises = services.map(
			(service) =>
				new Promise(async (resolve) => {
					let connection = true;
					let responseJson = {};

					try {
						const response = await this.fetch(`http://${service}`);
						responseJson = await response.json();
					} catch (error) {
						connection = false;
					}

					resolve({
						serviceUrl: service,
						connection,
						body: responseJson,
					});
				})
		);

		const serviceData = await Promise.allSettled(requestPromises);
		return { serviceData };
	}
</script>

<script>
	export let serviceData;
</script>

<h1>Template Monorepo</h1>

<hr />
<h2>Services</h2>
<ul>
	{#each serviceData as service}
		<li>
			<div class="service-url">{service.value.serviceUrl}</div>
			<div>
				Connection: {service.value.connection ? "Alive" : "Could not establish"}
			</div>
			<div>Reported Service Name: {service.value.body.name ?? "Unknown"}</div>
		</li>
	{/each}
</ul>

<style>
	.service-url {
		font-weight: bold;
	}
</style>
