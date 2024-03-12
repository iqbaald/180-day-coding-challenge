/*
180 day Coding Challenge (24/180)
Link : https://www.codewars.com/kata/56747fd5cb988479af000028
*/

// BARBAR ANSWER

function getMiddle(s) {
  const middleIndex = Math.floor(s.length / 2);
  if (s.length % 2 !== 0) {
    return s[middleIndex];
  } else {
    return (s[middleIndex - 1] += s[middleIndex]);
  }
}

console.log(getMiddle("test"));
console.log(getMiddle("testing"));

// ANOTHER ANSWER
function getMiddle2(s) {
  return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}

console.log(getMiddle2("test"));
console.log(getMiddle2("testing"));

// ANOTHER ANSWER
// Refference substr(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
// Refference Math.ceil(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil

function getMiddle3(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

console.log(getMiddle3("test"));
console.log(getMiddle3("testing"));
