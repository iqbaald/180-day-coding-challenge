/*
180 day Coding Challenge (49/180)
Link : https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

*/

// BARBAR ANSWER

function accum(s) {
  let string = [...s];
  let result = [];
  for (let i = 0; i < s.length; i++) {
    result.push(string[i].toUpperCase());
    result.push(string[i].toLowerCase().repeat(i));
    if (i !== s.length - 1) result.push("-");
  }
  return result.join("");
}

console.log(accum("abcd"));
console.log(accum("RqaEzty"));

//ANOTHER ANSWER

// const accum2 = (s) => s.split("").map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i)).join("-");

function accum2(s) {
  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}

console.log(accum2("abcd"));
console.log(accum2("RqaEzty"));
