/*
180 day Coding Challenge (83/180)
Link : https://www.codewars.com/kata/563b662a59afc2b5120000c6

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]


*/

// BARBAR ANSWER
function digitize(n) {
  return n.toString().split("").reverse().map(Number);
}

console.log(digitize(35231));
console.log(digitize(0));
