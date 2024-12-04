// 12: Write a function that takes an array of integers as input and removes any duplicate elements, returning a new array with only the unique elements.



const  removeDuplicates = (arr) => {
    let  newArr =  [...new Set(arr)];
    return newArr;
}

// Example:
console.log(removeDuplicates([1, 2, 3, 2, 1, 4])); 
// Output: [1, 2, 3, 4]
 console.log(removeDuplicates ([5, 6, 7, 7, 8, 8, 9]));
// Output: [5, 6, 7, 8,9]
console.log(removeDuplicates([1, 2, 3, 4]));
// Output: [1, 2, 3, 4]
console.log(removeDuplicates([]));
// Output: []
