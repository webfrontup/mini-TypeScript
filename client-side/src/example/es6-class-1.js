// es5 构造函数
function Point(x, y) {
    this.x =x;
    this.y =y;
}
Point.prototype.getPosition = function() {
    return "(" + this.x + '. ' + this.y + ')'
}
var p1 = new Point(2,3)
console.log(p1)
console.log(p1.getPosition())
var p2 = new Point(4,5)
console.log(p2.getPosition())

class Point2 {
    constructor (x, y) {
        this.x = x;
        this.y = y;
        // return {a:'a'} //自定义的返回 并不是类的实例对象
    }
    getPosition() {
        return `(${this.x}, ${this.y})`
    }
}
const p1s = new Point2(1,2)
console.log(p1s,p1s)
console.log(p1s instanceof Point2)

// 判断是否是实例上有的对象

console.log(p1s.hasOwnProperty("x"), "hasOwnProperty");
console.log(p1s.hasOwnProperty("getPosition"), "hasOwnProperty");
console.log(p1s.__proto__.hasOwnProperty("getPosition"), "hasOwnProperty");

var info = {
    _age: 10,
    set age (newValue) {
        if(newValue > 18) {
            console.log("怎么变老了")
        }else{
            console.log("哈哈我还年轻")
        }
    },
    get age () {
        console.log('你问我年龄干嘛')
        return this._age
    }
}

console.log(info.age); //10

info.age = 17; //哈哈我还年轻
info.age = 19; //怎么变老了


class Info2 {
	constructor(age) {
		this._age = age;
	}
	set age(newAge) {
		console.log("new age is", newAge);
		this._age = newAge;
	}
	get age() {
		return this._age;
	}
}

const info2 = new Info2(18)
info2.age = 17;
info2.age = 19;


// const func = function () {}
// function func () {}

// class Infos {
//     constructor() {}
// }

// const Infos = class c {
//     constructor () {}
// }

// const testInfo = new Infos()



class Point3 {
    // z = 0;
	constructor(x, y) {
		this.x = x;
        this.y = y;
        // this.z = z;
    }
    // static y = 0; will hold
	getPosition() {
		return `(${this.x}, ${this.y})`;
    }
    //静态方法只有自己才能使用，实例是使用不了的
    static getClassName() {
        return Point3.name
    }
}
Point3.v = 0; //静态属性
const p3 = new Point3(1,2)
console.log(p3.getPosition());
// console.log(p3.getClassName());
console.log(Point3.getClassName());//Point
console.log(p3.v);

//私有方法
class Point4 {
    func1 () {

    }
    _func2() {

    }
}

const _func2 = () => {}
class Point5 {
    func1 () {
         _func2.call(this)
    }
}
const p5 = new Point ()
// p5.func1()
_func2()

// 将一下代码段放入对应文件夹下进行引入 即可实现对应的私有 symbol属性效果
// a.js
    // const func1 = Symbol('func1')
    // export default class Point{
    //     static [func1] () {

    //     }
    // }
// b.js
    // import Point from './a.js'
    // const p6 = new Point()
    // console.log(p6)


// class Point6 {
//     // #ownProp = 12 //私有属性 will hold
// }

function Point7() {
    console.log(new.target)
}
const p7 = new Point7()//undefined
const p7s = Point()



class Point8 {
    constructor() {
        console.log(new.target)
    }
}
const p8 = new Point8()

class Parent {
    constructor() {
        console.log(new.target)
        if(new.target === Parent){
            throw new Error('不能实例化')
        }
    }
}

class Child extends Parent {
    constructor() {
        super()
    }
}
const c = new Child();
const Parents = new Parent();