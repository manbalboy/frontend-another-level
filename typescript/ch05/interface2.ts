interface Person2 {
    name: string;
    age?: number;
}

function hello2(person: Person2): void {
    console.log(`안녕하세요! ${person.name}`);
}


hello2({name: '정훈', age: 12});

hello2({name: '정훈', });