let arr = [1, 1, 1, [3, 4, [8]], [5]];

function nestedArr(arr) {
	let result = 0;

	// sum all numbers in array
	for (let i = 0; i < arr.length; i++) {

		// if element is a nested array, sum it's elements
		if (typeof arr[i] !== 'number') {
			result += nestedArr(arr[i]);
		} else {
			result += arr[i];
		}
	}

	return result;
}

function assertEqual(actual, expected, testName) {
	if (actual === expected) {
		console.log('PASSED [' + testName + ']');
	} else {
		console.log('FAILED [' + testName + ']. Expected "' + expected + '", but got "' + actual +'"')
	}
}

assertEqual(nestedArr(arr), 23, 'sums all nested arrarys');