// Task 45
// Cars: Write a function that stores information about a car in a Object. The function should always receive a
// manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the
// function with the required information and two other name-value pairs, such as a color or an optional feature.
// Print the Object that’s returned to make sure all the information was stored correctly
function Car_info(manufacturer, model, optional) {
    return {
        manufacturer,
        model,
        ...optional
    };
}
const Details = Car_info('Honda', 'Civic', { year: 2024, color: 'Black', Rim: 'Wide Red rim', Automatic: 'gear system' });
console.log(Details);
export {};
