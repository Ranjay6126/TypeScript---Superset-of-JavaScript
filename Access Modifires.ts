class Person {
    public name: string;
    private salary: number;
    protected age: number;

    constructor(name: string, salary: number, age: number) {
        this.name = name;
        this.salary = salary;
        this.age = age;
    }
}