export{};

type Profile = {
	name: string;
	age: number;
}

const me: Profile = {
	name: "Ann",
	age: 22
};

me.age++;
console.log(me)

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
	name:'Shin',
	age:20
}
// friend.age++;

type Yomitori<T> = {
	readonly[P in keyof T]: T[P];
}
type YomitoriProfile = Yomitori<Profile>
