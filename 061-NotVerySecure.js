/*
180 day Coding Challenge (61/180)
Link : https://www.codewars.com/kata/526dbd6c8c0eb53254000110/

In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

The string has the following conditions to be alphanumeric:

- At least one character ("" is not valid)
- Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
- No whitespaces / underscore


*/

// REGEXP ANSWER

function alphanumeric(string) {
  // let w = string.split("");
  //   return w.length === 0|| w.includes(" ") || w.includes("_") || w.includes("!") ? false : true;
  return /^[a-zA-Z0-9]+$/.test(string);
  // ^ : awal string
  // [a-zA-Z0-9] : filter abjad dan angka
  // + : minimal 1 karakter
  // $ : akhir string
}

console.log(alphanumeric("Mazinkaiser"));
console.log(alphanumeric("hello world_"));
console.log(alphanumeric("PassW0rd"));
console.log(alphanumeric("     "));
console.log(alphanumeric(""));
console.log(alphanumeric("_IhQc0GYbwttw"));
