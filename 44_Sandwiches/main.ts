// Task 44
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function
// should have one parameter that collects as many items as the function call provides, and it should print a
// summary of the sandwich that is being ordered. Call the function three times, using a different number of
// arguments each time.


function sandwich(orders: string[]){

    console.log("\nYour Order is ready in just 5 minutes");

    orders.map((item) => console.log(`- ${item}`))

    console.log("Enjoy your Sandwich")
};

sandwich(["souce", "cheese", "garlic"]);
sandwich(["beef", "chicken", "mayo neez"]);
sandwich(["chicken", "capsicum", "veg"])