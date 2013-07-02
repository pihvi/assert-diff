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
    var diff = diffify(e.expected, e.actual)
    e.expected = diff[0]
    e.actual = diff[1]
    throw e
  }

  function diffify(a, b) {
    if (typeof a == 'object') {
      return [JSON.stringify(a), JSON.stringify(b)]
    } else {
      return [a, b]
    }
  }
}

exports.deepEqualOrig = assert.deepEqual
