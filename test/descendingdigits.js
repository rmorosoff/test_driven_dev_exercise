var descendingDigits = require('../descendingdigits');
var chai = require('chai');
var expect = chai.expect;

describe('Function descendingDigits', function() {
    context('The descending digits of 5614:', function() {
        it('Should return 6541', function() {
          var answer = descendingDigits(5614);
          expect(answer).to.equal(6541);
        });
    });

    context('The descending digits of 43210:', function() {
        it('Should return 43210', function() {
          var answer = descendingDigits(43210);
          expect(answer).to.equal(43210);
        });
    });

    context('The descending digits of 24689:', function() {
        it('Should return 98642', function() {
          var answer = descendingDigits(24689);
          expect(answer).to.equal(98642);
        });
    });
});