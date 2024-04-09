/*
180 day Coding Challenge (55/180)
Link : https://www.codewars.com/kata/52449b062fb80683ec000024

You are given a string of letters and an array of numbers.
The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
After each removal the size of the string decreases (there is no empty space).
Return the only letter left.

generateHashtag("") ==> false
generateHashtag("Do We have A Hashtag") ==> "#DoWeHaveAHashtag"
generateHashtag("Codewars is nice") ==> "#CodewarsIsNice"


*/

// BARBAR ANSWER
// Reference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

function generateHashtag2(str) {
  let trimmedStr = str.trim().replace(/\s+/g, " ");

  if (trimmedStr === "") return false; //|| trimmedStr.length >= 140
  // return trimmedStr.split(' ').length

  let word = trimmedStr.split(" ");
  let result = [];
  if (word.length > 0 && word[0] !== "") {
    for (let i = 0; i < word.length; i++) {
      result.push(word[i].charAt(0).toUpperCase() + word[i].slice(1));
    }
    return `#${result.join("")}`;
  } else {
    return false;
  }
}

function generateHashtag(str) {
  if (!str || !str.trim()) return false;

  const hashtag =
    "#" +
    str
      .trim()
      .split(/\s+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");

  return hashtag.length <= 140 ? hashtag : false;
}

console.log(generateHashtag("" + " "));
console.log(generateHashtag("Do We have A Hashtag"));
console.log(generateHashtag("Codewars is nice"));
console.log(generateHashtag("code" + " ".repeat(140) + "wars"));
console.log(
  generateHashtag(
    "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"
  )
);
