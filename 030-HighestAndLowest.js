/*
180 day Coding Challenge (30/180)
Link : https://www.codewars.com/kata/554b4ac871d6813a03000035
*/

// BARBAR ANSWER

function highAndLow(numbers) {
  const high = [...numbers.split(" ")].sort((a, b) => b - a).shift();
  const low = [...numbers.split(" ")].sort((a, b) => a - b).shift();
  return `${high} ${low}`;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); //"42 -9"
console.log(highAndLow("1 2 3"));

// MIN() MAX() ANSWER
// Refference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min

function highAndLow2(numbers) {
  const num = numbers.split(" ");
  return `${Math.max(...num)} ${Math.min(...num)}`;
}

console.log(highAndLow2("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); //"42 -9"
console.log(highAndLow2("1 2 3"));
