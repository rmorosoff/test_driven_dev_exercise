var containsVowel = require('../containsvowel');
var chai = require('chai');
var expect = chai.expect;

describe('Function containsVowel', function() {
    context('If the word is alpha:', function() {
        it('The return value should be true', function() {
          var answer = containsVowel("alpha");
          expect(answer).to.equal(true);
        });
    });

    context('If the word is hmph:', function() {
        it('The return value should be false', function() {
          var answer = containsVowel("hmph");
          expect(answer).to.equal(false);
        });
    });
});