/*
180 day Coding Challenge (33/180)
Link : https://www.codewars.com/kata/58649884a1659ed6cb000072
*/

// BARBAR ANSWER

function updateLight3(current) {
  if (current === "green") {
    return "yellow";
  } else if (current === "yellow") {
    return "red";
  } else {
    return "green";
  }
}

console.log(updateLight3("green"));
console.log(updateLight3("yellow"));
console.log(updateLight3("red"));

// TERNARY ANSWER

const updateLight = (current) =>
  current === "green" ? "yellow" : current === "yellow" ? "red" : "green";

console.log(updateLight("green"));
console.log(updateLight("yellow"));
console.log(updateLight("red"));

// OBJECT ANSWER

// const rules = {
//   green: "yellow",
//   yellow: "red",
//   red: "green",
// };

// function updateLight2(current) {
//   return rules[current];
// }

function updateLight2(current) {
  return {
    green: "yellow",
    yellow: "red",
    red: "green",
  }[current];
}

console.log(updateLight2("green"));
console.log(updateLight2("yellow"));
console.log(updateLight2("red"));
