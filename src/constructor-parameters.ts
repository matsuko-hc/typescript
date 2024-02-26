export{};

class Person {
	name: string;
	age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
}

let taro = new Person('Taro',20);
console.log(taro)

type PersonType = typeof Person;
type Profile = ConstructorParameters<PersonType>;
const profile: Profile = ["Ann",30];
const ann = new Person(...profile);
console.log(ann)

type ConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never;
