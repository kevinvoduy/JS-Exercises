let arr = [1,1,1,2,5];

function meanMedianMode(arr) {
  
  // to calculcate the mean we add up all the numbers
  // and divide by the length
  let mean = arr.reduce((prev, cur) => prev + cur) / arr.length;
  
  // to calculcate the median we need to sort the array 
  // and return the middle element
  arr = arr.sort();
  let median = arr[Math.floor(arr.length / 2)];
  
  // to get the mode we will store all the elements in a hash table 
  // and keep a count and also always maintain the largest count
  let mode = undefined;
  let hashTable = {};
  for (let i of arr) {
    hashTable[i] === undefined ? hashTable[i] = 1 : hashTable[i] += 1; 
    if (mode === undefined || hashTable[i] > mode) {
    mode = i; }
  }
  
return [mean, median, mode];
  
}

function assertEqual(actual, expected, testName) {
	if (actual === expected) {
		console.log('PASSED ['+ testName +']');
	} else {
		console.log('FAILED ['+ testName +']. Expected "'+ expected +'" but got "'+ actual +'"');
	}
}

assertEqual(meanMedianMode([1,1,1,2,5]), [2,1,1], 'to determine mean, median, and mode');