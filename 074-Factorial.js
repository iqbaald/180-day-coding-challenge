/*
180 day Coding Challenge (74/180)
Link : https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc

Test.assertEquals(factorial(0), 1, "factorial for 0 is 1");
Test.assertEquals(factorial(1), 1, "factorial for 1 is 1");
Test.assertEquals(factorial(2), 2, "factorial for 2 is 2");
Test.assertEquals(factorial(3), 6, "factorial for 3 is 6");

*/

// BARBAR ANSWER

// function factorial(n) {
//   if (n < 0 || n > 12) {
//     throw new RangeError("Input is wrong");
//   }

//   let result = 1;
//   for (let i = 1; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }
function factorial(n) {
  if (n < 0 || n > 12) throw new RangeError();
  return n <= 1 ? 1 : n * factorial(n - 1);
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(-1));
