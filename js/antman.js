import { Hero } from "./hero.js";

const antmanData = {
	name: "Ant-Man",
	info: "Ant-Man is a 2015 American superhero film based on the Marvel Comics characters of the same name: Scott Lang and Hank Pym.",
	img: "antman"
}
class Antman extends Hero{
    constructor(data){
        super(data)
    }
}

export let antmanHero = new Antman(antmanData);

console.log(antmanHero);