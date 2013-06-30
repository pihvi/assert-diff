var assert = require('assert')

Object.keys(assert).forEach(function(key) {
  module.exports[key] = function() {
    assert[key].apply(assert[key], arguments)
  }
})

exports.deepEqual = function() {
  try {
    assert.deepEqual.apply(assert.deepEqual, arguments)
  } catch (e) {
    e.expected = diffify(e.expected)
    e.actual = diffify(e.actual)
    throw e
  }

  function diffify(t) {
    if (typeof t == 'object') {
      return JSON.stringify(t)
    } else {
      return t
    }
  }
}

exports.deepEqualOrig = assert.deepEqual
