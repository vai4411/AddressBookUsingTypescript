"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressBook = void 0;
const Person_1 = require("./Person");
const FileOperation_1 = require("./FileOperation");
var readlineSync = require('readline-sync');
let personList = new Array();
let regexString = new RegExp('^[A-Za-z]{3,}$');
let regexZip = new RegExp('^[0-9]{3}[ ]?[0-9]{3}');
let regexNumber = new RegExp('^[0-9]{10}');
class AddressBook {
    constructor() {
        this.personInput = (isWrongDetails) => {
            while (isWrongDetails) {
                let firstName = readlineSync.question('Enter first name: ');
                let lastName = readlineSync.question('Enter last name: ');
                let address = readlineSync.question('Enter address: ');
                let city = readlineSync.question('Enter city: ');
                let state = readlineSync.question('Enter state: ');
                let zip = readlineSync.question('Enter zip: ');
                let phoneNumber = readlineSync.question('Enter phone number: ');
                if (regexString.test(firstName) && regexString.test(lastName) && regexString.test(city)
                    && regexString.test(state) && regexZip.test(zip) && regexNumber.test(phoneNumber)) {
                    isWrongDetails = false;
                    return new Person_1.Person(firstName, lastName, address, city, state, zip, phoneNumber);
                }
                else {
                    console.log("\nPlease enter correct details....\n");
                }
            }
        };
        this.display = () => {
            FileOperation_1.fileOperation.displayRecords();
        };
        this.addPerson = (person) => {
            personList.push(person);
            let oldPersonList = FileOperation_1.fileOperation.readJsonFile();
            let finalList = personList.concat(oldPersonList);
            FileOperation_1.fileOperation.writeJsonFile(finalList);
        };
        this.updatePerson = () => {
            console.log("\n*********Update Person Contact************\n");
            let index = readlineSync.question("\nEnter persons index:");
            let personList = FileOperation_1.fileOperation.readJsonFile();
            let person = personList[index - 1];
            console.log("1: Update Address");
            console.log("2: Update city name");
            console.log("3: Update state name");
            console.log("4: Update zip code");
            console.log("5: Update phone number");
            let choice = readlineSync.question("\nEnter choice:");
            let data = readlineSync.question("\nEnter data:");
            let updatedPerson = new Person_1.Person(person.firstName, person.lastName, person.address, person.city, person.state, person.zip, person.number);
            switch (choice) {
                case "1":
                    regexString.test(data) ? updatedPerson.setAddress(data) : console.log("Invlid address...");
                    break;
                case "2":
                    regexString.test(data) ? updatedPerson.setCity(data) : console.log("Invlid city name...");
                    break;
                case "3":
                    regexString.test(data) ? updatedPerson.setState(data) : console.log("Invlid state name...");
                    break;
                case "4":
                    regexZip.test(data) ? updatedPerson.setZip(data) : console.log("Invalid zip code...");
                    break;
                case "5":
                    regexNumber.test(data) ? updatedPerson.setNumber(data) : console.log("Invalid phone number...");
                    break;
                default:
                    console.log("Invalid choice....");
            }
            personList[index] = updatedPerson;
            FileOperation_1.fileOperation.writeJsonFile(personList);
        };
        this.deletePerson = () => {
            console.log("\n*********Delete Person Contact************\n");
            let index = readlineSync.question("\nEnter persons index:");
            let personList = FileOperation_1.fileOperation.readJsonFile();
            personList.splice(index - 1, 1);
            FileOperation_1.fileOperation.writeJsonFile(personList);
        };
    }
}
exports.addressBook = new AddressBook();
//# sourceMappingURL=AddressBookService.js.map