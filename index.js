let prompt = require('prompt-sync')();

let x = prompt("what is your name?")

console.log (x)

console.log('Number("3.14") =>', Number("3.14"));

// convert number to string
let number = 42;
console.log(number.toString()); 
// . => 's it shows that toString belongs to number

// the typeof function will return the data type of a given parameter

let s = number.toString();
console.log("typeof(s) =>", typeof(s));

// shortcut

console.log(101 + "")

let pi = 22/7;
console.log("pi =", pi);
console.log("pi to 3 decimal points=", pi.toFixed(3));
// always use .toFixed as the last step


