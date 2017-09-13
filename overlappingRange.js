function overlapping(range1, range2) {
	let overlap = [];

	// check whether each number within range 1
	// is within the numbers in range 2
	for (let i = range1[0]; i<= range1[1]; i++) {
		if (i >= range2[0] && i <= range2[1]) {
			overlap.push(i);
		}
	}
	return overlap;
}

function assertEqual(actual, expected, testName) {
	if (actual === expected) {
		console.log('Passed ['+ testName +']');
	} else {
		console.log('Failed ['+ testName +']. Expected "'+ expected +'" but got "'+ actual +'"');
	}
}

assertEqual(overlapping([5,10], [3,8]), [5,6,7,8], 'overlapping test: return [5,6,7,8]');
assertEqual(overlapping([5,10], [2,4]), null, 'ranges do not cross'