### 执行步骤
- 将写好的文件进行编译
- 于根目录下执行 tsc
```js
cd dist
node //进入node环境
const arrayMap = require("./test-array-map")
arrayMap([1,2],(item)=>{return item+3})

cd ../
cd example/
tsc test.ts
node test.js 
---> [ 3, 4 ]
```
- 编译完成之后
```js
npm login
// 登录之后
npm publish
// 然后安装
npm install test-array-map

```


