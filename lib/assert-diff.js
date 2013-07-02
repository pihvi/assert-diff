var assert = require('assert-plus')
var jdiff = require('json-diff')

Object.keys(assert).forEach(function(key) {
  module.exports[key] = function() {
    assert[key].apply(assert[key], arguments)
  }
})

exports.deepEqual = function() {
  try {
    assert.deepEqual.apply(assert.deepEqual, arguments)
  } catch (e) {
    var diff = jdiff.diffString(e.expected, e.actual)
    var msg = e.message ? e.message : ''
    delete e.expected
    delete e.actual
    var resetCliColorAttributes = '\u001b[m'
    e.message = msg + resetCliColorAttributes + '\n' + diff
    throw e
  }
}

exports.deepEqualOrig = assert.deepEqual
