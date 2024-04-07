/*
180 day Coding Challenge (54/180)
Link : https://www.codewars.com/kata/609eee71109f860006c377d1/

You are given a string of letters and an array of numbers.
The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
After each removal the size of the string decreases (there is no empty space).
Return the only letter left.

(lastSurvivor('abc', [1, 1]) ==> a
(lastSurvivor('kbc', [0, 1]) ==> b

*/

// BARBAR ANSWER
function lastSurvivor(letters, coords) {
  let survivor = [...letters];
  for (let i = 0; i < coords.length; i++) {
    survivor.splice(coords[i], 1);
  }
  return survivor.join("");
}

console.log(lastSurvivor("abc", [1, 1]));
console.log(lastSurvivor("kbc", [0, 1]));

// ANTOHER ANSWER

function lastSurvivor2(letters, coords) {
  const arr = [...letters];
  for (index of coords) arr.splice(index, 1);
  return arr[0];
}

console.log(lastSurvivor2("abc", [1, 1]));
console.log(lastSurvivor2("kbc", [0, 1]));
