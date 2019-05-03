// function setProp() {
//     return function() {
//         // ...
//     }
// }
// @setProp()

function setName() {
    console.log('get setName');
    return (target) => {
        console.log('setName')
    }
}
function setAge() {
    console.log('get setAge');
    return (target) => {
        console.log("setAge")
    }
}

// @setName()
// @setAge()
// class ClassDec{

// }

// 类装饰器 用于类的声明

let sign = null
function setNames(name: string) {
    return (target: new() => any) => {
        sign = target
        console.log(target.name)
    }
}
@setNames('yyccQQu')
class ClassDec {
    constructor() {}
}
console.log(sign === ClassDec) // true
console.log(sign === ClassDec.prototype.constructor) // true

function addName(constructor: new() => any) {
    constructor.prototype.name = 'yyccQQu'
}
@addName
class ClassD {}
interface ClassD {
    name: string
}
// 合并之后接口添加到了类的原型对象上
const d = new ClassD()
console.log(d.name)

// 将两个类合并
// 定义一个类型工厂 泛型约束 接收多个参数返回一个对象
function classDecorator<T extends new(...args: any[]) => {}>(target: T) {
    return class extends target {
        public newProperty = 'new property'
        public hello = 'overide'
    }
}
@classDecorator
class Greeter {
    public property = 'property'
    public hello: string
    constructor(m: string) {
        this.hello = m
    }
}
// class_1 {property: "property", hello: "overide", newProperty: "new property"}
console.log(new Greeter('world'))

// 方法装饰器
// 用来处理类中的方法，用来出理描述符，方法的定义
// 在运行的时候被当做函数调用
// 包含三个参数
// 第一个参数： 如果装饰的是静态成员 代表类的构造函数，如果装饰的实例成员的时候，是类的原型对象
// 第二个参数：是成员的名字，第三个参数是成员的属性和描述符

// 属性装饰符 只在es5及以上版本才有的，es3等的版本是无法模拟实现的
// js
// configurable 可配置 writeable 可写 enumable 可枚举

interface ObjWithAnyKeys {
    [key: string]: any
}
let obj12: ObjWithAnyKeys = {}
Object.defineProperty(obj12, 'name', {
    value: 'yyccQQu',
    writable: false,
    configurable: true,
    enumerable: true,
})
console.log(obj12.name)
obj12.name = 'test'
console.log(obj12.name)
for (const key in obj12) {
    console.log(key, 'key')
}
// PropertyDescriptor lib.es5.d.ts /node_modules/
function enumerable(bool: boolean) {
    return (target: any, propertyName: string, descriptor: PropertyDescriptor) => {
        console.log(target, 'target', propertyName)
        descriptor.enumerable = bool
    }
}
class ClassF {
    constructor(public age: number) {}
    @enumerable(true)
    public getAge() {
        return this.age
    }
}
const classF = new ClassF(18)
console.log(classF, 'classF')
for ( const key in classF) {
    console.log(key)
}

function enumerable2(bool: boolean): any {
    return (target: any, propertyName: string, descriptor: PropertyDescriptor) => {
        return {
            value() {
                return 'not age'
            },
            enumerable: bool,
        }
    }
}
class ClassF2 {
    constructor(public age: number) {}
    @enumerable2(false)
    public getAge() {
        return this.age
    }
}
console.log(new ClassF2(18).getAge()) // not age

// 访问器装饰器
function enumerable3(bool: boolean): any {
    return (target: any, propertyName: string, descriptor: PropertyDescriptor) => {
        descriptor.enumerable = bool
    }
}
class ClassG {
    private _name: string
    constructor(name: string) {
        this._name = name
    }
    @enumerable3(true)
    get name() {
        return this._name
    }
    set name(name) {
        this._name = name
    }
}
const classG = new ClassG('yyccQQu');
for (const key in classG) {
    console.log(key, 'key')
}

// 属性装饰器 两个参数且参数和方法装饰器前两个参数是一样的

function printPropertyName(target: any, propertyName: string) {
    console.log(propertyName)
}
class ClassH {
    @printPropertyName
    public name_n: string
}

// 参数装饰器 前两个参数和方法装饰器一样
// 第三个参数：参数在函数列表中的索引

function required(target: any, propertyName: string, index: number) {
    console.log(`修饰的是${propertyName}的第${index + 1}个参数`)
}
class ClassI {
    public name: string = 'yyccQQu'
    public age: number = 10
    public getInfo(prefix: string, @required infoType: string): any {
        return prefix + ' ' + this[infoType]
    }
}
interface ClassI {
    [key: string]: string | number | Function
}
const classI = new ClassI()
classI.getInfo('hihi', 'age')
