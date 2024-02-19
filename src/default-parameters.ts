export{};

const nextYear = (current: number,rate: number = 1.1) => {
	return current * rate
}

console.log(nextYear(1000));