/*
180 day Coding Challenge (37/180)
Link : https://www.codewars.com/kata/56dec885c54a926dcd001095
*/

// BARBAR ANSWER

const opposite = (number) =>
  number >= 0 ? Math.abs(number) * -1 : Math.abs(number) * 1;

console.log(opposite(1));
console.log(opposite(14));
console.log(opposite(-34));

// ANOTHER ANSWER

const opposite2 = (number) => -number;

console.log(opposite2(1));
console.log(opposite2(14));
console.log(opposite2(-34));
