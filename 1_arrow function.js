var obj = {
    showContext: showContext = () => {
        setTimeout(() => {
            console.log('after 1000ms');
        }, 1000);
    },
    log: log = value => {
        console.log(value);
    }
};

obj.showContext();