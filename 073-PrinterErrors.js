/*
180 day Coding Challenge (73/180)
Link : https://www.codewars.com/kata/56541980fa08ab47a0000040/

s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"

*/

// BARBAR ANSWER

function printerError(s) {
  const error = "nopqrstuvwxyz";
  errorCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (error.includes(s[i])) {
      errorCount += 1;
    }
  }
  return `${errorCount}/${s.length}`;
}

console.log(printerError("aaabbbbhaijjjm"));
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"));
