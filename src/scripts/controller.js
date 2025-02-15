import "../styles/main.scss";
import View from "./views/view.js";
import navigationView from "./views/navigationView.js";
import homeView from "./views/homeView.js";
import destinationView from "./views/destinationView.js";
import crewView from "./views/crewView.js";
import technologyView from "./views/technologyView.js";

const controlView = function () {
	const id = window.location.hash.slice(1);
	navigationView.renderActiveNav(id);

	switch (id) {
		case "home":
			homeView.render();
			break;
		case "destination":
			destinationView.render();
			break;
		case "crew":
			crewView.render();
			break;
		case "technology":
			technologyView.render();
			break;
		default:
			homeView.render();
			break;
	}
};

const init = function () {
	const view = new View();
	view.addHandlerRender(controlView);
};
init();
