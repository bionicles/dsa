// radix sort groups integers into buckets by each power of 10 until done

const getDigit = (item, place) => {
  return Math.floor(Math.abs(item) / 10 ** place) % 10;
};

const countDigits = item => {
  if (item === 0) return 1;
  return Math.floor(Math.log10(Math.abs(item))) + 1;
};

const getLargestNumDigits = array => {
  let largest = 0;
  for (let i = 0; i < array.length; i++) {
    largest = Math.max(largest, countDigits(array[i]));
  }
  return largest;
};

const radixSort = array => {
  let numLoops = getLargestNumDigits(array);
  for (let i = 0; i < numLoops; i++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < array.length; j++) {
      let digit = getDigit(array[j], i);
      buckets[digit].push(array[j]);
    }
    array = [].concat(...buckets);
  }
  return array;
};

for (let k = 0; k < 5; k++) {
  let sample = [...Array(10)].map(_ => Math.ceil(Math.random() * 10000));
  console.log(k, radixSort(sample));
}
