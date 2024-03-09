/*
180 day Coding Challenge (18/180)
Link : https://www.codewars.com/kata/5772da22b89313a4d50012f7
Question : Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
Input : ('Daniel', 'Daniel') || ('Greg', 'Daniel')
Output : 'Hello boss' || 'Hello guest'
*/

// BARBAR ANSWER

function greet2(name, owner) {
  if (name == owner) {
    return "Hello boss";
  } else {
    return "Hello guest";
  }
}

console.log(greet2("Daniel", "Daniel"));
console.log(greet2("Greg", "Daniel"));

// TERNARY ANSWER

const greet = (name, owner) => (name == owner ? "Hello boss" : "Hello guest");

console.log(greet("Daniel", "Daniel"));
console.log(greet("Greg", "Daniel"));
