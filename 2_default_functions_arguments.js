
const randomNumber = () => {
    return Math.random() * 10;
}

const soma = (a = 1, b = randomNumber()) => {
    return a + b
}

console.log(soma())