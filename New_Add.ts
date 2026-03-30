// TypeScript Code Examples: From Basic to Advanced
// This file contains examples of TypeScript concepts from basic to advanced levels.
// Compile with tsc to see the JavaScript output.

// ==========================================
// BASIC CONCEPTS
// ==========================================

// 1. Basic Types
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10];

// 2. Any and Unknown
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

let uncertain: unknown = 4;
uncertain = "maybe a string instead";

// 3. Void, Null, Undefined
function warnUser(): void {
    console.log("This is my warning message");
}

let u: undefined = undefined;
let n: null = null;

// 4. Never
function error(message: string): never {
    throw new Error(message);
}

// 5. Object
declare function create(o: object | null): void;

// ==========================================
// INTERFACES
// ==========================================

interface Person {
    firstName: string;
    lastName: string;
    age?: number; // Optional property
    readonly id: number; // Read-only property
}

function greet(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user: Person = { firstName: "Jane", lastName: "User", id: 1 };

// Interface for functions
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
};

// ==========================================
// CLASSES
// ==========================================

class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

// ==========================================
// GENERICS
// ==========================================

function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("myString");
let output2 = identity("myString"); // Type inference

// Generic classes
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };

// ==========================================
// ADVANCED TYPES
// ==========================================

// Union Types
function padLeft(value: string, padding: string | number) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}

// Intersection Types
interface ErrorHandling {
    success: boolean;
    error?: { message: string };
}

interface ArtworksData {
    artworks: { title: string }[];
}

type ArtworksResponse = ArtworksData & ErrorHandling;

// Type Guards
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

// Type Aliases
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;

// ==========================================
// MODULES AND NAMESPACES
// ==========================================

// This would be in separate files normally
namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }

    const lettersRegexp = /^[A-Za-z]+$/;
    const numberRegexp = /^[0-9]+$/;

    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }

    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
}

// Usage
let strings = ["Hello", "98052", "101"];
let validators: { [s: string]: Validation.StringValidator; } = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();

// ==========================================
// DECORATORS
// ==========================================

function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

@sealed
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

// Method Decorator
function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    };
}

class Greeter2 {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    @enumerable(false)
    greet() {
        return "Hello, " + this.greeting;
    }
}

// ==========================================
// ADVANCED FEATURES
// ==========================================

// Conditional Types
type NonNullable<T> = T extends null | undefined ? never : T;

// Mapped Types
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

type Partial<T> = {
    [P in keyof T]?: T[P];
};

// Utility Types
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Omit<Todo, "description">;
type TodoInfo = Pick<Todo, "title" | "completed">;

// Template Literal Types
type World = "world";
type Greeting = `hello ${World}`;

// ==========================================
// ASYNC/AWAIT AND PROMISES
// ==========================================

async function fetchData(url: string): Promise<string> {
    const response = await fetch(url);
    return response.text();
}

// ==========================================
// SYMBOLS AND ITERATORS
// ==========================================

let sym1 = Symbol();
let sym2 = Symbol("key");

class BasicCollection<T> {
    private items: T[] = [];

    add(item: T) {
        this.items.push(item);
    }

    *[Symbol.iterator]() {
        yield* this.items;
    }
}

// ==========================================
// MIXINS
// ==========================================

class Disposable {
    isDisposed: boolean = false;
    dispose() {
        this.isDisposed = true;
    }
}

class Activatable {
    isActive: boolean = false;
    activate() {
        this.isActive = true;
    }
    deactivate() {
        this.isActive = false;
    }
}

class SmartObject implements Disposable, Activatable {
    constructor() {
        setInterval(() => console.log(this.isActive + " : " + this.isDisposed), 500);
    }

    interact() {
        this.activate();
    }

    // Disposable
    isDisposed: boolean = false;
    dispose: () => void;
    // Activatable
    isActive: boolean = false;
    activate: () => void;
    deactivate: () => void;
}

applyMixins(SmartObject, [Disposable, Activatable]);

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}

// ==========================================
// TYPE ASSERTIONS
// ==========================================

let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

// ==========================================
// ENUMS
// ==========================================

enum Color {Red, Green, Blue}
let c: Color = Color.Green;

enum Color2 {Red = 1, Green = 2, Blue = 4}
let c2: Color2 = Color2.Green;

// ==========================================
// CONST ASSERTIONS
// ==========================================

const directions = ["north", "south", "east", "west"] as const;
type Direction = typeof directions[number]; // "north" | "south" | "east" | "west"

// ==========================================
// EXHAUSTIVE CHECKS
// ==========================================

type Shape = "circle" | "square";

function getArea(shape: Shape) {
    switch (shape) {
        case "circle":
            return Math.PI * 2 ** 2;
        case "square":
            return 4 ** 2;
        default:
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}

// ==========================================
// DISCRIMINATED UNIONS
// ==========================================

interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    sideLength: number;
}

type Shape2 = Circle | Square;

function getArea2(shape: Shape2) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
    }
}

