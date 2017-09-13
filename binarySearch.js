 function search(array, value) {
	return BinarySearch(array, value, 0, array.length);
}

function BinarySearch(values, target, start, end) {
	if (start > end) return null;

	let midpoint_index = Math.floor((start + end) / 2);
	let midpoint = values[midpoint_index];

	if (target === midpoint) {
		return midpoint_index;
	} else if (target > midpoint) {
		return BinarySearch(values, target, midpoint_index + 1, end);
	} else {
		return BinarySearch(values, target, start, midpoint_index - 1);
	}
}
 
search([1, 3, 16, 22, 31, 33, 34], 7);