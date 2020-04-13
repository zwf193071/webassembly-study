#!/usr/bin/env node
const { readFileSync, writeFileSync } = require('fs');
const wabt = require('wabt')();
const inputWat = "main.wat";
const outputWasm = "main.wasm";

console.log(wabt)
const wasmModule = wabt.parseWat(inputWat, readFileSync(inputWat, "utf8"));
const { buffer } = wasmModule.toBinary({});

writeFileSync(outputWasm, new Buffer(buffer));