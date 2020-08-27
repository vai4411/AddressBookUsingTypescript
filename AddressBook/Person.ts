export class Person {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    number: string;

    constructor(firstName: string, lastName: string, address: string, city: string, state: string,
        zip: string, number: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.number = number;
    }

    setFirstName(firstName: string) {
        this.firstName = firstName;
    }

    setLastName(lastName: string) {
        this.lastName = lastName;
    }

    setAddress(address: string) {
        this.address = address;
    }

    setCity(city: string) {
        this.city = city;
    }

    setState(state: string) {
        this.state = state;
    }

    setZip(zip: string) {
        this.zip = zip;
    }

    setNumber(number: string) {
        this.number = number;
    }
}