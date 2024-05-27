/*
180 day Coding Challenge (78/180)
Link : https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097

Your function takes three arguments:

1. The height of the column (meters)
2. The distance that the snail crawls during the day (meters)
3. The distance that the snail slides down during the night (meters)

Calculate number of day when the snail will reach the top of the column.

*/

// BARBAR ANSWER
function snail(column, day, night) {
  let daySpend = 0;
  let columnReach = 0;

  for (let i = columnReach; columnReach < column; daySpend++) {
    columnReach += day;
    if (columnReach < column) {
      columnReach -= night;
    }
  }

  return daySpend;
}

console.log(snail(3, 2, 1)); //2
console.log(snail(10, 3, 1)); //5
console.log(snail(10, 3, 2)); //8
console.log(snail(100, 20, 5)); //7
console.log(snail(5, 10, 3)); //1

// MATH CEIL ANSWER
function snail2(column, day, night) {
  const days = (column - night) / (day - night);
  return days < 1 ? 1 : Math.ceil(days);
}

console.log(snail2(3, 2, 1)); //2
console.log(snail2(10, 3, 1)); //5
console.log(snail2(10, 3, 2)); //8
console.log(snail2(100, 20, 5)); //7
console.log(snail2(5, 10, 3)); //1
