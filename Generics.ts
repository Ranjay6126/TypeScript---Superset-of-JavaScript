function getValue<T>(value: T): T {
    return value;
}

console.log(getValue<string>("Hello"));
console.log(getValue<number>(100));

//Type Assertions


let value: any = "Hello";

let length = (value as string).length;


// Utility Types

interface User {
    name: string;
    age: number;
}

type UpdateUser = Partial<User>;

// Async await with typescript

async function fetchData(): Promise<string> {
    return "Data Received";
}