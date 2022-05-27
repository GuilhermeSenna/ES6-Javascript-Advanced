const uniqueId = Symbol("Hello");

Symbol.iterator;

const arr = [1, 2, 3, 4];
const str = "Digital Innovation One";

const obj = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator](){
        for ( var i = 0; i < this.values.length; i++){
            yield this.values[i]
        }
    }
};

for (let value of obj) {
    console.log(value)
}

// const it = obj[Symbol.iterator]()

// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

// // Generators

// function* hello() {
//     console.log("Hello");
//     yield 1;
//     console.log("From");
//     const value = yield 2;
    
//     console.log(value)
//     // console.log("Function");
// }

// const it_ = hello();

// console.log(it_.next());
// console.log(it_.next());
// console.log(it_.next('OutSide!'));


//

// function* naturalNumbers(){
//     let number = 0;
    
//     while(true){
//         yield number;
//         number ++;
//     }
// }

// const it__ = naturalNumbers();