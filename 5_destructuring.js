const arr = ['Banana', 'Apple', 'Cocoa', ['Pineapple']]

const [a, b, c, [d]] = arr

console.log(a, b, c, d)

const obj = {
    name: 'Pedro',
    props: {
        age: 23,
        favoriteColors: ['Black', 'Blue']
    }
}

const {name: x} = obj

const { props: {age, favoriteColors: [Color1, Color2]}} = obj

console.log(x)
console.log(age)
console.log(Color1)
console.log(Color2)

// functions
// Destructing on parameters with default values
const sum = ([a, b] = [0, 0]) => {
    return a + b;
}

console.log(sum([2, 3]))