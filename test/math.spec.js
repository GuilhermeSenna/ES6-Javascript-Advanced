// mocha
const assert = require('assert');
const Math = require('../11_mocha_math.js');

// chai
const expect = require('chai').expect;

// Sinon
const sinon = require('sinon');

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
            // assert.equal(value, 10);

            expect(value).to.equal(10);

            // For async methods
            done();
        });
    });

    it('Multiply two numbers', function () {
        const math = new Math();

        const obj = {
            name: 'Guilherme Senna'
        };

        const obj2 = {
            name: 'Guilherme Senna'
        };

        // assert.equal(math.multiply(value, 5), 25);

        // expect(math.multiply(value, 5)).to.equal(0);

        // expect(obj).to.have.property('name')
        // expect(obj).to.have.property('name').equal('Guilherme')
        // expect(obj).to.equal(obj2);
        expect(obj).to.deep.equal(obj2);
    });

    it.only('Calls req with sum and index values', function () {
        const req = {};
        const res = {
            load: function load() {
                console.log('Called!');
            }
        };

        sinon.spy(res, 'load')
        // sinon.stub(res, 'load').returns('xpto');

        const math = new Math();

        math.printSum(req, res, 5, 5);

        expect(res.load.args[0][1]).to.equal(10);
    });
});