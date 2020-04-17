#!/usr/bin/env node
const chalk = require('chalk')
const { readFileSync, writeFileSync } = require('fs');
const wabt = require('wabt')();
const inquirer = require('inquirer')

async function run () {
    const questions = [
        {
            name: 'dir',
            message: '所需编译成wasm的目录',
            validate (value) {
                if (value) {
                    return true
                }
                else {
                    return '值不能为空'
                }
            }
        }
    ];
    const answers = await inquirer.prompt(questions);
    const targetDir = answers['dir'];

    const wasmModule = wabt.parseWat('main.wat', readFileSync(`${targetDir}/main.wat`, "utf8"));
    const { buffer } = wasmModule.toBinary({});

    writeFileSync(`${targetDir}/main.wasm`, Buffer.from(buffer));

    console.log(chalk.green('The compilation has been successfully completed'))
    
}
run();