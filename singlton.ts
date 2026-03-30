
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