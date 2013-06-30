var assert = require('./../lib/assert-diff')
var assertOrig = require('assert')

it('diff deep equal', function() {
  assert.deepEqual({pow: "boom", foo: 2}, {bar: 2, pow: "bang"})
})

it('original deep equal', function() {
  assertOrig.deepEqual({pow: "boom", foo: 2}, {bar: 2, pow: "bang"})
})
