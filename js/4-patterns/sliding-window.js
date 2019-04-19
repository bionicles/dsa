// nested loops are bad!
const maxSubarraySumLoop = (arr, size) => {
  if (size > arr.length) {
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - size + 1; i++){
    temp = 0;
    for (let j = 0; j < size; j++){
      temp += arr[i+j];
    }
    if (temp > max){
      max = temp;
    }
  }
  return max;
}

console.log(maxSubarraySumLoop([1,2,3,4,5,6,7], 3))
console.log(maxSubarraySumLoop([1,2,3,4,5,6,7], 2))

// sliding window O(N)!
const maxSubarraySumWindow = (arr, size) => {
  if (arr.length < size) return null;
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < size; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = size; i < arr.length; i++) {
    tempSum = tempSum - arr[i - size] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySumWindow([1,2,3,4,5,6,7], 3))
console.log(maxSubarraySumWindow([1,2,3,4,5,6,7], 2))
