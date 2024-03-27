/*
180 day Coding Challenge (40/180)
Link : https://www.codewars.com/kata/5390bac347d09b7da40006f6
Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
*/

// BARBAR ANSWER

String.prototype.toJadenCase = function () {
  let word = this.split(" ");
  for (let i = 0; i < word.length; i++) {
    word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
  }
  return word.join(" ");
};

let str = "How Can Mirrors Be Real If Our Eyes Aren't Real";
console.log(str.toJadenCase());
