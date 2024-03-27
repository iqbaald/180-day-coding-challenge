/*
180 day Coding Challenge (40/180)
Link : https://www.codewars.com/kata/5390bac347d09b7da40006f6
Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
*/

// BARBAR ANSWER
// Reference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

function disemvowel(str) {
  const vowel = ["a", "i", "u", "e", "o"];
  let word = [...str];

  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < vowel.length; j++) {
      if (word[i] === vowel[j]) {
        word.splice(i, 1);
      }
    }
  }
  return word.join("");
}
console.log(disemvowel("This website is for losers LOL!"));

// INCLUDES ANSWER
// Reference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

// const disemvowel =(str) => [...str].map((word) => (!["a", "i", "u", "e", "o"].includes(word.toLowerCase())) ? word : '').join('')

function disemvowel2(str) {
  const vowel = ["a", "i", "u", "e", "o"];
  return [...str]
    .map((word) => (!vowel.includes(word.toLowerCase()) ? word : ""))
    .join("");
}

console.log(disemvowel2("This website is for losers LOL!"));
