var nj = require('numjs');

const binary = (sorted, item) => {
  let left = 0;
  let right = sorted.length - 1;
  let middle = Math.floor((left + right) / 2);
  while (sorted[middle] !== item && left <= right){
    if (item < sorted[middle]) right = middle - 1;
    else left = middle + 1;
    middle = Math.floor((left + right) / 2);
  }
  return (sorted[middle] === item) ? middle : -1;
}

const arr = nj.arange(0, 100, 2).tolist();
const pointer = binary(arr, 50);

console.log("pointer", pointer)
console.log("element", arr[pointer])
