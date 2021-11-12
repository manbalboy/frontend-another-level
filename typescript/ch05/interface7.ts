interface HelloPerson2 {
    (name: string, age?: number): void;
}

const helloPerson: HelloPerson2 = function (name: string, age?: number) {
    console.log(`안녕하세요! ${name} 입니다.`)
};