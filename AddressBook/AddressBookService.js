"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressBookService = void 0;
const fs = require('fs');
class AddressBookService {
}
exports.AddressBookService = AddressBookService;
AddressBookService.createPerson = (person) => {
    const jsonString = JSON.stringify(person);
    fs.writeFile('./AddressBook.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err);
        }
        else {
            console.log('Successfully wrote file');
        }
    });
};
//# sourceMappingURL=AddressBookService.js.map