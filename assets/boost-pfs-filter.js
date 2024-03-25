var onSale = false;
var soldOut = false;
var priceVaries = false;
var images = [];
var firstVariant = {};
var bundlesHTML = '';

// Override Settings
var boostPFSFilterConfig = {
    general: {
        limit: boostPFSConfig.custom.products_per_page,
        loadProductFirst: true,
        numberFilterTree: 2,
        filterTreeMobileStyle: 'style1'
        //showLimitList: '24,36,48'
    }
};

// Declare Templates
var boostPFSTemplate = {

    'saleLabelHtml': '<span class="product-label product-label--on-sale">' + boostPFSConfig.label.sale + '</span>',
    'tagLabelHtml': '<span class="product-label {{tagLabelClass}}">{{tagLabel}}</span>',
    'imageHtml': '<img class="{{imageClass}} lazyload image--blur-up" src="{{imageUrl}}" data-media-id="{{imageId}}" data-src="{{image_url}}" data-sizes="auto" alt="{{itemTitle}}">',
    'reviewHtml': '<a class="product-item__reviews-badge link" href="{{itemUrl}}#product-reviews"><span class="shopify-product-reviews-badge" data-id="{{itemId}}"></span></a>',

    // Grid Template
    'productGridItemHtml':  '<div class="product-item product-item--vertical 1/3--tablet-and-up {{gridWidthClass}} ">' +
                                '<div class="product-item__image-wrapper {{imageWrapperClass}}">' +
                                    '<a href="{{itemUrl}}" data-promotion-product-url data-js-click>' +
                                        '<div class="aspect-ratio {{imageAspectRatioClass}}" style="padding-bottom: {{imagePadding}}%">' +
                                            '{{itemImages}}' +
                                        '</div>' +
                                    '</a>' +
                                    '{{quickViewButton}}' + 
                                '</div>' +
                                '<div class="product-item__info">' +
                                    '{{itemInfoRow}}' +
                                    '<div class="product-item__info-inner">' +
                                        '{{itemInfo}}' +
                                        '{{itemReviews}}' +
                                        '{{itemInventory}}' +
                                    '</div>' +
                                    '{{itemQuickView}}' +
                                '</div>' +
                            '</div>',
    'quickViewButton': '<button type="button" class="product-item__quickview-button product-item__action-button {{quickViewButtonClass}} button button--small button--ternary hidden-phone" data-action="open-modal" data-secondary-action="open-quick-view" aria-controls="modal-quick-view-'+ boostPFSConfig.custom.template +'-template" data-product-url="{{itemUrl}}">' + boostPFSConfig.label.quick_view +  '</button>',

    //QuickView template
    'quickViewHtml':    '<form method="post" action="/cart/add" id="product_form_{{itemId}}" accept-charset="UTF-8" class="product-item__action-list {{quickViewClass}} button-stack" enctype="multipart/form-data">' +
                            '<input type="hidden" name="form_type" value="product">' +
                            '<input type="hidden" name="utf8" value="✓">' +
                            '<input type="hidden" name="quantity" value="1">' +
                            '<input type="hidden" name="id" value="{{variantId}}">' +
                            '{{quickBuy}}' +
                        '</form>',

    //QuickBuy Template
    'quickBuyHtml': '<button type="submit" class="product-item__action-button {{quickBuyButtonClass}} button button--small button--primary" data-action="add-to-cart">' + boostPFSConfig.label.add_to_cart + '</button>',
    'quickBuyChooseOptionsHtml': '<a type="button" class="product-item__action-button {{quickBuyButtonClass}} button button--small button--primary" href="{{itemUrl}}">' + boostPFSConfig.label.choose_options + '</a>',
    'quickBuySoldOutHtml': '<button class="product-item__action-button {{quickBuyButtonClass}} button button--small button--disabled" disabled>' + boostPFSConfig.label.sold_out + '</button>',

    // Pagination Template
    'pageItemPreviousHtml': '<a class="pagination__prev link" rel="prev" title="Previous"  href="{{itemUrl}}">' +
                                '<svg class="icon icon--arrow-left" viewBox="0 0 8 12" role="presentation">' +
                                    '<path stroke="currentColor" stroke-width="2" d="M6 10L2 6l4-4" fill="none" stroke-linecap="square"/>' +
                                '</svg>' +
                                boostPFSConfig.label.previous_page +
                            '</a>',
    'pageItemNextHtml': '<a class="pagination__next link" rel="next" title="Next" href="{{itemUrl}}">' +
                            boostPFSConfig.label.next_page +
                            '<svg class="icon icon--arrow-right" viewBox="0 0 8 12" role="presentation">' +
                                '<path stroke="currentColor" stroke-width="2" d="M2 2l4 4-4 4" fill="none" stroke-linecap="square"/>' +
                            '</svg>' +
                        '</a>',
    'pageItemHtml': '<a href="{{itemUrl}}" class="pagination__nav-item {{activeClass}}">{{itemTitle}}</a>',
    'paginateHtml': '<div class="pagination__inner">' +
                        '{{previous}}' +
                        '<div class="pagination__nav">' +
                            '{{pageItems}}' +
                        '</div>' +
                        '{{next}}' +
                    '</div>',

    // Sorting Template
    'sortingHtml':  '<button class="value-picker-button" id="sort-by-toggler" aria-haspopup="true" aria-expanded="false" aria-controls="boost-sort-by-selector" data-action="open-value-picker">' +
                        '<span class="hidden-tablet-and-up"></span>' +
                        '<span class="hidden-phone"></span>' +
                        '<svg class="icon icon--arrow-bottom" viewBox="0 0 12 8" role="presentation">' +
                            '<path stroke="currentColor" stroke-width="2" d="M10 2L6 6 2 2" fill="none" stroke-linecap="square"/>' +
                        '</svg>' +
                    '</button>' +
                    '<div id="boost-sort-by-selector" class="value-picker">' +
                        '<div class="value-picker__inner">' +
                            '<header class="value-picker__header">' +
                                '<span class="value-picker__title text--strong">' + boostPFSConfig.label.sorting + '</span>' +
                                '<button class="value-picker__close" data-action="close-value-picker" aria-controls="boost-sort-by-selector" aria-label="' + boostPFSConfig.label.sorting_accessibility_close + '">' +
                                    '<svg class="icon icon--close" viewBox="0 0 19 19" role="presentation">' +
                                        '<path d="M9.1923882 8.39339828l7.7781745-7.7781746 1.4142136 1.41421357-7.7781746 7.77817459 7.7781746 7.77817456L16.9705627 19l-7.7781745-7.7781746L1.41421356 19 0 17.5857864l7.7781746-7.77817456L0 2.02943725 1.41421356.61522369 9.1923882 8.39339828z" fill="currentColor" fill-rule="evenodd"></path>' +
                                    '</svg>' +
                                '</button>' +
                            '</header>'+
                            '<div class="value-picker__choice-list">' +
                                '{{sortingItems}}' +
                            '</div>' +
                        '</div>' +
                    '</div>',

    // Sorting Item Template
    'sortingItemHtml':  '<button class="value-picker__choice-item link {{sortingActiveClass}}" data-action="select-value" data-sort="{{sortingValue}}">' +
                            '{{sortingName}}' +
                            '<svg class="icon icon--check-2" viewBox="0 0 13 11" role="presentation">' +
                                '<path d="M1 4.166456L5.317719 9 12 1" stroke="currentColor" stroke-width="2" fill="none" fill-rule="evenodd"/>' +
                            '</svg>' +
                        '</button>',

    // Show Limit Template
    'showLimitHtml': '<label>' + boostPFSConfig.label.show_limit + '</label><select class="boost-pfs-filter-filter-dropdown">{{showLimitItems}}</select>',
    // Breadcrumb Template
    'breadcrumbHtml': '<a href="/">' + boostPFSConfig.label.breadcrumb_home + '</a> {{breadcrumbDivider}} {{breadcrumbItems}}',
    'breadcrumbDivider': '<span class="divider">/</span>',
    'breadcrumbItemLink': '<a href="{{itemLink}}">{{itemTitle}}</a>',
    'breadcrumbItemSelected': '<span>{{itemTitle}}</span>',
    // Show Limit Template
    'showLimitHtml':    '<button class="value-picker-button" aria-haspopup="true" aria-expanded="false" aria-controls="boost-display-by-selector" data-action="open-value-picker">'+ 
                            '<span class="hidden-phone"></span>' + 
                                '<svg focusable="false" class="icon icon--arrow-bottom" viewBox="0 0 12 8" role="presentation"><path stroke="currentColor" stroke-width="2" d="M10 2L6 6 2 2" fill="none" stroke-linecap="square"></path></svg>' + 
                        '</button>' +
                        '<div id="boost-display-by-selector" class="value-picker" aria-hidden="true">' + 
                            '<div class="value-picker__inner">' + 
                                '<header class="value-picker__header">' + 
                                    '<span class="value-picker__title text--strong">' + boostPFSConfig.label.display + '</span>' + 
                                    '<button class="value-picker__close" data-action="close-value-picker" aria-controls="boost-display-by-selector" aria-label="' + boostPFSConfig.label.sorting_accessibility_close + '">' + 
                                        '<svg focusable="false" class="icon icon--close" viewBox="0 0 19 19" role="presentation"><path d="M9.1923882 8.39339828l7.7781745-7.7781746 1.4142136 1.41421357-7.7781746 7.77817459 7.7781746 7.77817456L16.9705627 19l-7.7781745-7.7781746L1.41421356 19 0 17.5857864l7.7781746-7.77817456L0 2.02943725 1.41421356.61522369 9.1923882 8.39339828z" fill="currentColor" fill-rule="evenodd"></path></svg>' + 
                                    '</button>' + 
                                '</header>' + 
                                '<div class="value-picker__choice-list">{{showLimitItems}}</div>' + 
                            '</div>' + 
                        '</div>'
};

