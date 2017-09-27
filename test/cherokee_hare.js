var cherokeeHare = require('../cherokee_hare');
var chai = require('chai');
var expect = chai.expect;

describe('Function cherokeeHare', function() {
    context('When starting population is 200, birth rate is 0.1, weeks is 5', function() {
        it('Final population should be 322', function() {
          var hare = cherokeeHare(200, 0.1, 5);
          expect(hare).to.equal(322);
        });
    });
});