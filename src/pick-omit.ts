export{};

type DetailedProfile = {
	name: string;
	height: number;
	weight: number
}

type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};

//選択
type SimpleProfile = Pick <DetailedProfile, 'name' | 'weight' >;
//除外
type SmallProfile = Omit <DetailedProfile, 'height'>