var changeMachine = require('../change_machine');
var chai = require('chai');
var expect = chai.expect;

describe('Function changeMachine', function() {
    context('When dollar amount is 47', function() {
        it('The returne array should be [2, 0, 1, 2]', function() {
          var answerArray = changeMachine(47);
          expect(answerArray).to.eql([2, 0, 1, 2]);
        });
    });

    context('When dollar amount is 51', function() {
        it('The returne array should be [2, 1, 0, 1]', function() {
          var answerArray = changeMachine(51);
          expect(answerArray).to.eql([2, 1, 0, 1]);
        });
    });
});