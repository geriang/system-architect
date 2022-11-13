
let prompt = require('prompt-sync')();

let fname = prompt("Please enter the first name: ");
let lname = prompt("Please enter the last name: ");
let tickets = parseInt(prompt("Please enter the number of tickets: "));

// todo: fill in the content for the backtick strings
console.log(`Dear ${fname} ${lname}, 
Thank you for being a customer with THISTIC ticketing. 
You have booked ${tickets} tickets, which cost $${tickets*70} with GST and service charge.

Thank you for allowing us to serve you! 

Regards, THISTIC`);