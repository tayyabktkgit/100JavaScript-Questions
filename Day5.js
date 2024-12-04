// sort an arry
// funcation take array and then we sort the array

const sortAscending = (array) => {
  // this console the sorted array but have some issues
  console.log(array.sort());
  //  and the using camparing they show the sorted array perfectly
  return array.sort((a, b) => a - b);
};

console.log(sortAscending([10, 3, 4, 1, 49, 2, 5]));

// [1, 10, 2, 3, 4, 49, 5] without comparing output 
// [1, 2, 3, 4, 5, 10, 49]; with using comparing method output 
