import {Hero} from './hero.js'

const visionData = {
	name: "Vision",
	info: "The Vision is a fictional superhero appearing in American comic books published by Marvel Comics. Created by Roy Thomas and artist John Buscema.",
	img: "vision"
}
class Vision extends Hero{
    constructor(data){
        super(data)
    }
    
    btnFunc() {
        
          var visionTumbling = [
            { transform: 'rotate(0deg) translate3D(-20%, -20%, 0'}, 
            { transform: 'rotate(360deg) translate3D(-20%, -20%, 0)'}
          ];
          
          var visionTiming = {
            duration: 3000,
            iterations: Infinity
          }
          
          document.querySelector("#vision__logo").animate(
            visionTumbling, 
            visionTiming
          )
        
    }
}
export let visionHero = new Vision(visionData);


