/*
180 day Coding Challenge (26/180)
Link : https://www.codewars.com/kata/53369039d7ab3ac506000467/
*/

// BARBAR ANSWER

function boolToWord(bool) {
  if (bool === true) {
    return "Yes";
  } else if (bool === false) {
    return "No";
  }
}

console.log(boolToWord(true));
console.log(boolToWord(false));

//ONLINE ANSWER

const boolToWord2 = (bool) => (bool === true ? "Yes" : "No");

console.log(boolToWord2(true));
console.log(boolToWord2(false));
