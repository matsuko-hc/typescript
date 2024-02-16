export{};

const kansu = (): number=> {
	return 43
}

let numberAny: any = kansu()
let numberUnknown: unknown = kansu()

let sumAny = numberAny + 10;
// console.log(typeof numberUnknown)
// let numberUnknown = numberAny + 10;
if(typeof numberUnknown === 'number') {
	let sumUnknown = numberUnknown + 10;
}
//typeofを用いてある特定の語であることを確認しながら、コードを安全に実行させる仕組みのことをタイプ(型)ガードと呼ぶ
//numberなのか、stringなのか、objectなのかよくわからないから、一旦ふわっと型をつけておきたい場合には暫定的にunknown型を使用する
//その後typeofを使用して型を絞っていく