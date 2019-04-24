
interface NameIfo {
    firstName: string,
    lastName: string
}

const getFullName = ({ firstName, lastName }: NameIfo): string => {
    return `${firstName} ${lastName}`
}
getFullName({
    firstName: "haha",
    lastName: "newbee",
})

interface Vegetable {
    color?: string,
    type: string,
    [props: string]: any // 多传参数绕过类型检查的方法
}
const getVegetables = ({color, type}: Vegetable) => {
    return `A ${color ? (color + ' ') : ''}${type}`
}
// 多传参数绕过类型检查的方法
// 1 const bb = getVegetables({
//     type: 'tomato',
//     color: 'red',
//     size: 2,
// } as Vegetable)

const bb = getVegetables({
    type: 'tomato',
    color: 'red',
    size: 2,
    aabb: 3333
})

console.log(bb )

const cc = {
    type: 'tomato',
    color: 'redcz',
    size: 2,
    aabb: 3333
}
//将cc 传入 getVegetables获取新值 要求该对象必须至少有所需属性
console.log(getVegetables(cc))


interface ArrInter {
    0: number,
    readonly 1: string
}

let arr6: ArrInter = [1, 'a']
// arr6[1] = 'b'

// type 指定类型
type AddFunc = (num1: number, num2: number) => number
const add: AddFunc = (n1, n2) => n1 + n2
console.log(add(1,2))

// interface RoleDic {
//     [id: number]: string
// }
// const role1: RoleDic = {
//     1: "number"
// }
// console.log(role1[1])

interface RoleDic {
    [id: string]: string
}
const role2: RoleDic = {
    a: 'super_admin',
    1: 'admin'
}
console.log(role2,'role2')

// es6中会用字符串属性的123覆盖number类型的123
// const obj8 = {
//     123: 'a',
//     '123': 'b'
// } 

interface Vegetables {
    color: string
}
interface Tomato extends Vegetables{
    radius: number
}
interface Carrot  extends Vegetables{
    length: number
}

const tomato: Tomato = {
    color: "aaa",
    radius: 12345
}
console.log(tomato,'tomato')

//混合类型接口
interface Counter {
    (): void,
    count: number
}
const getCounter = (): Counter => {
    const c = () => {c.count++}
    c.count = 0
    return c
}
const counter: Counter = getCounter()
counter()
console.log(counter.count)
counter()
console.log(counter.count)
counter()
console.log(counter.count)

