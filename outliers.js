// given a string of numbers, the function will find the single outlier and 
// indicate which position the outlier is at within the string

function detectOutlierValue(str) {
  let arr = str.split(' ');

  odd = [];
  even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(i);
    } else {
      odd.push(i);
    }
  }

  let removable = [];
  if (odd.length > even.length) {
    removable = even;
  } else {
    removable = odd;
  }

  return parseInt(removable) + 1;
}

// testing
function assertEqual(actual, expected, testName) {
	if (actual === expected) {
		console.log('PASSED ['+ testName +']');
	} else {
		console.log('FAILED ['+ testName +']. Expected "'+ expected +'" but got "'+ actual +'"');
	}
}

assertEqual(detectOutlierValue('22 4 5 62 82'), 3, 'it indicated that the third value is the outlier')
