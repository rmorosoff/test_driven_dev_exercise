var longX = require('../longx');
var chai = require('chai');
var expect = chai.expect;

describe('Function longX', function() {
    context('The longest string of x in abxxaxterxtxxxa:', function() {
        it('Should return 3', function() {
          var answer = longX("abxxaxterxtxxxa");
          expect(answer).to.equal(3);
        });
    });

    context('The longest string of x in xxxxiiixxuuxxxttt:', function() {
        it('Should return 4', function() {
          var answer = longX("xxxxiiixxuuxxxttt");
          expect(answer).to.equal(4);
        });
    });

    context('The longest string of x in xanadu:', function() {
        it('Should return 1', function() {
            var answer = longX("xanadu");
            expect(answer).to.equal(1);
        });
    });

    context('The longest string of x in nothing:', function() {
        it('Should return 0', function() {
            var answer = longX("nothing");
            expect(answer).to.equal(0);
        });
    });
});