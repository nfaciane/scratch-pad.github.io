// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List // Contacts
 *
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast)
 *     that returns a contact object.
 *
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *
 *  b. Create a factory Function called makeContactList that returns an Object
 *     that manages contacts. The contact-list object should have the following methods:
 *
 *      1. length(): returns the number of contacts within the list. (the list is `contacts`)
 *      2. addContact(contact): takes a contact object to be added to the
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and
 *         returns the contact object if found in the contacts-list, or,
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should
 *         return a String formated with all the full-names of the separated
 *         with a line-break, like so:
 *
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

//array called contacts that needs to be used
/*
I: Function takes input a number and two strings
O: Function return an object
C: 
E:
*/

function makeContact(id, nameFirst, nameLast) {
  // Solve this function first
  return {id, nameFirst, nameLast};

}
/*
I: Function takes input objects
O: Function return an object
C: 
E:
*/
function makeContactList() {
  /*
   * You need something here to hold contacts. See length api for a hint:
   */
  var contacts = [];
//use length method
  return {
    // we implemented the length api for you //
    length: function(){
      return contacts.length;
    },
    addContact: function(contact){
contacts.push(contact);
    },
    //fullName function- input string of full name (if in contact list = true)=> output return contact object; else return undefined
    findContact: function(fullName){
      //define variables to compare; fullName (input) and array of nameFirst, nameLast (output)
        //convert fullName string into array; use split method
        //define nameFirst, nameLast; in contacts array, in object; 
          //access array contacts
          //access object for key nameFirst : value

    }
  }
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.makeContact = makeContact;
  module.exports.makeContactList = makeContactList;
}
