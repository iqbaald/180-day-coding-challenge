/*
180 day Coding Challenge (13/180)
Link : https://www.codewars.com/kata/5672a98bdbdd995fad00000f
Question : Create a Rock Paper Scissors Game
Input : rps("paper", "rock"))
Output : "Player 1 won"
*/

// VERY BARBAR ANSWER
const rps = (p1, p2) => {
  const result1 = "Player 1 won!";
  const result2 = "Player 2 won!";
  const draw = "Draw!";
  const r = "rock",
    p = "paper",
    s = "scissors";

  if (p1 === r) {
    if (p2 === r) {
      return draw;
    } else if (p2 === s) {
      return result1;
    } else {
      return result2;
    }
  } else if (p1 === p) {
    if (p2 === r) {
      return result1;
    } else if (p2 === s) {
      return result2;
    } else {
      return draw;
    }
  } else if (p1 === s) {
    if (p2 === r) {
      return result2;
    } else if (p2 === s) {
      return draw;
    } else {
      return result1;
    }
  }
};

console.log(rps("paper", "rock")); // p2 win
console.log(rps("rock", "scissors")); // p1 win
console.log(rps("rock", "paper")); // p2 win

// JUST BARBAR ANSWER

const rps2 = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  if (
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "paper" && p2 === "rock") ||
    (p1 === "scissors" && p2 === "paper")
  ) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};

console.log(rps2("paper", "paper")); // p2 win
console.log(rps2("paper", "rock")); // p2 win
console.log(rps2("rock", "scissors")); // p1 win
console.log(rps2("rock", "paper")); // p2 win

// TERNARY OPERATOR ANSWER
// Refference Ternary Operator: https://www.w3schools.com/react/react_es6_ternary.asp

const rps3 = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  return (p1 === "rock" && p2 === "scissors") ||
    (p1 === "paper" && p2 === "rock") ||
    (p1 === "scissors" && p2 === "paper")
    ? "Player 1 won!"
    : "Player 2 won!";
};

console.log(rps3("paper", "paper")); // p2 win
console.log(rps3("paper", "rock")); // p2 win
console.log(rps3("rock", "scissors")); // p1 win
console.log(rps3("rock", "paper")); // p2 win

// ONE LINE ANSWER

// const rps10 = (p1, p2) => (p1 === p2) ? "Draw!" : (p1 === "rock" && p2 === "scissors") || (p1 === "paper" && p2 === "rock") || (p1 === "scissors" && p2 === "paper") ? "Player 1 won!" : "Player 2 won!";

// NEXT LEVEL ANSWER
// Create a rules using array object

const rps4 = (p1, p2) => {
  const rules = { rock: "scissors", paper: "rock", scissors: "paper" };

  if (p1 === p2) {
    return "Draw!";
  } else {
    return `Player ${rules[p1] === p2 ? 1 : 2} won!`;
  }
};

// const rps4 = (p1, p2) => {
//   const rules = { rock: "scissors", paper: "rock", scissors: "paper" };
//   return p1 === p2 ? "Draw!" : `Player ${rules[p1] === p2 ? 1 : 2} won!`;
// };

console.log(rps4("paper", "rock")); // p1 win
console.log(rps4("rock", "scissors")); // p1 win
console.log(rps4("rock", "paper")); // p2 win

// REGEXP ANSWER
// Refference : https://www.w3schools.com/jsref/jsref_regexp_test.asp

const rps5 = (p1, p2) => {
  if (p1 === p2) {
    return "Draw!";
  } else {
    return `Player ${
      /rockscissors|paperrock|scissorspaper/.test(p1 + p2) ? 1 : 2
    } won!`;
  }
};

// THE REAL ONE LINE ANSWER
// const rps5 = (p1, p2) => (p1 === p2) ? "Draw!" : `Player ${/rockscissors|paperrock|scissorspaper/.test(p1+p2)? 1 :2} won!`

console.log(rps5("paper", "rock")); // p1 win
console.log(rps5("rock", "scissors")); // p1 win
console.log(rps5("rock", "paper")); // p2 win
