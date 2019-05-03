interface InfoInter {
    name: string
    getRes(input: string): number
}
interface InfoInter {
    // age: number
    name: string
    getRes(input: number): string
}
let infoInter: InfoInter
infoInter = {
    name: 'yyccQQu',
    // age: 18,
    getRes(text: any): any {
        if (typeof text === 'string') { return text.length } else { return String(text) }
    },
}
console.log(infoInter.getRes(123))
console.log(1235)

// 命名空间的合并
namespace Validations {
    export const numberReg = /^[0-9]+$/
    export const checkNumber = () => {}
}
namespace Validations {
    console.log(numberReg, 'numberReg')
    export const checkLetter = () => {}
}

// 命名空间和类的合并
class Validations2 {
    constructor() {}
    public checkType() {}
}
namespace Validations2 {
    export const numberReg = /^[1-9]+$/
}
// ƒ Validations2()
// numberReg: /^[1-9]+$/
// arguments: null
// caller: null
// length: 0
// name: "Validations2"
// prototype:
    // checkType: ƒ ()
    // constructor: ƒ Validations2()
// __proto__: Object
// __proto__: ƒ ()
// [[FunctionLocation]]: merging.ts:28
// [[Scopes]]: Scopes[1]
console.dir(Validations2.numberReg, 'Validations2')

// 方法和命名空间
function countUp() {
    countUp.count++
}
namespace countUp {
    export let count = 0
}
console.log(countUp.count)
countUp()
console.log(countUp.count)
countUp()
console.log(countUp.count)

enum Colors {
    red,
    green,
    blue,
}
namespace Colors {
    export const yellow = 3
}
// {0: "red", 1: "green", 2: "blue", red: 0, green: 1, blue: 2, yellow: 3}
console.log(Colors, 'Colors')
