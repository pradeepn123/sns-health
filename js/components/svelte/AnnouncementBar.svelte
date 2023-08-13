<script>
  import { onMount } from 'svelte';
  import { customerLocation } from 'JsComponents/get-data';

  let country = null;

  onMount(async () => {
    country = await customerLocation();
  });
   
</script>

<h1>Hello {country}!</h1>

