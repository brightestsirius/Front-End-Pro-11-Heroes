import {Hero} from './hero.js'
import {wonderwomanData} from './consts.js'

class WonderWoman extends Hero {
	constructor(data) {
		super(data);
	}

	btnFunc() {
		document.location.href = `${this.page}`;
	}
}

export let wonderwomanHero = new WonderWoman(wonderwomanData);
console.log(wonderwomanHero);