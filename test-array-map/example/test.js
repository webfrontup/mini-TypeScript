"use strict";
exports.__esModule = true;
var arrayMap = require("../dist/test-array-map");
var arr = arrayMap([1, 2], function (item) {
    return item + 2;
}).forEach(function (item) {
    item.toFixed();
});
// .forEach((item) => {
//     console.log(item.length)
// })
