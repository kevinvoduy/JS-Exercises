function isPrime(n) {
	// all numbers less than 2 are not prime
	if (n < 2) { return false; }

	// loop from 2 to root n
	for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {

		// check if (n mod i) is equal to 0, if so then there are
		// two numbers, a and b, that can multiply to give n
		if (n % i === 0) { return false; }
	}

	return true;
}

function assertEqual(actual, expected, testName) {
	if (actual === expected) {
		console.log('PASSED ['+ testName + ']');
	} else {
		console.log('FAILED ['+ testName +']. Expected "'+ expected +'", but got "'+ actual +'"');
	}
}

assertEqual(isPrime(2), false, 'less than two is not prime');
assertEqual(isPrime(5), true, 'five is prime');