// function in ts

function add(a: number, b: number): number {
    return a + b;
}

//Optional Parameter

function greet(name: string, age?: number) {
    console.log(name);
}


// enums

enum Role {
    Admin,
    User,
    Guest
}

let role: Role = Role.Admin;

