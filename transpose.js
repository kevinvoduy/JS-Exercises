function transposeTwoStrings(arr) {

	// determine the size of the longest word
	let size = 0;
	if (arr[0].length > arr[1].length) {
		size = arr[0].length;
	} else {
		size = arr[1].length;
	}

	let result = [];
	for (let i = 0; i < size; i++) {
		let elem1 = ' ';
		let elem2 = ' ';

		if (typeof arr[0][i] !== 'undefined') elem1 = arr[0][i];
		if (typeof arr[1][i] !== 'undefined') elem2 = arr[1][i];

		console.log(elem1 + ' ' + elem2);
	}
}

transposeTwoStrings(['this', 'racetruck']);