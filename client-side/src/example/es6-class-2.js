function Food () {
    this.type = 'food'
}
Food.prototype.getType = function() {
    return this.type
}
function Vegetables(name) {
    this.name = name
}
Vegetables.prototype = new Food()
const tomato = new Vegetables('tomato')
console.log(tomato.getType())

class Parent {
    constructor(name) {
        this.name = name
    }
    getName() {
        return this.name
    }
    static getNames() {
        return this.name
    }
}
class Child extends Parent {
    constructor (name, age) {
        super(name)
        this.age = age
    }
}


const c = new Child('yyccQQu', 18)
console.log(c)
console.log(c.getName()) //yyccQQu
console.log(c instanceof Child) //true
console.log(c instanceof Parent) //true
console.log(Child.getNames()) //Child
console.log(Object.getPrototypeOf(Child) === Parent)//说明Child的原型就是Parent

// super 既能作为函数使用，也能作为对象使用
// super函数只能在 constructor 函数中调用      
// super 在普通方法中 =》 父类的原型对象
//       在静态方法中 =》 父类

class Parent2 {
    constructor () {
        this.type = 'parent'
    }
    getName() {
        return this.type
    }
}
Parent2.getType = () => {
	return "is parent";
};
class Child2 extends Parent2 {
	constructor() {
		super();
		console.log("constructor: " + super.getName());
	}
	getParentName() {
		console.log("getParentName: " + super.getName());
	}
	getParentType() {
		//super 指的是父类的原型对象 而不是父类本身
		//getType()只有父类本身才能调用
		console.log("getParentType: " + super.getType());
	}
	static getParentType2() {
		console.log("getParentType: " + super.getType());
    }
}

const c2 = new Child2()
c2.getParentName()
// c2.getParentType() 
Child2.getParentType2()


class Parent3 {
    constructor() {
        this.name = 'parent'
    }
    print() {
        console.log(this.name)
    }
}
class Child3 extends Parent3{
    constructor() {
        super()
        this.name = 'child'
    }
    childPrint() {
        super.print()
    }
}
const c3 = new Child3()
c3.childPrint() //child

//prototype
//__proto__ : 
//不是es标准中定义的属性，而是大多数浏览器厂商在对es5的实现中添加的，
//每一个对象中都有一个proto属性，他指向对应的 构造函数的 prototype属性

var objs1 = new Object()
console.log(objs1.__proto__===Object.prototype);

// 子类的__proto__指向父类本身
// 子类的prototype属性的__proto__指向父类的prototype属性
// 实例的__proto__属性的__proto__指向父类实例的__proto__

// Boolean
// Number
// String
// Array
// Date
// Function
// RegExp
// Error
// Object

class CustomArray extends Array {
    constructor (...args) {
        super(...args)
    }
}

const arrs = new CustomArray(3,4,5)
// arrs.fill('+')
console.log(arrs)
console.log(arrs.join('_'))

// es5 和 es6 的构造函数在实现继承机制上是存在差异的

// es5的类 是先创建子构造函数的实例this，
// 然后再将父类的方法，属性添加到这个this上

// es6的类 是先从父类取到实例对象this，
// 然后再调用super函数之后，再将子类的属性方法加到这个this上
// 所以在es6中要先调用super方法，再使用this关键字的原因