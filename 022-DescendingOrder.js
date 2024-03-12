/*
180 day Coding Challenge (22/180)
Link : https://www.codewars.com/kata/5467e4d82edf8bbf40000155
*/

// ONELINE ANSWER

const descendingOrder = (n) =>
  parseInt(
    String(n)
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );

console.log(descendingOrder(42145));
console.log(descendingOrder(123456789));

// ANOTHER ANSWER

function descendingOrder2(n) {
  return n.digits().sort().reverse().undigits();
}

Number.prototype.digits = function () {
  const result = [];
  let n = this;
  do {
    result.unshift(n % 10);
    n = Math.floor(n / 10);
  } while (n);
  return result;
};

Array.prototype.undigits = function () {
  return this.reduce((n, d) => n * 10 + d, 0);
};

console.log(descendingOrder2(42145));
console.log(descendingOrder2(123456789));
