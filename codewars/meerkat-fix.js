// START 9:32 AM -- FINISH 9:39 PM ||| 7 MINUTES TOTAL

'use strict';

const expect = require('chai').expect;

/*
8kyu
You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!
Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).
Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics - simples!
*/

function fixTheMeerkat(arr) {
 var result = [];
 for (let i = arr.length - 1; i >= 0; i--) {
   result.push(arr[i]);
 }
 return result;
}

describe('Meerkat Fix Code Wars', function() {
  describe('Input: ["tail", "body", "head"]', function() {
    it('Expect: ["head", "body", "tail"]', done => {
      expect(fixTheMeerkat(["tail", "body", "head"])).to.deep.equal(["head", "body", "tail"]);
      done();
    })
  })

  describe('Input: ["tails", "body", "heads"]', function() {
    it('Expect: ["heads", "body", "tails"]', done => {
      expect(fixTheMeerkat(["tails", "body", "heads"])).to.deep.equal(["heads", "body", "tails"]);
      done();
    })
  })

  describe('Input: ["bottom", "middle", "top"]', function() {
    it('Expect: ["top", "middle", "bottom"]', done => {
      expect(fixTheMeerkat(["bottom", "middle", "top"])).to.deep.equal(["top", "middle", "bottom"]);
      done();
    })
  })

  describe('Input: ["lower legs", "torso", "upper legs"]', function() {
    it('Expect: ["upper legs", "torso", "lower legs"]', done => {
      expect(fixTheMeerkat(["lower legs", "torso", "upper legs"])).to.deep.equal(["upper legs", "torso", "lower legs"]);
      done();
    })
  })

  describe('Input: ["ground", "rainbow", "sky"]', function() {
    it('Expect: ["sky", "rainbow", "ground"]', done => {
      expect(fixTheMeerkat(["ground", "rainbow", "sky"])).to.deep.equal(["sky", "rainbow", "ground"]);
      done();
    })
  })
})
