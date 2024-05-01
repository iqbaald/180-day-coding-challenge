/*
180 day Coding Challenge (72/180)
Link : https://www.codewars.com/kata/5832db03d5bafb7d96000107

"hPrBKWDH8yc6Lt5NQZWQ"  -->  "865"
"ynMAisVpHEqpqHBqTrwH"  -->  "One more run!"
"555"                   -->  "5"

*/

// BARBAR ANSWER

function lottery(str) {
  let findNum = [...str].map((item) => parseInt(item));
  let result = [];
  for (num of findNum) {
    if (!isNaN(num) && !result.includes(num)) {
      result.push(num);
    }
  }
  return result.length > 0 ? result.join("") : "One more run!";
}

console.log(lottery("hPrBKWDH8yc6Lt5NQZWQ"));
console.log(lottery("6PMHUNMp5e3tkgl6g3vY"));
console.log(lottery("ynMAisVpHEqpqHBqTrwH"));
console.log(lottery("555"));
