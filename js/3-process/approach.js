// 1. understand - RIOSL
  // 1.1. can i Restate it in my own words?
  // 1.2. what are the Inputs?
  // 1.3. what are the Outputs?
  // 1.4. can i Solve it?
  // 1.5. how should i Label the pieces?

// 2. examples
  // (user stories, unit tests)
  // simple -> complex -> empty/invalid edge cases

// 3. break it down
// const charCount = char => {
  // make object to hold char counts
  // loop over each string
    // if char not alphanumeric, continue
    // if char not in object then add char to object
    // if char in object then increment char in object
  // return object with count of each char
// }

// helper
function isAlphanumeric(char) {
    return "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(char) > -1;
}

// 4. solve and simplify
const charCount = str => {
  // make object to hold char counts
  var output = {};
  // loop over each string
  for (let char of str){
    char.toLowerCase();
    // check if char alphanumeric
    if (/[a-z0-9]/.test(char)) {
    // if char in object then increment char in object
      if (output[char] > 0){
        output[char]++;
      }
      // if char not in object then add char to object
      else {
        output[char] = 1;
      }
    }
  }
  // return object with count of each char
  return output
}

console.log(charCount("correy is cool!!1"))

// 5. refactor
  // can you check it?
  // can you derive it differently?
  // can you understand it at a glance?
  // can you use it for another problem?
  // can you improve the performance?
  // can you think of other ways to refactor?
  // how have others solved this?
