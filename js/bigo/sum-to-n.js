// sum-to-n.js
// bion howard 16 april 2019
// why?: sum all numbers from 1 to n

var args = process.argv.slice(2)
const n = Number(args[0]);

const sumToLoop = n => {
  let total = 0;
  for (let i=1; i<= n; i++){
    console.log(`${total} plus ${i}`)
    total += i;
  }
  return total;
}

x = sumToLoop(n);
console.log(`loopy total of 1 to ${n} is ${x}`);

const sumToGauss = n => {
  return n * (n+1) / 2;
}

x = sumToGauss(n);
console.log(`multiplicative total of 1 to ${n} is ${x}`);
