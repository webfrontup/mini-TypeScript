# mini-TypeScript
- tsc --init 初始化文件配置
- ts-lint --init 初始化ts检查文件
- [格式化ts文件配置](https://juejin.im/post/5a791d566fb9a0634853400e)

### 声明合并
| 声明类型  | 创建了命名空间 | 创建了类型 | 创建了值 |
| ------------- | ------------- |------------- |------------- |
| Namespace  | ✔️  |   | ✔️ |
| Class  |   |✔️  | ✔️ |
| Enum  |    |✔️  | ✔️ |
| Interface  |   |  ✔️ |   |
| Type Alias类型别名  |  | ✔️ |  |
| Function  |  |  | ✔️ |
| Variable  |  |  | ✔️ |

### 声明文件
- https://www.tslang.cn/docs/handbook/declaration-files/templates.html ts模板
- 识别已有js库的类型
- UMD模块 既能做全局库，又能做模块使用
- module-class.d.ts 引入文件直接当做类来使用
- module-function.d.ts 引入文件直接当做function来使用
- module.d.ts 既不做类也不做function使用
- 

- 如果引入的库没有类型系统，那么需要 npm i @types/库名，再没有的话就需要自己写了
- 如` npm i @types/arr-diff -D `