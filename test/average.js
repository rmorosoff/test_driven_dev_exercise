var average = require('../average');
var chai = require('chai');
var expect = chai.expect;

describe('Function average', function() {
    context('The average of 4, 12 and 5:', function() {
        it('Should return 7', function() {
          var answer = average(4, 12, 5);
          expect(answer).to.equal(7);
        });
    });

    context('The average of 7, 13 and 13:', function() {
        it('Should return 11', function() {
          var answer = average(7, 13, 13);
          expect(answer).to.equal(11);
        });
    });
});