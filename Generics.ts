function getValue<T>(value: T): T {
    return value;
}

console.log(getValue<string>("Hello"));
console.log(getValue<number>(100));