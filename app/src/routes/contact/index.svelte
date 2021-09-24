<script lang="ts" context="module">
  export async function preload() {
    // Get contact data
    const contactUrl = "/data/contact.json";
    console.log(`Fetching contact data from: ${contactUrl}`);
    const contactResponse = await this.fetch(contactUrl);
    const { data: contact } = await contactResponse.json();
    return { contact };
  }
</script>

<script>
  export let contact = [];
  import { theme } from "../../stores/theme";

  import Contact from "../../pages/home/contact.svelte";
</script>

<svelte:head>
  <title>Contact</title>
</svelte:head>

<Contact theme={$theme} {contact} />
