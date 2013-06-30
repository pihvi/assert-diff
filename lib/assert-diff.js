var assert = require('assert')

Object.keys(assert).forEach(function(key) {
  module.exports[key] = function() {
    assert[key].apply(assert[key], arguments)
  }
})

exports.deepEqual = function() {
  try {
    assert.deepEqual(arguments)
  } catch (e) {
    var actual = JSON.stringify(e.actual[0])
    var expected = JSON.stringify(e.actual[1])
    e.actual = actual
    e.expected = expected
    throw e
  }
}

exports.deepEqualOrig = assert.deepEqual
