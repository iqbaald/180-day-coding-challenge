/*
180 day Coding Challenge (29/180)
Link : https://www.codewars.com/kata/53dbd5315a3c69eed20002dd
*/

// BARBAR ANSWER

function filter_list2(list) {
  let result = [];
  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] == "number") {
      result.push(list[i]);
    }
  }
  return result;
}

console.log(filter_list2([1, 2, "a", "b"]));
console.log(filter_list2([1, "a", "b", 0, 15]));
console.log(filter_list2([1, 2, "aasf", "1", "123", 123]));

// ANOTHER ANSWER

const filter_list3 = (list) => list.filter((arr) => typeof arr === "number");

console.log(filter_list3([1, 2, "a", "b"]));
console.log(filter_list3([1, "a", "b", 0, 15]));
console.log(filter_list3([1, 2, "aasf", "1", "123", 123]));

// CRAZY ANSWER
// Refference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
const filter_list = (list) => list.filter(Number.isInteger);

console.log(filter_list([1, 2, "a", "b"]));
console.log(filter_list([1, "a", "b", 0, 15]));
console.log(filter_list([1, 2, "aasf", "1", "123", 123]));
