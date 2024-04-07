/*
180 day Coding Challenge (53/180)
Link : https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

"bitcoin take over the world maybe who knows perhaps" ==> 3
"Let's travel abroad shall we" ==> 2

*/

// BARBAR ANSWER
function findShort(s) {
  const word = s.split(" ");
  let wordLength = [];
  for (let i = 0; i < word.length; i++) {
    wordLength.push(word[i].length);
  }
  return Math.min(...wordLength);
}
console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
console.log(findShort("Let's travel abroad shall we"));

// MAP ANSWER

function findShort3(s) {
  return Math.min(...s.split(" ").map((s) => s.length));
}

console.log(findShort3("bitcoin take over the world maybe who knows perhaps"));
console.log(findShort3("Let's travel abroad shall we"));

// SORT ANSWER

function findShort2(s) {
  return s.split(" ").sort((a, b) => a.length - b.length)[0].length || 0;
}

console.log(findShort2("bitcoin take over the world maybe who knows perhaps"));
console.log(findShort2("Let's travel abroad shall we"));
