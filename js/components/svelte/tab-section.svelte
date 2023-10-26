<script>
    import Accordion from "SvelteComponents/accordion.svelte";
    export let shopifyData;
    const tabsData = JSON.parse(JSON.stringify(shopifyData));
    const tabsTitle = Object.keys(shopifyData);
    let selectedKey = tabsTitle[0];
</script>

<div class="tab-section">
    <div class="tab-section__tabs tab-section--desktop">
        {#if tabsTitle.length >= 1}
            <div class="tab-section__tabs">
                {#each tabsTitle as tab}
                    <a
                        aria-label={tab.replace("_", " ")}
                        role="button"
                        class={`tab-section__tab-title ${
                            selectedKey == tab && "product-atb__button--active"
                        }`}
                        on:click={(ev) => {
                            selectedKey = tab;
                        }}>{tab.replace("_", " ")}</a
                    >
                {/each}
            </div>
            <div class="tab-section__tab-description">
                {@html tabsData[selectedKey]}
            </div>
        {/if}
    </div>
    <div class="tab-section__accordion tab-section--mobile">
        {#if tabsTitle.length >= 1}
            {#each tabsTitle as accordionTitle, index}
                <Accordion open={index == 0}>
                    <span slot="head">{accordionTitle.replace("_", " ")}</span>
                    <div slot="details">
                        {@html tabsData[accordionTitle]}
                    </div>
                </Accordion>
            {/each}
        {/if}
    </div>
</div>
