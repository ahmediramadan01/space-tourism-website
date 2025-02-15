import View from "./view.js";

class HomeView extends View {
	_generateMarkup() {
		return `
    <section class="home">
      <div class="home__text">
        <div role="heading" class="home__heading">
          <span class="home__heading--small">So, you want to travel to</span>
          <span class="home__heading--large">space</span>
        </div>
        <p class="home__description">
          Let's face it; if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we'll give you a truly out of this
          world experience!
        </p>
      </div>
      <div class="home__action">
        <a href="#destination" class="button button--home">Explore</a>
      </div>
    </section>
    `;
	}
}

export default new HomeView();
