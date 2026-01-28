const accountId = 144553;
let accountEmail = "dev@gmail.com";
var accountPassword = "12345";
accountCity = "Bareilly";
let accountState;

// accountId = 2; // This is not allowed as assigning tto const variable which is not allowed.

accountEmail = "dg@gmail.com";
accountPassword = "21212121";
accountCity = "Mathura";

/*
Prefer not use var because of issue in block scope and functional scope, 
Scope if within {}
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
