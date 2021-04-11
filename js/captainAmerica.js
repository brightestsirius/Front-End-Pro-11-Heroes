import { Hero } from './hero.js';
import { captainAmericaData } from './consts.js'

class CaptainAmerica extends Hero {
	constructor(data) {
		super(data)
	}

	btnFunc() {
		alert(`It is ${this.name}`);
	};
}

export let captainAmericaHero = new CaptainAmerica(captainAmericaData);
