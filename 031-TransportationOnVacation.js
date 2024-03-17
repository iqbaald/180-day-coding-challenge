/*
180 day Coding Challenge (31/180)
Link : https://www.codewars.com/kata/568d0dd208ee69389d000016
*/

// BARBAR ANSWER

function rentalCarCost2(day) {
  let cost = 0;
  const perDay = 40;
  const disc3Day = 20;
  const disc7Day = 50;

  if (day >= 7) {
    cost = perDay * day - disc7Day;
  } else if (day >= 3) {
    cost = perDay * day - disc3Day;
  } else {
    cost = perDay * day;
  }
  return cost;
}

console.log(rentalCarCost2(1)); // 40
console.log(rentalCarCost2(3)); // 40 * 3 - 20
console.log(rentalCarCost2(7)); // 40 * 7 - 50

// TERNARY OPERATOR

function rentalCarCost(day) {
  let costPerDay = 40 * day;
  return day >= 7 ? costPerDay - 50 : day >= 3 ? costPerDay - 20 : costPerDay;
}

console.log(rentalCarCost(1)); // 40
console.log(rentalCarCost(3)); // 40 * 3 - 20
console.log(rentalCarCost(7)); // 40 * 7 - 50

// ONELINE ANSWER

// const rentalCarCost3 = (day) => day >= 7 ? 40 * day - 50 : day >= 3 ? 40 * day - 20 : 40 * day;
const rentalCarCost3 = (day) => day * 40 - (day >= 7 ? 50 : day >= 3 ? 20 : 0);

console.log(rentalCarCost3(1)); // 40
console.log(rentalCarCost3(3)); // 40 * 3 - 20
console.log(rentalCarCost3(7)); // 40 * 7 - 50
