class Math {
    sum(a, b, callback) {
        setTimeout(() => {
            callback(a + b)
        }, 2500);

    }
    multiply(a, b) {
        return a * b;
    }

    printSum(req, res, a, b) {
        res.load('index', a + b);
    }
}

module.exports = Math;