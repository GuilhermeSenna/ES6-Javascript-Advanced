EventEmitter

const EventEmitter = require('event');

class Users extends EventEmitter {
    userLogged(data) {
        this.emit('User logged', data)
    }
}

const users = new Users();

// const emitter = new EventEmitter();

users.on('User logged', data => {
    console.log(data); 
});

Users.userLogged({user: 'Guilherme Senna'});
Users.userLogged({user: 'Bruno Henique'});