function findEvenIndex(arr) {
  var sum = 0, // Sum of whole array
    leftSum = 0; // init left sum

  // find sum of whole array
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  
  // sum is now right sum for index i
  for (var i = 0; i < arr.length; i++) {
    sum -= arr[i];

    if (leftSum === sum) {
      return i;
    }

    leftSum += arr[i];
  }
  
  // if no equilibirum found, return -1
  return -1;
}
