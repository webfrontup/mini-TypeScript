import arrayMap = require('../dist/test-array-map')
var arr = arrayMap([1,2],(item) => {
    return item+2
}).forEach((item) => {
    item.toFixed()
})
// .forEach((item) => {
//     console.log(item.length)
// })