// 对象的混入
let as = {
    a: 'a',
}
let bs = {
    b: 'b',
}
let cs = Object.assign(as, bs)
console.log(cs, 'cs')

interface ObjectA {
    a: string
}
interface ObjectB {
    b: string
}
let Aa: ObjectA = {
    a: 'a',
}
let Bb: ObjectB = {
    b: 'b',
}
let Ab = Object.assign(Aa, Bb)
let AB: ObjectA & ObjectB = Object.assign(Aa, Bb)
console.log(Ab, 'Ab')

// js类的混入
class Aas {
    constructor() {}
    public funcA() {
        console.log('here')
    }
}
class Bbs {
    constructor() {}
    public funcB() {
        console.log('Bbs')
    }
}
const mixins = (target, from) => {
    Object.getOwnPropertyNames(from).forEach((key) => {
        console.log(key)
        target[key] = from[key]
    })
}
mixins(Bbs.prototype, Aas.prototype)
const b = new Bbs()
    // Bbs {}
    // __proto__:
    // funcA: ƒ ()
    // funcB: ƒ ()
    // constructor: ƒ Aas()
    // __proto__: Object
console.log(b, 'b')

// ts类的混入
class classAa {
    public isA: boolean
    public funcA() {}
}
class classBb {
    public isB: boolean
    public funcB() {}
}
class classAb implements classAa, classBb {
    public isA: boolean = false
    public isB: boolean = false
    public funcA: () => void
    public funcB: () => void
    constructor() {}
}
function mixints(base: any, from: any[]) {
    from.forEach((fromItem) => {
        Object.getOwnPropertyNames(fromItem.prototype).forEach((key) => {
            console.log(key, 'keys')
            base.prototype[key] = fromItem.prototype[key]
        })
    })
}
mixints(classAb, [classAa, classBb])
const ab = new classAb()
console.log(ab, 'ts_ab')
