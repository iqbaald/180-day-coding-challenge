/*
180 day Coding Challenge (35/180)
Link : https://www.codewars.com/kata/56f69d9f9400f508fb000ba7
input --> output : 
10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 1 --> [1]
*/

// BARBAR ANSWER

function monkeyCount2(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }
  return [...result];
}

console.log(monkeyCount2(3));
console.log(monkeyCount2(5));
console.log(monkeyCount2(10));

// ARRAY FROM ANSWER
// Refference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from

const monkeyCount = (n) => Array.from({ length: n }, (_, i) => i + 1);

console.log(monkeyCount(3));
console.log(monkeyCount(5));
console.log(monkeyCount(10));

// ANOTHER ANSWER

const monkeyCount3 = (n) => {
  for (var i = 0, arr = []; i < n; arr.push(++i));
  return arr;
};

console.log(monkeyCount3(3));
console.log(monkeyCount3(5));
console.log(monkeyCount3(10));
