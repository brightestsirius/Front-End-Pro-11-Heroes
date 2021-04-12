import {Hero} from './hero.js';
import {deadpoolData} from './consts.js';


class DeadPool extends Hero{
	constructor(data){
		super(data)
	}
	btnFunc() {
		let gifPictore = document.querySelector(`#${this.name}Gif`);
		gifPictore.style.height = '70px';
		gifPictore.src = `images/${this.img}.gif`
		gifPictore.classList.toggle(`show_hidden`)

		
		
	}

	addElement() {
		let divPicture = document.createElement('div');
		divPicture.classList.add(`block_picture`);
		let gifPicture = document.createElement('img');
		gifPicture.id = `${this.name}Gif`;
		gifPicture.classList.add(`show_hidden`)
		divPicture.append(gifPicture)
		return divPicture;
	}

}
export let deadPoolHero = new DeadPool(deadpoolData);