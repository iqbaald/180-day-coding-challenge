/*
180 day Coding Challenge (45/180)
Link : https://www.codewars.com/kata/55908aad6620c066bc00002a

6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"

*/

// BARBAR ANSWER

function repeatStr(n, s) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += s;
  }
  return result;
}

console.log(repeatStr(6, "I"));
console.log(repeatStr(5, "Hello"));

// REPEAT ANSWER

const repeatStr2 = (n, s) => s.repeat(n);

console.log(repeatStr2(6, "I"));
console.log(repeatStr2(5, "Hello"));
