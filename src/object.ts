export{};
let profile1: Object = {
	name:'SAM'
}
profile1 = {
	birthyear:1999
}

let profile2: {
    name: string;
} = {name: 'AAA'}
// profile2 = {
// 	birthyear:1999
// }
profile2 = {
	name:'NIMO'
}
//型宣言
//変数に対してできるだけ揺るがない形を定義するのが理想的とされている
//想定外のデータの混入を防ぐことができる