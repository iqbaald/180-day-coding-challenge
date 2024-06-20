/*
180 day Coding Challenge (84/180)
Link : https://www.codewars.com/kata/56606694ec01347ce800001b

Input -> Output
1,2,2 -> true
4,2,3 -> true
2,2,2 -> true
1,2,3 -> false
-5,1,3 -> false
0,2,3 -> false
1,2,9 -> false 

*/

// BARBAR ANSWER
function isTriangle(a, b, c) {
  if (a + b > c && b + c > a && c + a > b) {
    return true;
  }
  return false;
}

console.log(isTriangle(1, 2, 2));
console.log(isTriangle(4, 2, 3));
console.log(isTriangle(2, 2, 2));
console.log(isTriangle(1, 2, 3));
console.log(isTriangle(0, 2, 3));
console.log(isTriangle(1, 2, 9));
