var secondLargest = require('../secondlargest');
var chai = require('chai');
var expect = chai.expect;

describe('Function secondLargest', function() {
    context('The second largest of [1, 4, 5, 8]:', function() {
        it('Should return 5', function() {
          var answer = secondLargest([1, 4, 5, 8]);
          expect(answer).to.equal(5);
        });
    });

    context('The second largest of [8, 3, 5, 1, 9, 10]:', function() {
        it('Should return 9', function() {
          var answer = secondLargest([8, 3, 5, 1, 9, 10]);
          expect(answer).to.equal(9);
        });
    });
});