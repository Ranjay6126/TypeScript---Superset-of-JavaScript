"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Basic Types
let age = 21;
let name = "Dhanush";
let isActive = true;
//Array
let numbers = [1, 2, 3];
let names = ["ram", "shyam", "hari"];
//tuples
let user = [1, "Dhanush"];
//enum
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
let myRole = Role.Admin;
//function
function add(a, b) {
    return a + b;
}
const greet = (name) => {
    return "Hello " + name;
};
//Optional & Default Parameters
function welcome(name, age) {
    console.log(name, age);
}
function multiply(a, b = 5) {
    return a * b;
}
const p1 = {
    id: 1,
    name: "Dhanush"
};
let id1 = 101;
let id2 = "A102";
//union
let value = 10;
value = "ten";
//Classes
class Car {
    brand;
    year;
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }
    info() {
        return `${this.brand} - ${this.year}`;
    }
}
const c = new Car("Honda", 2020);
//# sourceMappingURL=new.js.map