class Point {
    public x: number
    public y: number
    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }
    public getPosition() {
        return `(${this.x}, ${this.y})`
    }
}

const point = new Point(1, 2)
console.log(point)

class Parent {
    public name: string
    private age: 18
    constructor(name: string) {
        this.name = name
    }
}
class Child extends Parent {
    constructor(name: string) {
        super(name)
    }
}
const p = new Parent('james')
// james ƒ Parent(name) {
//      this.name = name;
// }
console.log(p.name, Parent)

// protected 受保护
class Parent2 {
    protected name: string
    // constructor(name: string) {
    //     this.name = name
    // }
    // 用了 protected 只能在子类上继承然后通过实例使用
    protected constructor(name: string) {
        this.name = name
    }
    protected getName() {
        console.log('getName')
        return this.name
    }
}
class Child2 extends Parent2 {
    constructor(name: string) {
        super(name)
    // 通过 "super" 关键字只能访问基类的公共方法和受保护方法。
        // console.log(super.name);
        console.log(super.getName()); // james
    }
}
const child2 = new Child2('james')

class UserInfo {
    public readonly name: string
    constructor(name: string) {
        this.name = name
    }
}
const user = new UserInfo('yyccQQu')
console.log(user)
// static标记之后 之后中能用本身访问
class A {
    public static age: number = 18;
    public static getAge() {
        return A.age
    }
    private static sex: string = "man";
    constructor(public name: string) {}
}
const a1 = new A('yyccQQu')
console.log(a1.name)
// console.log(a1.age)
console.log(A.age)

class Infos {
    public name: string
    public age?: number
    private _infoStr: string
    constructor(name: string, age?: number, public sex?: string) {
        this.name = name
        this.age = age
    }
    get infoStr() {
        return this._infoStr
    }
    set infoStr(value) {
        console.log(`setter: ${this.name}: ${this.age}`)
        this._infoStr = value
    }
}
// const info1 = new Infos('yyccQQu')
// const info3 = new Infos('yyccQQu', 18)
const info4 = new Infos('yyccQQu', 18, 'man')
console.log(info4, 'info4')
info4.infoStr = 'yyccQQu 18';
console.log(info4.infoStr, 'info4')

abstract class People  {
    constructor(public name: string) {}
    public abstract printName(): void
}
// const p1 = new People() 无法创建抽象类的实例
class Man extends People {
    constructor(name: string) {
        super(name)
        this.name = name
    }
    public printName() {
        console.log(this.name, 'names')
    }
}
const m = new Man('yyccQQu')
m.printName()

//
abstract class People2 {
    public abstract _name: string
    abstract get insideName(): string
    abstract set insideName(value: string)
}
class P extends People2 {
    public _name: string
    public insideName: string
}

class People3 {
    constructor(public name: string) {}
}
let p3: People3 = new People3('yyccQQu')
class Animal {
    constructor(public name: string) {}
}
p3 = new Animal('haha')

interface FoodInterface {
    type: string
}
class FoodClass implements FoodInterface {
    public type: string
}

// protected 只能在继承这个类的子类上访问
class As {
    protected name: string
}
interface I extends As {}
// 继承类As 之后实现接口 I
class B extends As implements I {
    public name: string
}

// 泛型中使用类类型
// 传入参数是一个类 返回的是一个类创建的实例
// new(): 调用类的构造函数， c的类型就是 new() 创建实例后的实例的类型
const create = <T>(c: new() => T): T => {
    return new c()
}
class Infox {
    public age: number
    constructor() {
        this.age = 18
    }
}
console.log(create<Infox>(Infox))
console.log(create<Infox>(Infox).age)
