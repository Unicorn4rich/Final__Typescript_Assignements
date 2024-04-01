// Task 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
// If you want to try more comparisons, write more tests.
// Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, 
// greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array


//• Tests for equality and inequality with strings
console.log("string equality true: ", "Shoaib" === "Shoaib");
console.log("string inequality false: ", "Shoaib" === ("Rimaan" as string));

//• Tests using the lower case function
console.log("lowerCase function true: ", "HELLO".toLowerCase() == "hello");
console.log("lowerCase function false: ", ("HELLO" as string) == "hello");

//• Numerical tests involving equality 
console.log("Numerical test equality value true: ", 23 == 23 );
console.log("Numerical test inequality value false", 23 == (25 as number))

// greater than
console.log("greater than true value: ", 15 > 3);
console.log("greater then false value: ", 3 > 15);

// less than
console.log("less than true value: ", 5 < 10);
console.log("less than false value: ", 10 < 5);

// greater than or equal to
console.log("greater than equal true value: ", 2 >= 1);
console.log("greater than equal true value: ", 1 >= 2);

//• Tests using "and" operators
console.log("test and operaotrs true value: ", "Ahmed" === "Ahmed" && 16 >= 16); 
console.log("test and operaotrs false value: ", "Ahmed" === "Ahmed" && 13 >= 16); 

//• Tests using "or" operators
console.log("test using or operator: ", "password" == "password" || "Email" == ("sk9952908@gmail.com" as string));
console.log("test using or operator: ", "password" == ("123" as string) || "Email" == ("sk9952908@gmail.com" as string));

//• Test whether an item is in a array
let country: string[] = ["Pakistan", "Dubai", "Saudia", "Qatar", "India"];
if(country.includes("Pakistan")){
    console.log("yes this country is in list")
}

//• Test whether an item is not in a array
let country_: string[] = ["pakistan", "Dubai", "Saudia", "Qatar", "India"];
if(!country.includes("China")){
    console.log("country is not in the list")
}