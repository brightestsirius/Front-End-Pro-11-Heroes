const antmanData = {
	name: "Ant-Man",
	info: "Ant-Man is a 2015 American superhero film based on the Marvel Comics characters of the same name: Scott Lang and Hank Pym.",
	img: "antman"
}

const heroesWrapper = document.querySelector("#heroesWrapper");

import {Hero} from './hero.js'
import {blackpantherHero} from './blackpanther.js'

let antmanHero = new Hero(antmanData);

console.log(antmanHero)