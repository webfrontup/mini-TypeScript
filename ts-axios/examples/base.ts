let list: number[] = [1,2,3]
let list2: Array<number> = [1,2,3]

let x:[string,number]
x = ['hello', 10]
console.log(x[0].substr(1));
// console.log(x[1].substr(1))
// console.log(x[5].toString());

let u: undefined = undefined
let n: null = undefined

// tsc base.ts --strictNullChecks
let num: number|null = 3
num = null

declare function create(o: object| null): void;

create({ prop: 0 });
create(null)
// create(42);
// create('string');
// create(false);
create(undefined)

// 类型断言
let someValue: any = 'this is a string'
let strLength: number = (<string>someValue).length
let strLength2: number = (someValue as string).length 




