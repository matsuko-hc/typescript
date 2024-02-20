export{};

// class Mahou {

// }

// class Sou {

// }

// class Taro extends Mahou,Sou {

// }

interface Ken {
	ionazun(): void;
}
interface Sen {
	kougeki(): void;
}

class Jiro implements Ken,Sen {
	ionazun(): void {
		console.log('io')
	}
	kougeki(): void {
		console.log('ko')
	}
}

const jiro  = new Jiro();
jiro.ionazun();
jiro.kougeki();