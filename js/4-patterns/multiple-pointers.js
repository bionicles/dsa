const sumZero = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right){
    let sum = arr[left] + arr[right];
    if (sum == 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0){
      right--;
    } else {
      left++;
    }
  }
  return false;
}

console.log(sumZero([-6,0,6,9]));
console.log(sumZero([-6,0,5,9]));

const countUniques = (arr) => {
  let left = 0;
  let right = 1;
  while (right < arr.length) {
    if (arr[left] == arr[right]){
      right++;
    } else {
      left++;
      arr[left] = arr[right]
    }
  }
  return left + 1;
}

console.log(countUniques([1,2,3,3]));
console.log(countUniques([1,1,1,1,2]));
console.log(countUniques([1,2,3,4,5]));
