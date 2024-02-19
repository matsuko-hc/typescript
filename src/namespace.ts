export{};

namespace Japanese {
	export class Person {
		constructor(public name: string){
		}
	}
}

namespace English{
	export class Person {
		constructor(public firstName: string, public middleName: string, public lastName: string){
		}
	}
}
const me = new Japanese.Person('Taro');
const me2 = new English.Person('Michael','Joseph','Jackson');
console.log(me.name)
console.log(me2)

namespace Japan {
	export namespace Tokyo{
		export class Person {
			constructor(public name: string){
			}
		}
	}
	export namespace Osaka{
		export class Person {
			constructor(public name: string){
			}
		}
	}
}
const me3 = new Japan.Tokyo.Person('Hanako');
console.log(me3.name)
const me4 = new Japan.Osaka.Person('Takoyaki');
console.log(me4.name)