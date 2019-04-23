const swap = (arr, i1, i2) => {
  let temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
};

const selectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let mindex = i;
    for (let j = i + 1; j < arr.length - i; j++) {
      if (arr[j] < arr[mindex]) mindex = j;
    }
    if (i !== mindex) {
      console.log(i, mindex);
      swap(arr, i, mindex);
    }
  }
  return arr;
};

const arr1 = [5, 4, 3, 2, 1];
console.log(selectionSort(arr1));
