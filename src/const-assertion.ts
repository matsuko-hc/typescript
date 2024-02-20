export{};

let name = "Ann";
name = "Mam";
let nickname = "Mam" as const
// nickname = "Ham";

let profile = {
	name:"AA",
	height:170
} as const
// profile.name = "BB" ;
// profile.height = 160;

//値を変えたくない場合は、as const を1箇所に書くだけで、readonlyになる。ネストされている全ての要素に使える。