/*
180 day Coding Challenge (77/180)
Link : https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097

1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
2742 --> 28

*/

// MATH CEIL ANSWER
function century(year) {
  return Math.ceil(year / 100);
}

console.log(century(2000));
