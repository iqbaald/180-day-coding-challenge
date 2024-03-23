/*
180 day Coding Challenge (39/180)
Link : https://www.codewars.com/kata/59b0a6da44a4b7080300008a/
*/

// BARBAR ANSWER
// Reference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

function to24hourtime(hour, minute, period) {
  let h = "";
  let m = "";

  if (period === "am") {
    if (hour >= 12) {
      h = (hour -= 12).toString().padStart(2, "0");
    } else {
      h = hour.toString().padStart(2, "0");
    }
    m = minute.toString().padStart(2, "0");
  }
  if (period === "pm") {
    if (hour < 12) {
      h = (hour += 12).toString().padStart(2, "0");
    } else {
      h = hour.toString().padStart(2, "0");
    }
    m = minute.toString().padStart(2, "0");
  }
  return h + m;
}

console.log(to24hourtime(1, 0, "am")); // '0100'
console.log(to24hourtime(12, 0, "am")); // '0000'
console.log(to24hourtime(12, 0, "pm")); // '1200'
console.log(to24hourtime(9, 45, "pm")); // '2145'

// ANOTHER ANSWER
function to24hourtime2(hour, minute, period) {
  if (period === "am") {
    hour = (hour % 12).toString().padStart(2, "0");
  } else if (period === "pm") {
    hour = ((hour % 12) + 12).toString().padStart(2, "0");
  }
  return hour + minute.toString().padStart(2, "0");
}

console.log(to24hourtime2(1, 0, "am")); // '0100'
console.log(to24hourtime2(12, 0, "am")); // '0000'
console.log(to24hourtime2(12, 0, "pm")); // '1200'
console.log(to24hourtime2(9, 45, "pm")); // '2145'

// CRAZY ANSWER

// to24hourtime=(h,m,p)=>String(h%12+(p==='pm'?12:0)).padStart(2,'0')+String(m).padStart(2,'0')
