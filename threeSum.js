function threeSum(arr, S) {

	// sort the array
	arr = arr.sort();

	// loop and check each element
	for (let i = 0; i < arr.length - 2; i++) {

		// start two pointers, one from the current position + 1
		// and the other at the end of the array
		let ptr_start = i + 1;
		let ptr_end = arr.length - 1;

		// check all other elements
		while (ptr_start < ptr_end) {

			let add = arr[i] + arr[ptr_start] + arr[ptr_end];

			// if we find a sum
			if (add === S) { return true }

			// if the sum is < S
			else if (add < S) { ptr_start++ }

			// otherwise the sum is > S
			else { ptr_end-- }
		}
	}

	return false;
}

// testing
function assertEqual(actual, expected, testName) {
	if (actual === expected) {
		console.log('PASSED [' + testName + ']')
	} else {
		console.lgo('FAILED [' + testName + ']. Expected "'+ expected +'" but got "'+ actual +'"');
	}
}

assertEqual(threeSum([1,1,3,4,5,6], 9), true, 'it found 3 ints that sum to S');