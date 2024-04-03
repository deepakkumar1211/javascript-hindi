/** Variable --> A JavaScript variable is simply name of storage location
 * Variable are used to store data in JavaScript
 * 
 * 4 Types
 * a. const - not changeable, can't be re-assigned a value and can't be declared again  (block scope)
 * b. let - always prefer to use, can be re-assigned a value but can't be declared again (block scope)
 * c. var -  it can be re-assigned a value and it can also be declared again  (Global scope)
 * d. automatically
 * 
 *  */

const accountId = 14454
// accountId = 2 // not allowed
let accountEmail = "deepak@google.com"
var accountPassword = "12345"
accountCity = "Raipur"
let name; // its a declaration of variable.

console.table([accountId, accountEmail, accountPassword, accountCity, name])

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/