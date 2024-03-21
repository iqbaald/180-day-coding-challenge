/*
180 day Coding Challenge (38/180)
Link : https://www.codewars.com/kata/525f4206b73515bffb000b21
*/

// BARBAR ANSWER

function add(a, b) {
  let num1 = a.split("").map(Number);
  let num2 = b.split("").map(Number);

  let result = "";
  let carry = 0;

  while (num1.length || num2.length || carry) {
    let digit1 = num1.pop() || 0;
    let digit2 = num2.pop() || 0;

    let sum = digit1 + digit2 + carry;

    result = (sum % 10) + result;

    carry = Math.floor(sum / 10);
  }

  return result;
}

console.log(add("63829983432984289347293874", "90938498237058927340892374089"));

console.log(add("1", "1"));
console.log(add("123", "321"));
console.log(add("63829983432984289347293874", "90938498237058927340892374089"));
console.log(
  add(
    "1057853509440367665682450458794866464501746580388666517943654",
    "90938498237058927340892374089"
  )
);

// BIG INT ANSWER
// Refference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt

function add2(a, b) {
  return (BigInt(a) + BigInt(b)).toString();
}

console.log(add2("1", "1"));
console.log(add2("123", "321"));
console.log(
  add2("63829983432984289347293874", "90938498237058927340892374089")
);
console.log(
  add2(
    "1057853509440367665682450458794866464501746580388666517943654",
    "90938498237058927340892374089"
  )
);

const mencoba = (b) => b % 10;

console.log(mencoba(18888));
