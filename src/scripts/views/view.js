export default class View {
	#containerElement;
	constructor() {
		this.#containerElement = document.querySelector(".main");
	}

	_clearContainerElement() {
		this.#containerElement.innerHTML = "";
	}

	render() {
		const markup = this._generateMarkup();

		this._clearContainerElement();

		this.#containerElement.insertAdjacentHTML("afterbegin", markup);
	}

	addHandlerRender(handler) {
		["load", "hashchange"].forEach((event) =>
			window.addEventListener(event, handler),
		);
	}
}
