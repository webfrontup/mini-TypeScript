// this => type
class Counters {
    constructor(public count: number = 0) {}
    public add(value: number) {
        this.count += value
        return this
    }
    public subtract(value: number) {
        this.count -= value
        return this
    }
}
let counter1 = new Counters(10);
console.log(counter1.add(3).subtract(6))

class PowCounter extends Counters {
    constructor(public count: number = 0) {
        super(count)
    }
    public pow(value: number) {
        this.count = this.count ** value
        return this
    }
}
let powCounter = new PowCounter(2)
console.log(powCounter.pow(3).add(1).subtract(3))

// 索引类型查询
// key of
interface InfoInterfaceAdvanced {
    name: string;
    age: number;
}
let infoProp: keyof InfoInterfaceAdvanced
infoProp = 'name';
infoProp = 'age';
// infoProp = 'sex'; 不能将类型“"sex"”分配给类型“"name" | "age"”
// 联合类型的使用
function getValue2<T, K extends keyof T>(obj: T, names: K[]): Array<T[K]> {
    return names.map((n) => obj[n])
}
const infoObj = {
    name: 'yyccQQu',
    age: 18,
}
let infoValues: Array<string| number> = getValue2(infoObj, ['name', 'age'])
console.log(infoValues, 'infoValues')

// [] 索引访问操作符
type NameTypes = InfoInterfaceAdvanced['name'] // string
function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
    return o[name]
}

interface Objs5<T> {
    [key: string]: T
}
const Objs5: Objs5<number> = {
    age: 18,
}
let keys: Objs5<number>['name']

interface Type {
    a: never;
    b: never;
    c: string;
    d: number;
    e: undefined;
    f: null;
    g: object
}
type Test = Type[keyof Type]

// 映射类型
interface Info1 {
    age: number;
    name: string;
    sex: string;
}
// interface ReadonlyType {
//     readonly age: number
// }
type ReadonlyType<T> = {
    +readonly [P in keyof T]?: T[P]
}
// type ReadonlyInfo1 = {
//     readonly age: number;
//     readonly name: string;
//     readonly sex: string;
// }
type ReadonlyInfo1 = ReadonlyType<Info1>
let info11: ReadonlyInfo1 = {
    age: 11,
    name: 'yyccQQu',
    sex: 'name',
}
// info11.age = 20

// Readonly Partial
// Pick Record
// lib.es5.d.ts in node_modules
type Picks<T, K extends keyof T> = {
    [P in K]: T[P]
}
type Records<K extends keyof any, T> = {
    [P in K]: T;
}

interface Info2 {
    name: string;
    age: number;
    address: string;
}
const infos5: Info2 = {
    name: 'yyccQQu',
    age: 18,
    address: 'beijing',
}
// 通过属性名获取属性值直接使用封装好的Pick就好了
function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
    const res: any = {}
    keys.map((key) => {
        res[key] = obj[key]
    })
    return res;
}
let nameAndAddress = pick(infos5, ['name', 'address'])
console.log(nameAndAddress, 'nameAndAddress')
// 精准对接相关意义 把对象中的属性转换成其他值得时候
function mapObject<K extends string | number, T, U>(obj: Record<K, T>, f: (x: T) => U): Record<K, U> {
    const res: any = {}
    for (const key in obj) {
        res[key] = f(obj[key])
    }
    return res
}
const names2 = {0: 'hello', 1: 'world', 2: 'bye'}
const lengths = mapObject(names2, (s) => s.length)
console.log(lengths, 'lengths')

// 同态：两个相同类型的代数结构之间的结构保持映射

// 由映射类型进行推断

interface Proxy<T> {
    get(): T;
    set(value: T): void; // 没有返回类型就是void类型
}
type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>
}
function proxify<T>(obj: T): Proxify<T> {
    const result = {} as Proxify<T>
    for (const key in obj) {
        result[key] = {
            get: () => obj[key],
            set: (value) => obj[key] = value,
        }
    }
    return result
}
let props = {
    name: 'yyccQQu',
    age: 18,
}
let proxyProps = proxify(props)
console.log(proxyProps, 'proxyProps')
proxyProps.name.set('li')
console.log(proxyProps.name.get())

function unproxify<T>(t: Proxify<T>): T {
    const result = {} as T
    for (const k in t) {
        result[k] = t[k].get()
    }
    return result
}
// 将封装之后的对象还原为原来的对象
// 由映射类型推断，推断为原始类型
let originalProps = unproxify(proxyProps)
console.log(originalProps)

