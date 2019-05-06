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