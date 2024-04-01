// Task 21
// They think of something you could store in a TypeScript Object.
// Write a program that creates Objects containing these items.

interface bike {
    name: string,
    model: number,
    colour: string,
    electric: boolean,
    made_in: string
}


let customer: bike = {
    name: "Cd 70",
    model: 2024,
    colour: "Red",
    electric: true,
    made_in: "Pakistan"
}

console.log("Customer Demand features: ", customer);