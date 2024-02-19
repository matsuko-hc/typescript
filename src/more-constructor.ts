export{};

class Person {
	// public name: string;
	// protected age: number
	constructor(public name: string, protected age: number){
		//constructorメソッドの引数に関してアクセス修飾子をつけてあげることで自動で初期化処理を行うことができる。
		// this.name = name;
		// this.age = age
	}
}

const me = new Person('Taro',30)
console.log(me)