class Person2 {
    name: string = "Hun";
    age: number;

    constructor(age?: number) {
        if (age === undefined) {
            this.age = 0;
        } else {
            this.age = age;
        }
    }
}

const p2 = new Person2();
console.log(p2);
