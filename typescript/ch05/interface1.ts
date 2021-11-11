interface Person1 {
    name: string;
    age: number;
}

// function person (person: {name:string; age:number}):void {
//     console.log(`안녕하세요 ${person.name} 입니다.`);
// }
//
//
// const p1: {name:string; age:number} = {
//     name: '정훈',
//     age: 33
// }
function person(person: Person1): void {
    console.log(`안녕하세요 ${person.name} 입니다.`);
}


const p1: Person1 = {
    name: '정훈',
    age: 33
}


person(p1);