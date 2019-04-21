// const factorialLoop = num => {
//   let total = 1;
//   for (let i = num; i > 1; i--){
//     total *= i;
//   }
//   return total;
// }

var args = process.argv.slice(2)
const n = parseInt(args[0]);

const factorial = num => {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(5));
console.log(factorial(n));
