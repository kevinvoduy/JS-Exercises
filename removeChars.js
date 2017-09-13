function removeChars(arr, string) {

	// store characters of arr in hashTable
	var hashTable = {};
	for (let c of arr) {
		hashTable[c] = true;
	}

	// loop through the string and check if the character exists in
	// the hash table, if so, do not add it to the result string
	let result = '';
	for (let c of string) {
		if (hashTable[c] === undefined) {
			result += c;
		}
	}

	return result;
}

function assertEqual(actual, expected, testName) {
	if (actual === expected) {
		console.log('PASSED ['+ testName +']');
	} else {
		console.log('FAILED ['+ testName +']. Expected "'+ expected +'", but got "'+ actual +'"');
	}
}

assertEqual(removeChars(['h', 'e', 'w', 'o'], 'hello world'), 'll rld', 'removing chars');
removeChars(['h', 'e', 'w', 'o'], 'hello world');