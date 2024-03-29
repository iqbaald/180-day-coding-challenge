/*
180 day Coding Challenge (44/180)
Link : https://www.codewars.com/kata/55908aad6620c066bc00002a
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

// BARBAR ANSWER

function XO(str) {
  let x = 0;
  let o = 0;
  let string = [...str];

  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === "x") {
      x += 1;
    }
    if (string[i].toLowerCase() === "o") {
      o += 1;
    }
  }
  return x === o;
}

console.log(XO("xo"));
console.log(XO("xxxm"));
console.log(XO("Oo"));

// SPLIT ANSWER
// Reference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

// const XO2 = (str) => str.toLowerCase().split('o').length === str.toLowerCase().split('x').length
function XO2(str) {
  return (
    str.toLowerCase().split("o").length === str.toLowerCase().split("x").length
  );
}

console.log(XO2("xo"));
console.log(XO2("xxxm"));
console.log(XO2("Oo"));
