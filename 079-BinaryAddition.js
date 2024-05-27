/*
180 day Coding Challenge (79/180)
Link : https://www.codewars.com/kata/551f37452ff852b7bd000139

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

*/

// BARBAR ANSWER
function addBinary(a, b) {
  let changeToBinary = a + b;
  let binary = "";

  while (changeToBinary > 0) {
    binary = (changeToBinary % 2) + binary;
    changeToBinary = Math.floor(changeToBinary / 2);
  }

  return (binary = "" ? "0" : binary);
}

console.log(addBinary(1, 1)); //10
console.log(addBinary(5, 9)); //110
console.log(addBinary(51, 12)); //111111
