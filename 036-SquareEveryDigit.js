/*
180 day Coding Challenge (36/180)
Link : https://www.codewars.com/kata/546e2562b03326a88e000020/
input --> output : 
9119 --> 811181 (92 is 81 and 12 is 1. (81-1-1-81))
765 --> 493625 (72 is 49, 62 is 36, and 52 is 25. (49-36-25))
*/

// BARBAR ANSWER

function squareDigits(num) {
  let result = [];
  let number = num.toString().split("");
  for (let i = 0; i < number.length; i++) {
    result.push(number[i] * number[i]);
  }

  return parseInt(result.join(""));
}

console.log(squareDigits(3212));
console.log(squareDigits(9119));

// ONELINE ANSWER

const squareDigits2 = (num) =>
  parseInt(
    num
      .toString()
      .split("")
      .map((acc) => acc * acc)
      .join("")
  );

console.log(squareDigits2(3212));
console.log(squareDigits2(9119));
