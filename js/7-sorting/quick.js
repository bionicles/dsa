// quicksort.js
// sort by recursively swapping pivot items into correct positions

const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const pivot = (array, start = 0, end = array.length - 1) => {
  let pivotItem = array[start];
  let swapIndex = start;
  // swap items less than pivot item to the left, and track the number of swaps
  for (let i = start + 1; i <= end; i++) {
    if (pivotItem > array[i]) {
      swapIndex++;
      swap(array, swapIndex, i);
    }
  }
  // swap the pivot item into the middle position
  swap(array, start, swapIndex);
  return swapIndex;
};

const quickSort = (array, left = 0, right = array.length - 1) => {
  // base case array has only 1 item
  if (left < right) {
    // swap the pivot into the correct spot
    let pivotIndex = pivot(array, left, right);
    // recursively sort both sides
    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);
  }
  return array;
};

let sample = Array.apply(null, { length: 1000 }).map(
  Function.call,
  Math.random
);
console.log("results", quickSort(sample));
