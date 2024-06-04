/*
180 day Coding Challenge (82/180)
Link : https://www.codewars.com/kata/563b662a59afc2b5120000c6

At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.

*/

// BARBAR ANSWER
function nbYear(p0, percent, aug, p) {
  let yearCount = 0
  percent = percent / 100
  
  while(p0 < p){
   p0 = Math.floor(p0) + (p0 * percent) + aug
     yearCount++
  }
    return yearCount
  }
  
  console.log(nbYear(1500, 5, 100, 5000))
  console.log(nbYear(1500000, 2.5, 10000, 2000000))
  console.log(nbYear(1500000, 0.25, 1000, 2000000))