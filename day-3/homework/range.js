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
var arr = [];
var ajj = [];
//for loop using parameters
for (var i = start; i <= end; i++ ){
 var a = arr.push(i);

  //if statement
  if(start > end){
for (var j = end; j >= start; j--){
  var b = ajj.push(j);
  array = ajj;
}
  } else {
array = arr;
  }
}
//return output array
return array;
  // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.range = range;
}
