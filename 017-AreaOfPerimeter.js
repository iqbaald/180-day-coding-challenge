/*
180 day Coding Challenge (17/180)
Link : https://www.codewars.com/kata/5ab6538b379d20ad880000ab/
Question : You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.
Input : 6, 10 || 3, 3 
Output : 11 || 9
*/

// BARBAR ANSWER

const areaOrPerimeter2 = (l, w) => {
  let result = 0;
  if (l == w) {
    return (result = l * w);
  } else {
    return (result = (l + w) * 2);
  }
};

console.log(areaOrPerimeter2(3, 3));
console.log(areaOrPerimeter2(6, 10));

// TERNARY OPERATOR ANSWER

const areaOrPerimeter = (l, w) =>
  l == w ? (result = l * w) : (result = (l + w) * 2);

console.log(areaOrPerimeter(3, 3));
console.log(areaOrPerimeter(6, 10));
