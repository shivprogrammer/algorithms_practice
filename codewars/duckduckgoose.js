'use strict';

const expect = require('chai').expect;

function duckDuckGoose(players, goose) {
  var x = goose % players.length;
  if (x === 0) {
    return players[players.length - 1];
  }
  else {
    return players[x - 1];
  }
}

describe('duck duck goose question from code wars', function() {
  describe('with an array and 1', function() {
    it('should return a', done => {
      expect(duckDuckGoose(["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"], 1)).to.equal('a');
      done();
    })
  })

  describe('with same array and goose > players.length', function() {
    it('should return z', done => {
      expect(duckDuckGoose(["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"], 30)).to.equal('z');
      done();
    })
  })
})

["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"]
