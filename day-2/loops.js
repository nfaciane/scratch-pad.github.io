// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/**
 * Given an input Array, loop forward over the Array and print its values
 * using console.log().
 */
/*
I: Function takes input array
O: Function returns print to console values of loop
C: loop forward through array - use for-loop
E:
*/
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
//for loop
  //initialization- 0; condition- stop looping at last index of array; increment- by 1
  for (var i = 0; i < array.length; i++){
    //code: output- print to console values of loop of increment forward
    console.log(array[i]); 
  }
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Array, loop backwards over the Array and print its values
 * using console.log().
 */
/*
I: Function takes input array
O: Function returns 
C: loop backwards through array - use for-loop
E:
*/
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
//start- at last index of array; stop- at 0 index of array; increment-by 1
for(var i = array.length - 1; i >= 0; i-- ){
  //code: output- print to console values of loop increment backward
  console.log(array[i]);
}
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, return an Array containing the Object keys.
 */
/*
I: Function takes input object
O: Function returns array containg input object keys
C: use for-in loop
E:
*/
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
//create empty output array
var outputArray = [];
//for-in loop
  //access key in input object
for (var key in object){
  //code - push key values in input object to output array
  outputArray.push(key);
}
//output- return array
return outputArray;
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, loop over the Object and print its keys
 * using console.log().
 */
/*
I: Function takes input object
O: Function returns print to console object keys
C: use console.log(); for-in loop
E:
*/
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
//for-in loop
for (var key in object){
  //code: output- console log object key values
  console.log(key);
}
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, return an Array containing the Object's values.
 */
/*
I: Function takes input object
O: Function returns array containing object values
C: use for-in loop
E:
*/
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
//create empty output array
var outputArray = [];
//for-in loop
for (var key in object){
  //code: push object values into output array
  outputArray.push(object[key]);
}
//output- return array
return outputArray;
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, loop over the Object and print its values
 * using console.log().
 */
/*
I: Function takes input object
O: Function returns print object values to console
C: use for-in loop
E:
*/
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
//for-in loop
for (var key in object){
  //code: output- print object values to console
  console.log(object[key]);
}
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
/*
I: Function takes input object
O: Function returns number value - number of key:value pairs in object
C: use for-in loop
E:
*/
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
//create output variable
var number;
//for-in loop
for (var key in object){
  //code: convert key/value pairs in object to an array by using object.key property length property to find number of properties in object
 number = Object.keys(object);
}
//output- return number of pairs using length property to find number of key/value pairs in new array house in variable number
return number.length;
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, how might we loop over the Object IN REVERSE and
 * print its values using console.log()?
 */
/*
I: Function takes input object
O: Function returns print object values to console in reverse
C: increment in reverse; use for loop
E:
*/
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  //create output variable 
  var objValues;
  //for-in loop because looping over object values
  for (var key in object){
    //code: convert object values to array
    objValues = Object.values(object);
  }
  //for loop because looping over values in reverse
    //start- last  stop- increment-
  // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.printArrayValues = printArrayValues;
  module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
  module.exports.printObjectValues = printObjectValues;
  module.exports.getObjectValues = getObjectValues;
  module.exports.getObjectKeys = getObjectKeys;
  module.exports.printObjectKeys = printObjectKeys;
  module.exports.getObjectLength = getObjectLength;
  module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
