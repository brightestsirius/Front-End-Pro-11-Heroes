import {Hero} from './hero.js'

const blackpantherData = {
	name: "Black-panther",
	info: "Black-panther is a 2015 American superhero film based on the Marvel Comics characters of the same name: Scott Lang and Hank Pym.",
	img: "blackpanther",
	audio: "ISawHerStandingThere.mp3"
}

class BlackPanther extends Hero {
	constructor(data) {
		super(data);
	}
	btnFunc() {
		let music = document.querySelector(`#${this.name}Audio`);
		music.controls = true;
		music.play();
	}

	addElement() {
		let audio = document.createElement('audio');
		audio.id = `${this.name}Audio`;
		
		audio.style.width = '100%';
		let song = document.createElement('source');
		song.src = `./audio/${this.audio}`;
		audio.append(song);
		return audio;
	}
}

export let blackpantherHero = new BlackPanther(blackpantherData);
console.log(blackpantherHero);