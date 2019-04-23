const arr1 = [5, 6, 3, 9, 4, 1, 88, 2, -1];
const arr2 = [1, 2, 3, 4, 5, 6];

const swap = (arr, i1, i2) => {
  let temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
};

const bubbleSort = arr => {
  // console.log("");
  // console.log("sorting", arr);
  let sorted = false;
  let noSwaps; // creates a variable to decide if done early
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      // console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        noSwaps = false;
        swap(arr, j, j + 1);
      }
    }
    // console.log("pass complete");
    if (noSwaps) break;
  }
  return arr;
};

const sorted1 = bubbleSort(arr1);
console.log(sorted1);

const sorted2 = bubbleSort(arr2);
console.log(sorted2);
