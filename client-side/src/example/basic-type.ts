// bool
// let bool: boolean = false;
let bool: boolean
bool = true


//支持 2 8 10 16进制的值
let num: number = 123
num = 0b1111011
num = 0o173
num = 0x7b

//str
let str: string
str = 'abc'
str = `数值是${num}`

//num 1
let arr: number[]
arr = [5]
//num 2
let arr2: Array<number>
//即可以是数字，又可以是字符串
let arr3: (string | number)[]
arr3 = [1,'a']

// 元祖类型 固定长度、固定类型
let tuple: [string, number, boolean]
tuple = ['a', 1, true]

// 枚举类型
enum Roles {
    SUPER_ADMIN,
    ADMIN,
    USER = 8,
    abb
}
//0 1 8 9
console.log(Roles.SUPER_ADMIN,Roles.ADMIN,Roles.USER,Roles.abb)
console.log(Roles[8])
// if (roles === Roles.SUPER_ADMIN){
//
// }

var value: any
value = 'abc'
value = 123
value = false
const arr4: any[] = [1,"a"]

//void
const consoleText = (text:string) => {
    console.log(text)
}
let v: void
v = undefined
v = null

consoleText("1234")

// null 和 undefined
let u: undefined
u = undefined
// u =123
let n: null
n = null
// n = "null"

num = undefined
num = null

// never 报错或者死循环
const errorFunc = (message: string): never => {
    throw new Error(message)
}
const infiniteFunc = (): never => {
    while(true){}
}
// let neverVariable = (() => {
//     while(true){}
// })()
// num = neverVariable
// neverVariable = "12345"

// object
let obj = {
    name: 'yyccQQu'
}
let obj2 = obj
obj2.name = "Y"
console.log(obj)

function getObject(obj: object): void {
    console.log(obj)
}
getObject(obj2)

// 类型断言
const getLength = (target: string|number): number => {
    if((<string>target).length || (target as string).length==0){
        return (target as string).length
    }else{
        return target.toString().length
    }
}

getLength(12345)
