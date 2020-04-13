const {readFileSync } = require('fs');

const instantiate = async () => {
    const buffer = readFileSync('./main.wasm');
    const module = await WebAssembly.compile(buffer);
    const instance = await WebAssembly.instantiate(module);
    return instance.exports;
}

let wasm;
beforeEach(async done => {
    wasm = await instantiate();
    done();
});

test("hello world returns 56", async done => {
    expect(wasm.helloWorld()).toBe(56);
    done();
});