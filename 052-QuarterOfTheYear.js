/*
180 day Coding Challenge (52/180)
Link : https://www.codewars.com/kata/5ce9c1000bab0b001134f5af

quarterOf(3) ==> 1
quarterOf(5) ==> 2
quarterOf(8) ==> 3
quarterOf(11) ==> 4

*/

// BARBAR ANSWER

const quarterOf = (month) => {
  return Math.ceil(month / 3);
};

// const quarterOf = (month) => Math.ceil(month / 3);

console.log(quarterOf(3));
console.log(quarterOf(8));
console.log(quarterOf(11));
