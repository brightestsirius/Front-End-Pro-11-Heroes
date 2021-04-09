const antmanData = {
	name: "Ant-Man",
	info: "Ant-Man is a 2015 American superhero film based on the Marvel Comics characters of the same name: Scott Lang and Hank Pym.",
	img: "antman"
}

const heroesWrapper = document.querySelector("#heroesWrapper")

class Hero {
	constructor(data){
		this.createHero(data)
		this.renderHeroCard();
		// console.log(this.renderCard());
	}

	createHero(data){
		for (let key in data){
			this[key] = data[key]
		}
	}

	renderCard = ()=>"hello";


	renderHeroCard(){
		let btn = document.createElement('button');
		btn.className = "btn btn-primary";
		btn.innerHTML = "He, baby!";

		btn.addEventListener('click', this.btnFunc.bind(this));

		let divTop = document.createElement('div');
		divTop.className = `col-12 col-sm-6 col-md-4 col-lg-3`;

		let divCard = document.createElement('div');
		divCard.className = `card`;

		let divBody = document.createElement('div');
		divBody.className = `card-body`;

		divBody.innerHTML=`<h5 class="card-title">${this.name}</h5>
							<p class="card-text">${this.info}</p>`;
		divBody.append(btn);

		divCard.innerHTML = `<img src="images/${this.img}.svg" class="card-img-top" alt="${this.name}">`;
		divCard.append(divBody);

		divTop.append(divCard);

		heroesWrapper.append(divTop)
	}

	
	btnFunc() {
		console.log(`Hello, ${this.name}`)
	}
}


let antmanHero = new Hero(antmanData);
console.log(antmanHero)