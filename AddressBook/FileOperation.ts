import { Person } from './Person';
const fileName = './AddressBook.json';
const fs = require("fs");
let personDetails = new Array<Person>();

class FileOperaion {

    readJsonFile = (): Array<Person> => {
        try {
            let data = fs.readFileSync(fileName);
            personDetails = JSON.parse(data);
            return personDetails;
        } catch (err) {
            console.log(err);
        }
    }

    writeJsonFile = (userList: Array<Person>): void => {
        try {
            let jsonString = JSON.stringify(userList);
            fs.writeFileSync(fileName, jsonString);
            console.log("File write successfully...");
        } catch (err) {
            console.log(err);
        }
    }

    displayRecords = (): void => {
        console.log("\n*********Display Person Contact************\n");
        this.readJsonFile();
        personDetails.map((i, index) => {
            console.log(index + " " + JSON.stringify(i));
        })
    }
}

export let fileOperation = new FileOperaion();