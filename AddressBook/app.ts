import { Person } from "./Person";
import { AddressBookService } from "./AddressBookService";

var readlineSync = require('readline-sync');

let firstName = readlineSync.question('Enter first name? ');
let lastName = readlineSync.question('Enter last name? ');
let address = readlineSync.question('Enter address? ');
let city = readlineSync.question('Enter city? ');
let state = readlineSync.question('Enter state? ');
let zip = readlineSync.question('Enter zip? ');
let number = readlineSync.question('Enter phone number? ');

let person = new Person(firstName, lastName, address, city, state, zip, number);

AddressBookService.createPerson(person);