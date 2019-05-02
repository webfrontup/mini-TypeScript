var Validation;
(function (Validation) {
    var isLetterReg = /^[A-Za-z]$/;
    Validation.checkLetter = function (text) {
        return isLetterReg.test(text);
    };
})(Validation || (Validation = {}));
var Validation;
(function (Validation) {
    Validation.isNumberReg = /^[0-9+]$/;
    Validation.checkNumber = function (text) {
        return Validation.isNumberReg.test(text);
    };
})(Validation || (Validation = {}));
// import * as AData from './a'
// import './a.ts'
// import name from './c'
// console.log(name, AData, 'nameAdata')
// import namer = require('./c')
// console.log(namer, 'namer')
// import moment from 'moment' // 引入的是默认导出
// import * as moment from 'moment' // 引入的是所有
// import moment = require("moment") // 引入的是默认导出
// console.log(moment)
// 命名空间 namespace 定义了一个大的接口对象，里面后各种接口，类，方法等等，只能用export暴露内部对象等
// 命名空间: 当我们在程序内部，防止全局污染，想把相关的内容都放在一起的时候
// 模块：当我们封装了一个工具或者库，要适用于模块系统中引入的时候，也能防止全局污染
// /// <reference path="./space.ts" />
// // tsc --outFile src/index.js src/ts-modules/index.ts
// const isLetter = Validation.checkLetter('abc')
// console.log(isLetter, 'isLetter')
/// <reference path="./letter-validation.ts" />
/// <reference path="./number-validation.ts" />
var isLetter = Validation.checkLetter('abc');
var isNumber = Validation.checkNumber('abc');
console.log(isLetter, isNumber);
