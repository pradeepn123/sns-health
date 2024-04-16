<script>
  import ProductCardSkeleton from "SvelteComponents/product-card-skeleton.svelte";
  import ColletionFilterGroup from "SvelteComponents/collection-filter-group.svelte";
  import CollectionProductGrid from "SvelteComponents/collection-product-grid.svelte";
  import CollectionPagination from "SvelteComponents/collection-pagination.svelte";
  import Dropdown from "SvelteComponents/dropdown.svelte";

  export let apiPaginatedData = [];
  export let loading = false;
  export let firstFoldLoaded = false;
  export let disableBundleCheck = true;
  let variantData = [];
  let filteredVariants = [];
  let paginatedData = [];
  let totalPages = 0;
  let currentPage = 1;
  const productsPerPage = 24;
  let filterDrawerOpen = false;
  $:apiPaginatedData , setFilters();

  const setFilters = () => {
    apiPaginatedData.forEach((product) => {
      product.variants.nodes.forEach((variant) => {
        let show_in_bundle = variant.metafields[0]?.value || "false";
          show_in_bundle = "true"
          let image = variant.image?.src
            ? variant.image
            : product.featuredImage;
          let variantObj = {
            createdAt: product.createdAt,
            image: {
              width: image?.width,
              height: image?.height,
              alt: image?.altText,
              src: image?.src,
              id: image?.id.split("gid://shopify/ProductImage/")[1],
            },
            variants: [
              {
                compare_at_price: variant.compareAtPrice
                  ? variant.compareAtPrice.amount * 100
                  : "",
                price: variant.price.amount * 100,
                id: variant.id.split("gid://shopify/ProductVariant/")[1],
              },
            ],
            vendor: product.vendor,
            title: product.title + " - " + variant.title.replaceAll("/", "-"),
            tags: product.tags,
            metafields: product.metafield
              ? [
                  {
                    namespace: "okendo",
                    type: "json_string",
                    value: product.metafield?.value,
                    key: "summaryData",
                  },
                ]
              : [],
            link: product.onlineStoreUrl,
            handle: product.handle,
            skipFormatMoney: true,
            availableForSale: variant.availableForSale,
            quantityAvailable: variant.quantityAvailable,
            show_in_bundle
          };
          const brand = product.vendor?.toLowerCase();
          //populate filter
          if (filtersTemp["brand"].has(brand)) {
            filters["brand"][brand] = filters["brand"][brand] + 1;
          } else {
            filtersTemp["brand"].add(brand);
            filters["brand"][brand] = 1;
          }
          variantObj.brand = brand;

          const productType = product.productType.toLowerCase();
          if (filtersTemp["productType"].has(productType)) {
            filters["productType"][productType] =
              filters["productType"][productType] + 1;
          } else {
            filtersTemp["productType"].add(productType);
            filters["productType"][productType] = 1;
          }
          variantObj.productType = productType;

          product.tags.forEach((tag) => {
            let diet = null;
            if (tag.toLowerCase().includes("diet_")) {
              diet = tag.toLowerCase().split("diet_")[1];
              if (filtersTemp["diet"].has(diet)) {
                filters["diet"][diet] = filters["diet"][diet] + 1;
              } else {
                filtersTemp["diet"].add(diet);
                filters["diet"][diet] = 1;
              }
              variantObj.diet = diet;
            }
          });

          variant.selectedOptions.forEach((option) => {
            let flavor = null;
            if (
              option.name.toLowerCase() == "flavor" ||
              option.name.toLowerCase() == "flavour"
            ) {
              flavor = option.value.toLowerCase();
              if (filtersTemp["flavor"].has(flavor)) {
                filters["flavor"][flavor] = filters["flavor"][flavor] + 1;
              } else {
                filtersTemp["flavor"].add(flavor);
                filters["flavor"][flavor] = 1;
              }
              variantObj.flavor = flavor;
            }
          });
          variantData.push(variantObj);
        })
      });    
    variantData = variantData;
  }

  let appliedFilterObject = {
    brand: [],
    productType: [],
    diet: [],
    flavor: [],
    sortBy: "featured",
  };
  let sortNames = {
    "featured": "Featured",
    "top-rated": "Top rated",
    "title-ascending": "Title ascending",
    "title-descending": "Title descending",
    "price-ascending": "Price ascending",
    "price-descending": "Price descending",
    "created-ascending": "Created ascending",
    "created-descending": "Created descending",
  };
  let filterNames = {
    brand: "Brand",
    productType: "Product type",
    diet: "Diet",
    flavor: "Flavor"
  };

  let filtersTemp = {
    brand: new Set(),
    productType: new Set(),
    diet: new Set(),
    flavor: new Set(),
  };
  let filters = {
    brand: {},
    productType: {},
    diet: {},
    flavor: {},
  };


  //handling pagination
  function next() {
    currentPage < totalPages ? currentPage++ : totalPages;
    scrollToTop();
  }
  function previous() {
    currentPage > 1 ? currentPage-- : 1;
    scrollToTop();
  }

  function handlePagination(array) {
    return array.slice(
      (currentPage - 1) * productsPerPage,
      currentPage * productsPerPage,
    );
  }

  function scrollToTop() {
    const productGrid = "collection-grid";
    const header = '[data-section-type="header"]';
    const productGridElement = document.querySelector(productGrid);
    const headerHeight = document.querySelector(header)
    const y = productGridElement.getBoundingClientRect().y - headerHeight.getBoundingClientRect().height + window.pageYOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
  }

  //handle sort
  function handleSortClick(selectedValue) {
    scrollToTop();
    appliedFilterObject.sortBy = selectedValue;
    appliedFilterObject = appliedFilterObject;
  }

  //handle filter
  function handleFilterChange() {
    let hasFilter = false;
    let filterProducts = JSON.parse(JSON.stringify(variantData));
    Object.keys(appliedFilterObject).forEach((filter) => {
      if (filter != "sortBy" && appliedFilterObject[filter].length)
        hasFilter = true;
    });
    if (hasFilter) {
      filterProducts = filterProducts.filter((product) => {
        let qualified = true;
        Object.keys(appliedFilterObject).forEach((filter) => {
          if (filter != "sortBy" && appliedFilterObject[filter].length > 0) {
            qualified =
              qualified &&
              appliedFilterObject[filter].includes(product[filter]);
          }
        });
        return qualified;
      });
    }
    switch (appliedFilterObject["sortBy"]) {
      case "top-rated":
        filterProducts.sort((a, b) => {
          if (!a.metafields[0]) {
            return 1;
          } else if (!b.metafields[0]) {
            return -1;
          } else {
            const aValue = JSON.parse(
              a.metafields[0]?.value,
            )?.reviewAverageValue;
            const bValue = JSON.parse(
              b.metafields[0]?.value,
            )?.reviewAverageValue;
            return bValue - aValue;
          }
        });
        break;
      case "title-ascending":
        filterProducts.sort((a, b) => {
          return a.handle < b.handle ? -1 : a.handle > b.handle ? 1 : 0;
        });
        break;
      case "title-descending":
        filterProducts.sort((a, b) => {
          return a.handle < b.handle ? 1 : a.handle > b.handle ? -1 : 0;
        });
        break;
      case "price-ascending":
        filterProducts.sort((a, b) => {
          return a.variants[0].price < b.variants[0].price
            ? -1
            : a.variants[0].price > b.variants[0].price
              ? 1
              : 0;
        });
        break;
      case "price-descending":
        filterProducts.sort((a, b) => {
          return a.variants[0].price > b.variants[0].price
            ? -1
            : a.variants[0].price < b.variants[0].price
              ? 1
              : 0;
        });
        break;
      case "created-ascending":
        filterProducts.sort((a, b) => {
          return new Date(a.createdAt) < new Date(b.createdAt)
            ? -1
            : new Date(a.createdAt) > new Date(b.createdAt)
              ? 1
              : 0;
        });
        break;
      case "created-descending":
        filterProducts.sort((a, b) => {
          return new Date(a.createdAt) > new Date(b.createdAt)
            ? -1
            : new Date(a.createdAt) < new Date(b.createdAt)
              ? 1
              : 0;
        });
        break;
    }
    filteredVariants = [...filterProducts];
    if (!loading) {
      const urlParams = new URLSearchParams(window.location.search);
      Object.keys(appliedFilterObject).forEach((filter) => {
        urlParams.has(filter)
          ? urlParams.set(filter, appliedFilterObject[filter])
          : urlParams.append(filter, appliedFilterObject[filter]);
      });
      history.replaceState(null, null, "?" + urlParams.toString());
    }
    currentPage = 1;
  }

  //update filter and sort on page load
  function updateFilterParams() {
    const params = JSON.parse(
      '{"' +
        decodeURI(new URLSearchParams(window.location.search))
          .replace(/"/g, '\\"')
          .replace(/&/g, '","')
          .replace(/=/g, '":"') +
        '"}',
    );
    Object.keys(appliedFilterObject).forEach((filter) => {
      if (filter != "sortBy") {
        appliedFilterObject[filter] = params[filter]
          ? decodeURIComponent(params[filter]).replaceAll("+", " ").split(",")
          : [];
      } else {
        appliedFilterObject[filter] = params[filter] || "featured";
      }
    });
    handleFilterChange();
  }

  //update product count of filters when a filter is applied
  function updateFilterCount() {
    let availableFilters = {};
    let filtersTemp2 = {};
    Object.keys(filters).forEach((filter) => {
      if (appliedFilterObject[filter].length == 0) {
        availableFilters[filter] = {};
        filtersTemp2[filter] = new Set();
      }
    });
    Object.keys(availableFilters).forEach((filter) => {
      //calculate the count of products for the applied filters Vs the available filters
      filteredVariants.forEach((product) => {
        if (filtersTemp2[filter].has(product[filter])) {
          availableFilters[filter][product[filter]] =
            availableFilters[filter][product[filter]] + 1;
        } else if (product[filter]) {
          filtersTemp2[filter].add(product[filter]);
          availableFilters[filter][product[filter]] = 1;
        }
      });
      //update the count of products for the applied filters Vs the available filters to the rendered filter object
      Object.keys(filters[filter]).forEach((realfilter) => {
        if (availableFilters[filter][realfilter]) {
          filters[filter][realfilter] = availableFilters[filter][realfilter];
        } else {
          filters[filter][realfilter] = 0;
        }
      });
    });
    // console.log('remaining filters and count' , availableFilters, 'updated filters and count', filters);
  }

  $: selectedSort = appliedFilterObject["sortBy"];
  $: appliedFilterObject && handleFilterChange();
  // $: !loading && updateFilterParams();
  $: totalProducts = filteredVariants.length;
  $: filteredVariants && updateFilterCount();
  $: paginatedData =
    firstFoldLoaded || currentPage ? handlePagination(filteredVariants) : null;
  $: totalPages = Math.ceil(totalProducts / productsPerPage);
  $: console.log(filters);

  const sortDropdownData = {
    options: sortNames,
    title: "Sort by:",
    wrapperClass: "collection-dropdown",
    changeCallBack: handleSortClick,
    openIcon: `<svg xmlns="http://www.w3.org/2000/svg"  width="10" height="6" viewBox="0 0 10 6" fill="none"> <path d="M7.69922 1.33032L4.69922 4.33032L1.69922 1.33032" stroke="black" stroke-width="1.875" stroke-linecap="square"/> </svg>`,
    closeIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none"> <path d="M7.69922 1.33032L4.69922 4.33032L1.69922 1.33032" stroke="black" stroke-width="1.875" stroke-linecap="square"/> </svg>`,
  };

  function toggleFilterDrawer() {
    filterDrawerOpen = !filterDrawerOpen;
  }

  $: if(!filterDrawerOpen) {
    document.body.style.overflow = "unset" 
    document.body.style.height = "unset"
  } else {
    document.body.style.overflow = "hidden"
    document.body.style.height = "100vh"
  } 
</script>

<div>
  <style>
    /* remove once actual css is done */
    .custom-filter label {
      display: flex;
      gap: 0.5rem;
    }
    .custom-filter div[slot="content"] {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  </style>
  {#if firstFoldLoaded}
    <div class="layout container">
      <div class="layout__section layout__section--secondary">
        {#key loading}
          <ColletionFilterGroup {filters} {loading} {filterDrawerOpen} {toggleFilterDrawer} {filterNames} bind:appliedFilterObject />
        {/key}
      </div>
      <div class="layout__section">
        <div class="collection-product-grid-header">
          <button class="collection-filter-toggle hidden-lap-and-up" on:click={toggleFilterDrawer}>
            <span class="collection__filter-icon">
              <svg focusable="false" class="icon icon--filter" viewBox="0 0 19 20" role="presentation">
                <path d="M17.0288086 4.01391602L11 9v7.0072021l-4 2.008545V9L1.01306152 4.01391602V1H17.0288086z" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="square"></path>
              </svg>
            </span>
            Filter
          </button>
          {#if paginatedData.length > 0}
          <span class="collection-filter-products-count"
            >Showing {(currentPage - 1) * productsPerPage + 1} - {currentPage ==
            totalPages
              ? filteredVariants.length
              : currentPage * productsPerPage} of {#if !loading}{totalProducts}{:else}<span
                class="skeleton-loader"
              ></span>{/if} products</span
          >
          <div class="collection__sort">
            <Dropdown dropdownData={sortDropdownData} />
          </div>
          {/if}
        </div>
        {#if paginatedData.length == 0}
          <h1>Search results not found</h1>
        {:else}
          <CollectionProductGrid products={paginatedData} />
          <CollectionPagination {totalPages} bind:currentPage {next} {previous} {scrollToTop} />
        {/if}
      </div>
    </div>
  {:else}
  <div class="layout container">
    <div class="layout__section layout__section--secondary skeleton-box"></div>
    <div class="layout__section">
      <div class="collection-product-grid-header">
        <div class="skeleton-box collection-skeleton-header"></div>
        <div class="skeleton-box collection-skeleton-header"></div>
      </div>
      <div class="product-list--collection product-list--custom">
        {#each Array(20) as _, i}
        <ProductCardSkeleton />
      {/each}
      </div>
    </div>
  </div>
  {/if}
</div>
