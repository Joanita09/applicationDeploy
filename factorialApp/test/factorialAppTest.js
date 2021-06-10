const assert = require('chai').assert;
const factorialize = require('../public/factorialApp');

describe('App', function(){
    it('Factorial of 6 should return 720', function(){
        let result = factorialize(6);
        assert.equal(result, 720);
    });
});
