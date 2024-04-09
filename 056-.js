/*
180 day Coding Challenge (56/180)
Link : https://www.codewars.com/kata/554e4a2f232cdd87d9000038

Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
"A" --> "T"
"T" --> "A"
"G" --> "C"
"C" --> "G"

*/

// BARBAR ANSWER

function dnaStrand(dna) {
  let result = dna.split("");
  for (let i = 0; i < result.length; i++) {
    if (result[i] == "A") {
      result[i] = "T";
    } else if (result[i] == "T") {
      result[i] = "A";
    }
    if (result[i] == "C") {
      result[i] = "G";
    } else if (result[i] == "G") {
      result[i] = "C";
    }
  }
  return result.join("");
}

console.log(dnaStrand("TTTT"));
console.log(dnaStrand("AAAA"));
console.log(dnaStrand("ATTGC"));
console.log(dnaStrand("GTAT"));

// ANTOHER ANSWER

// function dnaStrand2(dna){
//     const pairs = {'A' : 'T','T' : 'A','C' : 'G','G' : 'C'}
//     return dna.split('').map((index) => pairs[index]).join('')
//  }

function dnaStrand2(dna) {
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };

  return dna
    .split("")
    .map((index) => pairs[index])
    .join("");
}

console.log(dnaStrand2("TTTT"));
console.log(dnaStrand2("AAAA"));
console.log(dnaStrand2("ATTGC"));
console.log(dnaStrand2("GTAT"));
