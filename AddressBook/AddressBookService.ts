import { Person } from "./Person";
const fs = require('fs');

export class AddressBookService {
    static createPerson = (person: Person): void => {
        const jsonString = JSON.stringify(person);
        fs.writeFile('./AddressBook.json', jsonString, err => {
            if (err) {
                console.log('Error writing file', err)
            } else {
                console.log('Successfully wrote file')
            }
        })
    }
}