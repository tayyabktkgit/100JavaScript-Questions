// Challenge: Factorial Finder
// Write a function factorial that takes a non-negative integer num as input and returns its factorial. The
// factorial of a non-negative integer n, denoted as n!, is the product of all positive integers less than or equal to n. The factorial of 0 is defined as 1.

const findFactorial = (val)=>{
    if (val > 0 && val !=0) {
    let fact = 1;
        for (let i = 1; i <= val; i++) {
            fact = fact* i; 
        }
        return fact;
    }
    return "enter correct value, positive and greater than 0";
}



console.log(findFactorial(5)); 
//output 120
console.log(findFactorial(10));
//output 3628800
console.log(findFactorial(2));
//output 2