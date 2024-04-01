// Task 23
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and
// your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')

//• Look closely at your results, and make sure you understand why each line evaluates to True or False.
//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let car = "subaru"

// 1 true
console.log("is car == 'subaru'? I predict true.");
console.log(car == "subaru");

// 2 true
console.log("is car === 'subaru'? I predict true.");
console.log(car === "subaru");

// 3 true
console.log("is car != 'CD 70'? I predict true");
console.log(car != "CD 70");

// 4 true
console.log("is car.length == 6? I predict true.");
console.log(car.length == 6);

// 5 true
console.log("is car == 'subaru' && car.length == 6? I predict true.");
console.log(car == "subaru" && car.length == 6);


// 6 false
console.log("is car != 'subaru'? I predict false");
console.log(car != "subaru");

// 6 false
console.log("is car.lenth >= 7? I predict false");
console.log(car.length >= 7);

// 6 false
console.log("is car == 'SUBARU'? I predict false");
console.log(car == "SUBARU");

// 6 false
console.log("is car.length < 5? I predict false");
console.log(car.length < 5);

// 6 false
console.log("is car === 'Subaru' && car.length === 6 ? i prdict false.");
console.log(car === "Subaru" && car.length === 6);
