export{};

//クラスのプロパティを読み取り専用にする際に利用する

class Visacard  {
	// readonly owner: string
	constructor(public readonly owner:string) {
		// this.owner = owner;
	}
}

let myVisaCard = new Visacard('Taro')
// myVisaCard.owner = 'Hanako'
console.log(myVisaCard.owner)