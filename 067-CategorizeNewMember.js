/*
180 day Coding Challenge (67/180)
Link : https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/

openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]) ==> ['Open', 'Senior', 'Open', 'Senior']
openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]) ==> ['Open', 'Open', 'Open', 'Open']
openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]) ==> ['Senior', 'Open', 'Open', 'Open']

*/

// BARBAR ANSWER

function openOrSenior(data) {
  let output = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
      output.push("Senior");
    } else {
      output.push("Open");
    }
  }
  return output;
}

console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
);
console.log(
  openOrSenior([
    [3, 12],
    [55, 1],
    [91, -2],
    [53, 23],
  ])
);
console.log(
  openOrSenior([
    [59, 12],
    [55, -1],
    [12, -2],
    [12, 12],
  ])
);

// MAP ANSWER

function openOrSenior2(data) {
  return data.map(([age, handicap]) =>
    (age >= 55) & (handicap > 7) ? "Senior" : "Open"
  );
}

console.log(
  openOrSenior2([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
);
console.log(
  openOrSenior2([
    [3, 12],
    [55, 1],
    [91, -2],
    [53, 23],
  ])
);
console.log(
  openOrSenior2([
    [59, 12],
    [55, -1],
    [12, -2],
    [12, 12],
  ])
);
