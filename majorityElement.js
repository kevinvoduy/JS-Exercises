 function majorityElement(arr) {

	let canidate = null;
	let count = 0;

	// 1. if canidate is null or count is = 0, set canidate to current element
	// 2. if canidate matches current element we increase the count
	// 3. if canidate does not match current element, decrease count by 1
	for (let i = 0; i < arr.length; i++) {
		if (canidate === null || count === 0) {
			canidate = arr[i];
			count = 1;
		} else if (arr[i] === canidate) {
			count++;
		} else {
			count--;
		}
	}

	// once we have a majority element we check
	// to make sure it occurs more than n/2 times
	count = 0;
	for (let el of arr) {
		if (el == canidate) {
			count++;
		}
	}

	return (count > Math.floor(arr.length / 2)) ? canidate : null;
}

function assertEqual(actual, expected, testName) {
	if (actual === expected) {
		console.log('Passed ['+ testName +']');
	} else {
		console.log('Failed ['+ testName +'". Expected "'+ expected +'" but got "'+ actual +'"');
	}
}

assertEqual(majorityElement([1,2,3,3,3,3,2,3,6]), 3, 'it returns 3 as the majority element');