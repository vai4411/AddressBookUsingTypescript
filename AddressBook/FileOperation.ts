import { Person } from './Person';
const fileName = './AddressBook.json';
const fs = require("fs");
let personDetails = new Array<Person>();

class FileOperaion {

    // read json file
    readJsonFile = (): Array<Person> => {
        try {
            let data = fs.readFileSync(fileName);
            personDetails = JSON.parse(data);
            return personDetails;
        } catch (err) {
            console.log(err);
        }
    }

    // write data in json file
    writeJsonFile = (userList: Array<Person>): void => {
        try {
            let jsonString = JSON.stringify(userList);
            fs.writeFileSync(fileName, jsonString);
        } catch (err) {
            console.log(err);
        }
    }

    // display all records
    displayRecords = (): void => {
        console.log("\n*********Display Person Contact************\n");
        this.readJsonFile();
        personDetails.map((i, index) => {
            console.log((index + 1) + " " + JSON.stringify(i));
        })
    }
}

export let fileOperation = new FileOperaion();