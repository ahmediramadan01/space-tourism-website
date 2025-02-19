export default class View {
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

	addHandlerRerender(handler) {
		this._containerElement.addEventListener("click", (event) => {
			if (event.target.closest(`.${this._view}__button`)) {
				const dataIndex = +event.target.closest(`.${this._view}__button`)
					.dataset.index;
				handler(dataIndex);
			}
		});
	}
}
