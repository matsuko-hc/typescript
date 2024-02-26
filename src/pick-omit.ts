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

// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

//除外
type SmallProfile = Omit <DetailedProfile, 'height'>

type MyOmit = Pick<DetailedProfile,'name' | 'weight'>;
type MySmallProfile = MyOmit