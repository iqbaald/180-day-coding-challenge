/*
180 day Coding Challenge (80/180)
Link : https://www.codewars.com/kata/582cb0224e56e068d800003c

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5

*/

// BARBAR ANSWER
function litres(time) {
  return Math.floor(time * 0.5);
}

console.log(litres(3));
console.log(litres(6.7));
console.log(litres(11.8));
