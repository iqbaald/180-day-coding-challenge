/*
180 day Coding Challenge (45/180)
Link : https://www.codewars.com/kata/55908aad6620c066bc00002a

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

*/

// BARBAR ANSWER

function likes(names) {
  if (names.length === 1) {
    return `${names} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if (names.length > 3) {
    return `${names[0]}, ${names[1]} and ${
      names.splice(2).length
    } others like this`;
  } else {
    return "no one likes this";
  }
}

console.log(likes([]));
console.log(likes(["Peter"]));
console.log(likes(["Jacob", "Alex"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));

// SWITCH ANSWER

function likes2(names) {
  switch (names.length) {
    case 0:
      return "no one likes this";
    case 1:
      return `${names} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
  }
}

console.log(likes2([]));
console.log(likes2(["Peter"]));
console.log(likes2(["Jacob", "Alex"]));
console.log(likes2(["Max", "John", "Mark"]));
console.log(likes2(["Alex", "Jacob", "Mark", "Max"]));
