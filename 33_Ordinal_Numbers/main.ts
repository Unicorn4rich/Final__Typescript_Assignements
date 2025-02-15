// Task 33
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal
// numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read
// "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

let numbers: number[] = [1,2,3,4,5,6,7,8,9];

for(let num of numbers){
    
    if(num === 1){
        console.log(`${num}st`)
    }

    else if(num === 2){
        console.log(`${num}nd`)
    }

    else if(num === 3){
        console.log(`${num}rd`)
    }

    else{
        console.log(`${num}th`)
    }
}

//<--------------------------------------------------End------------------------------------------------>
// i just try this second method to print same result 

let number2: number[] = [1,2,3,4,5,6,7,8,9];

number2.map((num2) => {

    if(num2 === 1){
        console.log(`${num2}st`)
    }

    else if(num2 === 2){
        console.log(`${num2}nd`)
    }

    else if(num2 === 3){
        console.log(`${num2}rd`)
    }

    else{
        console.log(`${num2}th`)
    }
})