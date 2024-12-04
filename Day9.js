// Challenge: Calculate the Average
// Write a function called calculateAverage that takes an array of numbers as input and returns the average of those numbers.
// Your function should:
// Accept an array of numbers as input.
// Calculate the sum of all the numbers in the array. // Divide the sum by the total number of elements in the array to find the average.
// Return the calculated average.

const calculateAverage = (arr) => {
  let total = arr.reduce((acc, curr) => acc + curr, 1);

  let avg = total / arr.length;
  //   console.log(avg);
  return avg;
};

console.log(calculateAverage([3, 4, 5, 6, 1]));
// output 360 / 5 =72
