<script>
    export let open = false;
    const openIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11 9H16V11H11V16H9V11H4V9H9V4H11V9Z" fill="black" fill-opacity="0.6"/>
                    </svg>`;
    const closeIcon = `<svg focusable="false" class="icon icon--minus" viewBox="0 0 10 2" role="presentation">
                    <path d="M10 0v2H0V0z" fill="currentColor"></path>
                    </svg>`;
    import { slide } from "svelte/transition";
    const handleClick = () => (open = !open);
</script>

<div class="accordion">
    <div class="header" on:click={handleClick}>
        <div class="text">
            <slot name="head"></slot>	
        </div>

        {#if open}
            <button>
                {@html closeIcon}
            </button>
        {:else}
            <button>
                {@html openIcon}
            </button>
        {/if}
    </div>

    {#if open}
        <div class="details" transition:slide>
            <slot name="details">
            </slot>
        </div>
    {/if}
</div>

<style>
    div.accordion {
        margin: 1rem 0;
    }

    div.header {
        display: flex;
        width: 100%;
    }

    div.header .text {
        flex: 1;
        margin-right: 5px;
    }

    div.details {
        background-color: #cecece;
        padding: 1rem;
    }
</style>
