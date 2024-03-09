/*
180 day Coding Challenge (20/180)
Link : https://www.codewars.com/kata/5aa736a455f906981800360d
Question : ll of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.
Input : ("great blue heron", "garlic naan") || ("brown bear", "bear claw")
Output : true || false
*/

// BARBAR ANSWER

function feast2(beast, dish) {
  if (
    beast[0] === dish[0] &&
    beast[beast.length - 1] === dish[dish.length - 1]
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(feast2("great blue heron", "garlic naan"));
console.log(feast2("brown bear", "bear claw"));

// TERNARY ANSWER

const feast = (beast, dish) =>
  beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];

console.log(feast("great blue heron", "garlic naan"));
console.log(feast("brown bear", "bear claw"));

// charAt ANSWER
// Refference : https://www.w3schools.com/jsref/jsref_charat.asp

const feast3 = (beast, dish) =>
  beast.at(0) === dish.at(0) && beast.at(-1) === dish.at(-1);

console.log(feast3("great blue heron", "garlic naan"));
console.log(feast3("brown bear", "bear claw"));
