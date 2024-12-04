
// Write a function findMax that takes an array of numbers as input and returns the maximum number in the array.

const findMaxNumber = (array)=>{
    return Math.max(...array);
}


// Example usage:
console.log(findMaxNumber( [1, 5, 3, 9, 2])); 
// Output: 9 
console.log(findMaxNumber([-10, -5, -3, -9, -2])); 
// Output: -2 
console.log(findMaxNumber([5]));
 // Output: 5