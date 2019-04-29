
// 类型推论和兼容性
let names = 'yyccQQu';
// name = 123
// 联合类型
let arrs5: Array<number | string> = [1, 'a']
// arrs5 = [2, 3, '5',false]

// 类型推论
// window.onmousedown = (event) => {
//     console.log(event.a)
// }

interface MyFos {
    name: string
}
let infors: MyFos
const myFos1 = { name: 'yyccQQu'}
const myFos2 = { age: 18}
const myFos3 = { name: 'yyccQQu', age: 18}

infors = myFos1
// infors = myFos2
infors = myFos3

// 参数个数
let x = (a: number) => 0
let y = (b: number, c: string) => 0
y = x // 后面的参数个数要小于等于前面的参数个数
// x = y

const ars = [1, 2, 3]
ars.forEach((item, index, array) => {
    console.log(item)
})
ars.forEach((item) => {
    console.log(item)
})

// 参数类型
// let x = (a: number) => 0
// let y = (b: string) => 0
// x = y

// 可选参数和剩余参数
const getSum = (arr: number[], callback: (...args: number[]) => number): number => {
    return callback(...arr)
}

const res3 = getSum([1, 2, 3], (...args: number[]): number => args.reduce((a, b) => a + b, 0))
console.log(res3) // 6
const res4 = getSum([1, 2, 3], (arg1: number, arg2: number, arg3: number): number =>
    arg1 + arg2 + arg3,
)
console.log(res4, 'res4') // 6

// 函数参数双向协变
let funcA = (arg: number | string): void => {}
let funcB = (arg: number): void => {}
funcA = funcB
funcB = funcA

// 返回值类型
let x2 = (): string | number => 0
let y2 = (): string => 'a'
let z2 = (): boolean => false
x2 = y2
// y2 = x2
// y2 = z2

// 函数重载
function merge(arg1: number, arg2: number): number
function merge(arg1: string, arg2: number): string
function merge(arg1: any, arg2: any) {
    return arg1 + arg2
}
function sum(arg1: number, arg2: number): number
function sum(arg1: any, arg2: any): any
function sum(arg1: any, arg2: any) {
    return arg1 + arg2
}
let func = merge
func = sum

enum StatusEnum {
    On,
    Off,
}
enum AnimalEnum {
    Dog,
    Cat,
}
// let s = StatusEnum.On

class AnimalClass {
    public static age: number
    constructor(public name: string) {}
}

class PeopleClass {
    public static age: string
    constructor(public name: string) {}
}

class FoodClass2 {
    constructor(public name: number) {}
}

let animal: AnimalClass
let people: PeopleClass
let food: FoodClass2
animal = people
// animal = food

class ParentClass3 {
    private age: number
    constructor() {}
}
class ChildrenClass3 extends ParentClass3 {
    constructor() {super()}
}
class OtherClass {
    protected age: number
    constructor() {}
}
const children: ParentClass3 = new ChildrenClass3()
// const other: ParentClass3 = new OtherClass()

interface Data<T> {
    data: T
}
let data1: Data<number>
let data2: Data<string>
// data1 = data2
