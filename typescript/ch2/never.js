"use strict";
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("fail");
}
function infiniteLoop() {
    while (true) {
    }
}
var a = "hello";
if (typeof a !== "string") {
    a;
}
