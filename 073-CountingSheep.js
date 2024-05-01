/*
180 day Coding Challenge (73/180)
Link : https://www.codewars.com/kata/54edbc7200b811e956000556/

    [[], 0],
    [[undefined], 0],
    [[null], 0],
    [[false], 0],
    [[true], 1],
    [[undefined,null,false,true], 1],
    [[undefined,null,false,true,true,false,null,undefined], 2],
 

*/

// BARBAR ANSWER

// function countSheeps(sheep) {
//   let result = 0;
//   for (let i = 0; i < sheep.length; i++) {
//     if (sheep[i] === true) {
//       result += 1;
//     }
//   }
//   return result;
// }

function countSheeps(sheep) {
  return sheep.filter(Boolean).length;
}

console.log(countSheeps([true, false]));
console.log(countSheeps([false, false]));
console.log(countSheeps([undefined, null, false, true]));
console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
);
