function returnAny(message: any): any {
    console.log(message);
}

const any1 = returnAny("리턴은 아무거나");

let looselyTyped: any = {};
const d = looselyTyped.a.b.c.d.e;

//any는 사용을 자제해야함