function error(message: string): never {
    throw new Error(message);
}


function fail() {
    return error("fail");
}

function infiniteLoop(): never {
    while (true) {

    }
}

let a: string = "hello";

if (typeof a !== "string") {
    a;
}