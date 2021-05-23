import {Hero} from './hero.js';
import {spidermanData} from './consts.js'
class spiderman extends Hero{
  constructor(data){
       super(data);
       this.deg=360;
    }
  btnFunc() {
		this.animation();
		alert(`I am ${this.name}`);
	}
  animation(){
  	this.deg=-this.deg;
  	let turning = [
  	        { transform: 'rotate(0deg)'},
            { transform: `rotate(${this.deg}deg)`}
          ];
          
          document.querySelector("#spiderman__logo").animate(
            turning, 
            {
            duration: 2000,
            iterations: Infinity
            }
          )
  }
}
export let spidermanHero = new spiderman(spidermanData);
