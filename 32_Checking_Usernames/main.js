"use strict";
// // Task 32
// // Checking Usernames: Do the following to create a program that simulates how websites ensure that
// // everyone has a unique username.
// // • Make a list of five or more usernames called current_users.
// // • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in
// // the current_users list.
// // • Loop through the new_users list to see if each new username has already been used. If it has, print a message
// // that the person will need to enter a new username. If a username has not been used, print a message saying that
// // the username is available.
// // • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_users = ["ShoAib", "ArshaD", "Asif", "Salman", "Nasir"];
let new_users = ["Imran", "Msaoom", "Shoaib", "Yasir", "Arshad"];
new_users.map((N_user) => {
    let lowercase = N_user.toLowerCase();
    if (current_users.map((C_user) => C_user.toLowerCase()).includes(lowercase)) {
        console.log(`sorry this username ${N_user} has already taken`);
    }
    else {
        console.log(`This username ${N_user} is avelible`);
    }
});
