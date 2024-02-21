export{};

type Profile = {
	name: string;
	age: number;
}

type PartialProfile = Partial<Profile>
type PropertyTypes  = keyof Profile;

// type Optional<T> = {
//     [P in keyof T]?: T[P];
// };

type Optional<T> = {
    [P in keyof T]?: T[P] | null;
};
type OptionalProfile = Optional<Profile>

//mapped-type
//既存のオブジェクトの型を流用して、新たに型を定義することができる
//１個ずつプロパティを取り出して評価して、新たに別のオブジェクトを生成する
//⇨つまり、あるオブジェクトのプロパティの名前から型を作って、それを１個ずつ取り出している