'use strict';

var expect = require('chai').expect;
var map = require('../index');

describe('#map', function() {
    it('should convert 0.5 to 1', function() {
        var result = map(0.5, 0, 1, 0, 2);
        expect(result).to.equal(1);
    });
    it('should convert 0.8 to 16000000', function() {
        var result = map(0.8, 0, 1, 0, 20000000);
        expect(result).to.equal(16000000);
    });
    it('should convert 10 to -10', function() {
        var result = map(10, 0, 20, 0, -20);
        expect(result).to.equal(-10);
    });
    it('should convert 3 to 1', function() {
        var result = map(3, 1, 4, -1, 2);
        expect(result).to.equal(1);
    });
    it('should convert -99 to 0.99', function() {
        var result = map(-99, 0, -100, 0, 1);
        expect(result).to.equal(0.99);
    });

});
