// check the triangle

const checkTrinangle = (a, b, c) => {
  try {
    if (a === b && b === c) return "Equalinteral Trinangle.";
    if (a === b || b === c || a === c) return "isosceles";
    return "scalene";
  } catch (error) {
    console.log(error);
  }
};

console.log(checkTrinangle(5,5,5));
console.log(checkTrinangle(2,5,2));
console.log(checkTrinangle(3,4,5));
