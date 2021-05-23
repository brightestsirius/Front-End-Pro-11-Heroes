import {Hero} from './hero.js';
import {spidermanData} from './consts.js'
class spiderman extends Hero{
  constructor(data){
       super(data);
    }
  btnFunc() {
		console.log(`Hello, ${this.name}`)
	}
}
export let spidermanHero = new spiderman(spidermanData);
