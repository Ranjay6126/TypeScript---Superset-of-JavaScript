//Basic Types
let age: number = 21;
let name: string = "Dhanush";
let isActive: boolean = true;


//Array
let numbers: number[] = [1, 2, 3];
let names: string[] = ["ram", "shyam", "hari"];


//tuples
let user: [number, string] = [1, "Dhanush"];

//enum
enum Role {
  Admin,
  User,
  Guest
}

let myRole: Role = Role.Admin;


//function
function add(a: number, b: number): number {
  return a + b;
}

const greet = (name: string): string => {
  return "Hello " + name;
};


//Optional & Default Parameters

function welcome(name: string, age?: number) {
  console.log(name, age);
}

function multiply(a: number, b: number = 5) {
  return a * b;
}



interface Person {
  id: number;
  name: string;
  email?: string;
}
const p1: Person = {
  id: 1,
  name: "Dhanush"
};

//Type Aliases

type UserId = number | string;

let id1: UserId = 101;
let id2: UserId = "A102";

//union
let value: number | string = 10;
value = "ten";

//Classes

class Car {
  brand: string;
  year: number;

  constructor(brand: string, year: number) {
    this.brand = brand;
    this.year = year;
  }

  info() {
    return `${this.brand} - ${this.year}`;
  }
}

const c = new Car("Honda", 2020);
