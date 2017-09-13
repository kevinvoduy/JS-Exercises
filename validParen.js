function matchingParens(string) {
  let counter = 0;
  for (let c of string) {
    if (c === '(') { counter += 1; } 
    if (c === ')') { counter -= 1; }
}
return (counter === 0) ? true : false;

function assertEqual(actual, expected, testName) {
	if (actual === expected) {
		console.log('PASSED ['+ testName +']');
	} else {
		console.log('FAILED [' + testName + ']. Expected "'+ expected +'", but got "'+ actual +'"');
	}
}

assertEqual(matchingParens('()()()())'), false, 'shows uneuqal parens');
assertEqual(matchingParens('()()()(())'), true, 'shows equal parens');