function map(arr, fn) {
	let result = [];

	// apply the function to each element and store the result
	for (let i of arr) {
		let applied = fn(i);
		result.push(applied);
	}

	return result;
}

// usage
let square = (x) => x * x;
let addZeros = (x) => parseInt(x += '00');

console.log(map([1,2,3,4], square));
console.log(map([1,2,3,4], addZeros));





function filter (arr, fn) {
	let result = [];

	// pass the element to the function and check
	// if the result comes back true
	for (let i of arr) {
		let check = fn(i);
		if (check) { result.push(i); }
	}

	return result;
}

// usage
let isPositive = (x) => x > 0;
console.log(filter([-2,-1,0,2,3,4], isPositive));