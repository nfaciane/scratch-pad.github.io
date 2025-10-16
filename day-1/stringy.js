// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */

/*
I: Function takes in an input string.
O: Function returns the length of the input string.
C:
E:
*/

function length(string) {
  // YOUR CODE BELOW HERE //
//code
  //return output - length of input string
return string.length;
  // YOUR CODE ABOVE HERE //
}
//console.log(length(string)); //number datatype
/**
 * Given an input String, return a new String forced to lowercase.
 */
/*
I: Function takes input String
O: Function returns new string - with all letters lowercase
C:
E:
*/
function toLowerCase(string) {
  // YOUR CODE BELOW HERE //
//code
  //return output - string input to all lowercase letters
return string.toLowerCase();
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
/*
I: Function takes input string
O: Function returns string with forced uppercase
C:
E:
*/
function toUpperCase(string) {
  // YOUR CODE BELOW HERE //
//code
  //return output - string with forced uppercase
return string.toUpperCase();
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
/*
I: Function takes input string
O: Function returns string with forced dash-case and forced lowercase
C:
E:
*/
function toDashCase(string) {
  // YOUR CODE BELOW HERE //
  //return output - split string by words, join with dash, force lowercase
return string.split(" ").join("-").toLowerCase();
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
/*
I: Function takes input two strings
O: Function returns true/ false
C:case insensitive (must use ==; must have both strings in same case)
E:
*/
function beginsWith(string, char) {
  // YOUR CODE BELOW HERE //
  //initialize variable a to equal first char in string
  var a = string.split("").shift(0).toLowerCase();
  //initialize variable b to equal char in forced lowercase
  var b = char.toLowerCase();
//if-else statement
  //condition - if a equals b
  if(a == b){
    //code output - return true
    return true;
  } else {
    return false;
  }
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
/*
I: Function takes input two strings
O: Function returns true/ false
C: case sensitive (must use ===; must convert both strings to same case)
E:
*/
function endsWith(string, char) {
  // YOUR CODE BELOW HERE //
  //initialize variable a to equal last char in string
  var a = string.split("").slice(-1)[0].toUpperCase();
  //initialize variable b to equal char in forced upper case
  var b = char.toUpperCase();
//if-else statement
  //condition - if a equals b
  if(a === b){
    //code output - return true
    return true;
  } else {
    return false;
  }
  // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
/*
I: Function takes input two strings
O: Function returns one concatenated string
C:
E:
*/
function concat(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //
  //return string1 and string2 concatenated with space between strings
return stringOne + "" + stringTwo;
  // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
/*
I: Function takes input more than one string
O: Function returns all strings joined togther
C:
E:
*/
function join(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //
  var args = Array.from(arguments);
  //join elements in array args
return args.join("");
  // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
/*
I: Function takes input two strings
O: Function returns one string - the longer string
C:
E:
*/
function longest(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //
  var a = stringOne.length;
  var b = stringTwo.length;
if (a > b){
  return stringOne;
}
if (a < b){
  return stringTwo;
}
  // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first string is higher in alphabetical order (meaning earlier in the alphabet) than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
/*
I: Function takes input two strings 
O: Function returns numbers -1, 1, 0
C: use if statement, use sort method
E:
*/
function sortAscending(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //
  //define a and b
  var a = stringOne;
  var b = stringTwo;
  //if statement
//condition: if first string is greater than second string => return 1
    if(a < b){
      //code: return 1
      return 1;
//condition: else if second string is greater than first string => return -1
    } else if(a > b){
      //code: return -1
      return -1;
//condition: else if first string equals second string => return 0
    } else if (a === b){
      //code: return 0
      return 0;

    }
    

  // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is lower in alphabetical order (meaning later in the alphabet) than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
/*
I: Function takes input two strings
O: Function returns numbers (return 1; if first letter lower than second)(return -1; if second letter lower than first) (return 0; if equal)
C:
E:
*/
function sortDescending(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //
  //compare strings - if-else statement
    //if stringOne first character < stringTwo first character
    //true - return 1
    //if stringOne first character > stringTwo first character
    //true - return -1
    //else 0
  // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.length = length;
  module.exports.toLowerCase = toLowerCase;
  module.exports.toUpperCase = toUpperCase;
  module.exports.toDashCase = toDashCase;
  module.exports.beginsWith = beginsWith;
  module.exports.endsWith = endsWith;
  module.exports.concat = concat;
  module.exports.join = join;
  module.exports.longest = longest;
  module.exports.sortAscending = sortAscending;
  module.exports.sortDescending = sortDescending;
}
