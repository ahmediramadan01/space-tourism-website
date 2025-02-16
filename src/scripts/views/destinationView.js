import View from "./view.js";
import moonImage1 from "../../assets/images/destination/image-moon.png";
import moonImage2 from "../../assets/images/destination/image-moon.webp";

class DestinationView extends View {
	_generateMarkup() {
		return `
    <section class="destination">
      <h1 class="primary-heading">
        <span class="primary-heading__num">01</span>
        <span class="primary-heading__text">Pick your destination</span>
      </h1>
      <div class="destination__content">
        <picture class="destination__image-container">
          <source srcset="${moonImage1}" type="image/png" />
          <source srcset=${moonImage2}" type="image/webp" />
          <img
            src="${moonImage1}"
            alt="Moon's image"
            class="destination__image" />
        </picture>
        <div class="destination__text-container">
          <nav class="destination__nav">
            <ul class="destination__list">
              <li class="destination__item">
                <a href="" class="destination__link destination__active">
                  Moon
                </a>
              </li>
              <li class="destination__item">
                <a href="" class="destination__link">Mars</a>
              </li>
              <li class="destination__item">
                <a href="" class="destination__link">Europa</a>
              </li>
              <li class="destination__item">
                <a href="" class="destination__link">Titan</a>
              </li>
            </ul>
          </nav>
          <h2 class="destination__title">Moon</h2>
          <p class="destination__description">
            See our planet as you've never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed.
            While you're there, take in some history by visiting the Luna 2
            and Apollo 11 landing sites.
          </p>
          <hr />
          <div class="destination__info">
            <div>
              <h3>AVG. DISTANCE</h3>
              <p>384,400 km</p>
            </div>
            <div>
              <h3>Est. travel time</h3>
              <p>3 days</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    `;
	}
}

export default new DestinationView();
