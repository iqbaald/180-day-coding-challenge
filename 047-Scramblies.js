/*
180 day Coding Challenge (47/180)
Link : https://www.codewars.com/kata/55c04b4cc56a697bb0000048

scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False

*/

// BARBAR ANSWER

function scramble(str1, str2) {
  const count = {};

  for (const char of str2) {
    count[char] = (count[char] || 0) + 1;
  }
  for (const char of str1) {
    if (count[char]) {
      count[char]--;
    }
  }

  return Object.values(count).every((val) => val === 0);
}

console.log(scramble("rkqodlw", "world"));
console.log(scramble("cedewaraaossoqqyt", "codewars"));
console.log(scramble("katas", "steak"));
console.log(scramble("scriptjavx", "javascript"));

// ANOTHER ANSWER

function scramble2(str1, str2) {
  let count = str1.split("").reduce((a, i) => {
    return (a[i] = (a[i] || 0) + 1), a;
  }, {});
  return str2.split("").every((i) => count[i]-- > 0);
}

console.log(scramble2("rkqodlw", "world"));
console.log(scramble2("cedewaraaossoqqyt", "codewars"));
console.log(scramble2("katas", "steak"));
console.log(scramble2("scriptjavx", "javascript"));
