const compareNumbers = (num1, num2) => {
  return num1 - num2;
};

const arr1 = [6, 4, 15, 10];
const sorted1 = arr1.sort(compareNumbers);
console.log(sorted1);

const compareString = (str1, str2) => {
  return str1.length - str2.length;
};

const arr2 = ["steele", "colt", "data structures", "algorithms"];
const sorted2 = arr2.sort(compareString);
console.log(sorted2);
