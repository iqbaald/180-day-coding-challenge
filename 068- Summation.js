/*
180 day Coding Challenge (68/180)
Link : https://www.codewars.com/kata/55d24f55d7dd296eb9000030

   2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

*/

// BARBAR ANSWER

const summation = (num) => {
  let number = 0;
  for (let i = 0; i <= num; i++) {
    number += i;
  }
  return number;
};

console.log(summation(2));
console.log(summation(8));
console.log(summation(100));

// ANOTHER ANSWER
// const summation = (num) => {
//     return ((1 + num) * num) / 2;
//   };
