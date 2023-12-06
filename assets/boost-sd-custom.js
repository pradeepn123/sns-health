/*********************** Custom JS for Boost AI Search & Discovery  ************************/

// Filter API before call
window.__BoostCustomization__ = (window.__BoostCustomization__ ?? []).concat((registry) => {
  registry.useModulePlugin('FilterAPI', {
    name: 'Filter API before call',
    apply(builder) {
      builder.on('beforeMethodCall', 'get', (payload) => {
        
				 if(Shopify.country){
					 let currentCountry = Shopify.country.toLowerCase();
					 payload.args[0].h_options = payload.args[0].h_options || [];
	         payload.args[0].h_options.push('exclude_'+ currentCountry);
				 }
      });
    },
  });

  registry.useModulePlugin('SearchAPI', {
    name: 'Search API before call',
    apply(builder) {
      builder.on('beforeMethodCall', 'get', (payload) => {
        
				 if(Shopify.country){
					 let currentCountry = Shopify.country.toLowerCase();
					 payload.args[0].h_options = payload.args[0].h_options || [];
	         payload.args[0].h_options.push('exclude_'+ currentCountry);
				 }
      });
    },
  });
});