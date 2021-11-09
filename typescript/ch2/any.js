"use strict";
function returnAny(message) {
    console.log(message);
}
var any1 = returnAny("리턴은 아무거나");
var looselyTyped = {};
var d = looselyTyped.a.b.c.d.e;
//any는 사용을 자제해야함
