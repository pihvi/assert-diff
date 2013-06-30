var assert = require('./../lib/assert-diff')
var assertOrig = require('assert')

it('diff deep equal array', function() {
  assert.deepEqual([1, "loi", {pow: true}], [1, "lol", {pow: true}])
})

it('original deep equal array', function() {
  assertOrig.deepEqual([1, "loi", {pow: true}], [1, "lol", {pow: true}])
})

it('diff deep equal string', function() {
  assert.deepEqual("tomato", "tomeito")
})

it('original deep equal string', function() {
  assertOrig.deepEqual("tomato", "tomeito")
})

it('diff deep equal', function() {
  assert.deepEqual({pow: "boom", foo: 2}, {bar: 2, pow: "bang"})
})

it('original deep equal', function() {
  assertOrig.deepEqual({pow: "boom", foo: 2}, {bar: 2, pow: "bang"})
})
