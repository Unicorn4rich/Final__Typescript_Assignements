// Task 27
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.
//• If the alien is yellow, print a message that the player earned 10 points.
//• If the alien is red, print a message that the player earned 15 points.
//• Write three versions of this program, making sure each message is printed for the appropriate color alien.
var alien_color = "green";
if (alien_color === "green") {
    console.log("player just earned 5 points");
}
else if (alien_color == "yellow") {
    console.log("player earned 10 points");
}
else if (alien_color === "red") {
    console.log("player earned 15 points");
}
else {
    console.log("please shoot any color of alien to earned points");
}
;
// second version of this program
alien_color = "yellow";
if (alien_color === "green") {
    console.log("player just earned 5 points");
}
else if (alien_color == "yellow") {
    console.log("player earned 10 points");
}
else if (alien_color === "red") {
    console.log("player earned 15 points");
}
else {
    console.log("please shoot any color of alien to earned points");
}
;
// third version of this program
alien_color = "red";
if (alien_color === "green") {
    console.log("player just earned 5 points");
}
else if (alien_color == "yellow") {
    console.log("player earned 10 points");
}
else if (alien_color === "red") {
    console.log("player earned 15 points");
}
else {
    console.log("please shoot any color of alien to earned points");
}
;
