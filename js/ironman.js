import { Hero } from './hero.js';

const ironmanData = {
	name: "Ironman",
	info: "Iron Man is a fictional superhero appearing in American comic books published by Marvel Comics. The character was co-created by writer and editor Stan Lee, developed by scripter Larry Lieber, and designed by artists Don Heck and Jack Kirby. ",
	img: "ironman"
}

class Ironman extends Hero {
	constructor(data) {
		super(data);
	}

	addElement() {
		let windowHello = document.createElement('div');
		windowHello.className = `hide_text`;
		windowHello.id = `draw_mes`;
		windowHello.innerHTML = `<p class="${this.name}Heroclass">Hello my name is ${this.name}. I Am Justice<p>`;
		return windowHello;
	}

	btnFunc() {
		let draw_windows = document.querySelector('#draw_mes');
		draw_windows.classList.toggle('hide_text');
	}
}

export let ironmanHero = new Ironman(ironmanData);
