const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    console.log(arr);
    let current = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = current;
  }
  return arr;
};

console.log("result", insertionSort([5, 4, 3, 2, 1, 6]));
