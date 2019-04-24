const merge = (a1, a2) => {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < a1.length && j < a2.length) {
    if (a1[i] < a2[j]) {
      results.push(a1[i]);
      i++;
    } else {
      results.push(a2[j]);
      j++;
    }
  }
  while (i < a1.length) {
    results.push(a1[i]);
    i++;
  }
  while (j < a2.length) {
    results.push(a2[j]);
    j++;
  }
  return results;
};

const mergeSort = arr => {
  // base case
  if (arr.length <= 1) return arr;
  // recursively mergeSort left and right halves
  let middlePointer = Math.floor(arr.length / 2);
  let leftSlice = mergeSort(arr.slice(0, middlePointer));
  let rightSlice = mergeSort(arr.slice(middlePointer));
  return merge(leftSlice, rightSlice);
};

let sample = Array.apply(null, { length: 1000 }).map(
  Function.call,
  Math.random
);
console.log("results", mergeSort(sample));
