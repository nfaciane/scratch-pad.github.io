// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/**
 * Given an input base to test against, which could be a String or Number,
 * return a Function that tests whether a given value is greater than the
 * base.
 */
/*
I: Function takes input base- string or number
O: Function return a function with parameter- value; syntax: return function(){}; 
that tests if value(return function parameter) is greater than base
C:
E:
*/
function createGreaterThanFilter(base) {
  // YOUR CODE BELOW HERE //
  return function(value){
    return value > base;
    }
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input base to test against, which could be a String or Number,
 * return a Function that tests whether a given value is less than the
 * base. (test means return true or false)
 *
 */
/*
I: Function takes input base- string or number
O: Function return function with parameter- value; syntax: return function(){}; 
C: 
E:
*/
function createLessThanFilter(base) {
  // YOUR CODE BELOW HERE //
  return function(value){
    return value < base;
    }
  // YOUR CODE ABOVE HERE //
}

/**
 * Given a startsWith character, which will be a single character, return a
 * Function that tests whether a given String starts with the startsWith
 * character.
 *
 * This function needs to be case insensitive.
 */
/*
I: Function takes input startsWith- single character string
O: Function return function argument
C: case insensitive (must use ==; must have both strings in same case)
E:
*/
function createStartsWithFilter(startsWith) {
  // YOUR CODE BELOW HERE //
  //return function
    //return function parameter- string
  return function(string){
  //declare variables to hold tests for parameters to later compare
    //define startsWith parameter- a single character (case insensitive)
    var a = startsWith.toLowerCase();
    //define string parameter- first character of string (case insensitive)
    var b = string.split("").shift(0).toLowerCase();
    //return output- compare variables to equal one another (case insensitive)
    return a == b;
    }
  // YOUR CODE ABOVE HERE //
}

/**
 * Given a endsWith character, which will be a single character, return a
 * Function that tests whether a given String ends with the endsWith
 * character.
 *
 * This function needs to be case insensitive.
 */
/*
I: Function takes input endsWith- single character string 
O: Function return function with parameter string
C:
E:
*/
function createEndsWithFilter(endsWith) {
  // YOUR CODE BELOW HERE //
//return function (no name) with parameter string
return function(string){
//declare variables to compare later
  //initialize endsWith- single character string (case insensitive)
  var a = endsWith.toLowerCase();
  //initialize string- last character of string (case insensitive)
  var b = string.split("").slice(-1)[0].toLowerCase();
  //return output- compare variables to equal one another (case insensitive)
  return a == b
}
  // YOUR CODE ABOVE HERE //
}
/**
 * Given an Array of Strings and a Function designed to modify a String,
 * return the Array of the Strings, modified.
 *
 * TIP: You need to loop over the Strings, right? We need to pass each String to
 * the modify Function, but we need to collect the results into some collection.
 * 
 * examples:
 * 
 *    modifyStrings(['a', 'b', 'c'], function(str) { return str.toUpperCase() });
 *    // returns => ['A', 'B', 'C']
 * 
 *    modifyString(['a', 'b'], function(str){ return str + "!" });
 *    // returns => ['a!', 'b!']
 */

function modifyStrings(strings, modify) {
  // YOUR CODE BELOW HERE //
 //create output array- where modified string is stored
 var outputArray = [];
 //loop over strings array
 for (var i = 0; i < strings.length; i++){
  //modify strings array then push array values to output array
  outputArray.push(modify(strings[i]));
   //modify strings array
   }
 //return output array
 return outputArray;
}

  // YOUR CODE ABOVE HERE //



/**
 * Given an Array of Strings and a Function designed to test the String in some
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 *
 * Imagine you had a list of names, and you wanted to test they all
 * begin with "C", or they are all exclaimations that end with "!".
 *
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 * 
 * examples:
 * 
 *    allStringsPass(['a', 'b', 'c'], function(str) { return str.length === 1 });
 *    // returns => true
 * 
 *    allStringsPass(['a', 'bb', 'c'], function(str) { return string.length === 1 });
 *    // returns => false
 */

/*
I: Function takes input array- of strings and a function- to test strings
O: Function return true- if all strings pass test
C:
E:
*/
//higher order function
function allStringsPass(strings, test) {
  // YOUR CODE BELOW HERE //
  //iterate over array
  for (var i = 0; i < strings.length; i++){
    //determine if all strings in array pass test
if (strings.every(test)){
  return true;
} else {
  return false;
}
  }
  // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.createGreaterThanFilter = createGreaterThanFilter;
  module.exports.createLessThanFilter = createLessThanFilter;
  module.exports.createStartsWithFilter = createStartsWithFilter;
  module.exports.createEndsWithFilter = createEndsWithFilter;
  module.exports.modifyStrings = modifyStrings;
  module.exports.allStringsPass = allStringsPass;
}
