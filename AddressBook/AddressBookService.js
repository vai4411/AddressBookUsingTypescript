"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressBook = void 0;
const Person_1 = require("./Person");
const FileOperation_1 = require("./FileOperation");
const AddressBookException_1 = require("./AddressBookException");
var readlineSync = require('readline-sync');
let regexString = new RegExp('^[A-Za-z]{3,}$');
let regexZip = new RegExp('^[0-9]{3}[ ]?[0-9]{3}');
let regexNumber = new RegExp('^[0-9]{10}');
let previousDataList = new Array();
class AddressBook {
    constructor() {
        // provide input feilds
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
                    && regexString.test(state) && regexZip.test(String(zip)) && regexNumber.test(String(phoneNumber))) {
                    isWrongDetails = false;
                    return new Person_1.Person(firstName, lastName, address, city, state, zip, phoneNumber);
                }
                else {
                    throw new AddressBookException_1.AddressBookException("Please enter correct data...");
                }
            }
        };
        // display all records
        this.display = () => {
            FileOperation_1.fileOperation.displayRecords();
        };
        // add person to address book{
        this.addPerson = () => {
            let person = exports.addressBook.personInput(true);
            previousDataList = FileOperation_1.fileOperation.readJsonFile();
            let result = true;
            for (let entry = 0; entry < previousDataList.length; entry++) {
                if (previousDataList[entry].firstName == person.firstName
                    && previousDataList[entry].lastName == person.lastName
                    && previousDataList[entry].number == person.number) {
                    result = false;
                }
            }
            if (result) {
                previousDataList.push(person);
                FileOperation_1.fileOperation.writeJsonFile(previousDataList);
                console.log("Person added successfully...");
            }
            else {
                throw new AddressBookException_1.AddressBookException("User is already present....");
            }
        };
        // update data of existing person
        this.updatePerson = () => {
            console.log("\n*********Update Person Contact************\n");
            let index = readlineSync.question("\nEnter persons index:");
            previousDataList = FileOperation_1.fileOperation.readJsonFile();
            let person = previousDataList[index - 1];
            console.log("1: Update address");
            console.log("2: Update city name");
            console.log("3: Update state name");
            console.log("4: Update zip code");
            console.log("5: Update phone number");
            let choice = readlineSync.question("\nEnter choice:");
            let data = readlineSync.question("\nEnter data:");
            let updatedPerson = new Person_1.Person(person.firstName, person.lastName, person.address, person.city, person.state, person.zip, person.number);
            switch (Number(choice)) {
                case 1:
                    regexString.test(data) ? updatedPerson.setAddress(data) : console.log("Invlid address...");
                    break;
                case 2:
                    regexString.test(data) ? updatedPerson.setCity(data) : console.log("Invlid city name...");
                    break;
                case 3:
                    regexString.test(data) ? updatedPerson.setState(data) : console.log("Invlid state name...");
                    break;
                case 4:
                    regexZip.test(data) ? updatedPerson.setZip(Number(data)) : console.log("Invalid zip code...");
                    break;
                case 5:
                    regexNumber.test(data) ? updatedPerson.setNumber(Number(data)) : console.log("Invalid phone number...");
                    break;
                default:
                    console.log("Invalid choice....");
            }
            previousDataList[index - 1] = updatedPerson;
            FileOperation_1.fileOperation.writeJsonFile(previousDataList);
            console.log("Person updated successfully...");
        };
        // delete person in address book
        this.deletePerson = () => {
            console.log("\n*********Delete Person Contact************\n");
            let index = readlineSync.question("\nEnter persons index:");
            previousDataList = FileOperation_1.fileOperation.readJsonFile();
            previousDataList.splice(index - 1, 1);
            FileOperation_1.fileOperation.writeJsonFile(previousDataList);
            console.log("Person deleted successfully...");
        };
        // sort persons data in address book
        this.sortPersonsData = () => {
            console.log("\n***********Sort Person Contact**************\n");
            console.log("1: Sort data by name");
            console.log("2: Sort data by city");
            console.log("3: Sort data by state");
            console.log("4: Sort data by zip");
            let choice = readlineSync.question("\nEnter choice:");
            previousDataList = FileOperation_1.fileOperation.readJsonFile();
            switch (Number(choice)) {
                case 1:
                    previousDataList.sort((a, b) => a.firstName.localeCompare(b.firstName) || a.lastName.localeCompare(b.lastName));
                    break;
                case 2:
                    previousDataList.sort((a, b) => a.city.localeCompare(b.city));
                    break;
                case 3:
                    previousDataList.sort((a, b) => a.state.localeCompare(b.state));
                    break;
                case 4:
                    previousDataList.sort((a, b) => String(a.zip).localeCompare(String(b.zip)));
                    break;
                default:
                    console.log("Invalid choice....");
            }
            FileOperation_1.fileOperation.writeJsonFile(previousDataList);
        };
    }
}
exports.addressBook = new AddressBook();
//# sourceMappingURL=AddressBookService.js.map