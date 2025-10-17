// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/**
 * Given an input value, return true if the value is an Array, false if otherwise.
 *
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 *
 * HINT: There is a method that can help with this.
 */
/*
I: Function takes in an input value
O: Function returns true; if value is an array/ else return false
C: use Array.isArray();
E:
*/
function isArray(value) {
  // YOUR CODE BELOW HERE //
//if statement
  //condition: if value is an array => return true
  if(Array.isArray(value)){
    //code: return true
    return true
  } else{
    //code: return false
    return false;
  }
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return true if the value is an Object intended as a
 * collection, false if otherwise.
 *
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not
 * null, not an Array, not a Date - all of these will return 'object' if used
 * with typeof.
 *
 * HINT: look up how to figure out if something is an instance of the Date object.
 *
 * isObject({ a: 1, b: 2 }); // true
 * isObject([1, 2, 3]); // false
 * 
 */
/*
I: Function takes in an input value
O: Function returns true if value is collection object => else return false
C: 
E:
*/
function isObject(value) {
  // YOUR CODE BELOW HERE //
  //if statement
    //if value is collection object => return true
    if(!(Array.isArray(value) || value === null || value instanceof Date || typeof(value) !== 'object')){
      return true;
    } else {
      return false;
    }
    
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return true if is either an Array or an an Object
 * intended as a collection, false if otherwise.
 *
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
/*
I: Function takes in an input value
O: Function returns true if array or object; else return false
C: 
E:
*/
function isCollection(value) {
  // YOUR CODE BELOW HERE //

  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 *
 * Types are one of:
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 *
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */
/*
I: Function takes in an input 
O: Function returns 
C: 
E:
*/
function typeOf(value) {
  // YOUR CODE BELOW HERE //
  
  // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.isArray = isArray;
  module.exports.isObject = isObject;
  module.exports.isCollection = isCollection;
  module.exports.typeOf = typeOf;
}
