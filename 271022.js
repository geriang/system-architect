let prompt = require('prompt-sync')();

// string functions 
// w3schools.com
// string have many functions but they fall into 3 main category


// 1. Transformation function
// those fuctions will return a -copy- of the original string that is called on but the original string is unchanged. 

let text = "the quick brown fox jumps over the lazy dog"

// return a copy of the string but in uppercase
console.log('text.toUpperCase()=>', text.toUpperCase());
 
// STRINGS ARE IMMUTABLE
// immutable == cannot be changed
text[1] = "Z";
console.log("Strings are immutable =>", text[1]);

// what we really transform a string in a varaible
let z = "she sells seashells at the seashore";
// if we the variable z to hold the transformed version of the string
// we need to reassign
z = z.toUpperCase();
console.log("z after z = z.toUpperCase() =>", z);

let a = " hello   "
console.log(a.trim(), "!"); 

console.log(text.replace("dog","cat"));

// 2. Informative function 
// functions that check for something

// .includes function returns if a string is found within the our target string
// check if "the quick brown fox jumps over the dog" has the sub-string "fox"
console.log(`text.includes("fox") => `, text.includes("fox"));

// .includes is case sensitive
console.log(`text.includes("Fox") => `, text.includes("Fox"));

// .indexOf
// it's like includes but it will give you the index of the sub-string that we are looking for
console.log(text.indexOf("fox"));

// take note: indexOf will return a -1 if the substring is not found
console.log(text.indexOf("wolf"));


// 3. Functions that don't flit anyhere e.g. split function
let data = "john,mary,sue";
console.log(data.split(","));

let date = "2022-10-27"
let dateChunks = date.split("-");
console.log(date.split("-")); 
console.log("Year=", dateChunks[0]);
console.log("Month=", dateChunks[1]);
console.log("Date=", dateChunks[2]);


let filename = prompt("Enter the filename together with its file extension, i.e. .doc , .jpg or .ppt");

let extension = filename.slice(-3)

if (extension== ("jpg") || extension== ("png")){
  console.log("It is an image file.")
  
}
else {
  console.log("It is not an image file.")
}


// to create an array we use []
let words = ["orange", "fox", "brown", "apples"];
// or we can use the new Array function
let numbers = new Array(13, 15, 21, 23);
console.log(words);
console.log(numbers);

// arrays can be accessed by index
console.log("words[2] =>", words[2]);

// slice won't change the original array
console.log("words.slice(0,2) =>", words.slice(0, 2));

// Arrays are MUTABLE
// i.e the content (or meanign the items) in an array can be REASSIGNED TO
words[0] = "durian";
console.log("words after assinging durian to index 0 =>", words);

// functions on the array

// 1. Transforming array function 
// arrays are mutable, so those functions will CHANGE the original array
words.reverse();  // reverse the order of the items
console.log("words after reverse =>", words);
words.sort();
console.log("words after sort =>", words);

// 2. Informative functions
// includes fuction works the same as for strings
console.log("Does words have apples =>", words.includes("apples"))
console.log("Index of brown inside apples =>", words.indexOf("brown"));

// 3. Modify content in array function 
// add a new item to the back of the array (aka append)
words.push("oxygen");
console.log("words after pushing 'oxygen' =>", words);

// splice function for array
// to delete, and to insert 
// first parameter - which index to start the change at
// second parameter - how many to delete
words.splice(2, 1);
console.log(`after words.splice(2,1) =>`, words);

// use splice to isnert
// we want to insert pineapples at index 1
// i.e we pineapple to be at index 1
// the third parameter is whatever we want to add in
words.splice(1, 0, "pineapples");
console.log(words);



//***iterate sequence with array 

let fruits = ["apples", "oranges", "bananas", "pineapples"];
console.log(fruits);

// array traversal (aka iterating through an array): allows us to extract one item from the array, to do something to it, and then extract the next item until no items are left.
for (let f of fruits) {
  console.log(fruits);
}

let str = "she sells seashells";
let buffer = "";
for (let s of str) {
  if (s != "e") {
    // reminder: we can add two string together
    // --> concatenation
    buffer = buffer + s;
  }
}
console.log(buffer);

// " " --> space
// "" --> empty string
