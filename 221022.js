let prompt = require('prompt-sync')();

// revision
// 4 unique/unusual data types 
// 1. Not a Number (NaN)
// 2. Null
// 3. Undefined
// 4. Infinity

// functions learnt:
// number, parseInt, parseFloat 
// .tostring & .toFixed
// console.log(101 + "") - to turn into string



let fruits = ['apples','bananas','oranges'];
console.log(fruits);
console.log(fruits[1]);
// we can treat fruits[1] the whole thing as if it's a rather werid variable name
// 1 - index, banana - element. Elements in an array 

// some interesting properties, we can store different data types as elements 
let rojak = [42, 3.14, 'she sells seashell', true, [1,2,3]];

console.log(rojak[4][1]); 
// print out 2 


// Empty array
let e = [];
let f = Array(); 

// size of an array is inifinite, but it is limited by OS/RAM in computer

// 
// add to an array 
e.push(101);
console.log(e);
// .push(101) is a function, hence uses ()

// reasign

// for arrays, the "=" is not assign like data type, but a reference - i.e. ->
// Primitive Data Types : String, Int, Float, Boolean 
// Reference Data Types : Array, Function, Object 

// custom functions are those which the developer created themselves

function addTwo(n1,n2) {
    console.log (n1+n2);
}
// return will be undefined 
// must use return at the end of every function

// let x = parseInt("Please enter a number:"); 
// if (x <= 0) {
//     // anything inside here is within the x <= 0 scope. If you bring in a new variable y it will only be "used" in that scope only
// }

function foobar(x) {
    x = x + 1;
    console.log(x);
}

let x = 5;
foobar(x);
console.log(x)


const unlucky = 13;
const pi = 3.1429; 
// special value that should not be "changed" rather re-aasigning. any variables that you don't foresee changing.
// const doesn't mean "Cannot be changed". it means "CANNOT BE REASSIGNED TO"

const rainbows = ["red", "orange", "yellow", "blue", "indigo", "violet", "green"]; 

// 

function foobar(x) {
// x is a local variable or x is local to the foobar function (same as X's scope in the that of the function)
    x=x+1
    return x;
}

let fruit= ["apples", "oranges", "pineapples"];
// fruits store a reference to the array therefore the reference is copied into the first of paramenter of the "pushDurians" function i.s. pass by reference

pushDurians(fruits);
console.log("fruits = ", fruits);

let xyz = ["Adam", "Ben", "Cindy"];
pushDurians(xyz);
console.log("xyz =", xyz)

// uniquely Javascript operator 
// ===

// when we compare a string with an integer, Javascript will auto convert the string to integer when using ==. hence we use === to stop the auto conversion







