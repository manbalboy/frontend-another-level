interface Person3 {
    name: string;
    age?: number;
    [index: string]: any; /*인덱서블*/
}


function hello3(person: Person3): void {
    console.log(`안녕하세요 ${person.name} 입니다.`);
}

const p3:Person3 = {
    name: '정훈',
    test: 'test'
}

hello3(p3);