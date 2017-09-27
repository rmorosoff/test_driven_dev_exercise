var tallestMountain = require('../tallest_mountain');
var chai = require('chai');
var expect = chai.expect;

describe('Function tallestMountain', function() {
    context('When mountain heights are [2000, 5000, 4000, 3000]', function() {
        it('Should return 5000', function() {
          var tallest = tallestMountain([2000, 5000, 4000, 3000]);
          expect(tallest).to.equal(5000);
        });
    });
});
