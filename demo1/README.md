# Hello World of wast

> Webassembly学习的入门案例，从wast的hello world开始

## 流程如下所示
1. 新建main.wat文件
2. 需运行`npm run build`，生成main.wasm文件
3. 新建index.js文件，执行`node index.js`，控制台会输出56（该结果由wat文件里的导出函数输出）

## 安装jest测试
```
npm install -D jest
```
更新npm的script

```
"scripts": {
    "test": "jest"
  }
```
运行`npm run test`通过控制台可看到测试通过
