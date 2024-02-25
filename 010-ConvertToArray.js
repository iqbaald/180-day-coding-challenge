/*
180 day Coding Challenge (10/180)
Link : https://www.codewars.com/kata/57e76bc428d6fbc2d500036d
Question : You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not.
Input : "I love arrays they are my favorite"
Output : ["I", "love", "arrays", "they", "are", "my", "favorite"]
*/

// BARBAR ANSWER
// Refference : https://www.w3schools.com/jsref/jsref_split.asp

function stringToArray(string) {
  return string.split(" ");
}

console.log(stringToArray("love arrays they are my favorite"));

// ONELINE ANSWER
const stringToArray2 = (string) => string.split(" ");

console.log(stringToArray2("love arrays they are my favorite"));
