// 交叉类型
const mergeFunc = <T, U>(arg1: T, arg2: U) => {
    let res = {}
    res = Object.assign(arg1, arg2)
    return res;
}
console.log(mergeFunc({a: 'a'}, {b: 1234})) // {a: "a", b: 1234}
const valueList = [123, 'abc']
const getRandomValue = () => {
    const number = Math.random() * 10
    if (number < 5) { return valueList[0]} else {return valueList[1]}
}
const item = getRandomValue()
console.log(item, 'item')
// 用类型断言
if ((item as string).length) {
    console.log((item as string).length)
} else {
    console.log((item as number).toFixed())
}
// 用类型保护
function isString(value: number|string): value is string {
    return typeof value === 'string'
}
if (isString(item)) {
    console.log(item.length)
} else {
    console.log(item.toFixed())
}
// typeof类型保护 这个方法只适用于比较 string/number/boolean/symbol中的一种
if (typeof item === 'string') {
    console.log(item.length)
} else {
    console.log(item.toFixed())
}
// instanceof类型保护
class CreatedByClass1 {
    public age = 18
    constructor() {}
}
class CreatedByClass2 {
    public name = 'yyccQQu'
    constructor() {}
}
function getRandomItem() {
    return Math.random() < 0.5
        ? new CreatedByClass1()
        : new CreatedByClass2()
}

const item1 = getRandomItem()
if (item1 instanceof CreatedByClass1) {
    console.log(item1.age)
} else {
    console.log(item1.name)
}

// null/undefined
let values: string | undefined = '123'
// values = undefined
// 以下四种类型完全不同
// string|undefined / string|null / string|undefined / null

const sumFunc = (x: number, y?: number) => {
    return x + (y || 0)
}

const getLengthFunction = (value: string | null): number => {
    // if (value === null) { return 0 } else {
    //     return value.length
    // }
    return (value || '').length
}
// 加一个！类型断言 说明这个值不为null
function getSplicedStr(num: number | null): string {
    function getRes(prefix: string) {
        return prefix + num!.toFixed().toString()
    }
    num = num || 0.1
    return getRes('yyccQQu-')
}
console.log(getSplicedStr(2.03))

// 类型别名
type TypeString = string
let str2: TypeString
interface PositionType<T> {x: T, y: T}
const position1: PositionType<number> = {
    x: 1,
    y: -1,
}
const position2: PositionType<string> = {
    x: " 1",
    y: "-1",
}
// 递归 检测 类型: 只能在属性中定义使用自己的类型
interface Child2s<T> {
    current: T,
    child?: Child2s<T>,
}
let ccc: Child2s<string > = {
    current:  'first',
    child: {
        current:  'second',
        child: {
            current:  'third',
            child: {
                current: 'forth',
            },
        },
    },
}

// type Childs5 = Childs5[] // error
// 当为接口起别名的时候 不能使用 extends implements

// type Alias {
//     num: number,
// }
interface Interface {
    num: number
}
// let _alias: Alias = {
//     num: 123,
// }
let _interface: Interface = {
    num: 321,
}
// _alias = _interface

// 字面量类型
type Name = 'yyccQQu'
// const name3: Name = 'haha'
type Direction = 'north' | 'east' | 'south' | 'west'
function getDirectionFirstLetter(direction: Direction) {
    return direction.substr(0, 1)
}
console.log(getDirectionFirstLetter('north'), 'north')

// 数字字面量
type Age = 18
interface InfoInterfaces {
    name: string
    age: Age
}
const _info: InfoInterfaces = {
    name: 'yyccQQu',
    age: 18,
}

/**
 * 可辨识联合两要素
 * 1. 具有普通的单例类型属性
 * 2. 一个类型别名包含了那些类型的联合
*/
interface Square {
    kind: 'square'
    size: number
}
interface Rectangle {
    kind: 'rectangle'
    height: number
    width: number
}
interface Circle {
    kind: 'circle'
    radius: number
}

type Shape = Square | Rectangle | Circle
// switch类型的检测
function assertNever(value: never): never {
    throw new Error('Unexpected object: ' + value)
}
function getArea(s: Shape) {
    switch (s.kind) {
        case 'square': return s.size * s.size; break;
        case 'rectangle': return s.height * s.width; break;
        case 'circle': return Math.PI * s.radius ** 2; break;
        default: return assertNever(s)
    }
}
