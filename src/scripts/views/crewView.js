import View from "./view.js";
import douglasPng from "../../assets/images/crew/image-douglas-hurley.png";
import douglasWebp from "../../assets/images/crew/image-douglas-hurley.webp";
import markPng from "../../assets/images/crew/image-mark-shuttleworth.png";
import markWebp from "../../assets/images/crew/image-mark-shuttleworth.webp";
import victorPng from "../../assets/images/crew/image-victor-glover.png";
import victorWebp from "../../assets/images/crew/image-victor-glover.webp";
import anoushehPng from "../../assets/images/crew/image-anousheh-ansari.png";
import anoushehWebp from "../../assets/images/crew/image-anousheh-ansari.webp";

const imagesMap = {
	Douglas: { png: douglasPng, webp: douglasWebp },
	Mark: { png: markPng, webp: markWebp },
	Victor: { png: victorPng, webp: victorWebp },
	Anousheh: { png: anoushehPng, webp: anoushehWebp },
};

class CrewView extends View {
	_generateMarkup(data) {
		return `
    <section class="crew">
      <h1 class="primary-heading">
        <span class="primary-heading__num">02</span>
        <span class="primary-heading__text">Meet your crew</span>
      </h1>
      <div class="crew__content">
        <div class="crew__content-container">
          <div class="crew__text-container">
            <p class="crew__role">${data.role}</p>
            <p role="heading" class="crew__name">${data.name}</p>
            <p class="crew__bio">
              ${data.bio}
            </p>
          </div>
          <ul class="crew__list">
              <li class="crew__item"><button data-index="0" class="crew__button ${data.name.split(" ")[0] === "Douglas" ? "crew__active" : ""}"></button></li>
              <li class="crew__item"><button data-index="1" class="crew__button ${data.name.split(" ")[0] === "Mark" ? "crew__active" : ""}"></button></li>
              <li class="crew__item"><button data-index="2" class="crew__button ${data.name.split(" ")[0] === "Victor" ? "crew__active" : ""}"></button></li>
              <li class="crew__item"><button data-index="3" class="crew__button ${data.name.split(" ")[0] === "Anousheh" ? "crew__active" : ""}"></button></li>
          </ul>
        </div>
        <picture class="crew__image-container">
          <source
            srcset="${imagesMap[data.name.split(" ")[0]].png}"
            type="image/png" />
          <source
            srcset="${imagesMap[data.name.split(" ")[0]].webp}"
            type="image/webp" />
          <img
            src="${imagesMap[data.name.split(" ")[0]].png}"
            alt="Douglas's image"
            class="crew__image" />
        </picture>
      </div>
    </section>
    `;
	}

	addHandlerRender(handler) {
		this._containerElement.addEventListener("click", function (event) {
			if (event.target.closest(".crew__button")) {
				const index = +event.target.closest(".crew__button").dataset.index;
				handler(index);
			}
		});
	}
}

export default new CrewView();
