/*
180 day Coding Challenge (40/180)
Link : https://www.codewars.com/kata/525f50e3b73515a6db000b83
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
*/

// BARBAR ANSWER

function createPhoneNumber(numbers) {
  let n1 = "";
  let n2 = "";
  let n3 = "";

  for (let i = 0; i < 3; i++) {
    n1 += numbers[i];
  }
  for (let j = 3; j < 6; j++) {
    n2 += numbers[j];
  }
  for (let j = 6; j < numbers.length; j++) {
    n3 += numbers[j];
  }
  return `(${n1}) ${n2}-${n3}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// REPLACE ANSWER

function createPhoneNumber2(numbers) {
  let format = "(xxx) xxx-xxxx";

  for (let i = 0; i < numbers.length; i++) {
    format = format.replace("x", numbers[i]);
  }

  return format;
}

console.log(createPhoneNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// REDUCE + REPLACE ANSWER

// const createPhoneNumber = (numbers) =>numbers.reduce((p, i) => p.replace("x", i), "(xxx) xxx-xxxx");
function createPhoneNumber3(numbers) {
  return numbers.reduce((p, i) => p.replace("x", i), "(xxx) xxx-xxxx");
}

console.log(createPhoneNumber3([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
