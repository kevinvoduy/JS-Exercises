function threeVowels(string) {

	// split string into array of words
	let arr = string.split(' ');
	let count = 0;

	// this is the pattern we weill be searching for
	const pattern = /[aeiou]{3,}/gi;

	// loop through array of words
	for (let word of arr) {
		if (word.match(pattern) !== null) {
			count += 1;
		}
	}

	return count;
}

function assertEqual(actual, expected, testName) {
	if (actual === expected) {
		console.log('PASSED ['+ testName +']');
	} else {
		console.log('FAILED ['+ testName +']. Expected "'+ expected +'" but got "'+ actual +'"');
	}
}

assertEqual(threeVowels('ther asd aieo asdf'), 1, 'it counts string with 1 match');