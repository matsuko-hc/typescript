export{};
function error(message: string): never{
	throw new Error(message)
}

try {
	let result = error('エラーです')
	console.log(result)
} catch (error) {
	console.log({error})
}

let foo: void = undefined;
// let bar: never = undefined
let bar: never = error('only me');

//呼び元に戻ってこない関数の戻り値に対してのアノテーションはnerverと書く
//void型の値はundefindが含まれるが、never型には値という概念がないのでデータを代入するとエラーになる
//例外(エラー)を起こす関数についてはneverを指定しましょうねと決まっている。
