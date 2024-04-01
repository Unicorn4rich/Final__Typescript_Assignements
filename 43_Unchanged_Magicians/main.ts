// Task 43
// Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of
// the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a
// separate array. Call show_magicians() with each array to show that you have one array of the original names and
// one array with the Great added to each magician’s name.


// perform krwany wala array
let magicians: string[] = ["sir Zia", "sir Qasim", "sir Daniyal nagori", "miss Hina naseer"];

// first array name step by step print krwany wala
function show_magicians(magicians: string[]){

    magicians.map((item) => console.log(item));
};


// modify array isme (The Great) add krwa rhy hain har name ke sath
function make_great(store: string[]){

    store = store.map((item) => 'The Great ' + item);

    return store;
}


function copy_names(array: string[]){
    
   return [...array]
}

let store = copy_names(magicians)

// sencond array 
store = make_great(store);

// first array 
console.log("\nOrigenal array")
show_magicians(magicians);


console.log("\nmodify array with The Great")
show_magicians(store);
