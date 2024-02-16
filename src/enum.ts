export{};

enum Months {
	January = 1,
	February,
	March,
	April,
	May,
	June,
	July,
	August,
	September,
	October,
	Nobember,
	December
}

console.log(Months.January);
console.log(Months.February);

enum Colors {
	red = '#FF0000',
	white = '#FFFFFF',
	green = '#008000',
	blue = '#0000FF',
	black = '#000000'
}
let green = Colors.green;
console.log(green)

enum Colors {
	yellow = '#FFFF00'
}
let yellow = Colors.yellow;

//列挙型（enum型）は、数値や文字列を列挙する時にとても便利な型