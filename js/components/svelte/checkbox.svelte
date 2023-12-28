<script>
    export let checked
    export let handler
</script>

<label>
	<input type="checkbox" bind:checked={checked} on:click={handler} />
    <slot name="content">
    </slot>	
</label>