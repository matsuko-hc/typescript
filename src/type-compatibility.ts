export{};

let fooCompatible: any;
let barCompatible: string = 'Typescript';

console.log(typeof fooCompatible)
fooCompatible  = barCompatible
console.log(typeof fooCompatible)

let fooInCompatible: string;
let barInCompatible: number = 1;

// fooInCompatible = barInCompatible

let fooString: string;
let barString: string = 'string';
fooString = barString;

let fooStringLiteral : 'fooStringLiteral' = 'fooStringLiteral';
fooString  = fooStringLiteral;
//文字列リテラル型は文字列型の集合の一部となるので代入できる。

let fooNumber: number;
let fooNumberLiteral: 1976 = 1976; 
fooNumber = fooNumberLiteral;

interface Animal {
	age:number;
	name: string;
}

class Person {
	constructor(public age:number,public name: string){}
}

let me: Animal;
me = new Person(42,'AS');

//オブジェクトを代入できるかどうかに、そのオブジェクトの型は関係ない
//ただ、オブジェクト間の型の互換性の評価では、代入されるオブジェクトの内部で持つメンバーが関係してくる。

