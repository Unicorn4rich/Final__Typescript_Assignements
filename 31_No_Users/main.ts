// Task 31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.

let user_names2: string [] = ["admin", "shoaib", "arshad", "asif", "salman"];

if(user_names2.length === 0 ){
    console.log("we need to find some users!")
}
else{
    user_names2 = [];
    console.log("we need to find some users!: ", user_names2.length)
}