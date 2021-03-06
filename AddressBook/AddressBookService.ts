import { Person } from "./Person";
import { fileOperation } from "./FileOperation";
import { AddressBookException } from "./AddressBookException";

var readlineSync = require('readline-sync');

let regexString: RegExp = new RegExp('^[A-Za-z]{3,}$');
let regexZip: RegExp = new RegExp('^[0-9]{3}[ ]?[0-9]{3}');
let regexNumber: RegExp = new RegExp('^[0-9]{10}');
let previousDataList: Array<Person> = new Array<Person>();

class AddressBook {

    // provide input feilds
    personInput = (isWrongDetails: boolean): Person => {
        while (isWrongDetails) {
            let firstName: string = readlineSync.question('Enter first name: ');
            let lastName: string = readlineSync.question('Enter last name: ');
            let address: string = readlineSync.question('Enter address: ');
            let city: string = readlineSync.question('Enter city: ');
            let state: string = readlineSync.question('Enter state: ');
            let zip: number = readlineSync.question('Enter zip: ');
            let phoneNumber: number = readlineSync.question('Enter phone number: ');
            if (regexString.test(firstName) && regexString.test(lastName) && regexString.test(city)
                && regexString.test(state) && regexZip.test(String(zip)) && regexNumber.test(String(phoneNumber))) {
                isWrongDetails = false;
                return new Person(firstName, lastName, address, city, state, zip, phoneNumber);
            }
            else {
                throw new AddressBookException("Please enter correct data...");
            }
        }
    }

    // display all records
    display = (): void => {
        fileOperation.displayRecords();
    }

    // add person to address book{
    addPerson = (): void => {
        let person: Person = addressBook.personInput(true);
        previousDataList = fileOperation.readJsonFile();
        let result: boolean = true;
        for (let entry = 0; entry < previousDataList.length; entry++) {
            if (previousDataList[entry].firstName == person.firstName
                && previousDataList[entry].lastName == person.lastName
                && previousDataList[entry].number == person.number) {
                result = false;
            }
        }
        if (result) {
            previousDataList.push(person);
            fileOperation.writeJsonFile(previousDataList);
            console.log("Person added successfully...");
        } else {
            throw new AddressBookException("User is already present....");
        }
    }

    // update data of existing person
    updatePerson = (): void => {
        console.log("\n*********Update Person Contact************\n");
        let index: number = readlineSync.question("\nEnter persons index:");
        previousDataList = fileOperation.readJsonFile();
        let person: Person = previousDataList[index - 1];
        console.log("1: Update address");
        console.log("2: Update city name");
        console.log("3: Update state name");
        console.log("4: Update zip code");
        console.log("5: Update phone number");
        let choice: string = readlineSync.question("\nEnter choice:");
        let data: string = readlineSync.question("\nEnter data:");
        let updatedPerson: Person = new Person(person.firstName, person.lastName, person.address,
            person.city, person.state, person.zip, person.number);
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
        fileOperation.writeJsonFile(previousDataList);
        console.log("Person updated successfully...");
    }

    // delete person in address book
    deletePerson = (): void => {
        console.log("\n*********Delete Person Contact************\n");
        let index: number = readlineSync.question("\nEnter persons index:");
        previousDataList = fileOperation.readJsonFile();
        previousDataList.splice(index - 1, 1);
        fileOperation.writeJsonFile(previousDataList);
        console.log("Person deleted successfully...");
    }

    // sort persons data in address book
    sortPersonsData = (): void => {
        console.log("\n***********Sort Person Contact**************\n");
        console.log("1: Sort data by name");
        console.log("2: Sort data by city");
        console.log("3: Sort data by state");
        console.log("4: Sort data by zip");
        let choice: string = readlineSync.question("\nEnter choice:");
        previousDataList = fileOperation.readJsonFile();
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
        fileOperation.writeJsonFile(previousDataList);
    }
}

export let addressBook = new AddressBook();