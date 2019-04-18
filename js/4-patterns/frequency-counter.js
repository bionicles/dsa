// same - write a function which accepts two arrays
// and returns true if the 2nd array contains the square of all items in 1st

const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length){
    return false;
  };
  let counter1 = {};
  let counter2 = {};
  for (let val of arr1){
    counter1[val] = (counter1[val] || 0) + 1;
  }
  for (let val of arr2){
    counter2[val] = (counter2[val] || 0) + 1;
  }
  for (let key in counter1){
    if (!(key ** 2 in counter2)){
      return false;
    }
    if (counter2[key**2] !== counter1[key]){
      return false;
    }
  }
  return true;
};

const one = [1,2,3];
const two = [1,4,9];
const three = [1,1,1];

console.log(same(one, two)) // true
console.log(same(one, three)) // false

const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length){
    return false;
  };
  const lookup = {};
  for (let i = 0; i < str1.length; i++){
    let char = str1[i];
    // add char to lookup
    lookup[char] ? lookup[char] += 1 : lookup[char] = 1;
  }
  for (let i = 0; i < str2.length; i++){
    let char = str2[i];
    if (!lookup[char]){
      return false;
    } else {
      lookup[char] -= 1;
    }
    return true;
  }

};

console.log(isAnagram("one", "noe"));
console.log(isAnagram("one", "two"));
