class Person4 {
    public constructor(public _name: string, private age: number) {}

    get name(){
        return this._name;
    }

    set name(name) {
        this._name = name;
    }
}

const p4: Person4 = new Person4('Hun', 33);
p4.name = '후니';
console.log(p4.name); //getter
