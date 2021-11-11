"use strict";
// function person (person: {name:string; age:number}):void {
//     console.log(`안녕하세요 ${person.name} 입니다.`);
// }
//
//
// const p1: {name:string; age:number} = {
//     name: '정훈',
//     age: 33
// }
function person(person) {
    console.log("\uC548\uB155\uD558\uC138\uC694 " + person.name + " \uC785\uB2C8\uB2E4.");
}
var p1 = {
    name: '정훈',
    age: 33
};
person(p1);
