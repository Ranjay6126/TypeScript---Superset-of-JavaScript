interface User {
    name: string;
    age: number;
}

type NameType = User["name"];
// string


// mapped types 

type ReadOnly<T> = {
    readonly [K in keyof T]: T[K];
};

// another example 
interface User {
    name: string;
    age: number;
}

type UserReadOnly = ReadOnly<User>;

// conditonal types 

type IsString<T> = T extends string ? true : false;

type A = IsString<string>;
type B = IsString<number>;


// infer keyword 

type ReturnTypeCustom<T> =
    T extends (...args: any[]) => infer R
        ? R
        : never;

function getUser() {
    return { id: 1 };
}

type User = ReturnTypeCustom<typeof getUser>;