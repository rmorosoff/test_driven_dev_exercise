var sum = require('../sum');
var chai = require('chai');
var expect = chai.expect;

describe('Function sum', function() {
    context('The sum of 34 and 12:', function() {
        it('Should return 46', function() {
          var answer = sum(34, 12);
          expect(answer).to.equal(46);
        });
    });

    context('The sum of 45 and -12:', function() {
        it('Should return 33', function() {
          var answer = sum(45, -12);
          expect(answer).to.equal(33);
        });
    });
});