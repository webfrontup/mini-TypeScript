const s = Symbol()
// console.log(s)

const s2 = Symbol()
// console.log(s2===s)

const s3 = Symbol("yyccQQu")
console.log(s3) //Symbol(yyccQQu)
const s4 = Symbol("yyccQQu")
// console.log(s3===s4)
// Symbol中只能传入 string number 传入对象回返回Symbol([Object object]),里面的两个object是字符串

// const s5 = s3+2; //symbol不能相加

// console.log(s4.toString()) //字符串 ‘Symbol(yyccQQu)’
// console.log(Boolean(s4)) //true
// console.log(!s4) //false
let prop = 'name'
const info = {  
    [prop]: 'yyccQQu',
    [`my${prop}is`]: 'yyccQQU'
}
console.log(info, 'info') //{name: "yyccQQu", mynameis: "yyccQQU"} "info"

const s5 = Symbol('name')
const info2 = {
    [s5]: 'yyccQQu', //该属性不会被其他属性覆盖
    age: 18,
    sex: 'man'
}
console.log(info2, 'info2') //{age: 18, sex: "man", Symbol(name): "yyccQQu"} "info2"
info2[s5] = 'haha'
console.log(info2, 'info2') //{age: 18, sex: "man", Symbol(name): "haha"} "info2"


for (const key in info2){
    console.log(key,'info2_key')
}
// age info2_key
// symbol.ts: 31 sex info2_key
console.log(Object.keys(info2), 'object.keys') //["age", "sex"] "object.keys"
console.log(Object.getOwnPropertyNames(info2), 'getOwn')//["age", "sex"] "getOwn"
console.log(JSON.stringify(info2), 'JSON_info2') //{"age":18,"sex":"man"} JSON_info2


console.log(Object.getOwnPropertySymbols(info2), 'getOwn_symbols') //[Symbol(name)] "getOwn_symbols"
console.log(Reflect.ownKeys(info2), 'reflect_ownkeys') //返回所有key值 //["age", "sex", Symbol(name)] "reflect_ownkeys"


const s8 = Symbol.for('yyccQQu');
const s9 = Symbol.for('yyccQQu');
const s10 = Symbol.for('haha')
// console.log(s8 === s9) true
// console.log(s10===s9) s10
console.log(Symbol.keyFor(s10)) //haha

const obj1 = {
    [Symbol.hasInstance](otherObj) {
        console.log(otherObj) //{a: "a"}
    }
}
console.log({a:'a'} instanceof <any>obj1) //false

// Symbol.isConcatSpreadable 
let arr1 = [1,2]
arr1[Symbol.isConcatSpreadable] = false;//加上次属性后数组不会被扁平化
console.log([].concat(arr1, [3, 4])) // [1, 2, 3, 4] ==>  [[1,2],3,4]

class C extends Array {
    constructor(...args){
        super(...args)
    }
    //创造衍生对象的构造函数
    static get [Symbol.species]() {
        return Array
    }
    getName () {
        return "yyccQQu"
    }
}
const c = new C(1, 2, 3) // >C(3) [1, 2, 3]

const a = c.map(item => {
    return item + 1
})
console.log(a) // >C(3) [2, 3, 4]
console.log(c instanceof C) //false 在es6环境下去掉衍生对象构造函数，此返回结果为true
console.log(c instanceof Array) //true

let obj3 = {
    [Symbol.match](string) {
        console.log(string.length) 
    },
    [Symbol.split](string) {
        console.log('split',string.length)
    }
}
'abcde'.match(<RegExp>obj3) //5
'abcde'.split(<RegExp>obj3) // 'split' 5
// Symbol.replace
// Symbol.search
// Symbol.split

//自定义遍历器方法
const arr5 = [1,2,3]
const iterator = arr5[Symbol.iterator]()
console.log(iterator.next(), 'iterator')
console.log(iterator.next(), 'iterator')
console.log(iterator.next(), 'iterator')
console.log(iterator.next(),'iterator')

let obj4: unknown = {
    [Symbol.toPrimitive] (type){
        console.log(type)
    }
}
const res = `abc${obj4}` //es6环境下string ts为default
const res2 = (obj4 as number) ++


let obj5 = {
    // [Symbol.toStringTag]: 'yyccQQu'
    get [Symbol.toStringTag] () {
        return 'yyccQQu'
    }
}
console.log(obj5.toString(), 'tostring') //[object yyccQQu]

const obj6 = {
    a: 'a',
    b: 'b'
}
// with(obj6) {
//     console.log(a) 
//     console.log(b)
// }

// 这些属性是在with方法中获取不到的
// copyWithin: true
// entries: true
// fill: true
// find: true
// findIndex: true
// flat: true
// flatMap: true
// includes: true
// keys: true
// values: true
console.log(Array.prototype[Symbol.unscopables],'array unscopables')