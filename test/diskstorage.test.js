var DiskStorage = require('../lib/diskstorage');
var expect = require('chai').expect;

describe('diskstorage', function(){
  describe('webStorage API in memory', function(){
    var ds;
    beforeEach(function(){
      ds = DiskStorage.create('foo');
    });

    it('setItem', function(){
      ds.setItem('key', 'val');
    });
    describe('getItem', function(){
      it('return item', function(){
        ds.setItem('key', 'val');
        expect(ds.getItem('key')).to.equal('val');
      });
      it('returns null for nonexisting keys', function(){
        expect(ds.getItem('key')).to.be.null;
      });
    });
    it('removeItem', function(){
      ds.setItem('key', 'val');
      expect(ds.getItem('key')).to.equal('val');
      ds.removeItem('key');
      expect(ds.getItem('key')).to.be.null;
    });
    describe('length', function(){
      it('increases when new keys are added', function(){
        expect(ds.length).to.equal(0);
        ds.setItem('key', 'val');
        expect(ds.length).to.equal(1);
      });
      it('decreases when keys are removed', function(){
        expect(ds.length).to.equal(0);
        ds.setItem('key', 'val');
        expect(ds.length).to.equal(1);
        ds.removeItem('key');
        expect(ds.length).to.equal(0);
      });
    });
    describe('key', function(){
      it('returns item', function(){
        ds.setItem('key', 'val');
        expect(ds.key(0)).to.equal('key');
      });
      it('return null when out of bounds', function(){
        ds.setItem('key', 'val');
        expect(ds.key(0)).to.equal('key');
        expect(ds.key(1)).to.be.null;
      });
    });
    describe('clear', function(){
      it('removes all items from storage', function(){
        ds.setItem('key1', 'val1');
        ds.setItem('key2', 'val2');
        ds.clear();
        expect(ds.getItem('key')).to.be.null;
        expect(ds.length).to.equal(0);
        expect(ds.key(0)).to.be.null;
      });
    });
  });

  describe('webStorage API on disk', function(){
    var ds;
    beforeEach(function(){
      ds = DiskStorage.create('foo');
    });

    it('setItem', function(){
      ds.setItem('key', 'val');
    });
  });
});
