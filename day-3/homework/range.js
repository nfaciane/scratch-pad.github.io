// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as
 *  parameters and returns an Array containing all integers
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second,
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
/*
I: Function takes input two numbers 
O: Function return array- all integers between the two parameters
C: output array; loop; push method; if statement
E:
*/
function range(start, end) {
  // YOUR CODE BELOW HERE //
//create output array
var array = [];
//if statement 
if(start < end){
  //for loop to define array created with two integers
  for(var i = start; i <= end; i++){
    array.push(i);
  }
  //for loop to define array in reverse if start is greater than end
  } else if(start > end){
    for(var i = start; i >= end; i-- ){
      array.push(i);
    }
  }
  //output: return output array
  return array;
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.range = range;
}