// + - 指定增加或者删除修饰符<public readonly ...>  version: 2.9
type RemoveReadonlyInfo2<T> = {
    -readonly [P in keyof T]-? : T[P]
}
type info11WithoutReadonly = RemoveReadonlyInfo2<ReadonlyInfo1>
//
const stringIndex = 'a'
const numberIndex = 1
const symbolIndex = Symbol()
interface Objs6 {
    [stringIndex]: string,
    [numberIndex]: number,
    [symbolIndex]: symbol,
}
type keysType = keyof Objs6 // 访问所有属性名
type ReadonlyTypes<T> = {
    readonly [P in keyof T]: T[P]
}
let Objs7: ReadonlyTypes<Objs6> = {
    a: 'aa',
    1: 11,
    [symbolIndex]: Symbol(),
}
// Objs7.a = 'bb'

// 元组和数组上的映射类型
type MapToPromise<T> = {
    [K in keyof T]: Promise<T[K]>
}
type Tuple = [number, string, boolean]
type promiseTuple = MapToPromise<Tuple>
let tuple1: promiseTuple = [
    new Promise((resolve, reject) => resolve(1)),
    new Promise((resolve, reject) => resolve('a')),
    new Promise((resolve, reject) => resolve(false)),
]

// unknown 3.0新增的顶级类型 相对于any来说他是安全的
// [1] 任何类型都可以赋值给 unknown类型
let value1: unknown
value1 = '1'
value1 = 123
value1 = null

// [2] 如果没有类型断言或基于控制流的类型细化时，unknown不可以赋值给其他类型，此时他只能赋值给unknown和any类型
let value2: unknown
// let value3: string = value2 // 不能将类型“unknown”分配给类型“string”。ts(2322)

// [3] 如果没有类型断言或基于控制流的类型细化时，不能在他上面进行任何操作
let value4: unknown
// value4 += 1

// [4] unknown与任何其他类型组成的交叉类型，最后都等于其他类型
type type1 = string & unknown
type type2 = number & unknown
type type3 = unknown & unknown

// [5] unknown与任何其他类型(除了any)组成的联合类型，都等于unknown类型
type type5 = unknown | string
type type6 = unknown | any
type type7 = unknown | number[]

// [6] never类型是unknown的子类型
type type8 = never extends unknown ? true : false

// [7] keyof unknown 等于类型never
type type9 = keyof unknown

// [8] 只能对unknown进行等或不等操作，不能进行其他操作
value1 === value2
value1 !== value2
// value1 += value2

// [9] unknown类型的值不能访问他的属性、作为类创建实例和作为函数调用
let value10: unknown
// value10.age
// value10()
// new value10()

// [10] 使用映射类型时如果遍历的是unknown类型，则不会映射任何属性
type Types1<T> = {
    [P in keyof T]: number;
}
type type11 = Types1<any>
type type12 = Types1<unknown>

// 条件类型
// T extends U ? X : Y
type Types2<T> = T extends string ? string : number
let index: Types2<false>

type TypeName<T> = T extends any ? T : never
type Type3 = TypeName<string | number>

type TypeName2<T> =
    T extends string ? string :
    T extends number ? number :
    T extends boolean ? boolean :
    T extends undefined ? undefined :
    T extends () => void ? () => void :
    object
type Type4 = TypeName<() => void>
type Type5 = TypeName<string[]>
type Type6 = TypeName<(() => void) | string[]>

type Diff<T, U> = T extends U ? never : T;
// 前面类型是否是后面类型的子类型 是的话会返回never
type Test2 = Diff<string | number | boolean, undefined |number>

// 条件类型和映射类型结合的例子 只查找函数类型
type Type7<T> = {
    [K in keyof T]: T[K] extends Function? K : never
}[keyof T]
// keyof T 会获取类型不为never的属性名
interface Part {
    id: number;
    name: string;
    subparts: Part[];
    undatePart: (newName: string) => void
}
type Test1 = Type7<Part>  // type Test1 = "undatePart"

// 条件类型的类型推断
// infer关键字
// 定义一个条件类型， 如果传入的类型是一个数组则返回他元素的类型，如果是一个普通类型则直接返回这个类型
type Type8<T> = T extends any[]? T[number]: T
type Test3 = Type8<string[]>
type Test4 = Type8<string>

type Type9<T> = T extends Array<infer U> ? U : T
type Test5 = Type9<string[]>
type Test6 = Type9<string>

// Exclude<T,U>
type Type10 = Exclude<'a' | 'b' | 'c', 'a'>
// Extract<T,U>
type Type11 = Extract<'a' | 'b' | 'c', 'b'>

// NonNullable<T> 去掉null 和 undefined
type Type12 = NonNullable<string | number | null  | undefined>

// ReturnType<T>
type Type13 = ReturnType<() => string>
type Type14 = ReturnType<() => void>

// InstanceType<T>
// lib.es5.d.ts in node_modules
// 返回的T 如果是构造函数类型，则返回该函数的实例类型，否则返回any类型
type InstanceTypes<T extends new (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : any;

class AClass {
    constructor() {}
}
type T1 = InstanceType<typeof AClass>
type T2 = InstanceType<any>
type T3 = InstanceType<never> // never也是构造函数的子类型
// type T4 = InstanceType<string>
