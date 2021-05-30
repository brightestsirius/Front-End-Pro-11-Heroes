import {Hero} from './hero.js'
import {spidermanData} from './consts.js'


class SpiderMan extends Hero {
	constructor(data) {
		super(data);
	}
	btnFunc() {
        alert(`Hi, I'm ${this.name}`);
	}
}

export let spidermanHero = new SpiderMan(spidermanData);
console.log(spidermanHero);