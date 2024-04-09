/*
180 day Coding Challenge (58/180)
Link : https://www.codewars.com/kata/52449b062fb80683ec000024

This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

*/

// BARBAR ANSWER

function zero(operation) {
  return operation ? operation(0) : 0;
}
function one(operation) {
  return operation ? operation(1) : 1;
}
function two(operation) {
  return operation ? operation(2) : 2;
}
function three(operation) {
  return operation ? operation(3) : 3;
}
function four(operation) {
  return operation ? operation(4) : 4;
}
function five(operation) {
  return operation ? operation(5) : 5;
}
function six(operation) {
  return operation ? operation(6) : 6;
}
function seven(operation) {
  return operation ? operation(7) : 7;
}
function eight(operation) {
  return operation ? operation(8) : 8;
}
function nine(operation) {
  return operation ? operation(9) : 9;
}

function plus(x) {
  return function (y) {
    return x + y;
  };
}
function minus(x) {
  return function (y) {
    return y - x;
  };
}
function times(x) {
  return function (y) {
    return x * y;
  };
}
function dividedBy(x) {
  return function (y) {
    return parseInt(y / x);
  };
}

console.log(seven(times(five())));
console.log(four(plus(nine())));
console.log(eight(minus(three())));
console.log(seven(dividedBy(two())));
