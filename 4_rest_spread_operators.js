// Example 1

const multiply = (...args) => args.reduce((acc, value) => acc * value, 1)

// rest operator
// All Params to array
const sum = (...args) => {
    
    // Spread operator
    // Array to Params
    return multiply(...args)
}

console.log(sum(1, 2, 3, 4, 5))

// Example 2

const arr1 = [1, 2, 3]

const arr2 = [...arr1, 4, 5, 6]
// const arr2 = [4, 5, 6].concat(arr1)

console.log(arr2)

const obj = {
    test: 123
};

const obj2 = {
    ...obj,
    test2: 'hello'
}


console.log(obj2)

// Example 3

const obj_ = {
    test: 123,
    subObj: {
        test: 123
    }
}

// Clone the previous object without referring
// Thats means that changes on 'obj2_' doens't will reflect on 'obj_'

// Subobjects of the cloned object also will require to be cloned to not reflect on the original
const obj2_ = {...obj, subObj: {...obj_.subObj}};


console.log(obj_)
console.log(obj2_)
