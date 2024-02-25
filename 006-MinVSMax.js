/*
180 day Coding Challenge (6/180)
Link : https://www.codewars.com/kata/577a98a6ae28071780000989
Question : Your task is to make two functions ( max and min, or maximum and minimum, etc.,
          that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
Note : You may consider that there will not be any empty arrays/vectors.
Input :  min([4,6,2,1,9,63,-134,566]) || max([42, 54, 65, 87, 0])   
Result : min = [-134] || max = [87]
*/

// BARBAR ANSWER (MIN)
var min = function (list) {
  let minValue = list[0];
  for (let i = 1; i < list.length; i++) {
    if (minValue > list[i]) {
      minValue = list[i];
    }
  }
  return minValue;
};

console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(min([42, 54, 65, 87, 0]));

// BARBAR ANSWER (MAX)
var max = function (list) {
  let maxValue = list[0];
  for (let i = 1; i < list.length; i++) {
    if (maxValue < list[i]) {
      maxValue = list[i];
    }
  }
  return maxValue;
};

console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));
console.log(max([5]));
