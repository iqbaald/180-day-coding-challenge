/*
180 day Coding Challenge (62/180)
Link : https://www.codewars.com/kata/5412509bd436bd33920011bc/

"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""


"Skippy" --> "##ippy"
"Nananananananananananananananana Batman!" --> "####################################man!"

*/

// BARBAR ANSWER

function maskify(cc) {
  if (cc.length > 4) {
    let remainingNumber = cc.length - 4;
    let maskedPart = "#".repeat(remainingNumber) + cc.slice(-4);
    return maskedPart;
  }
  return cc;
}

console.log(maskify("t,y,h,m,m,r,k,m,a,r,z,h,r,f,m,n,n,l"));
console.log(maskify("4556364607935616"));
console.log(maskify("1"));
console.log(maskify("11211"));

// PADSTART ANSWER
// Reference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

function maskify2(cc) {
  return cc.slice(-4).padStart(cc.length, "#");
}

console.log(maskify2("t,y,h,m,m,r,k,m,a,r,z,h,r,f,m,n,n,l"));
console.log(maskify2("4556364607935616"));
console.log(maskify2("1"));
console.log(maskify2("11211"));
