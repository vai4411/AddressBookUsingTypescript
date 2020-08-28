import { addressBook } from "./AddressBookService";
import { exit } from "process";

var readlineSync = require('readline-sync');

let main = () => {
    while (true) {
        console.log("\n*********Welcome to address book************\n");
        console.log("1: Add Person Contact");
        console.log("2: Display Contacts");
        console.log("3: Update Person Contact")
        console.log("4: exit");
        let choice = readlineSync.question("Enter your choice: ");
        switch (choice) {
            case "1":
                addressBook.addPerson(addressBook.personInput(true));
                break;
            case "2":
                addressBook.display();
                break;
            case "3":
                addressBook.updatePerson();
                break;
            case "4":
                exit();
            default:
                console.log("\nInvalid choice....\n");
                break;
        }
    }
}

main();