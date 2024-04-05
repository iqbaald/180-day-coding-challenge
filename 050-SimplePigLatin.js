/*
180 day Coding Challenge (50/180)
Link : https://www.codewars.com/kata/520b9d2ad5c005041100000f

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/

// BARBAR ANSWER
// Reference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

function pigIt(str) {
  let words = str.split(" ");
  let result = [];
  for (let i = 0; i < words.length; i++) {
    if (!/[^\w\s]/.test(words[i])) {
      let pigWord = words[i] + words[i][0] + "ay";
      result.push(pigWord.slice(1));
    } else {
      result.push(words[i]);
    }
  }
  return result.join(" ");
}

console.log(pigIt("Pig latin is cool"));
console.log(pigIt("Hello world !"));

// ANOTHER ANSWER

function pigIt2(str) {
  var arrayWord = str.split(" ");
  return arrayWord
    .map(function (word) {
      let firstLetter = word.charAt(0);
      return word.slice(1) + firstLetter + "ay";
    })
    .join(" ");
}

console.log(pigIt2("Pig latin is cool"));
console.log(pigIt2("Hello world !"));

// ANOTHER REGEXP
// Reference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

function pigIt3(str) {
  return str.replace(/\w+/g, (w) => {
    return w.slice(1) + w[0] + "ay";
  });
}

console.log(pigIt3("Pig latin is cool"));
console.log(pigIt3("Hello world !"));
