/*
180 day Coding Challenge (66/180)
Link : https://www.codewars.com/kata/55b42574ff091733d900002f/

   bonusTime(10000, true) ==> '£100000'
    bonusTime(25000, true) ==> '£250000'
    bonusTime(10000, false) ==> '£10000'
    bonusTime(60000, false) ==> '£60000'
    bonusTime(2, true) ==> '£20'
    bonusTime(78, false) ==> '£78'

*/

// BARBAR ANSWER

function bonusTime(salary, bonus) {
  if (bonus === true) {
    return `£${salary * 10}`;
  }
  return `£${salary}`;
}

console.log(bonusTime(10000, true));
console.log(bonusTime(25000, true));
console.log(bonusTime(10000, false));
console.log(bonusTime(60000, false));
console.log(bonusTime(2, true));
console.log(bonusTime(78, false));

// TERNARY OPERATOR

// const bonusTime = (salary, bonus) => bonus ? `£${salary * 10}` : `£${salary}`
function bonusTime2(salary, bonus) {
  return bonus ? `£${salary * 10}` : `£${salary}`;
}

console.log(bonusTime2(10000, false));
console.log(bonusTime2(60000, false));
console.log(bonusTime2(2, true));
console.log(bonusTime2(78, false));
