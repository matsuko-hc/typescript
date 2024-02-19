export{};

//⇩シグネチャー
function double (value: string): string
function double (value: number): number

//シグネチャーは関数の実態の前に必ず書く。
//こういった構造の関数を書いていきますよ、といった宣言がシグネチャーになる。

function double (value: any ): any {
	console.log(typeof value)
	if(typeof value === 'number') {
		return value * 2;
	} else {
		return value + value;
	}
} 
//overloadでは関数の実態の方では型制約を行わない。全ての型を受け取れるようにany型で受け取る。型制約はシグネチャーで行っている

// function double (value: number):number {
// 	return value * 2;
// }

// function double (value: string):string {
// 	return value + value
// } 

console.log(double(100))
console.log(double('GO'))
// console.log(double(true))