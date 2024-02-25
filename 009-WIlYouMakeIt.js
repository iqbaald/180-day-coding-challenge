/*
180 day Coding Challenge (5/180)
Link : https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/javascript
Question : You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not.
Input : zeroFuel(50, 25, 2)
Result : 'True' or 'False'
*/

// BARBAR ANSWER
// 50 miles / 25 miles/g = 2 g
// 2 g or 2 gLeft = true

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (distanceToPump / mpg <= fuelLeft) {
    return true;
  } else {
    return false;
  }
};

console.log(zeroFuel(50, 25, 2));

// TERNARY OPERATOR ANSWER
// Refference : https://www.w3schools.com/react/react_es6_ternary.asp

const zeroFuel2 = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump / mpg <= fuelLeft ? true : false;
};

console.log(zeroFuel2(50, 25, 2));

// ONE LINE ANSWER
const zeroFuel3 = (distanceToPump, mpg, fuelLeft) =>
  distanceToPump / mpg <= fuelLeft;

console.log(zeroFuel3(50, 25, 2));
