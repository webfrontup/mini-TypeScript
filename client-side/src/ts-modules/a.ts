export interface FuncInterface {
    name: string;
    (ary: number): string;
}
export class ClassC {
    constructor() {}
}
class ClassD {
    constructor() {}
}
export { ClassD }
export { ClassD as ClassNameD }
import {name} from './b'
console.log(name, 'name')
import * as info from './b'
console.log(info, 'info')
import { name as newb} from './b'
console.log(newb, 'newb')
