export default class View {
	_containerElement;
	constructor() {
		this._containerElement = document.querySelector(".main");
	}

	_clearContainerElement() {
		this._containerElement.innerHTML = "";
	}

	render(data = "") {
		const markup = this._generateMarkup(data);

		this._clearContainerElement();

		this._containerElement.insertAdjacentHTML("afterbegin", markup);
	}

	addHandlerRender(handler) {
		["load", "hashchange"].forEach((event) =>
			window.addEventListener(event, handler),
		);
	}
}
