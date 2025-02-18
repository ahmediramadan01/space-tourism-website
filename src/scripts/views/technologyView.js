import View from "./view.js";
import launchLandscape from "../../assets/images/technology/image-launch-vehicle-landscape.jpg";
import launchPortrait from "../../assets/images/technology/image-launch-vehicle-portrait.jpg";
import spaceportLandscape from "../../assets/images/technology/image-spaceport-landscape.jpg";
import spaceportPortrait from "../../assets/images/technology/image-spaceport-portrait.jpg";
import spaceLandscape from "../../assets/images/technology/image-space-capsule-landscape.jpg";
import spacePortrait from "../../assets/images/technology/image-space-capsule-portrait.jpg";

const imagesMap = {
	Launch: { landscape: launchLandscape, portrait: launchPortrait },
	Spaceport: { landscape: spaceportLandscape, portrait: spaceportPortrait },
	Space: { landscape: spaceLandscape, portrait: spacePortrait },
};

class TechnologyView extends View {
	_generateMarkup(data) {
		return `
    <section class="technology">
      <h1 class="primary-heading">
        <span class="primary-heading__num">03</span>
        <span class="primary-heading__text">Space launch 101</span>
      </h1>
      <div class="technology__content">
        <div class="technology__content-container">
          <ul class="technology__list">
            <li class="technology__item">
              <button data-index="0" class="technology__button ${data.name.split(" ")[0] === "Launch" ? "technology__active" : ""}">1</button>
            </li>
            <li class="technology__item">
              <button data-index="1" class="technology__button ${data.name.split(" ")[0] === "Spaceport" ? "technology__active" : ""}">2</button>
            </li>
            <li class="technology__item">
              <button data-index="2" class="technology__button ${data.name.split(" ")[0] === "Space" ? "technology__active" : ""}">3</button>
            </li>
          </ul>
          <div class="technology__text-container">
            <p class="technology__title">The terminology...</p>
            <p role="heading" class="technology__name">${data.name}</p>
            <p class="technology__description">
              ${data.description}
            </p>
          </div>
        </div>
        <picture>
          <source media="(max-width: 69.375em)" srcset="${imagesMap[data.name.split(" ")[0]].landscape}" />
          <img src="${imagesMap[data.name.split(" ")[0]].portrait}" alt="${data.name}'s image" class="technology__image" />
        </picture>
      </div>
    </section>
    `;
	}

	addHandlerRender(handler) {
		this._containerElement.addEventListener("click", function (event) {
			if (event.target.closest(".technology__button")) {
				const index = +event.target.closest(".technology__button").dataset
					.index;
				handler(index);
			}
		});
	}
}

export default new TechnologyView();
