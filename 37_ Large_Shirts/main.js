"use strict";
// Task 37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I
// love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a
// different message.
function make_shirt(size = 'large', text = '"I love Typescript"') {
    console.log(`I want this ${size}, size and print message on shirt ${text}`);
}
make_shirt();
make_shirt('medium');
make_shirt('small', '"I love Python"');
