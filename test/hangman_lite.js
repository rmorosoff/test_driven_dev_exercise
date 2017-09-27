var hangMan = require('../hangman_lite');
var chai = require('chai');
var expect = chai.expect;

describe('Function hangMan', function() {
    context('When word is mississippi, s appears 4 times', function() {
        it('Should return 5000', function() {
          var matchCount = hangMan("mississippi", "s");
          expect(matchCount).to.equal(4);
        });
    });
    context('When word is mississippi, p appears 2 times', function() {
        it('Should return 5000', function() {
          var matchCount = hangMan("mississippi", "p");
          expect(matchCount).to.equal(2);
        });
    });
    context('When word is mississippi, x appears 0 times', function() {
        it('Should return 5000', function() {
          var matchCount = hangMan("mississippi", "x");
          expect(matchCount).to.equal(0);
        });
    });
});