/*
180 day Coding Challenge (14/180)
Link : https://www.codewars.com/kata/55cbd4ba903825f7970000f5
Question : CComplete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
Input : getGrade(70,70,100)
Output : "B"
*/

// BARBAR ANSWER

function getGrade(s1, s2, s3) {
  const avg = (s1 + s2 + s3) / 3;
  let result = "";
  if (avg >= 90 && avg <= 100) {
    result = "A";
  } else if (avg >= 80 && avg < 90) {
    result = "B";
  } else if (avg >= 70 && avg < 80) {
    result = "C";
  } else if (avg >= 60 && avg < 70) {
    result = "D";
  } else {
    result = "F";
  }
  return result;
}

console.log(getGrade(70, 100, 100));
console.log(getGrade(70, 70, 100));

// function getGrade(s1, s2, s3) {
//   const score = (s1 + s2 + s3) / 3;
//   if (score < 60) return "F";
//   if (score < 70) return "D";
//   if (score < 80) return "C";
//   if (score < 90) return "B";
//   return "A";
// }

// ANOTHER ANSWER
// Refference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

function getGrade2(...s) {
  const score = s.reduce((acc, curr) => acc + curr) / s.length;
  if (score < 60) return "F";
  if (score < 70) return "D";
  if (score < 80) return "C";
  if (score < 90) return "B";
  return "A";
}

console.log(getGrade2(70, 100, 100));
console.log(getGrade2(70, 70, 100));

// TERNARY OPERATOR

const getGrade3 = (s1, s2, s3) => {
  const avg = (s1 + s2 + s3) / 3;
  return avg >= 90
    ? "A"
    : avg >= 80
    ? "B"
    : avg >= 70
    ? "C"
    : avg >= 60
    ? "D"
    : "F";
};

console.log(getGrade3(70, 100, 100));
console.log(getGrade3(70, 70, 100));
