import {Hero} from './hero.js';
import { captainMarvelData } from './consts.js';

class CaptainMarvel extends Hero{
    constructor(data) {
        super(data);    
    }

    addElement(){
        let popupBlock = document.createElement('div');
        popupBlock.classList.add(`popup__block`);
        popupBlock.innerHTML += `<p class="response">Hi, my name is ${this.name}!</p>`;
        return popupBlock;
    }

    btnFunc(){
        let popupBlockShow = document.querySelector('.popup__block');
        console.dir(popupBlockShow);
        popupBlockShow.classList.toggle('show');
    }
}

export let captainMarvelHero = new CaptainMarvel(captainMarvelData);

