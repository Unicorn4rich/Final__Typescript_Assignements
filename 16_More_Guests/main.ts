// task 16
// More Guests: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15.
// Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.

// // Task 15
// let Guests: string[] = ["Arshad", "Asif", "Salman", "Nasir"];

// let Can_not: string = "Arshad";

// let newPerson: string = "Masoom";

// Guests[Guests.indexOf(Can_not)] = newPerson;   

// // <-------------------------------------------End------------------------------------------------>

// // Task 16
// console.log(`Good News ${Guests}, i just found a bigger dinner table`);

// Guests.unshift("Waqas");
// Guests.splice(3, 0, "Shafiq");
// Guests.push("Usama");

// Guests.map((items) => console.log(`Congratulations ${items}, your invited to the more category guests to the dinner`))







// task 16
// More Guests: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15.
// Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.


// Task 15
let Guests: string[] = ["Arshad", "Asif", "Salman", "Nasir"];


let newPerson: string = "Masoom";

Guests[Guests.indexOf(Guests[0])] = newPerson;   
console.log("Good news i just found a bigger dinner table");

Guests.unshift("Mith0o");
Guests.splice(3, 0, "Haseeb");
Guests.push("bilal");

Guests.map((item) => console.log(`${item}, we have more friends invited to the dinner`))