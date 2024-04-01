// task 17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
// and you have space for only two guests.
// • Start with your program from Exercise 16.
//  Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. 
// Each time you pop a name from your list, print a message to that person
// letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. 
// Print your list to make sure you actually have an empty list at the end of your program.
// program 16
var Guests = ["Arshad", "Asif", "Salman", "Nasir"];
Guests.unshift("Waqas");
Guests.splice(3, 0, "Shafiq");
Guests.push("Usama");
//<------------------------------------------End---------------------------------------------->
// task 17
console.log("Sorry ".concat(Guests, ", Duo to some reason i just invite only two people"));
while (Guests.length > 2) {
    var remove = Guests.pop();
    console.log("Sorry ".concat(remove, ", you are no longer invited to the dinner"));
}
Guests.map(function (items) { return console.log("Congratulations ".concat(items, " you are still invited to the dinner")); });
Guests.pop();
Guests.pop();
console.log("The final empty list", Guests);
