/*
180 day Coding Challenge (86/180)
Link : https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

Input -> Output

Sam Harris => S.H

patrick feeney => P.F

*/

// BARBAR ANSWER
function abbrevName(name) {
  let singleName = name.split(" ");
  return (
    singleName[0].charAt(0) +
    "." +
    singleName[1].charAt(0)
  ).toUpperCase();
}

console.log(abbrevName("sam harris"));
console.log(abbrevName("atrick Feenan"));
console.log(abbrevName("Evan Cole"));
