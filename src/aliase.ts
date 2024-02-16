export{};
type Mojiretsu = string;


const fooString: string = 'Hello'
const fooMojiretsu: Mojiretsu = 'Hello'

const example1 = {
	name:'AA',
	age:3
};
type Profile = {
    name: string;
    age: number;
}

const example2: Profile = {
	name:'AA',
	age:3
};

type Profile2 = typeof example1
//example1の内容が変わったとしても追従できる
//一旦型を作ってしまえば、様々なところで利用できる
//エイリアス＝別名