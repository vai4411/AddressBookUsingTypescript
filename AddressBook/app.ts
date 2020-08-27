import { Person } from "./Person";
import { createContactPerson, addPerson } from "./AddressBookService";
import { exit } from "process";

var readlineSync = require('readline-sync');
let regexString: RegExp = new RegExp('^[A-Za-z]{3,}$');
let regexZip: RegExp = new RegExp('^[0-9]{3}[ ]?[0-9]{3}');
let regexNumber: RegExp = new RegExp('^[0-9]{10}');

let personInput = (isWrongDetails: boolean): Person => {
    while (isWrongDetails) {
        let firstName: string = readlineSync.question('Enter first name: ');
        let lastName: string = readlineSync.question('Enter last name: ');
        let address: string = readlineSync.question('Enter address: ');
        let city: string = readlineSync.question('Enter city: ');
        let state: string = readlineSync.question('Enter state: ');
        let zip: string = readlineSync.question('Enter zip: ');
        let phoneNumber: string = readlineSync.question('Enter phone number: ');
        if (regexString.test(firstName) && regexString.test(lastName) && regexString.test(city)
            && regexString.test(state) && regexZip.test(zip) && regexNumber.test(phoneNumber)) {
            isWrongDetails = false;
            return new Person(firstName, lastName, address, city, state, zip, phoneNumber);
        }
        else {
            console.log("\nPlease enter correct details....\n");
        }
    }
}

while (true) {
    let choice = readlineSync.question("\n1:Create Person Contact\n2:Add Person Contact\nEnter your choice: ");
    switch (choice) {
        case "1":
            createContactPerson(personInput(true));
            break;
        case "2":
            addPerson(personInput(true));
            break;
        case "3":
            exit();
        default:
            console.log("\nInvalid choice....\n");
            break;
    }
}