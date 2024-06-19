/*
180 day Coding Challenge (84/180)
Link : https://www.codewars.com/kata/55f8a9c06c018a0d6e000132

"1234"   -->  true
"12345"  -->  false
"a234"   -->  false

*/

// BARBAR ANSWER
// function validatePIN(pin) {
//   // Check if the pin is exactly 4 or 6 digits and contains only numbers
//   const isValid = /^\d{4}$|^\d{6}$/.test(pin);
//   return isValid;
// }
function validatePIN(pin) {
  //return true or false
  var n = pin.length;
  if (n != 4 && n != 6) return false;
  for (var i in pin) if (pin[i] > "9" || pin[i] < "0") return false;
  return true;
}

console.log(validatePIN("1"));
console.log(validatePIN("123f"));
console.log(validatePIN("1234"));
console.log(validatePIN("123456"));
console.log(validatePIN("-1234"));
console.log(validatePIN("00000000"));
console.log(validatePIN("-1.234"));
console.log(validatePIN("1.234"));
console.log(validatePIN("a234"));
console.log(validatePIN(".234"));
console.log(validatePIN(".234"));
