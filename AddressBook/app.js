"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = require("./Person");
const AddressBookService_1 = require("./AddressBookService");
const process_1 = require("process");
var readlineSync = require('readline-sync');
let regexString = new RegExp('^[A-Za-z]{3,}$');
let regexZip = new RegExp('^[0-9]{3}[ ]?[0-9]{3}');
let personInput = (isWrongDetails) => {
    while (isWrongDetails) {
        let firstName = readlineSync.question('Enter first name: ');
        let lastName = readlineSync.question('Enter last name: ');
        let address = readlineSync.question('Enter address: ');
        let city = readlineSync.question('Enter city: ');
        let state = readlineSync.question('Enter state: ');
        let zip = readlineSync.question('Enter zip: ');
        let number = readlineSync.question('Enter phone number: ');
        if (regexString.test(firstName) && regexString.test(lastName) && regexString.test(city)
            && regexString.test(state) && regexZip.test(zip)) {
            isWrongDetails = false;
            return new Person_1.Person(firstName, lastName, address, city, state, zip, number);
        }
        else {
            console.log("\nPlease enter correct details....\n");
        }
    }
};
while (true) {
    let choice = readlineSync.question("\n1:Create Person Contact\n2:Add Person Contact\nEnter your choice: ");
    switch (choice) {
        case "1":
            AddressBookService_1.createPerson(personInput(true));
            break;
        case "2":
            AddressBookService_1.addPerson(personInput(true));
            break;
        case "3":
            process_1.exit();
        default:
            console.log("\nInvalid choice....\n");
            break;
    }
}
//# sourceMappingURL=app.js.map