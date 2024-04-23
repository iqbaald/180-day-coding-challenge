/*
180 day Coding Challenge (69/180)
Link : https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d

    solution('abc', 'bc') // returns true
    solution('abc', 'd') // returns false

*/

// BARBAR ANSWER
// Reference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

function solution(str, ending) {
  if (str.length < ending.length) return false;
  const sub = str.substring(str.length - ending.length);
  return sub === ending;
}

console.log(solution("abcde", "cde"));
console.log(solution("abcde", "abc"));
console.log(solution("sumo", "omo"));
console.log(solution("ails", "fails"));

// EndWith ANSWER
// Reference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith

function solution2(str, ending) {
  return str.endsWith(ending);
}

console.log(solution2("abcde", "cde"));
console.log(solution2("abcde", "abc"));
console.log(solution2("sumo", "omo"));
console.log(solution2("ails", "fails"));
