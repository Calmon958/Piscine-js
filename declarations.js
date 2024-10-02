const str = "Hello Will"
const num = 7
const bool = true
const undef = undefined
const escapeStr = "'``\\/\""




const nested = {
    arr: [4, undefined, '2'],
    obj: {
        str,
        num,
        bool,
    },
}
const arr = [4, '2']
const obj = {
    str,
    num,
    bool,
    undef,
}


Object.freeze(nested)
Object.freeze(arr)
Object.freeze(obj)
Object.freeze(nested.arr)
Object.freeze(nested.obj)


console.log(escapeStr)
console.log(arr)
console.log(obj)
console.log(nested)