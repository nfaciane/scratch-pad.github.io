// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a
 *  String as its only input and returns a new String
 *  representing the input String reversed.  For example:
 *
 *      reverseString('hello');  // => 'olleh'
 *
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */
/*
I: Function takes input string
O: Function return new string (elements are reversed)
C: use loop
E:
*/
function reverseString(input) {
  // YOUR CODE BELOW HERE //
  var newArray = [];
//create output variable
var newString;
//convert string into array
var array = input.split("");
//for-loop; loop in reverse
  //start- last index of array stop- at less than or equal to 0 index increment- i--
  for (var i = array.length - 1; i >= 0; i--){
newArray.push(array[i]);
  }
  //return newString
  return newString = newArray.join('');
  // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}
