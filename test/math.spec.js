// mocha
const assert = require('assert');
const Math = require('../11_math.js');

let value = 0;

describe('Math class', function () {

    // hooks

    // Before the it's
    this.beforeEach(function () {
        value = 5;
    });

    it('Sum to numbers', function (done) {
        const math = new Math();

        // Only without arrow functions
        // The default timer is 2000ms
        this.timeout(3000);

        value = 5;

        // try {
        //     assert.equal(math.sum(5, 5), 10);
        // } catch (e) {
        //     console.log(e)
        // }

        math.sum(value, 5, (value) => {
            assert.equal(value, 10);

            // For async methods
            done();
        });
    });

    it.only('Multiply two numbers', function () {
        const math = new Math();

        assert.equal(math.multiply(value, 5), 25);
    });
});