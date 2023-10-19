// Create a numberChecker function that takes an array of numbers as an argument and returns a function. The
// returned function should take another number as an argument and return true if the number is in the array, and
// false otherwise.

function numberChecker(...arr) {
    return function (num) {
       return arr.includes(num);
    }
}

const chekNum = numberChecker(1,2,3,4,5);

console.log(chekNum(3));
console.log(chekNum(6));