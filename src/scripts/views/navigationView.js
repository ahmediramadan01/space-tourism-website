class NavigationView {
	#navLinks;
	#popoverNav;

	constructor() {
		this.#navLinks = document.querySelectorAll(".nav__link");
		this.#popoverNav = document.querySelector(".nav--popover");
	}

	renderActiveNav(id) {
		this.#navLinks.forEach((navLink) => {
			if (!id && navLink.closest(".nav__item [href='#home']")) {
				navLink.closest(".nav__item").classList.add("nav__active");
			} else if (navLink.getAttribute("href").slice(1) === id)
				navLink.closest(".nav__item").classList.add("nav__active");
			else navLink.closest(".nav__item").classList.remove("nav__active");
		});

		this.#popoverNav.hidePopover();
	}
}

export default new NavigationView();
