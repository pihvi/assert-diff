var assert = require('./../lib/assert-diff')
var assertOrig = require('assert')

try {
  assert.deepEqual({pow: "boom", foo: 2}, {bar: 2, pow: "bang"})
} catch (e) {
  console.log('Diff assert\n', e.message, e.stack)
}

try {
  assertOrig.deepEqual({pow: "boom", foo: 2}, {bar: 2, pow: "bang"})
} catch (e) {
  console.log('\nOriginal assert:\n', e.message, e.stack)
}
