// 泛型的使用 通用类型检查
const getArray = <T>(value: T, times: number=5): T[] => {
    return new Array(times).fill(value)
}

console.log(getArray<number>(123, 4).map(item => item.toFixed()))

//返回类型是一个 通用的泛型 元组 固定类型固定个数
const getArray2 = <T, U>(param1: T, param2: U, times: number): Array<[T, U]> => {
    return new Array(times).fill([param1,param2])
}
// 0: (2)[1, "a"]
// 1: (2)[1, "a"]
// 2: (2)[1, "a"]
console.log(getArray2(1,'a',3))

getArray2<number, string>(1, 'a', 3).forEach((item) => {
    console.log(item[0])
    console.log(item[1])
})

//使用泛型定义函数类型
let getArray3: <T>(arg: T, times: number) => T[]
getArray3 = (arg: any, times: number) => {
    return new Array(times).fill(arg)
}
console.log(getArray3('ab',2))
//使用 type 类型别名定义函数类型
type getArray4 = <T>(arg: T, times: number) => T[]
let getArray4: getArray4 = (arg: any, times: number) => {
    return new Array(times).fill(arg)
}

// 等价于 type
interface GetArray <T>{
    (arg: T, times: number): T[],
    array: T[]
}

// 泛型约束
interface ValueWithLength{
    length: number
}
const getArray5 = <T extends ValueWithLength>(arg: T, times): T[]=> {
    return new Array(times).fill(arg)
}
console.log(getArray5([1, 2], 3),'ValueWithLength')
console.log(getArray5({length:2}, 3),'ValueWithLength')

// 联合类型
// k 必须是 t中的一个属性 
const getProps = <T, K extends keyof T>(object: T, propName: K) => {
    return object[propName]
}
const obj7 = {
    a: 'a',
    b: 'b'
}
getProps(obj7, 'a')
// getProps(obj7, 'c')