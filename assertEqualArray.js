function assertEqualArray(actual, expected, testName) {
	let areEqualLength = actual.length === expected.length;
	let areEqualItems = actual.every(function(item,i) {
		return item === expected[i];
	});

	if (areEqualItems && areEqualLength) {
		console.log('PASSED ['+ testName +']');
	} else {
		console.log('FAILED ['+ testName +']. Expected "'+ expected +'" but got "'+ actual +'"');
	}
}

assertEqualArray([1,2,3], [1,2,3], 'it should pass for equal arrays');