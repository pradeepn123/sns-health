export default (Component, container, propsEl) => {
	//component is a pre-compiled class
	//container is where you want to inject component
	//propEl pass prop when injecting

	const appContainer = document.querySelector(container);
	let props = {};
	if (appContainer) {
		if (propsEl) {
			console.log(document.querySelector(propsEl)?.innerHTML);
			props = JSON.parse(document.querySelector(propsEl)?.innerHTML) || {}; //get json from the script id 
		}
		//inject component into container
		const instance = new Component({
			target: document.querySelector(container),
			props: {
				shopifyData: props?.data //pass the prop on data prop as default
			}
		});
		return instance;
	}
}