// ==========================================
// INDEX SIGNATURES
// ==========================================

interface StringArray {
    [index: number]: string;
}

let myArray: StringArray = ["Bob", "Fred"];

interface NumberDictionary {
    [index: string]: number;
    length: number;
    name: number; // Error: Property 'name' of type 'number' is not assignable to string index type 'number'.
}

// ==========================================
// ABSTRACT CLASSES
// ==========================================

abstract class Department {
    constructor(public name: string) {}

    printName(): void {
        console.log("Department name: " + this.name);
    }

    abstract printMeeting(): void; // Must be implemented in derived classes
}

class AccountingDepartment extends Department {
    constructor() {
        super("Accounting and Auditing");
    }

    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }

    generateReports(): void {
        console.log("Generating accounting reports...");
    }
}

// ==========================================
// ACCESS MODIFIERS
// ==========================================

class Person2 {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employee extends Person2 {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

// ==========================================
// STATIC MEMBERS
// ==========================================

class Grid {
    static origin = {x: 0, y: 0};

    calculateDistanceFromOrigin(point: {x: number; y: number;}) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }

    constructor (public scale: number) { }
}

// ==========================================
// TYPE GUARDS
// ==========================================

interface Bird {
    fly(): void;
    layEggs(): void;
}

interface Fish {
    swim(): void;
    layEggs(): void;
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function move(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet.swim();
    } else {
        pet.fly();
    }
}

// ==========================================
// FUNCTION OVERLOADS
// ==========================================

function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x): any {
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let suits = ["hearts", "spades", "clubs", "diamonds"];

// ==========================================
// OPTIONAL PARAMETERS AND DEFAULT VALUES
// ==========================================

function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

function buildName2(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

// ==========================================
// REST PARAMETERS
// ==========================================

function buildName3(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName3("Joseph", "Samuel", "Lucas", "MacKinzie");

// ==========================================
// THIS PARAMETERS
// ==========================================

interface Card {
    suit: string;
    card: number;
}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}

let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function(this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

// ==========================================
// CALLBACKS AND HIGHER-ORDER FUNCTIONS
// ==========================================

function processUserInput(callback: (input: string) => void) {
    let name = "TypeScript";
    callback(name);
}

processUserInput((input) => {
    console.log("Hello, " + input);
});

// ==========================================
// TYPE INFERENCE
// ==========================================

let x = 3; // x is inferred as number
let y = "hello"; // y is inferred as string

function add(a: number, b: number) {
    return a + b; // return type inferred as number
}

// ==========================================
// LITERAL TYPES
// ==========================================

function printText(s: string, alignment: "left" | "right" | "center") {
    // ...
}

printText("Hello, world", "left");

// ==========================================
// NULLABLE TYPES
// ==========================================

function f(sn: string | null): string {
    if (sn == null) {
        return "default";
    }
    else {
        return sn;
    }
}

// ==========================================
// STRICT NULL CHECKS
// ==========================================

function f2(sn: string | null): string {
    return sn || "default"; // Error: Object is possibly 'null'
}

// With strict null checks enabled, this would error
// To fix: return sn! || "default"; or check properly

// ==========================================
// TYPEOF TYPE GUARDS
// ==========================================

function padLeft2(value: string, padding: string | number) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}

// ==========================================
// INSTANCEOF TYPE GUARDS
// ==========================================

class Bird2 {
    fly() {
        console.log("Flying");
    }
}

class Fish2 {
    swim() {
        console.log("Swimming");
    }
}

function move2(pet: Bird2 | Fish2) {
    if (pet instanceof Bird2) {
        pet.fly();
    } else {
        pet.swim();
    }
}

// ==========================================
// CUSTOM TYPE GUARDS
// ==========================================

function isNumber(x: any): x is number {
    return typeof x === "number";
}

function isString(x: any): x is string {
    return typeof x === "string";
}

function padLeft3(value: string, padding: string | number) {
    if (isNumber(padding)) {
        return Array(padding + 1).join(" ") + value;
    }
    if (isString(padding)) {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}

// ==========================================
// KEYOF OPERATOR
// ==========================================

type PersonKeys = keyof Person; // "firstName" | "lastName" | "age" | "id"

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let person: Person = { firstName: "John", lastName: "Doe", id: 1 };
let firstName = getProperty(person, "firstName");

// ==========================================
// INDEXED ACCESS TYPES
// ==========================================

type PersonName = Person["firstName"]; // string

// ==========================================
// MAPPED TYPES WITH KEYOF
// ==========================================

type Readonly2<T> = {
    readonly [P in keyof T]: T[P];
};

type Partial2<T> = {
    [P in keyof T]?: T[P];
};

// ==========================================
// CONDITIONAL TYPES WITH KEYOF
// ==========================================

type NonNullable2<T> = T extends null | undefined ? never : T;

// ==========================================
// INFER KEYWORD
// ==========================================

type ReturnType2<T> = T extends (...args: any[]) => infer R ? R : any;

// ==========================================
// EXCLUDE AND EXTRACT
// ==========================================

type T00 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
type T01 = Extract<"a" | "b" | "c", "a" | "f">; // "a"

// ==========================================
// RECORD UTILITY TYPE
// ==========================================

type CatName = "miffy" | "boris" | "mordred";
type CatInfo = Record<CatName, {age: number, breed: string}>;

const cats: CatInfo = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" }
};

// ==========================================
// PICK AND OMIT
// ==========================================

type TodoPreview2 = Pick<Todo, "title" | "completed">;
type TodoInfo2 = Omit<Todo, "completed">;

// ==========================================
// REQUIRED AND READONLY
// ==========================================

type Required<T> = {
    [P in keyof T]-?: T[P];
};

type Readonly3<T> = {
    readonly [P in keyof T]: T[P];
};

// ==========================================
// PARAMETERS AND CONSTRUCTORPARAMETERS
// ==========================================

type T1 = Parameters<(s: string) => void>; // [string]
type T2 = ConstructorParameters<new (s: string) => void>; // [string]

// ==========================================
// INSTANCE TYPE
// ==========================================

type T3 = InstanceType<typeof Greeter>; // Greeter

// ==========================================
// THIS PARAMETER IN FUNCTIONS
// ==========================================

function fn(this: void) {
    // Can't use 'this' here
}

// ==========================================
// POLYMORPHIC THIS TYPES
// ==========================================

class BasicCalculator {
    public constructor(protected value: number = 0) { }

    public currentValue(): number {
        return this.value;
    }

    public add(operand: number): this {
        this.value += operand;
        return this;
    }

    public multiply(operand: number): this {
        this.value *= operand;
        return this;
    }
}

class ScientificCalculator extends BasicCalculator {
    public constructor(value = 0) {
        super(value);
    }

    public sin() {
        this.value = Math.sin(this.value);
        return this;
    }
}

// ==========================================
// INDEX TYPES
// ==========================================

function pluck<T, K extends keyof T>(o: T, propertyNames: K[]): T[K][] {
    return propertyNames.map(n => o[n]);
}

interface Car {
    manufacturer: string;
    model: string;
    year: number;
}

let taxi: Car = {
    manufacturer: 'Toyota',
    model: 'Camry',
    year: 2014
};

let makeAndModel: string[] = pluck(taxi, ['manufacturer', 'model']);

// ==========================================
// MAPPED TYPES
// ==========================================

type Proxy<T> = {
    get(): T;
    set(value: T): void;
}

type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
}

// ==========================================
// CONDITIONAL TYPES
// ==========================================

type TypeName<T> =
    T extends string ? "string" :
    T extends number ? "number" :
    T extends boolean ? "boolean" :
    T extends undefined ? "undefined" :
    T extends Function ? "function" :
    "object";

type T10 = TypeName<string>; // "string"
type T11 = TypeName<() => void>; // "function"

// ==========================================
// DISTRIBUTIVE CONDITIONAL TYPES
// ==========================================

type T12 = TypeName<string | (() => void)>; // "string" | "function"
type T13 = TypeName<string | number | boolean>; // "string" | "number" | "boolean"

// ==========================================
// INFER IN CONDITIONAL TYPES
// ==========================================

type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
    ? Return
    : never;

type Num = GetReturnType<() => number>; // number
type Str = GetReturnType<(x: string) => string>; // string
type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>; // boolean[]

// ==========================================
// TEMPLATE LITERAL TYPES
// ==========================================

type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";

type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;

// ==========================================
// INTRINSIC STRING MANIPULATION TYPES
// ==========================================

type Greeting2 = "Hello, world"
type ShoutyGreeting = Uppercase<Greeting2> // "HELLO, WORLD"

type QuietGreeting = Lowercase<ShoutyGreeting> // "hello, world"

type Greeting3 = "Hello, world"
type QuietGreeting2 = Lowercase<Greeting3> // "hello, world"

type CapitalGreeting = Capitalize<QuietGreeting2> // "Hello, world"

type UncomfortableGreeting = Uncapitalize<CapitalGreeting> // "hello, world"

// ==========================================
// SYMBOLS
// ==========================================

const sym = Symbol();
let obj = {
    [sym]: "value"
};

console.log(obj[sym]); // "value"

// ==========================================
// UNIQUE SYMBOLS
// ==========================================

const sym3: unique symbol = Symbol();
const sym4: unique symbol = Symbol();

// ==========================================
// ITERATORS AND GENERATORS
// ==========================================

function* generator(i: number) {
    yield i;
    yield i + 10;
}

const gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 20

// ==========================================
// ASYNC ITERATORS
// ==========================================

async function* asyncGenerator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
}

// ==========================================
// JSX IN TYPESCRIPT
// ==========================================

// This would require JSX setup, but here's the concept
// interface Props {
//     name: string;
// }

// const MyComponent: React.FC<Props> = ({ name }) => <div>Hello {name}</div>;

