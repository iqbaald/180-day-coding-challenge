/*
180 day Coding Challenge (1/180)
Link : https://www.codewars.com/kata/57f780909f7e8e3183000078/solutions/javascript
Question : Given a non-empty array of integers, return the result of multiplying the values together in order. 
Input : [1, 2, 3, 4]
Result : 1 * 2 * 3 * 4 = 24
*/

// Barbar Answer
function grow1(x){
    let result = x[0];
    for (let i = 1; i < x.length; i++){
    result *= x[i]; // from result = result * x[i];
    }
    return result;
    }

// Reduce Answer
// Reference : https://www.w3schools.com/jsref/jsref_reduce.asp

function grow2(x){
    const result = x.reduce((a,b) => a * b, 1) //a = previous value, b = current value, 1 = first value
    return result;
}

// Oneline Answer
// Using function expression
// Reference : https://developer.mozilla.org/en-US/docs/web/JavaScript/Reference/Operators/function

const grow3 = (x) => x.reduce((a,b) => a * b); //a = previous value, b = current value, "without first value"

// OrangLain Answer

const grow4 = x => eval(x.join("*"))


console.log(grow1([1 ,2 ,3 ,4]))
console.log(grow2([1 ,2 ,3 ,4]))
console.log(grow3([1 ,2 ,3 ,4]))
console.log(grow4([1 ,2 ,3 ,4]))

