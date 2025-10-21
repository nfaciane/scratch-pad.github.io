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
      //create output container result
      var match;
        //convert string fullName to array; where index 0 equals firstName and index 1 equals lastName
        var fullNameArray = fullName.split(" ");
        //create for-loop to loop over array, contacts, to find first and last name match
        for(var i = 0; i < contacts.length; i++){
        //if fullNameArray[0] equals contacts[i]['nameFirst] and fullNameArray[1] equals contacts[i]['nameLast']
        if(fullNameArray[0] === contacts[i].nameFirst && fullNameArray[1] === contacts[i].nameLast){
         //return matching object in contacts array 
          match = contacts[i];
        }

      }
       //return output container
       return match;
    }, 
      removeContact: function(contact){
        console.log(contact);
        var a = Object.values(contact);
        var b;

        for(var j = 0; j < contacts.length; j++){
            b = Object.values(contacts[j]);

          if(a.toString() === b.toString()){
            contacts.splice(j, 1);
          }
        }
        },
        /*
        I: Function takes input object from contact array
        O: Function return a string with full name and a space between first and last name
        C: 
        E:
        */
       
        printAllContactNames: function(){
          var names = [];
          //loop over contacts array
          for (var n = 0; n < contacts.length; n++){
            //full name string nameFirst + " " + nameLast
            names.push(contacts[n].nameFirst + " " + contacts[n].nameLast);
          }
          //return string of full name joined with line-break(\n)
          return names.join("\n");
          
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
