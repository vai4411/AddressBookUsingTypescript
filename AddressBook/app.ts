import { addressBook } from "./AddressBookService";
import { exit } from "process";
import { error } from "console";

var readlineSync = require('readline-sync');

let main = (): void => {
    while (true) {
        try {
            console.log("\n*********Welcome to address book************\n");
            console.log("1: Add Person Contact");
            console.log("2: Display Contacts");
            console.log("3: Update Person Contact")
            console.log("4: Delete Person Contact");
            console.log("5: Sort Person Contacts");
            console.log("6: exit");
            let choice: number = readlineSync.question("Enter your choice: ");
            switch (Number(choice)) {
                case 1:
                    addressBook.addPerson();
                    break;
                case 2:
                    addressBook.display();
                    break;
                case 3:
                    addressBook.display();
                    addressBook.updatePerson();
                    break;
                case 4:
                    addressBook.display();
                    addressBook.deletePerson();
                    break;
                case 5:
                    addressBook.sortPersonsData();
                    break;
                case 6:
                    exit();
                default:
                    console.log("\nInvalid choice....\n");
                    break;
            }
        } catch (err) {
            error("\n" + err.name + " : " + err.message);
        }
    }
}

main();