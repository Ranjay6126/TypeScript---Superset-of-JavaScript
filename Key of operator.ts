interface User {
    name: string;
    age: number;
}

type UserKeys = keyof User;
// "name" | "age"