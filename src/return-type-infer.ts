export{};
//関数の戻り値の型を返してくれる
function add (a: number,b: number) {
	return a + b;
} 

console.log(add(1,2));

type ReturnTypeFromAdd = ReturnType<typeof add>;

// type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
//前提：＜T extends (...args: any) => any> → Tは関数であることが制約される
//inferは条件の一部としてジェネリクス型を宣言できる
