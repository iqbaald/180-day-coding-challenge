/*
180 day Coding Challenge (4/180)
Link : https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/javascript
Question : Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
Input : ['hello', 'world', 'this', 'is', 'great']
Result : 'hello world this is great'
*/

// BARBAR ANSWER

function smash(words) {
  let result = "";
  for (let i = 0; i < words.length; i++) {
    result += words[i];
    if (i != words.length - 1) result += " ";
  }
  return result;
}

console.log(smash(["hello", "amazing", "world"]));

// JOIN ANSWER
// Refference : https://www.w3schools.com/jsref/jsref_join.asp

function smash2(words) {
  return words.join(" ");
}

console.log(smash2(["hello", "amazing", "world"]));

// ONE lINE ANSWER

const smash3 = (words) => words.join(" ");

console.log(smash3(["hello", "amazing", "world"]));
