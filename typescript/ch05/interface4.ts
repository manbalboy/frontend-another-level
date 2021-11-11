interface Person4 {
    name: string;
    age: number;
    hello(): void;
}


const p41: Person4 = {
    name: '훈',
    age:1,
    hello: (): void => {

    }
}


const p42: Person4 = {
    name: '훈',
    age:1,
    hello() {

    }
}