(function () { // Add this
    BoostPFS.inject(this); // Add this

    /**************** CUSTOMIZE DATA BEFORE BUILDING PRODUCT ITEM ****************/
    function prepareShopifyData(data) {
        // Displaying price base on the policy of Shopify, have to multiple by 100
        soldOut = !data.available; // Check a product is out of stock
        onSale = data.compare_at_price_min > data.price_min; // Check a product is on sale
        priceVaries = data.price_min != data.price_max; // Check a product has many prices
        // Convert images to array
        images = data?.images_info || data.images;
        // Get First Variant (selected_or_first_available_variant)
        if (data.variants && data.variants.length > 0) {
            firstVariant = data.variants[0];
            if (Utils.getParam('variant') !== null && Utils.getParam('variant') != '') {
                var paramVariant = data.variants.filter(function (e) {
                    return e.id == Utils.getParam('variant');
                });
                if (typeof paramVariant[0] !== 'undefined') firstVariant = paramVariant[0];
            } else {
                for (var i = 0; i < data.variants.length; i++) {
                    if (data.variants[i].available) {
                        firstVariant = data.variants[i];
                        break;
                    }
                }
            }
        }
        return data;
    }


    /***************************** BUILD PRODUCT LIST ****************************/
    // Build Product Grid Item
    ProductGridItem.prototype.compileTemplate = function (data, index) {
        if (!data) data = this.data;
        if (!index) index = this.index;
        // Get Template
        // Customize API data to get the Shopify data
        data = prepareShopifyData(data);
        const {
            images_info, 
            vendor,
            variants:productVariants,
            title,
            tags,
            metafields=[],
            variant_id,
            handle,
            link = '' } = data || {};
            const currentVariant = (typeof variant_id != 'undefined') ? productVariants.find(variant => variant.id == variant_id) : data.variants[0];
            const reviewMetafields = metafields.filter(metafield => metafield.namespace == 'okendo' && metafield.key == "summaryData")
        const curatedData = {
            image:images_info[0]|| false,
            variants: [{ compare_at_price: currentVariant.compare_at_price * 100, price:currentVariant.price * 100, id:currentVariant.id }],
            vendor,
            title: `${title}`,
            tags,
            metafields: reviewMetafields,
            link,
            handle,
            skipFormatMoney: true,
            discountPercentage: Math.round((((currentVariant.compare_at_price * 100) - (currentVariant.price * 100)) * 100) / (currentVariant.compare_at_price * 100))  ,
            addConversionRate: true
        }

        if(!variant_id) {
            curatedData["forceSeeOptions"] = true;
        }
        return `<custom-product-card>
        <div id="product-json" type="text/json" style="display: none">
        {
          "data": ${JSON.stringify(curatedData)}
        }
    </script>
    </custom-product-card>`;
    };

    
 

    /***************************** BUILD TOOLBAR *******************************/
    // Build Pagination
    ProductPaginationDefault.prototype.compileTemplate = function (totalProduct) {
        if (!totalProduct) totalProduct = this.totalProduct;
        // Get page info
        var currentPage = parseInt(Globals.queryParams.page);
        var totalPage = Math.ceil(totalProduct / Globals.queryParams.limit);



        if (totalPage > 1) {
            var paginationHtml = boostPFSTemplate.paginateHtml;
            // Build Previous
            var previousHtml = (currentPage > 1) ? boostPFSTemplate.pageItemPreviousHtml : '';
            previousHtml = previousHtml.replace(/{{itemUrl}}/g, Utils.buildToolbarLink('page', currentPage, currentPage - 1));
            paginationHtml = paginationHtml.replace(/{{previous}}/g, previousHtml);
            // Build Next
            var nextHtml = (currentPage < totalPage) ? boostPFSTemplate.pageItemNextHtml : '';
            nextHtml = nextHtml.replace(/{{itemUrl}}/g, Utils.buildToolbarLink('page', currentPage, currentPage + 1));
            paginationHtml = paginationHtml.replace(/{{next}}/g, nextHtml);
            // Create page items array
            var beforeCurrentPageArr = [];
            for (var iBefore = currentPage - 1; iBefore > currentPage - 3 && iBefore > 0; iBefore--) {
                beforeCurrentPageArr.unshift(iBefore);
            }
            if (currentPage - 4 > 0) {
                beforeCurrentPageArr.unshift('...');
            }
            if (currentPage - 4 >= 0) {
                beforeCurrentPageArr.unshift(1);
            }
            beforeCurrentPageArr.push(currentPage);
            var afterCurrentPageArr = [];
            for (var iAfter = currentPage + 1; iAfter < currentPage + 3 && iAfter <= totalPage; iAfter++) {
                afterCurrentPageArr.push(iAfter);
            }
            if (currentPage + 3 < totalPage) {
                afterCurrentPageArr.push('...');
            }
            if (currentPage + 3 <= totalPage) {
                afterCurrentPageArr.push(totalPage);
            }
            // Build page items
            var pageItemsHtml = '';
            var pageArr = beforeCurrentPageArr.concat(afterCurrentPageArr);
            for (var iPage = 0; iPage < pageArr.length; iPage++) {
                var activeClass = '';
                var pageLink = '';
                if (pageArr[iPage] == currentPage) {
                    activeClass = 'is-active';
                } else if (pageArr[iPage] != '...') {
                    activeClass = 'link';
                    pageLink = Utils.buildToolbarLink('page', currentPage, pageArr[iPage]);
                }
                pageItemsHtml += boostPFSTemplate.pageItemHtml;
                pageItemsHtml = pageItemsHtml.replace(/{{activeClass}}/g, activeClass);
                pageItemsHtml = pageItemsHtml.replace(/{{itemTitle}}/g, pageArr[iPage]);
                pageItemsHtml = pageItemsHtml.replace(/{{itemUrl}}/g, pageLink);
            }
            paginationHtml = paginationHtml.replace(/{{pageItems}}/g, pageItemsHtml);

            return paginationHtml;
        }

        return '';
    };

    // Build Sorting
    ProductSorting.prototype.compileTemplate = function () {
        if (boostPFSConfig.custom.show_sorting && boostPFSTemplate.hasOwnProperty('sortingHtml')) {
            //jQ(Selector.topSorting).html('');
            var sortingArr = Utils.getSortingList();
            if (sortingArr) {
                var paramSort = Globals.queryParams.sort || '';
                // Build content
                var sortingItemsHtml = ''
                this.activeName = '';
                for (var sortingValue in sortingArr) {
                    var sortingItemHtml = boostPFSTemplate.sortingItemHtml;
                    var activeClass = paramSort == sortingValue ? 'is-selected' : '';
                    var sortingName = sortingArr[sortingValue];
                    if (paramSort == sortingValue) this.activeName = sortingName;
                    sortingItemHtml = sortingItemHtml.replace(/{{sortingName}}/g, sortingName);
                    sortingItemHtml = sortingItemHtml.replace(/{{sortingValue}}/g, sortingValue);
                    sortingItemHtml = sortingItemHtml.replace(/{{sortingActiveClass}}/g, activeClass);
                    sortingItemsHtml += sortingItemHtml;
                }
                var html = boostPFSTemplate.sortingHtml.replace(/{{sortingItems}}/g, sortingItemsHtml);
                return html;
            }
        }
    };

    // Sorting render
    ProductSorting.prototype.render = function () {
        var $selectInput = jQ(Selector.topSorting);
        var paramSort = Globals.queryParams.sort || '';
        $selectInput.html(this.compileTemplate());

        if ($selectInput.hasClass("boost-pfs-filter-sort-active")) {
            $selectInput.toggleClass('boost-pfs-filter-sort-active');
        }
        var labelSort = '';
        var labelSortMobile = '';
        if (paramSort.length > 0 && this.activeName) {
            labelSort = boostPFSConfig.label.sorting + ": " + this.activeName;
        } else {
            labelSort = boostPFSConfig.label.sorting;
        }
      
        labelSortMobile = boostPFSConfig.label.sorting;

        jQ(Selector.topSorting + ' button span').text(labelSort);
        jQ(Selector.topSorting + ' button span.hidden-tablet-and-up').text(labelSortMobile);
    }

    // Build Sorting event
    ProductSorting.prototype.bindEvents = function () {
        var _this = this;
        jQ(Selector.topSorting + ' button.value-picker__choice-item').click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            FilterApi.setParam('sort', jQ(this).data('sort'));
            FilterApi.setParam('page', 1);
            FilterApi.applyFilter('sort');
        });
        jQ(Selector.topSorting + ' button.value-picker-button').click(function (e) {
            var expandedValue = jQ(this).attr('aria-expanded') == 'false' ? 'true' : 'false';
            var hiddenValue = jQ('#boost-sort-by-selector').attr('aria-hidden') == 'false' ? 'true' : 'false';
            jQ(this).attr('aria-expanded', expandedValue);
            jQ('#boost-sort-by-selector').attr('aria-hidden', hiddenValue);
        });
        jQ(document).on('click', function (e) {
            var valueButton = Selector.topSorting + " .value-picker-button";
            if (jQ(e.target).closest(valueButton).length === 0 && jQ(valueButton).eq(0).attr('aria-expanded') == 'true') {
                jQ(valueButton).trigger('click');
            }
      });
    };

    // Build Show Limit
    ProductLimit.prototype.compileTemplate = function() {
        if (boostPFSTemplate.hasOwnProperty('showLimitHtml')) {

            var numberList = Settings.getSettingValue('general.showLimitList');
            var iconHtml = '<svg focusable="false" class="icon icon--check-2" viewBox="0 0 13 11" role="presentation"><path d="M1 4.166456L5.317719 9 12 1" stroke="currentColor" stroke-width="2" fill="none" fill-rule="evenodd"></path></svg>';
            if (numberList != '') {
                // Build content
                var showLimitItemsHtml = '';
                var arr = numberList.split(',');
                for (var k = 0; k < arr.length; k++) {
                    if (arr[k] == Globals.queryParams.limit) {
                        showLimitItemsHtml += '<button class="value-picker__choice-item link is-selected" data-action="select-value" data-value="' + arr[k] + '">' + boostPFSConfig.label.page_size.replace(/{{page_size}}/g, arr[k]) + iconHtml + '</button>';
                    } else {
                        showLimitItemsHtml += '<button class="value-picker__choice-item link" data-action="select-value" data-value="' + arr[k] + '">' + boostPFSConfig.label.page_size.replace(/{{page_size}}/g, arr[k]) + iconHtml + '</button>';
                    }
                }
                var html = boostPFSTemplate.showLimitHtml.replace(/{{showLimitItems}}/g, showLimitItemsHtml);
                return html;
            }
        }
        return '';
    };

    // Build Limit render
    ProductLimit.prototype.render = function() {
        jQ(Selector.topShowLimit).html(this.compileTemplate());
        var $topLimitSelect = jQ(Selector.topShowLimit + ' .value-picker-button .hidden-phone');
        if ($topLimitSelect.length) {
            $topLimitSelect.html(boostPFSConfig.label.display + ': ' + boostPFSConfig.label.page_size.replace(/{{page_size}}/g, Globals.queryParams.limit));
        }
    }

    //Build Limit bindEvents
    ProductLimit.prototype.bindEvents = function() {
        jQ(Selector.topShowLimit + ' .value-picker__choice-item').click(function(e) {
            FilterApi.setParam('limit', jQ(this).data('value'));
            FilterApi.applyFilter();
        });
        jQ(Selector.topShowLimit + ' button.value-picker-button').click(function (e) {
            var expandedValue = jQ(this).attr('aria-expanded') == 'false' ? 'true' : 'false';
            var hiddenValue = jQ('#boost-display-by-selector').attr('aria-hidden') == 'false' ? 'true' : 'false';
            jQ(this).attr('aria-expanded', expandedValue);
            jQ('#boost-display-by-selector').attr('aria-hidden', hiddenValue);
        });
        jQ(document).on('click', function (e) {
            var valueButton = Selector.topShowLimit + " .value-picker-button";
            if (jQ(e.target).closest(valueButton).length === 0 && jQ(valueButton).eq(0).attr('aria-expanded') == 'true') {
                jQ(valueButton).trigger('click');
            }
        });
    }


    /************************ BUILD ADDITIONAL ELEMENTS *************************/
    // Add additional feature for product list, used commonly in customizing product list


    // Build additional elements
    FilterResult.prototype.afterRender = function (data, eventType) {
        if (!data) data = this.data;
        buildProductCount(data);
        buildSearchBreadcrumbs(data);
        // buildDisplayType();
        styleFilterIcon(data);
        // jQ('body').find('.boost-pfs-filter-skeleton-button').remove();
        // jQ('a.boost-pfs-filter-scroll-to-top[target="_blank"]').removeAttr('target');
    };

    function buildProductCount(data) {
        var fromProduct = (Globals.queryParams.page - 1) * Globals.queryParams.limit + 1;
        var toProduct = Math.min(fromProduct + (Globals.queryParams.limit - 1), data.total_product);
        var totalProduct = boostPFSConfig.label.showing_count.other;
        if (data.total_product == 1) {
            totalProduct = boostPFSConfig.label.showing_count.one;
        } else if (data.total_product == 0) {
            totalProduct = boostPFSConfig.label.showing_count.zero;
        }
        totalProduct = totalProduct.replace(/{{offset}}/g, fromProduct);
        totalProduct = totalProduct.replace(/{{page_size}}/g, toProduct);
        totalProduct = totalProduct.replace(/{{count}}/g, data.total_product);
        jQ('.boost-pfs-filter-total-product').each(function () {
            jQ(this).html(totalProduct);
        })
    }

    function buildSearchBreadcrumbs(data) {
        if (Globals.currentTerm) {
            var terms = Utils.escape(Globals.currentTerm.trim());
            var breadcrumbsText = boostPFSConfig.label.search_title_with_terms.replace(/{{terms}}/g, terms);
            jQ('.boost-pfs-breadcrumbs').each(function () {
                jQ(this).html(breadcrumbsText);
            })
        }
    }


    function styleFilterIcon(data) {
        var queryParams = Object.keys(Globals.queryParams);
        var prefix = Globals.queryParams['_'];
        var isFiltered = false;
        for (var i = 0; i < queryParams.length; i++) {
            var queryParam = queryParams[i];
            if (queryParam.startsWith(prefix)) {
                isFiltered = true;
                break;
            }
        }
        if (isFiltered) {
            jQ('.collection__filter-icon').addClass('collection__filter-icon--active');
        } else {
            jQ('.collection__filter-icon').removeClass('collection__filter-icon--active');
        }
    }



  
  FilterApi.beforeCall = function(eventType, eventInfo) {

      Globals.queryParams.h_options = []

        if(Shopify.country){
			let currentCountry = Shopify.country.toLowerCase();

             Globals.queryParams.h_options.push('exclude_'+ currentCountry);
		 }

    
  }

  

})(); // Add this at the end