/*
180 day Coding Challenge (81/180)
Link : https://www.codewars.com/kata/525c7c5ab6aecef16e0001a5

"one" => 1
"twenty" => 20
"two hundred forty-six" => 246
"seven hundred eighty-three thousand nine hundred and nineteen" => 783919

*/

// BARBAR ANSWER
function parseInt(string) {
  const wordOfNumber = {
    and: 0,
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
    hundred: 100,
    thousand: 1000,
    million: 1000000,
  };

  const tokens = string.split(/[\s-]+/);
  let currentNumber = 0;
  let result = 0;

  tokens.forEach((token) => {
    if (wordOfNumber[token] < 100) {
      currentNumber += wordOfNumber[token];
    } else if (token === "hundred") {
      currentNumber *= wordOfNumber[token];
    } else {
      currentNumber *= wordOfNumber[token];
      result += currentNumber;
      currentNumber = 0;
    }
  });

  return currentNumber + result;
}

console.log(parseInt("one"));
console.log(parseInt("twenty"));
console.log(parseInt("two hundred forty-six"));
console.log(
  parseInt("seven hundred eighty-three thousand nine hundred and nineteen")
); //783919
