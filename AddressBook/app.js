"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AddressBookService_1 = require("./AddressBookService");
const process_1 = require("process");
const console_1 = require("console");
var readlineSync = require('readline-sync');
let main = () => {
    while (true) {
        try {
            console.log("\n*********Welcome to address book************\n");
            console.log("1: Add Person Contact");
            console.log("2: Display Contacts");
            console.log("3: Update Person Contact");
            console.log("4: Delete Person Contact");
            console.log("5: Sort Person Contacts");
            console.log("6: exit");
            let choice = readlineSync.question("Enter your choice: ");
            switch (Number(choice)) {
                case 1:
                    AddressBookService_1.addressBook.addPerson();
                    break;
                case 2:
                    AddressBookService_1.addressBook.display();
                    break;
                case 3:
                    AddressBookService_1.addressBook.display();
                    AddressBookService_1.addressBook.updatePerson();
                    break;
                case 4:
                    AddressBookService_1.addressBook.display();
                    AddressBookService_1.addressBook.deletePerson();
                    break;
                case 5:
                    AddressBookService_1.addressBook.sortPersonsData();
                    break;
                case 6:
                    process_1.exit();
                default:
                    console.log("\nInvalid choice....\n");
                    break;
            }
        }
        catch (err) {
            console_1.error("\n" + err.name + " : " + err.message);
        }
    }
};
main();
//# sourceMappingURL=app.js.map