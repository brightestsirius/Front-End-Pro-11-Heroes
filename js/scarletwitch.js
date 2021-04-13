import {Hero} from './hero.js';
import {scarletwitchData} from './consts.js'


class ScarletWitch extends Hero{
    constructor(data){
        super(data);
    }

    btnFunc() {
        let userName = prompt('What is your name?', 'baby');
		alert(`Hi, ${userName}! My name is ${this.name}`);
	}
}

export let scarletwitchHero = new ScarletWitch(scarletwitchData);
console.log(scarletwitchHero);