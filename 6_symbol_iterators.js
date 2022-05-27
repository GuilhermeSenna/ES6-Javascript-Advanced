const uniqueId = Symbol("Hello");

Symbol.iterator;
Symbol.split;
Symbol.toStringTag;

const arr = [1, 2, 3, 4];
const str = "Digital Innovation One";

console.log(arr[Symbol.iterator]().next());

const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator](){
        let i = 0;
        
        return{
            next: () => {
                
                i++;
                
                return{
                    value: this.values[i],
                    done: i > this.values.length
                };
            }
        };
    }
}

for (let values of obj) {
    console.log(values)
}

const it = obj[Symbol.iterator]()

console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())