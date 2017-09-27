var greaterThan = require('../greaterthan');
var chai = require('chai');
var expect = chai.expect;

describe('Function greaterThan', function() {
    context('The input of 5, 6:', function() {
        it('Should return true', function() {
          var answer = greaterThan(5, 6);
          expect(answer).to.equal(true);
        });
    });

    context('The input of 4, 1:', function() {
        it('Should return false', function() {
          var answer = greaterThan(4, 1);
          expect(answer).to.equal(false);
        });
    });

    context('The input of 7, 7:', function() {
        it('Should return false', function() {
          var answer = greaterThan(7, 7);
          expect(answer).to.equal(false);
        });
    });

    
});