/*
180 day Coding Challenge (71/180)
Link : https://www.codewars.com/kata/57356c55867b9b7a60000bd7

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7

*/

// BARBAR ANSWER

function basicOp(operation, value1, value2) {
  if (operation == "+") return value1 + value2;
  if (operation == "-") return value1 - value2;
  if (operation == "*") return value1 * value2;
  if (operation == "/") return value1 / value2;
}

console.log(basicOp("+", 4, 7));
console.log(basicOp("-", 15, 18));
console.log(basicOp("*", 5, 5));
console.log(basicOp("/", 49, 7));

// EVAL ANSWER
// Reference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval

function basicOp2(operation, value1, value2) {
  return eval(value1 + operation + value2);
}

console.log(basicOp2("+", 4, 7));
console.log(basicOp2("-", 15, 18));
console.log(basicOp2("*", 5, 5));
console.log(basicOp2("/", 49, 7));
