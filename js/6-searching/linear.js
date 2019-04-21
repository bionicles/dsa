const search = (list, item) => {
  for (let i = 0; i < list.length; i++){
    if (list[i] === item) return i;
  }
  return -1;
}

const arr = ["alice", "bob", "chad", "dick", "eve"];

console.log(search(arr, "eve"));
console.log(search(arr, "fiona"));
