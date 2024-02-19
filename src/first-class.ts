export{};

class Parson {
	name: string
	age: number
	constructor(name: string,age: number){
		this.name= name;
		this.age = age;
	}
	//constructorの戻り値に対応する型は書かないという決まり。constructorはreturnしないから。
	profile():string{
		return `name:${this.name},age${this.age}`
	}
}
let taro  = new Parson('Taro',30);
console.log(taro.profile())
// let hanako  = new Parson();