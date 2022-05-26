
const b = 2

a = {
    b
}

console.log(a)

//

var obj = {
    sum(a, b) {
        return a + b;
    }
}

console.log(obj.sum(1, 2));

//

var propName = 'test';

var obj_ = {
    [propName + 'concat']: 'prop value'
};

console.log(obj_)