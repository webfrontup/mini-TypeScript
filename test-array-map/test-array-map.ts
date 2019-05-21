const arrayMap = <T,U>(array: T[], callback: (item: T, index: number, arr: ReadonlyArray<T>)=> U): U[] => {
    let i = -1
    const len = array.length
    const resArray = []
    while (++i < len){
        resArray.push(callback(array[i], i, array))
    }
    return resArray
}
// arrayMap([1,2],(item)=> {return item +1})
export = arrayMap