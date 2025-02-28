// + operator is used to convert the value to a number. It can convert any value to a number. If the value is already a number, it will return the number. If the value is a string, it will convert the string to a number if it is a valid number. If the value is a boolean, it will convert true to 1 and false to 0. If the value is null, it will convert null to 0. If the value is undefined, it will convert undefined to NaN.

// console.log(+true);
// console.log(+false);
// console.log(+null);
// console.log(+undefined);
// ==================================================================

// they return error because the history key is not exist.
// const std ={
//     name:"Tayyab",
//     courses:{
//         math:{
//             grade:"A"
//         }
//     }
// };

// const historyGrade  = std.courses.history?.grade;
// console.log(historyGrade);
// ===================================================================


// const arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(arr.some((item)=> item > 5));
// they return true because the some method just check if one value is available then they return true. base on condition 

// const arr1 = [1,2,3,4,5,6,7,8,9,10];
// console.log(arr.every((item)=> item > 5));
// they return false because the every method check if all value is available then they return true otherwise false. base on condition 
//  ======================================================================

// let num = 3;
// console.log(num++);
// output 3 because they first console the num value then they increment the value.
// console.log(num);
// =========================================================================
