function firstNorepChar(string) {

	let hashTable = {};

	//store each character in the hash table with
	// the frequency of times it occurs
	for (let c of string) {
		if (hashTable[c] === undefined) {
			hashTable[c] = 1;
		} else {
			hashTable[c] += 1;
		}
	}

	// loop through string and return the first charater
	// with a count of 1 in the hashTable
	for (let c of string) {
		if (hashTable[c] === 1) {
			return c;
		}
	}

	// return -1 if no unique character exists
	return -1;
}

function assertEqual(actual, expected, testName) {
	if (actual === expected) {
		console.log('PASSED ['+ testName +']');
	} else {
		console.log('FAILED ['+ testName +']. Expected "'+ expected +'" but got "'+ actual +'"');
	}
}

assertEqual(firstNorepChar('aabbddcckdd'), 'k', 'prints k');
assertEqual(firstNorepChar('asdfk'), 'a', 'prints a');