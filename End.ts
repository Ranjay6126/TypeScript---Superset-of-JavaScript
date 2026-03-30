// ==========================================
// DECLARATION MERGING
// ==========================================

interface Box {
    height: number;
    width: number;
}

interface Box {
    scale: number;
}

let box: Box = {height: 5, width: 6, scale: 10};

// ==========================================
// AUGMENTATION
// ==========================================

// global.d.ts
declare global {
    interface Array<T> {
        toObservable(): Observable<T>;
    }
}

// ==========================================
// TRIPLE-SLASH DIRECTIVES
// ==========================================

/// <reference path="..." />
/// <reference types="..." />
/// <reference lib="..." />

// ==========================================
// COMPILER OPTIONS
// ==========================================

// Check tsconfig.json for compiler options like:
// "strict": true,
// "noImplicitAny": true,
// "strictNullChecks": true,
// etc.

// ==========================================
// TYPE CHECKING JAVASCRIPT FILES
// ==========================================

// @ts-check
// let myVar: string = 5; // Error

// ==========================================
// UTILITY TYPES SUMMARY
// ==========================================

// Partial<T> - Makes all properties optional
// Required<T> - Makes all properties required
// Readonly<T> - Makes all properties readonly
// Record<K,T> - Creates an object type with keys K and values T
// Pick<T,K> - Picks properties K from T
// Omit<T,K> - Omits properties K from T
// Exclude<T,U> - Excludes types assignable to U from T
// Extract<T,U> - Extracts types assignable to U from T
// NonNullable<T> - Excludes null and undefined from T
// Parameters<T> - Gets the parameters of a function type
// ConstructorParameters<T> - Gets constructor parameters
// ReturnType<T> - Gets the return type of a function
// InstanceType<T> - Gets the instance type of a constructor
// ThisParameterType<T> - Gets the this parameter type
// OmitThisParameter<T> - Removes the this parameter
// ThisType<T> - Sets the this type

// ==========================================
// ADVANCED PATTERNS
// ==========================================

// Builder Pattern
class UserBuilder {
    private name: string;
    private age: number;
    private email: string;

    constructor(name: string) {
        this.name = name;
    }

    setAge(age: number): this {
        this.age = age;
        return this;
    }

    setEmail(email: string): this {
        this.email = email;
        return this;
    }

    build(): User {
        return new User(this.name, this.age, this.email);
    }
}

class User {
    constructor(public name: string, public age: number, public email: string) {}
}

// Usage
const user2 = new UserBuilder("John").setAge(30).setEmail("john@example.com").build();

// Factory Pattern
interface Vehicle {
    drive(): void;
}

class Car2 implements Vehicle {
    drive(): void {
        console.log("Driving a car");
    }
}

class Bike implements Vehicle {
    drive(): void {
        console.log("Riding a bike");
    }
}

class VehicleFactory {
    static createVehicle(type: "car" | "bike"): Vehicle {
        switch (type) {
            case "car":
                return new Car2();
            case "bike":
                return new Bike();
        }
    }
}

// Singleton Pattern
class Singleton {
    private static instance: Singleton;

    private constructor() {}

    static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

// Observer Pattern
interface Observer {
    update(data: any): void;
}

class Subject {
    private observers: Observer[] = [];

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    notify(data: any): void {
        this.observers.forEach(observer => observer.update(data));
    }
}

// Strategy Pattern
interface Strategy {
    execute(a: number, b: number): number;
}

class AddStrategy implements Strategy {
    execute(a: number, b: number): number {
        return a + b;
    }
}

class MultiplyStrategy implements Strategy {
    execute(a: number, b: number): number {
        return a * b;
    }
}

class Calculator {
    constructor(private strategy: Strategy) {}

    setStrategy(strategy: Strategy): void {
        this.strategy = strategy;
    }

    calculate(a: number, b: number): number {
        return this.strategy.execute(a, b);
    }
}

// Decorator Pattern
interface Coffee {
    cost(): number;
    description(): string;
}

class SimpleCoffee implements Coffee {
    cost(): number {
        return 5;
    }

    description(): string {
        return "Simple coffee";
    }
}

class MilkDecorator implements Coffee {
    constructor(private coffee: Coffee) {}

    cost(): number {
        return this.coffee.cost() + 1;
    }

    description(): string {
        return this.coffee.description() + ", milk";
    }
}

// Usage
let coffee: Coffee = new SimpleCoffee();
coffee = new MilkDecorator(coffee);

// ==========================================
// ERROR HANDLING
// ==========================================

try {
    throw new Error("Something went wrong");
} catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
}

// Custom Error Classes
class CustomError extends Error {
    constructor(message: string, public code: number) {
        super(message);
        this.name = "CustomError";
    }
}

// ==========================================
// METADATA AND REFLECTION
// ==========================================

// Using reflect-metadata library
// import "reflect-metadata";

// class Example {
//     @Reflect.metadata("design:type", String)
//     property: string;
// }

// ==========================================
// CONCLUSION
// ==========================================

// This file covers a comprehensive overview of TypeScript from basic to advanced concepts.
// To compile: tsc New_Add.ts
// To run: node New_Add.js

console.log("TypeScript learning complete!");