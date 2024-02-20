export{};
//ジェネリクス：汎用的なクラスやメソッドに対して、特定の型を紐づけるための仕組み

// const echo = (arg: number):number => {
// 	return arg;
// }

// const echo = (arg: string):string => {
// 	return arg;
// }

const echo = <T>(arg: T):T => {
	return arg;
}

console.log(echo<number>(100))
console.log(echo<string>('Hello'))
console.log(echo<boolean>(true))

class Mirror<T> {
	constructor(public value: T) {}
	echo(): T {
		return this.value;
	}
}
console.log(new Mirror<number>(123).echo())
console.log(new Mirror<string>('Hello J').echo())
console.log(new Mirror<boolean>(true).echo())