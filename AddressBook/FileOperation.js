"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileOperation = void 0;
const fileName = './AddressBook.json';
const fs = require("fs");
let personDetails = new Array();
class FileOperaion {
    constructor() {
        // read json file
        this.readJsonFile = () => {
            try {
                let data = fs.readFileSync(fileName);
                personDetails = JSON.parse(data);
                return personDetails;
            }
            catch (err) {
                console.log(err);
            }
        };
        // write data in json file
        this.writeJsonFile = (userList) => {
            try {
                let jsonString = JSON.stringify(userList);
                fs.writeFileSync(fileName, jsonString);
            }
            catch (err) {
                console.log(err);
            }
        };
        // display all records
        this.displayRecords = () => {
            console.log("\n*********Display Person Contact************\n");
            this.readJsonFile();
            personDetails.map((i, index) => {
                console.log((index + 1) + " " + JSON.stringify(i));
            });
        };
    }
}
exports.fileOperation = new FileOperaion();
//# sourceMappingURL=FileOperation.js.map