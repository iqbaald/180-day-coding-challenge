/*
180 day Coding Challenge (48/180)
Link : https://www.codewars.com/kata/5656b6906de340bd1b0000ac

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

*/

// SET ANSWER
// Reference : https://builtin.com/software-engineering-perspectives/remove-duplicates-from-array-javascript

function longest(s1, s2) {
  return [...new Set(s1 + s2)].sort().join("");
}

const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("");

// aehrsty
console.log(longest("aretheyhere", "yestheyarehere"));
// abcdefklmopqwxy
console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
