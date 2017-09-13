function flipper(input, N) {
  var result = '';
  
  // this is the patter we're matching for
  var re = new RegExp('.{1,' + N + '}', 'g');

  // create an array of the matched elements
  var splitArr = input.match(re);

  // for every element in array, reverse then join
  for (var i = 0; i < splitArr.length; i++) {
    result += splitArr[i].split('').reverse().join('');
  }

  // return result
  return result;
}

var input = 'a short example';
var output = flipper(input, 2);
console.log(output);