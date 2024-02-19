export{};

//＊owner
//所有者
//初期化時に設定できる
//途中で変更できない
//参照できる

//＊secretnumber
//個人番号
//初期化時に設定できる
//途中で変更可能
//参照できない

class MyNumberCard {
	//_を用いたremameは慣習
	private _owner: string;
	private _secretnumber: number;
	constructor(owner: string, secretnumber: number){
		this._owner = owner;
		this._secretnumber = secretnumber;
	}
	//参照できる
	get owner(){
		return this._owner;
	}
	//途中で変更できる
	set secretnumber(secretnumber:number){
		this._secretnumber = secretnumber;
	}
	//デバッグ用のメソッド
	debugPrint(){
		return `secretnumber:${this._secretnumber}`
	}
}

let card = new MyNumberCard('Taro',123456789);
// card.owner  = 'Hanako'
console.log(card.owner)

card.secretnumber = 987654321
console.log(card.debugPrint())
// console.log(card.secretnumber)


