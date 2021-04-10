import { Hero } from './hero.js';

const wolverineData = {
	name: "Wolverine",
	info: "Wolverine is a 2015 American superhero film based on the Marvel Comics characters of the same name: Scott Lang and Hank Pym.",
	img: "wolverine"
}

class Wolverine extends Hero {
	constructor(data) {
		super(data);
    }
    
    btnFunc() {
        let popup = document.querySelector(`#${this.name}Popup`);
        popup.addEventListener('click', this.btnFunc.bind(this));

        if (popup.classList.length <= 1) {
            popup.classList.add("showPopup");
        } else if (popup.classList.contains("showPopup")){
            popup.classList.replace("showPopup", "hidePopup");
        } else if (popup.classList.contains("hidePopup")){
            popup.classList.replace("hidePopup", "showPopup");
        }
	}

    addElement() {
        let popup = document.createElement("div");
        popup.id = `${this.name}Popup`;
        popup.classList.add(`${this.name}WP`)
        return popup;
	}
}

export let wolverineHero = new Wolverine(wolverineData);
console.log(wolverineHero);