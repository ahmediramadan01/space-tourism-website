import "../styles/main.scss";
import { state } from "./model.js";
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
			destinationView.render(state.destinations[0]);
			break;
		case "crew":
			crewView.render(state.crew[0]);
			break;
		case "technology":
			technologyView.render(state.technology[0]);
			break;
		default:
			homeView.render();
			break;
	}
};

const controlDestination = function (index) {
	destinationView.render(state.destinations[index]);
};

const controlCrew = function (index) {
	crewView.render(state.crew[index]);
};

const controlTechnology = function (index) {
	technologyView.render(state.technology[index]);
};

const init = function () {
	const view = new View();
	view.addHandlerRender(controlView);

	destinationView.addHandlerRerender(controlDestination);

	crewView.addHandlerRerender(controlCrew);

	technologyView.addHandlerRerender(controlTechnology);
};
init();
