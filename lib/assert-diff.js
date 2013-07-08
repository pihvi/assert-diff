var assert = require('assert-plus')
var jdiff = require('json-diff')

var opts = {strict: false}
module.exports = exports = function(options) {
  opts = options
  return module.exports
}

Object.keys(assert).forEach(function(key) {
  module.exports[key] = function() {
    assert[key].apply(assert[key], arguments)
  }
})

exports.deepEqual = function() {
  try {
    assert.deepEqual.apply(assert.deepEqual, arguments)
  } catch (e) {
    e.message = addDiffToMessage(e.message, jdiff.diffString(e.expected, e.actual))
    delete e.expected
    delete e.actual
    throw e
  }
  if (opts.strict && jdiff.diff(arguments[0], arguments[1])) {
    throw new assert.AssertionError({
      message: addDiffToMessage(arguments[2], jdiff.diffString(arguments[0], arguments[1])),
      stackStartFunction: assert.AssertionError
    })
  }
}

function addDiffToMessage(message, diff) {
  var msg = message ? message : ''
  var resetCliColorAttributes = '\u001b[m'
  return msg + resetCliColorAttributes + '\n' + diff
}

exports.deepEqualOrig = assert.deepEqual
