import { Person } from "./Person";
let jsonString: string;
let personList = new Array<Person>();
const fs = require('fs');

let writePersonData = (jsonString: string): void => {
    fs.writeFileSync('./AddressBook.json', jsonString);
}

let storePersonData = (person: Person): void => {
    personList.push(person);
    jsonString = JSON.stringify(personList);
    writePersonData(jsonString);
}

export let createContactPerson = (person: Person): void => {
    fs.unlinkSync('./AddressBook.json');
    storePersonData(person);
}

export let addPerson = (person: Person): void => {
    storePersonData(person);
}