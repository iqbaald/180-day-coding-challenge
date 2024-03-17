/*
180 day Coding Challenge (34/180)
Link : https://www.codewars.com/kata/568dcc3c7f12767a62000038/
Rules : 
employed | vacation 
true     | true     => false
true     | false    => true
false    | true     => false
false    | false    => false
*/

// BARBAR ANSWER

// const setAlarm = (employed, vacation) => employed === true && vacation === false

function setAlarm(employed, vacation) {
  return employed === true && vacation === false;
}

console.log(setAlarm(true, true));
console.log(setAlarm(false, true));
console.log(setAlarm(true, false)); // only true

// ANOTHER ANSWER

function setAlarm2(employed, vacation) {
  return employed > vacation;
}

console.log(setAlarm2(true, true));
console.log(setAlarm2(false, true));
console.log(setAlarm2(true, false)); // only true

// ANOTHER ELSE ANSWER

function setAlarm3(employed, vacation) {
  return employed && !vacation;
}

console.log(setAlarm3(true, true));
console.log(setAlarm3(false, true));
console.log(setAlarm3(true, false)); // only true
