/*
180 day Coding Challenge (75/180)
Link : https://www.codewars.com/kata/56269eb78ad2e4ced1000013

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square

*/

// BARBAR ANSWER

function findNextSquare(sq) {
  let root = Math.sqrt(sq);
  if (root % 1 == 0) {
    return (root + 1) ** 2;
  }
  return -1;
}

console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(114));

// ANOTHER ANSWER

function findNextSquare2(sq) {
  return Math.sqrt(sq) % 1 == 0 ? Math.pow(Math.sqrt(sq) + 1, 2) : -1;
}

console.log(findNextSquare2(121));
console.log(findNextSquare2(625));
console.log(findNextSquare2(114));
