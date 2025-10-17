// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
 */
/*
I: Function takes input
O: Function return print array of numbers 1 - 100; print 'Fizz' for multiples of three; 
    print 'Buzz' for multiples of five; print 'FizzBuzz' for multiples of three and five
C:
E:
*/
function fizzBuzz() {
 // YOUR CODE BELOW HERE //

 var replaceFizz = 'Fizz';
 var replaceBuzz = 'Buzz';
 var replaceFizzBuzz = 'FizzBuzz';
 //define array from 1 to 100
 for(var i = 1; i <= 100; i++){
  
//replace multiples of three with 'Fizz'
if(i % 3 === 0 && i % 5 === 0){
  console.log(replaceFizzBuzz);
} else if(i % 3 === 0){
  console.log(replaceFizz);
} else if(i % 5 === 0){
  console.log(replaceBuzz);
} else{
  console.log(i);
}
//console.log(array);
 }
 
//console.log(array);
 // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.fizzBuzz = fizzBuzz;
}
