
// pending (pendente): Estado inicial, que não foi realizada nem rejeitada.
// fulfilled (realizada): sucesso na operação.
// rejected (rejeitado):  falha na operação.


const doSomething = () => new Promise((resolve, reject) => {
    
    // throw new Error('teste')
    
    setTimeout(() => {
       resolve('First Data'); 
    }, 1000);
});

const doOtherThing = () => new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve('Second Data'); 
    }, 1000);
});

// doSomething
// .then(data => console.log(data))
// .catch(error => console.log(error));

// First alternative

doSomething()
.then(data => {
        console.log(data); 
        return doOtherThing();
    })
.then(data2 => console.log(data2))
.catch(error => console.log(error));

// Second alternative

Promise.all([doSomething(), doOtherThing()])
.then(data => {
    console.log(data)
})
.catch(err => {
    console.log(err);
});

// Third alternative

// The ones that are resolved first are shown
Promise.race([doSomething(), doOtherThing]).then(data => {
    console.log(data)
})

