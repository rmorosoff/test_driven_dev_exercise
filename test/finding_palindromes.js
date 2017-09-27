var palindrome = require('../finding_palindromes');
var chai = require('chai');
var expect = chai.expect;

describe('Function palindrome', function() {
    context('When word is racecar', function() {
        it('Palindrome should return true', function() {
          var isPalindrome = palindrome("racecar");
          expect(isPalindrome).to.equal(true);
        });
    });

    context('When word is hello', function() {
        it('Palindrome should return false', function() {
          var isPalindrome = palindrome("hello");
          expect(isPalindrome).to.equal(false);
        });
    });
});