/*
180 day Coding Challenge (65/180)
Link : https://www.codewars.com/kata/55b42574ff091733d900002f/

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
*/

// BARBAR ANSWER

function friend(friends) {
  let result = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length === 4) {
      result.push(friends[i]);
    }
  }
  return result;
}

console.log(friend(["Ryan", "Kieran", "Mark"]));
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]));
console.log(friend(["Love", "Your", "Face", "1"]));

// FILTER ANSWER

function friend2(friends) {
  return friends.filter((n) => n.length === 4);
}

console.log(friend2(["Ryan", "Kieran", "Mark"]));
console.log(friend2(["Ryan", "Jimmy", "123", "4", "Cool Man"]));
console.log(friend2(["Love", "Your", "Face", "1"]));
