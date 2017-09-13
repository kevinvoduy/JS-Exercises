function removePairs(string) {

	// new string that will be returned
	let result = '';

	// loop through the entire string
	for (let i = 0; i < string.length; i++) {
		// if on last character
		if (i === string.length - 1) {
			result += string[i];
		}
		// characters are not equal then add to new string
		else if (string[i] !== string [i + 1]) {
			result += string[i];
		}
		// if adjacent characters are equal to each other
		// skip the next character entirely
		else {
			i += 1;
		}
	}

	return result;
}

function assertEqual(actual, expected, testName) {
	if (actual === expected) {
		console.log('PASSED ['+ testName +']');
	} else {
		console.log('FAILED ['+ testName +']. Expected "'+ expected +'" but got "'+ actual+'"');
	}
}

assertEqual(removePairs('there are two books'), 'there are two bks', 'removes the oo\'s from the string')