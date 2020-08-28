import { Person } from "./Person";
import { fileOperation } from "./FileOperation";

var readlineSync = require('readline-sync');

let personList = new Array<Person>();
let regexString: RegExp = new RegExp('^[A-Za-z]{3,}$');
let regexZip: RegExp = new RegExp('^[0-9]{3}[ ]?[0-9]{3}');
let regexNumber: RegExp = new RegExp('^[0-9]{10}');

class AddressBook {

    personInput = (isWrongDetails: boolean): Person => {
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

    addPerson = (person: Person): void => {
        personList.push(person);
        let oldPersonList: Array<Person> = fileOperation.readJsonFile();
        let finalList = personList.concat(oldPersonList);
        fileOperation.writeJsonFile(finalList);
    }

    updatePerson = (): void => {
        console.log("\n*********Update Person Contact************\n");
        let index: string = readlineSync.question("\nEnter persons index:");
        let personList: Array<Person> = fileOperation.readJsonFile();
        let person: Person = personList[index];
        console.log("1: Update Address");
        console.log("2: Update city name");
        console.log("3: Update state name");
        console.log("4: Update zip code");
        console.log("5: Update phone number");
        let choice: string = readlineSync.question("\nEnter choice:");
        let data: string = readlineSync.question("\nEnter data:");
        let updatedPerson: Person = new Person(person.firstName, person.lastName, person.address,
            person.city, person.state, person.zip, person.number);

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
        fileOperation.writeJsonFile(personList);
    }

    display = (): void => {
        fileOperation.displayRecords();
    }
}

export let addressBook = new AddressBook();