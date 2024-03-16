/*
180 day Coding Challenge (28/180)
Link : https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
*/

// BARBAR ANSWER

function getCount(str) {
  const vowel = ["a", "i", "u", "e", "o"];

  let result = 0;
  const input = [...str];

  for (let i = 0; i < input.length; i++) {
    for (let x = 0; x < vowel.length; x++) {
      if (vowel[x] === input[i]) {
        result += 1;
      }
    }
  }
  return result;
}

console.log(getCount("abracadabra"));

// INCLUDES ANSWER
// Refference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

function getCount2(str) {
  const vowel = ["a", "i", "u", "e", "o"];
  let result = 0;

  for (let char of str) {
    if (vowel.includes(char)) {
      result += 1;
    }
  }

  return result;
}

console.log(getCount2("abracadabra"));

//ONLINE ANSWER
const getCount3 = (str) => {
  return str.split("").filter((str) => ["a", "i", "u", "e", "o"].includes(str))
    .length;
};

console.log(getCount3("abracadabra"));
