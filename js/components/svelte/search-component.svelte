<script>
    import { onMount } from "svelte";
    import CollectionGrid from "./collection-grid.svelte";
    import {getSearchResult} from 'JsComponents/get-data';
     
    
    let apiPaginatedData = [];
    let loading = true;
    let firstFoldLoaded = false;
    let query = '';
    onMount(async() => {
        const searchUrl = window.location.search
        query = new URLSearchParams(searchUrl).get('q')
        const data = await getSearchResult(query,200);
         loading = false;
         firstFoldLoaded = true;
         const curatedData = data.data.search.edges.map(({node}) => node)
         console.log(curatedData, "curated Data")
        if(curatedData) {
            apiPaginatedData = curatedData;
        }
    });
</script>
<CollectionGrid loading={loading} firstFoldLoaded={firstFoldLoaded} apiPaginatedData={apiPaginatedData}  />