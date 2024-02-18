/*
180 day Coding Challenge (6/180)
Link : https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript
Question : Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
        Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
        Create a function which translates a given DNA string into RNA.
Input : 'GCAT' or 'TTTT'
Result : GCAU or 'UUUU'
*/

// BARBAR ANSWER

function DNAtoRNA(dna) {
  let rna = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "T") {
      rna += "U";
    } else {
      rna += dna[i];
    }
  }
  return rna;
}

console.log(DNAtoRNA("GCAT"));
console.log(DNAtoRNA("TTTT"));

// TERNARY OPERATOR ANSWER
const DNAtoRNA2 = (dna) => {
  let rna = "";
  for (let i = 0; i < dna.length; i++) {
    // dna[i] === "T" ? rna += "U" : rna += dna[i];
    rna += dna[i] === "T" ? "U" : dna[i];
  }
  return rna;
};

console.log(DNAtoRNA2("GCAT"));
console.log(DNAtoRNA2("TTTT"));

// MAP ANSWER
// Reference .map() : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// Reference Spread operator : https://www.w3schools.com/howto/howto_js_spread_operator.asp

const DNAtoRNA3 = (dna) => {
  return dna
    .split("")
    .map((el) => (el === "T" ? "U" : el))
    .join("");
};

console.log(DNAtoRNA3("GCAT"));
console.log(DNAtoRNA3("TTTT"));

// ONE LINE ANSWER

const DNAtoRNA4 = (dna) =>
  dna
    .split("")
    .map((el) => (el === "T" ? "U" : el))
    .join("");

console.log(DNAtoRNA4("GCAT"));
console.log(DNAtoRNA4("TTTT"));

// CRAZY ANSWER
// Reffernce : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

const DNAtoRNA5 = (dna) => dna.replaceAll("T", "U");
// .replace(pattern, replacement)

console.log(DNAtoRNA5("GCAT"));
console.log(DNAtoRNA5("TTTT"));
