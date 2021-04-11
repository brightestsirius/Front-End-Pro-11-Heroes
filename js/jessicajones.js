import { Hero } from './hero.js';
import { jessicaJonesData } from './consts.js'


class JessicaJones extends Hero {
	constructor(data) {
		super(data)
        console.log(data);

	}
    

    addElement() {
        
        let progress = document.createElement("div");
        progress.id = `${this.name.replace(/ /g, "")}-progress`;
        progress.classList.add(`${this.name.replace(/ /g, "")}-progress-class`);
        return progress;
    }

	btnFunc() {
        document.querySelector(`#${this.name.replace(/ /g, "")}-progress`).innerHTML = `<h4> My Skills: </h4>
        
      <div class="progress">
        <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <p>Attack</p>
      <div class="progress">
        <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <p>Defence</p>
      <div class="progress">
        <div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <p>Creativity</p>
      <div class="progress">
        <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <p>Strength</p>
      `;

	}

   

}

export let jessicaJonesHero = new JessicaJones(jessicaJonesData);