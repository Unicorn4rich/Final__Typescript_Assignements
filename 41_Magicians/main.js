"use strict";
// Task 41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which
// prints the name of each magician in the array.
let magicians = ["sir Zia", "sir Qasim", "sir Daniyal nagori", "miss Hina naseer"];
function show_magicians(magicians) {
    magicians.map((items) => console.log(items));
}
;
show_magicians(magicians);
