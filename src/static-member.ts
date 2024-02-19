export{};

//いつも決まった変化しないメンバを持たせたい場合に使用する。newによってわざわざ初期化しなくても変数にアクセスできるようにする

class Me {
	static isProgrammer: boolean = true;
	static firstName: string = "Taro";
	static lastName: string = "Yamamoto";

	static work(){
		return `Hey!${this.firstName}`
	}
}

// let me = new Me();
// console.log(me.isProgrammer);
//静的メンバへのアクセスはクラス名を書いてアクセスする
console.log(Me.isProgrammer)
console.log(Me.work())