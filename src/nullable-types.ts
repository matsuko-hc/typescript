export{};

//ある値を設定するときに、その値が確定しているとは限らない。
//例：ある人の年齢を設定したいが、現時点では正確にわからない。

let profile: {name: string; age: number| null} = {
	name:'Ann',
	age:null
}

//ユニオン型を使用することで局所的にnullを許容できる