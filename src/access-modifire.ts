export{};

class Parson {
	public name: string
	// private age: number
	protected age: number
	protected nationality: string
	constructor(name: string,age: number,nationality:string){
		this.name= name;
		this.age = age;
		this.nationality = nationality;
	}
	//constructorの戻り値に対応する型は書かないという決まり。constructorはreturnしないから。
	profile():string{
		return `name:${this.name},age${this.age},nationality${this.nationality}`
	}
}

class Andoroid extends Parson {
	constructor(name: string,age: number,nationality:string){
		super(name,age,nationality)
	}
	profile():string{
		return `name:${this.name},age${this.age},nationality${this.nationality}`
	}
}

let taro  = new Parson('Taro',30,'Japan');
console.log(taro.profile())
// let hanako  = new Parson();

console.log(taro.name);
// console.log(taro.age);