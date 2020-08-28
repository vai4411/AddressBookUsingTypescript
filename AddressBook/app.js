"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AddressBookService_1 = require("./AddressBookService");
const process_1 = require("process");
var readlineSync = require('readline-sync');
let main = () => {
    while (true) {
        console.log("\n*********Welcome to address book************\n");
        console.log("1: Add Person Contact");
        console.log("2: Display Contacts");
        console.log("3: Update Person Contact");
        console.log("4: exit");
        let choice = readlineSync.question("Enter your choice: ");
        switch (choice) {
            case "1":
                AddressBookService_1.addressBook.addPerson(AddressBookService_1.addressBook.personInput(true));
                break;
            case "2":
                AddressBookService_1.addressBook.display();
                break;
            case "3":
                AddressBookService_1.addressBook.updatePerson();
                break;
            case "4":
                process_1.exit();
            default:
                console.log("\nInvalid choice....\n");
                break;
        }
    }
};
main();
//# sourceMappingURL=app.js.map