let a = 1;
const b = 2;

let c = () => a;

async function asyncTest() {}

async function test() {
    await asyncTest();
}

test();