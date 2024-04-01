// Task 42
// Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great()
// that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call
// show_magicians() to see that the list has actually been modified.

// Old array 41
let magicians: string[] = ["sir Zia", "sir Qasim", "sir Daniyal nagori", "miss Hina naseer"];

function show_magicians(magicians: string[]){

    magicians.map((item) => console.log(item));
};


// Modify array
function make_great(Modify: string[]){

   Modify = Modify.map((item) => 'The Great' + item)

    return Modify;
}

magicians = make_great(magicians)

show_magicians(magicians);




















// // Modify array
// function make_great(magicians: string[]){

//     magicians = magicians.map((item) => 'The great ' + item)
 
//     return magicians;
//  }
 
//  magicians = make_great(magicians)
//  show_magicians(magicians);
 