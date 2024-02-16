export{};

type Pitcher1 = {
	throwingspeed: number;
};

type Batter1 = {
	battingAverage: number;
}

const DaimajinSasaki: Pitcher1 = {
	throwingspeed: 154
};

const OchiaiHiromitsu: Batter1 = {
	// throwingspeed:154,
	battingAverage: 0.367
};

// type TwoWayPlayer = {
// 	throwingspeed: number;
// 	battingAverage: number;
// }

type TwoWayPlayer = Pitcher1 & Batter1;

const OtaniShouhei:TwoWayPlayer = {
	throwingspeed: 165,
	battingAverage: 0.286
}




//交差型（intersection型）既存の型を活かしつつ、新たな型を合理的に作っていく便利な方法
//複数の型をandで連結すれば型が合成できる
