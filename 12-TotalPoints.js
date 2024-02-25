/*
180 day Coding Challenge (12/180)
Link : https://www.codewars.com/kata/5bb904724c47249b10000131/
Question : We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.
Input : points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]
Output : 30
*/

// BARBAR ANSWER

function points(games) {
  let total = 0;
  for (let i = 0; i < games.length; i++) {
    let x = games[i][0];
    let y = games[i][2];

    if (x > y) {
      total += 3;
    } else if (x === y) {
      total += 1;
    }
  }
  return total;
}

console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
);

// REDUCE ANSWER
// Refference Reduce: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// Refference Ternary Operator: https://www.w3schools.com/react/react_es6_ternary.asp

function points2(games) {
  const result = games.reduce(
    (acc, [x, _, y]) => (x > y ? 3 : x < y ? 0 : 1) + acc,
    0
  );
  return result;
}

console.log(
  points2([
    "1:0",
    "2:0",
    "3:0",
    "4:0",
    "2:1",
    "3:1",
    "4:1",
    "3:2",
    "4:2",
    "4:3",
  ])
);

// ONE LINE ANSWER

const points3 = (games) =>
  (result = games.reduce(
    (acc, [x, _, y]) => (x > y ? 3 : x < y ? 0 : 1) + acc,
    0
  ));

console.log(
  points3([
    "1:0",
    "2:0",
    "3:0",
    "4:0",
    "2:1",
    "3:1",
    "4:1",
    "3:2",
    "4:2",
    "4:3",
  ])
);
