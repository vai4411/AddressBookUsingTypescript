"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = require("./Person");
const AddressBookService_1 = require("./AddressBookService");
var readlineSync = require('readline-sync');
let firstName = readlineSync.question('Enter first name? ');
let lastName = readlineSync.question('Enter last name? ');
let address = readlineSync.question('Enter address? ');
let city = readlineSync.question('Enter city? ');
let state = readlineSync.question('Enter state? ');
let zip = readlineSync.question('Enter zip? ');
let number = readlineSync.question('Enter phone number? ');
let person = new Person_1.Person(firstName, lastName, address, city, state, zip, number);
AddressBookService_1.AddressBookService.createPerson(person);
//# sourceMappingURL=app.js.map