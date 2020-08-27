"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPerson = exports.createPerson = void 0;
let jsonString;
let personList = new Array();
const fs = require('fs');
let writePersonData = (jsonString) => {
    fs.writeFileSync('./AddressBook.json', jsonString);
};
let storePersonData = (person) => {
    personList.push(person);
    jsonString = JSON.stringify(personList);
    writePersonData(jsonString);
};
exports.createPerson = (person) => {
    fs.unlinkSync('./AddressBook.json');
    storePersonData(person);
};
exports.addPerson = (person) => {
    storePersonData(person);
};
//# sourceMappingURL=AddressBookService.js.map