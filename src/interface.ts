export{};

type ObjectType = {
	name: string; 
	age: number
} ;

let object: ObjectType = {
	name:'AA',
	age:10
}


interface ObjectInterface {
	name: string; 
	age: number
}

let object2: ObjectInterface = {
	name:'AA',
	age:10
}

//interfaceという構文でもオブジェクト型に名前をつけることができた。アノテーションとして使用できる