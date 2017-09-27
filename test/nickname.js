var nickName = require('../nickname');
var chai = require('chai');
var expect = chai.expect;

describe('Function nickName', function() {
    context('When nickname is Lusa, and name is LUke SegArs', function() {
        it('Should return true', function() {
          var isNick = nickName("Lusa", "LUke SegArs");
          expect(isNick).to.equal(true);
        });
    });

    context('When nickname is Luss, and name is LUke SegArs', function() {
        it('Should return true', function() {
          var isNick = nickName("Luss", "LUke SegArs");
          expect(isNick).to.equal(true);
        });
    });

    context('When nickname is Luek, and name is LUke SegArs', function() {
        it('Should return false', function() {
          var isNick = nickName("Luek", "LUke SegArs");
          expect(isNick).to.equal(false);
        });
    });

    context('When nickname is Sek, and name is LUke SegArs', function() {
        it('Should return false', function() {
          var isNick = nickName("Sek", "LUke SegArs");
          expect(isNick).to.equal(false);
        });
    });

    context('When nickname is LUke SegArs, and name is LUke SegArs', function() {
        it('Should return false', function() {
          var isNick = nickName("LUke SegArs", "LUke SegArs");
          expect(isNick).to.equal(false);
        });
    });
    
});