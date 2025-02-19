import View from "./view.js";
import moonPng from "../../assets/images/destination/image-moon.webp";
import moonWebp from "../../assets/images/destination/image-moon.webp";
import marsPng from "../../assets/images/destination/image-mars.webp";
import marsWebp from "../../assets/images/destination/image-mars.webp";
import europaPng from "../../assets/images/destination/image-europa.webp";
import europaWebp from "../../assets/images/destination/image-europa.webp";
import titanPng from "../../assets/images/destination/image-titan.webp";
import titanWebp from "../../assets/images/destination/image-titan.webp";

const imagesMap = {
	Moon: { png: moonPng, webp: moonWebp },
	Mars: { png: marsPng, webp: marsWebp },
	Europa: { png: europaPng, webp: europaWebp },
	Titan: { png: titanPng, webp: titanWebp },
};

class DestinationView extends View {
	constructor() {
		super();
		this._view = "destination";
	}

	_generateMarkup(data) {
		return `
    <section class="destination">
      <h1 class="primary-heading">
        <span class="primary-heading__num">01</span>
        <span class="primary-heading__text">Pick your destination</span>
      </h1>
      <div class="destination__content">
        <picture class="destination__image-container">
          <source srcset="${imagesMap[data.name].png}" type="image/png" />
          <source srcset="${imagesMap[data.name].webp}" type="image/webp" />
          <img
            src="${imagesMap[data.name].png}"
            alt="${data.name}'s image"
            class="destination__image" />
        </picture>
        <div class="destination__text-container">
            <ul class="destination__list">
              <li class="destination__item">
                <button data-index="0" class="destination__button ${data.name === "Moon" ? "destination__active" : ""}">
                  Moon
                </button>
              </li>
              <li class="destination__item">
                <button data-index="1" class="destination__button ${data.name === "Mars" ? "destination__active" : ""}">Mars</button>
              </li>
              <li class="destination__item">
                <button data-index="2" class="destination__button ${data.name === "Europa" ? "destination__active" : ""}">Europa</button>
              </li>
              <li class="destination__item">
                <button data-index="3" class="destination__button ${data.name === "Titan" ? "destination__active" : ""}">Titan</button>
              </li>
            </ul>
          <p role="heading" class="destination__title">${data.name}</p>
          <p class="destination__description">
            ${data.description}
          </p>
          <hr />
          <div class="destination__info">
            <div>
              <h3>AVG. DISTANCE</h3>
              <p>${data.distance}</p>
            </div>
            <div>
              <h3>Est. travel time</h3>
              <p>${data.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    `;
	}
}

export default new DestinationView();
