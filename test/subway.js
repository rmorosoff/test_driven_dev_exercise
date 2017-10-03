var subway = require('../subway');
var chai = require('chai');
var expect = chai.expect;

describe('Function subway', function() {
    context('The best Subway location when peeps is [5, 8, 4, 9, 1] and rent is [30, 14, 80, 61, 1]:', function() {
        it('Should return 1', function() {
          var answer = subway([5, 8, 4, 9, 1], [30, 14, 80, 61, 1]);
          expect(answer).to.equal(1);
        });
    });

    context('The best Subway location when peeps is [5, 4, 8, 9, 1] and rent is [30, 80, 14, 61, 1]:', function() {
        it('Should return 2', function() {
          var answer = subway([5, 4, 8, 9, 1], [30, 80, 14, 61, 1]);
          expect(answer).to.equal(2);
        });
    });

    context('The best Subway location when peeps is [5, 4, 3, 2, 1] and rent is [20, 80, 24, 61, 5]:', function() {
        it('Should return 0', function() {
          var answer = subway([5, 4, 3, 2, 1], [20, 80, 24, 61, 5]);
          expect(answer).to.equal(0);
        });
    });

    context('The best Subway location when peeps is [5, 4, 3, 2, 1] and rent is [24, 61, 5]:', function() {
        it('Should return 99', function() {
          var answer = subway([5, 4, 3, 2, 1], [24, 61, 5]);
          expect(answer).to.equal(99);
        });
    });

});