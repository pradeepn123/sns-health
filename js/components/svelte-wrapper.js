export default (Component, container, propsEl) => {
	//component is a pre-compiled class
	//container is where you want to inject component
	//propEl pass prop when injecting

	const appContainer = document.querySelectorAll(container);
	return [...appContainer].map(appTarget => {
		let props = {};
		if (appTarget) {
			if (propsEl) {
				console.log(appTarget.querySelector(propsEl)?.innerHTML);
				props = JSON.parse(appTarget.querySelector(propsEl)?.innerHTML) || {}; //get json from the script id 
			}
			//inject component into container
			const instance = new Component({
				target: appTarget,
				props: {
					shopifyData: props?.data //pass the prop on data prop as default
				}
			});
			return instance;
		}
	})
}