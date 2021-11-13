class Person5 {
    public readonly name: string = "Mark";
    private readonly country: string;
    public constructor(public _name: string, private age: number) {
        this.country = "korea";
    }

    hello() {
        // this.country = "ff" //바꿀수없음  private readonly country: string;
    }
}

const p5: Person5 = new Person5('Hun', 33);
// p5.name = '후니'; // 바꿀수없음 public readonly name: string = "Mark";
console.log(p5.name); //getter
