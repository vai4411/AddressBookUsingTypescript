"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(firstName, lastName, address, city, state, zip, number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.number = number;
    }
    setFirstName(firstName) {
        this.firstName = firstName;
    }
    setLastName(lastName) {
        this.lastName = lastName;
    }
    setAddress(address) {
        this.address = address;
    }
    setCity(city) {
        this.city = city;
    }
    setState(state) {
        this.state = state;
    }
    setZip(zip) {
        this.zip = zip;
    }
    setNumber(number) {
        this.number = number;
    }
}
exports.Person = Person;
//# sourceMappingURL=Person.js.map