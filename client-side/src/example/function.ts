
function add2(arg1: number, arg2:number): number{
    return arg1 + arg2
}
const add3 = (arg1: number, arg2: number) => arg1 + arg2
console.log(add3(23,32)) //55

let add4: (x: number, y: number) => number
add4 = (arg1: number, arg2: number): number => arg1 + arg2
let arg3 = 3
add4 = (arg1: number, arg2: number) => arg1 + arg2 + arg3

//类型别名定义函数
type Add = (x: number, y: number ) => number
type isString = string
let addFunc: Add
addFunc = (arg1: number, arg2: number) => arg1 + arg2
console.log(addFunc(1,2333),'======') 

type AddFunction = (arg1: number, arg2: number, arg3?: number) => number
let addFunction: AddFunction
// addFunction = (x: number, y: number) => x+y
addFunction = (x: number, y=3) => x+y

const handleData = (arg1: number, ...args:number[]) => {
    //...
    return [arg1,...args]
}
console.log(handleData(12,234,36,5656),'logs')

//重载
function handleDatas(x: string): string[]
function handleDatas(x: number): number[]
function handleDatas(x: any):any{
    if(typeof x === 'string') {
        return x.split('')
    } else {
        return x.toString().split('').map((item) => Number(item))
    }
}
console.log(handleDatas('abc'), handleDatas(123))
