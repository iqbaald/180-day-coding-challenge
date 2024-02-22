/*
180 day Coding Challenge (6/180)
Link : https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript
Question :Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". 
          Input will always be valid, i.e. no negative integers.
Input : countSheep(3)
Result : "1 sheep...2 sheep...3 sheep..."
*/

// BARBAR ANSWER
const countSheep = (num) => {
  let count = [];
  for (let i = 1; i <= num; i++) {
    count.push(`${i} sheep...`);
  }
  return count.join("");
};

console.log(countSheep(0));
console.log(countSheep(3));
console.log(countSheep(5));

// MAP ANSWER
// Reference .map() : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// Reference Spread operator : https://www.w3schools.com/howto/howto_js_spread_operator.asp

const countSheep2 = (num) => {
  return [...Array(num)].map((_, i) => `${++i} sheep...`).join("");
};

console.log(countSheep2(0));
console.log(countSheep2(3));
console.log(countSheep2(5));

// ONE LINE ANSWER

const countSheep3 = (num) =>
  [...Array(num)].map((_, i) => `${++i} sheep...`).join("");

console.log(countSheep3(0));
console.log(countSheep3(3));
console.log(countSheep3(5));
