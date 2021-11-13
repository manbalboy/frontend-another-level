class Person3 {
    private name: string = "Hun";
    private _age: number;

    constructor(age?: number) {
        if (age === undefined) {
            this._age = 0;
        } else {
            this._age = age;
        }
    }

    getAge(): number {
        return this._age;
    }

    setAge(age:number) {
        this._age = age;
    }
}

const p3 = new Person3();
console.log(p3);
