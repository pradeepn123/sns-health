export default (Component,container) => {
	const appContainer = document.querySelector(container);
	if(appContainer) {
const instance = new Component({
	target: document.querySelector(container)
});
return instance;
}
}