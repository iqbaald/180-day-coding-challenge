/*
180 day Coding Challenge (3/180)
Link : https://www.codewars.com/kata/59ca8246d751df55cc00014c
Story Question : A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive? Return true if yes, false otherwise :)
Input : hero(bullets, dragons) 
Result : true/false
*/

// BARBAR ANSWER
function hero(bullets, dragons) {
  let killDragon = bullets / 2;
  if (killDragon >= dragons) {
    return true;
  } else {
    return false;
  }
}

console.log(hero(10, 5));

// TERNARY OPERATOR ANSWER
// Refference : https://www.w3schools.com/react/react_es6_ternary.asp

function hero2(bullets, dragons) {
  return bullets / 2 >= dragons ? true : false;
  // condition ? <expression if true> : <expression if false>
}

console.log(hero2(10, 5));

// ONE LINE ANSWER

const hero3 = (bullets, dragons) => bullets / 2 >= dragons;
// The ternary operator automatically evaluates to true if the condition is met, otherwise false.

console.log(hero3(10, 4));
