let prompt = require('prompt-sync')();

let counter = 0;
while (counter<5){
    console.log(counter);
    counter += 1;
}

// break
// ends the loop immediately
let x = 10;
while (x<100){ 
    console.log(x);
    if (x ==12) {
        break;
    }
    x++;
}
console.log("Bye bye loop");


// // continue
// // opposite of break, move the red arrow to the start of the while loop again. It will skip all the other lines in the body of the loop 

for (i=0; i<20; i++){
    console.log(i);
    if (i%2 == 0 && i%3==0) {
        continue;
    }
    console.log(i);
}


let number = 0;
while (true) {
  number = parseInt(prompt("Enter a three digit number: "));
  // check if the number is three digit
  if (number >= 100 && number <= 999) {
    // since the user provides a three digit number
    // we don't need go on to the next round loop
    // we can simply breal
    break;
  }
}
console.log("Your number is ", number);


// Escape sequence

// 1. represent special characters
// \n is known as new line
// \t is like pressing the tab key

// 2. characters that have special meaning to the computer
console.log('I said,\"I don\'t know anything"')
// by putting the "\" in front of ", '

// 
// template literals
// the backtick string
// the template literals can have JavaScript expression

let name = "John Smith";
let amt = 500.12345;

// ${} in a template literal means
// it's a JavaScript expression that simplifies
// to a value (string, int, float, boolean, array etc.)
let s = `Dear ${name},
    I regert inform your bill of $${amt.toFixed(2)} is overdue. If you don't pay up by the end of the month we charge you 10% late fee of $${(amt * 0.1).toFixed(2)}.

Your sincerely,
the billing department

"We aim to serve"
`

console.log(s);