export{};

interface Profile {
	name:string;
	underTwenty: boolean;
	[index: string]: string | number | boolean
}

let profile: Profile= {name: 'Ann',underTwenty:false};

profile.name = 'Ann';
profile.age = 22;
profile.nationarity = 'Japan';

//インデックスシグネチャーは、オブジェクトのインデックス（キーに該当する部分）をアノテーション(型注釈)するための署名のこと。
