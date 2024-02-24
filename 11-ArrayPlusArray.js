/*
180 day Coding Challenge (10/180)
Link : https://www.codewars.com/kata/5a2be17aee1aaefe2a000151
Question : I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
Input : "I love arrays they are my favorite"
Output : ["I", "love", "arrays", "they", "are", "my", "favorite"]
*/

// BARBAR ANSWER

function arrayPlusArray(arr1, arr2) {
  let result = 0;
  const numbers = arr1.concat(arr2);
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }

  return result;
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));

// BARBAR PART2 ANSWER
// Refference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

function arrayPlusArray2(arr1, arr2) {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      total += arguments[i][j];
    }
  }
  return total;
}

console.log(arrayPlusArray2([1, 2, 3], [4, 5, 6]));

// REDUCE ANSWER + ONE LINE ANSWER
// Refference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const arrayPlusArray3 = (arr1, arr2) =>
  [...arr1, ...arr2].reduce((acc, curr) => acc + curr);

console.log(arrayPlusArray3([1, 2, 3], [4, 5, 6]));
