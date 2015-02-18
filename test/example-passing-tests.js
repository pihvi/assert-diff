var assert = require('./../lib/assert-diff')
var assertOrig = require('assert')

it('assert() works on both', function() {
  assertOrig(true)
  try {
    assertOrig(false)
    assertOrig.fail('Should fail on false')
  } catch (e) {
    assertOrig.equal(e.actual, false)
  }
  assert(true)
  try {
    assert(false)
    assert.fail('Should fail on false')
  } catch (e) {
    assert.equal(e.actual, false)
  }
})
