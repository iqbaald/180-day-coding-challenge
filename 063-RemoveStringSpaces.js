/*
180 day Coding Challenge (63/180)
Link : https://www.codewars.com/kata/57eae20f5500ad98e50002c5

Input -> Output
"8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
"8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
"8aaaaa dddd r     " -> "8aaaaaddddr"

*/

// BARBAR ANSWER

function noSpace(x) {
  let str = x.split("");
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      str[i] = "";
    }
  }
  return str.join("");
}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));
console.log(noSpace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"));
console.log(noSpace("8aaaaa dddd r     "));

// ANOTHER ANSWER

function noSpace2(x) {
  return x.split(" ").join("");
}

console.log(noSpace2("8 j 8   mBliB8g  imjB8B8  jl  B"));
console.log(noSpace2("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"));
console.log(noSpace2("8aaaaa dddd r     "));
